import { requestCall } from "./modules/requestCall";
import { timer } from "./modules/timer";
import { upSmoothScroll } from "./modules/upSmoothScroll";
import { calculate } from "./modules/calculate";
import { certificate } from "./modules/certificate";

requestCall();
timer("23 march 2022", true);
upSmoothScroll();
calculate();
certificate();
