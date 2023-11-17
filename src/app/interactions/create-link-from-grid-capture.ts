import { Coord } from "../model/coord";
import { InteractionService } from "../services/interaction.service";
import { ClickCapture, ClickCaptureID } from "./click-capture";


export class CreateLinkFromGridCapture extends ClickCapture {




    constructor(private startPos: Coord, private interactionService: InteractionService) {
        super(ClickCaptureID.CREATE_LINK_FROM_GRID);


        // on mouse move, if hovering over a Link, store it
        this.onMouseMove$.subscribe((event) => {
            const hovering = interactionService.getHoveringObject();
        });

    }

    public getStartPos(): Coord{
        return this.startPos;
    }
}