import {
  hasIfElseToConvert,
  convertIfElseToSwitch
} from "./convert-if-else-to-switch";

import { RefactoringWithActionProvider } from "../../types";

const config: RefactoringWithActionProvider = {
  commandKey: "convertIfElseToSwitch",
  operation: convertIfElseToSwitch,
  title: "Convert If/Else to Switch",
  actionProviderMessage: "Convert if/else to switch",
  canPerformRefactoring: hasIfElseToConvert,
  isPreferred: true
};

export default config;
