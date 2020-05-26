import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  public speechList = [
    {
    id: 1,
    title: 'I have a dream',
    // tslint:disable-next-line: max-line-length
    speech: 'During the March on Washington for Jobs and Freedom, the black civil rights leader Martin Luther King addressed 200,000 supporters on the theme of racial equality. Delivered in the style of a Baptist sermon, the speech drew on the Bible, the US Constitution and the Declaration of Independence.I have a dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character.',
    author: 'Martin Luther King',
    keyword: 'Dream',
    date: '2020-08-01',
    addedBy: 'You'
    },
    {
    id: 2,
    title: 'Only thing we have to fear is fear itself',
    // tslint:disable-next-line: max-line-length
    speech: 'In his first inaugural address, FDR spoke to an American public in the depths of the Great Depression. He exhorted his countrymen to dig deep and endure, and to trust in his leadership.Let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance.',
    author: 'Martin Luther King',
    keyword: 'Fear',
    date: '2020-08-01',
    addedBy: 'You'
    },
    {
    id: 3,
    title: 'Inaugural speech',
    // tslint:disable-next-line: max-line-length
    speech: 'Mandelas inaugural speech marked the moment when South Africa’s first black president took power and apartheid was buried once and for all. Mandela hailed a rare moment of hope in Africa and pledged to live up to the aspirations he had raised.Never, never and never again shall this beautiful land again experience the oppression of one by another.',
    author: 'Nelson Mandela May',
    keyword: 'Inaugural',
    date: '1987-06-12',
    addedBy: 'Other'
    },
    {
    id: 4,
    title: 'Awake to freedom',
    // tslint:disable-next-line: max-line-length
    speech: 'After almost three centuries, Britain’s presence in India ended at midnight on August 14, 1947. Nehru, the leader of the Congress Party and the first prime minister of independent India, described this as the rebirth of his country.At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.',
    author: 'Jawaharlal Nehru',
    keyword: 'Freedom',
    date: '1947-08-14',
    addedBy: 'You'
    },
    {
    id: 5,
    title: 'For the attainment for peace',
    // tslint:disable-next-line: max-line-length
    speech: 'In the aftermath of Israel’s abortive invasion of Egypt in 1956, Meir, then foreign minister, rose to address the UN General Assembly. Her country had been criticised across the world for attacking Egypt, along with British and French forces. Meir skilfully argued that Israel’s actions had been defensive and in the interests of long term peace. “My delegation will bend every resource of heart and mind in the days that lie ahead.',
    author: 'Golda Meir',
    keyword: 'Peace',
    date: '1957-01-17',
    addedBy: 'Other'
    },
  ];

  constructor() { }
}
