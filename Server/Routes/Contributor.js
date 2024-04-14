const express = require('express');
const ContributorWaterSchema = require('../DataBase/Schema/ContributorWaterSchema');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// router.use('Public', express.static(path.join(__dirname, 'Public')));
router.use('/Public', express.static(path.join(__dirname, '..', 'Public')));
router.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'Public/Contributor';
        // Ensure the directory exists
        fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
});

const LeaveApplication = multer({
    storage: storage
});

router.post('/contributor', LeaveApplication.single("user_docx"), async (req, res) => {
    try {
        console.log("Received POST request to /contributor");
        const rewardUserData = req.body;
        console.log("Reward User Data:", rewardUserData);
        console.log("Uploaded File:", req.file);
        const newRewardUser = await ContributorWaterSchema.create({
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
router.get('/contributor',async (req, res)=>{
    
})
module.exports = router;
