import { measure } from "helpful-decorators";

class DateClass {
  private timeZone: string;
  constructor(timezone: string) {
    this.timeZone = timezone;
  }
  getTime() {
    let d = new Date();
    return d.getTime();
  }

  @measure
  getMonth() {
    let d = new Date();
    return d.getMonth();
  }
  getTimeZone() {
    return this.timeZone;
  }
}

const dateObject = new DateClass("IND");
dateObject.getMonth();
