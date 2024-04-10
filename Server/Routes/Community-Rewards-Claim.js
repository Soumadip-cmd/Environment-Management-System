const express = require('express');
const fs = require('fs'); 
const RewardUserModel = require('../DataBase/Schema/RewardsClaim');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Reward Claim Work Proof Folder Object Creation
const RewardClaimStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const directory = './Server/Public/RewardWorkProof'; 
        
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
            console.log("Directory created");
        } else {
            console.log("Directory already exists");
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

router.post('/rewards-claim', RewardWorkProof.single("user_docx"), async (req, res) => {
    try {
        const rewardUserData = req.body;
        // console.log(req.body);
        // console.log(req.file);
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

module.exports = router;
