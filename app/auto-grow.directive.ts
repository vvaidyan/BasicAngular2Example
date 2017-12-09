import { Directive, ElementRef, Renderer } from "angular2/core";



@Directive({
    selector: '[autoGrow]', 
    host: {
        '(focus)': 'onFocus()', 
        '(blur)': 'onBlur()'
    }

})

export class AutoGrowDirective{

    constructor(private el: ElementRef, private renderer: Renderer)
    {

    }

    onFocus()
    {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
        //this.renderer.setText(this.el.nativeElement, "focussed");
        this.renderer.setElementStyle(this.el.nativeElement, "background-color", "red");
    }

    onBlur()
    {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
        //this.renderer.setText(this.el.nativeElement, "blurred");
        this.renderer.setElementStyle(this.el.nativeElement, "background-color", "yellow");
    }


}

