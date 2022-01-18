import express from 'express';

export const bodyParser = express.json({ limit: '2mb' });
