import { handleSubmit } from "./input";
import { handleGeolocation } from "./utils/handleGeolocation";
import "./style.css";
import "./utils/searchSuggestions";

handleGeolocation();
handleSubmit();
