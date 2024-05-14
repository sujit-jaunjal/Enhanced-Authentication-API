const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/me', authMiddleware.authenticateToken, profileController.getMyProfile);
router.put('/me', authMiddleware.authenticateToken, profileController.updateMyProfile);
router.get('/', authMiddleware.authenticateToken, profileController.getAllProfiles);

module.exports = router;
