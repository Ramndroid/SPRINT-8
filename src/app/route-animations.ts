import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    AnimationTriggerMetadata
} from '@angular/animations';

export const slider: AnimationTriggerMetadata =
    trigger('routeAnimations', [
        transition('home => starships', slideTo('right') ),
        transition('starships => home', slideTo('left') ),
        transition('starships => starship', slideTo('right') ),
        transition('starship => starships', slideTo('left') ),
        transition('starship => home', slideTo('left') )
    ]);

function slideTo(direction: string) {
    const optional = { optional: true};
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

    