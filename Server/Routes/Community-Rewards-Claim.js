const express = require('express');
const RewardUserModel = require('../DataBase/Schema/RewardsClaim');
const router = express.Router();

router.post('/rewards-claim', async (req, res) => {
    try {
        // Assuming req.body contains all the data for creating a new RewardUser
        const rewardUserData = req.body;

        // Assuming req.files.filename contains the filename of the uploaded document
        const newRewardUser = await RewardUserModel.create({
            ...rewardUserData,
            user_docx: req.files.filename
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
