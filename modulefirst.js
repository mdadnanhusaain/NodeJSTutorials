// const simple = require("./modulesecond");

import { simple as spl } from "./modulesecond.mjs";
spl();

import simple2 from "./modulesecond.mjs";
simple2();

import * as smpl from "./modulesecond.mjs";
console.log(smpl);
smpl.simple();
smpl.default();
