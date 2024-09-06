import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightEven]'
})
export class HighlightEvenDirective implements AfterViewInit{
@Input('appHighlightEven') id: number =0;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }
public ngAfterViewInit(): void {
  if (!(this.id % 2)) {
    //мы стилизуем обертку- 1 потомок эл-та p-card
    const [chlid] = this.element.nativeElement.children;
    this.renderer.setStyle(chlid, 'border', '1px solid #30b6dd')
  }
}
}

// ElementRef - элемент, на кот повесим директиву
//Renderer2 -библиотечка, с помощ кот взаимодействуем с ДОМ в ангуляре
//AfterViewInit - значит что инициирован шаблон и мы можем как-то управлять этим шаблоном
//this.element.nativeElement. - доступ к нашему дом элементу
//setStyle - 1й параметр к какому эл-ту мы стили применяем, 2й - наименование стиля, 3й - сами стили