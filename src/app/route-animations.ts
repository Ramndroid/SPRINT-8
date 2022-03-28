import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    AnimationTriggerMetadata
} from '@angular/animations';

const side1: string = 'right';
const side2: string = 'left';

export const slider: AnimationTriggerMetadata =
    trigger('routeAnimations', [

        transition('home => *', slideTo(side1)),
        transition('disneyplus => *', slideTo(side2)),

        transition('films => home', slideTo(side2)),
        transition('films => *', slideTo(side1)),

        transition('starships => disneyplus', slideTo(side1)),
        transition('starships => starship', slideTo(side1)),
        transition('starships => *', slideTo(side2)),

        transition('starship => *', slideTo(side2))
    ]);

function slideTo(direction: string) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            }),
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ])
        ]),
    ];
}

