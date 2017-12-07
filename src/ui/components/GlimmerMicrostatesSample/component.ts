import Component from "@glimmer/component";
import microstates, * as MS from "microstates";

export default class GlimmerMicrostatesSample extends Component {
   message = microstates(MS.String, "Glimmer + Microstates 💖").state;
}