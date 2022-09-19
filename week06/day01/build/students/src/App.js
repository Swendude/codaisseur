"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const StudentCard_1 = __importDefault(require("./components/StudentCard"));
// interface Student {
//   name: string;
//   age: number;
// }
const handleClick = (event) => {
    console.log("Hello!");
};
function App() {
    return (<div className="App">
      <StudentCard_1.default name="Swen" age={29}/>
      <StudentCard_1.default name="Tim" age={30}/>
      <button onClick={handleClick}></button>
    </div>);
}
exports.default = App;
