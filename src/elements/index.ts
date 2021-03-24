import { FrameController } from "../core/frames/frame_controller"
import { FrameElement } from "./frame_element"
import { StreamElement } from "./stream_element"

FrameElement.delegateConstructor = FrameController

export * from "./frame_element"
export * from "./stream_element"

customElements.define("modular-frame", FrameElement)
customElements.define("modular-stream", StreamElement)
