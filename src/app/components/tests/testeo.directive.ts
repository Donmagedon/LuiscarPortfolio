// visibility-tracker.directive.ts

import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[visibleComp]'
})
export class VisibleComp implements OnInit, OnDestroy {
    @Output() caughtEvent = new EventEmitter<any>
    public observer! : IntersectionObserver

    constructor(private element: ElementRef){}
    ngOnInit(): void {
        this.observer = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                this.caughtEvent.emit(entry)
            })},{threshold:.4})
        this.observer.observe(this.element.nativeElement)
    }
    ngOnDestroy(): void {
        this.observer.disconnect
    }
  
}
 