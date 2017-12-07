import Component from "@glimmer/component";
import microstates, * as MS from "microstates";

export default class GlimmerMicrostatesSample extends Component {
  name = microstates(MS.String, "World").state;
}
