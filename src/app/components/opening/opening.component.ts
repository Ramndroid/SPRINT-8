import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

interface OpeningCrawl {
  episode: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4?: string;
}

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html'
})
export class OpeningComponent {

  intro: string;
  indexEpisode: number = 0;

  @ViewChild('crawlmain')
  crawlmain!: ElementRef;

  @ViewChild('crawlintro')
  crawlintro!: ElementRef;

  @ViewChild('crawllogo')
  crawllogo!: ElementRef;

  @ViewChild('crawlcontent')
  crawlcontent!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {
    this.intro = "A long time ago in a galaxy far, far away...";
    this.indexEpisode = 0;
  }

  loadEpisode(episode: number) {
    this.indexEpisode = episode;
    if (episode == 9) {
      this.intro = "Ha arribat, s'acosta el final de curs i de la mentoria...";
    } else {
      this.intro = "A long time ago in a galaxy far, far away...";
    }
    this.reloadAnimation();
  }

  private reloadAnimation() {
    this.renderer.removeClass(this.crawlmain.nativeElement, 'star-wars-intro');
    this.renderer.removeClass(this.crawlintro.nativeElement, 'intro-text');
    this.renderer.removeClass(this.crawllogo.nativeElement, 'main-logo');
    this.renderer.removeClass(this.crawlcontent.nativeElement, 'main-content');

    this.renderer.removeChild(this.crawlmain.nativeElement, this.crawlintro.nativeElement);
    this.renderer.removeChild(this.crawlmain.nativeElement, this.crawllogo.nativeElement);
    this.renderer.removeChild(this.crawlmain.nativeElement, this.crawlcontent.nativeElement);

    this.renderer.appendChild(this.crawlmain.nativeElement, this.crawlintro.nativeElement);
    this.renderer.appendChild(this.crawlmain.nativeElement, this.crawllogo.nativeElement);
    this.renderer.appendChild(this.crawlmain.nativeElement, this.crawlcontent.nativeElement);

    this.renderer.addClass(this.crawlmain.nativeElement, 'star-wars-intro');
    this.renderer.addClass(this.crawlintro.nativeElement, 'intro-text');
    this.renderer.addClass(this.crawllogo.nativeElement, 'main-logo');
    this.renderer.addClass(this.crawlcontent.nativeElement, 'main-content');
  }

  openings: OpeningCrawl[] = [
    {
      episode: "Episode I",
      title: "THE PHANTOM MENACE",
      paragraph1: "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.",
      paragraph2: "Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.",
      paragraph3: "While the congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict..."
    },
    {
      episode: "Episode II",
      title: "ATTACK OF THE CLONES",
      paragraph1: "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.",
      paragraph2: "This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.",
      paragraph3: "Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi..."
    },
    {
      episode: "Episode III",
      title: "REVENGE OF THE SITH",
      paragraph1: "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.",
      paragraph2: "In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.",
      paragraph3: "As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor..."
    },
    {
      episode: "Episode IV",
      title: "A NEW HOPE",
      paragraph1: "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.",
      paragraph2: "During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armoured space station with enough power to destroy an entire planet.",
      paragraph3: "Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy..."
    },
    {
      episode: "Episode V",
      title: "THE EMPIRE STRIKES BACK",
      paragraph1: "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.",
      paragraph2: "Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.",
      paragraph3: "The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space..."
    },
    {
      episode: "Episode VI",
      title: "RETURN OF THE JEDI",
      paragraph1: "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.",
      paragraph2: "Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.",
      paragraph3: "When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy..."
    },
    {
      episode: "Episode VII",
      title: "THE FORCE AWAKENS",
      paragraph1: "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.",
      paragraph2: "With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.",
      paragraph3: "Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts..."
    },
    {
      episode: "Episode VIII",
      title: "THE LAST JEDI",
      paragraph1: "The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.",
      paragraph2: "Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.",
      paragraph3: "But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape..."
    },
    {
      episode: "Episode IX",
      title: "THE RISE OF SKYWALKER",
      paragraph1: "The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.",
      paragraph2: "GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.",
      paragraph3: "Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power..."
    },
    {
      episode: "Sprint 8",
      title: "EL DARRER SPRINT DE L'ITINERARI ANGULAR",
      paragraph1: "Han estat unes setmanes intenses, amb reptes constants i moltes novetats...",
      paragraph2: "Abans que s'acabi el curs, vull donar-te les gràcies, Albert, per aquestes tardes compartides, pel teu suport i per tot allò que he après.",
      paragraph3: "Has fet que tot sigui més agradable, i m'has donat l'empenta per créixer i continuar.",
      paragraph4: "Que la força t'acompanyi!"
    }
  ]
}
