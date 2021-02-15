import express from 'express';
import path from 'path';
import mysql from 'mysql';
import myConnection from 'express-myconnection';

const app = express();

import customerRoutes from './routes/customern