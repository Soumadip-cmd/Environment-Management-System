const express = require('express');
const fs = require('fs'); 
const RewardUserModel = require('../DataBase/Schema/RewardsClaim');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Middleware to serve static files
const publicDirectoryPath = path.join(__dirname, '..', 'Public');
router.use('/Server/Public', express.static(publicDirectoryPath));
router.use(express.json());

// Reward Claim Work Proof Folder Object Creation
const RewardClaimStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directory = 'Public/RewardWorkProof'; 
        
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
            console.log("Directory created:", directory);
        } else {
            console.log("Directory already exists:", directory);
        }
        cb(null, directory);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const RewardWorkProof = multer({
    storage: RewardClaimStorage
});

// Route to handle form submission
router.post('/rewards-claim', RewardWorkProof.single("user_docx"), async (req, res) => {
    
    try {
        console.log("Received POST request to /rewards-claim");
        const rewardUserData = req.body;
        console.log("Reward User Data:", rewardUserData);
        console.log("Uploaded File:", req.file);
        const newRewardUser = await RewardUserModel.create({
            ...rewardUserData,
            user_docx: req.file.filename
        });
        res.status(201).json({
            message: 'Reward Claim Member added successfully',
            success: true,
            newRewardUser
        });
    } catch (error) {
        console.error('Error adding reward claim member:', error);
        res.status(500).json({ error: 'Failed to add new reward claim member' });
    }
});
router.get('/rewards-claim', (req, res) => {
    RewardUserModel.find({})
        .then((users) => {
            res.json(users);
            console.log("Reward user Fetched Succes..");
        })
        .catch((error) => {
            console.error("Error fetching RewardClaim user: ", error);
            res.status(500).json({ error: 'Failed to fetch RewardClaim users' });
        });
});

router.put('/rewards-claim/:userId', async (req, res) => {
    // Find the user Id using req.userId in mongodb
    const userId = req.params.userId;
    const { status } = req.body;

    try {
        // Find the user by ID and update the status
        const updatedUser = await RewardUserModel.findByIdAndUpdate(userId, { status }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User status updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user status:', error);
        res.status(500).json({ error: 'Failed to update user status' });
    }
});


module.exports = router;
