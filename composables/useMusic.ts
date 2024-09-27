interface Album {
    title: string;
    artist: string;
    link?: string;
    poster: string;
}

const enum Artist {
    RHCP = 'Red Hot Chili Peppers',
    Morissette = 'Alanis Morissette',
    Angele = 'Angèle',
    ArianaGrande = 'Ariana Grande',
    AtomsForPeace = 'Atoms For Peace',
    Benee = 'BENEE',
    TheBicycleThief = 'The Bicycle Thief',
    BillieEilish = 'Billie Eilish',
    Bjork = 'Björk',
    Boa = 'bôa',
    BringMeTheHorizon = 'Bring Me The Horizon',
    C418 = 'C418',
    ChildishGambino = 'Childish Gambino',
    CityGirl = 'City Girl',
    Coldplay = 'Coldplay',
    DaftPunk = 'Daft Punk',
    DavidBowie = 'David Bowie',
    Desired = 'Desired',
    Eagles = 'Eagles',
    Gorillaz = 'Gorillaz',
    Incubus = 'Incubus',
    InfectedMushroom = 'Infected Mushroom',
    JeffBuckley = 'Jeff Buckley',
    Joji = 'Joji',
    KateBush = 'Kate Bush',
    Lookas = 'Lookas',
    M83 = 'M83',
    Macross8299 = 'Macross 82-99',
    Halo2Vol1 = "Martin O'Donnell, Michael Salvatori, Incubus, Nataraj, Nile Rodgers, Hoobastank, Breaking Benjamin",
    MasayoshiTakanaka = 'Masayoshi Takanaka',
    MassiveAttack = 'Massive Attack',
    MIA = 'M.I.A.',
    TakenKing = 'Michael Salvatori, C Paul Johnson, Skye Lewin',
    MartinODonnell = "Martin O'Donnell",
    MisterV = 'Mister V',
    Modjo = 'Modjo',
    Muse = 'Muse',
    NickDrake = 'Nick Drake',
    NIKI = 'NIKI',
    NoirDesir = 'Noir Désir',
    PinkFloyd = 'Pink Floyd',
    PinkPantheress = 'PinkPantheress',
    Pluralone = 'Pluralone',
    PorterRobinson = 'Porter Robinson',
    Portishead = 'Portishead',
    Radiohead = 'Radiohead',
    RedVelvet = 'Red Velvet',
    RIOT = 'RIOT',
    Sewerslvt = 'Sewerslvt',
    Slipknot = 'Slipknot',
    TheSmile = 'The Smile',
    SneakerPimps = 'Sneaker Pimps',
    Starjunk95 = 'Starjunk 95',
    TaekoOnuki = 'Taeko Onuki',
    Tessina = 'tessina',
    ThomYorke = 'Thom Yorke',
    ToveLo = 'Tove Lo',
    TheWeeknd = 'The Weeknd',
    WILLOW = 'WILLOW',
    WithinTemptation = 'Within Temptation',
    Yaeji = 'Yaeji',
    Zero7 = 'Zero 7',
    YungBae = 'Yung Bae',
    Mirai = 'ぷにぷに電機',
    JohnFrusciante = 'John Frusciante',
    Damso = 'Damso',
    Evanescence = 'Evanescence',
    TheBeatles = 'The Beatles',
    FrouFrou = 'Frou Frou',
    PorcupineTree = 'Porcupine Tree',
    MachineGirl = 'Machine Girl',
    Machinedrum = 'Machinedrum',
    TheMarsVolta = 'The Mars Volta',
    Funkadelic = 'Funkadelic',
    KAYTRANADA = 'KAYTRANADA',
    Deftones = 'Deftones',
    SystemOfADown = 'System Of A Down',
    DaveNavarro = 'Dave Navarro'
}

const album = (title: string, artist: Artist, poster: string, link?: string): Album => ({
    title,
    artist,
    link,
    poster
});

const albums: Album[] = [
    album(
        'Final Jam (Live at Chorzów 2007)',
        Artist.RHCP,
        'rhcp-chorzow-2007.jpg',
        'https://youtu.be/T5V9eaiKuxo'
    ),
    album('Jagged Little Pill', Artist.Morissette, 'jagged-little-pill.jpg'),
    album('Nonante-Cinq', Artist.Angele, 'nonante-cinq.jpg'),
    album('Positions', Artist.ArianaGrande, 'positions.jpg'),
    album('AMOK', Artist.AtomsForPeace, 'amok.jpg'),
    album('Hey u x', Artist.Benee, 'hey-u-x.jpg'),
    album('You Come and Go Like a Pop Song', Artist.TheBicycleThief, 'you-come-and-go.jpeg'),
    album('HIT ME HARD AND SOFT', Artist.BillieEilish, 'hit-me-hard-and-soft.jpg'),
    album('Debut', Artist.Bjork, 'debut.jpg'),
    album('Post', Artist.Bjork, 'post.jpg'),
    album('Twilight', Artist.Boa, 'twilight.jpg'),
    album(
        'POST HUMAN: SURVIVAL HORROR',
        Artist.BringMeTheHorizon,
        'post-human-survival-horror.jpg'
    ),
    album('Excursions', Artist.C418, 'excursions.jpg'),
    album('Life Changing Moments Seem Minor in Pictures', Artist.C418, 'life-changing-moment.jpg'),
    album('Because the Internet', Artist.ChildishGambino, 'because-the-internet.jpg'),
    album('C-GIRL', Artist.CityGirl, 'c-girl.jpg'),
    album('Parachutes', Artist.Coldplay, 'parachutes.jpg'),
    album('Discovery', Artist.DaftPunk, 'discovery.jpg'),
    album('Random Access Memories', Artist.DaftPunk, 'random-access-memories.jpg'),
    album('TRON: Legacy', Artist.DaftPunk, 'tron-legacy.jpg'),
    album('Alive 2007', Artist.DaftPunk, 'alive-2007.jpg'),
    album(
        'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        Artist.DavidBowie,
        'the-rise-and-fall.jpg'
    ),
    album('Nineteen', Artist.Desired, 'nineteen.jpg'),
    album('Hotel California', Artist.Eagles, 'hotel-california.jpg'),
    album('Demon Days', Artist.Gorillaz, 'demon-days.jpg'),
    album('Plastic Beach', Artist.Gorillaz, 'plastic-beach.jpeg'),
    album('Make Yourself', Artist.Incubus, 'make-yourself.jpg'),
    album('Head of NASA and the 2 Amish Boys', Artist.InfectedMushroom, 'head-of-nasa.jpg'),
    album('Grace', Artist.JeffBuckley, 'grace.jpg'),
    album('Nectar', Artist.Joji, 'nectar.jpg'),
    album('Hounds Of Love', Artist.KateBush, 'hounds-of-lLove.jpg'),
    album('Lucid', Artist.Lookas, 'lucid.jpg'),
    album('DSVII', Artist.M83, 'dsvii.jpg'),
    album('Summer Touch', Artist.Macross8299, 'summer-touch.jpg'),
    album('Halo 2, Vol. 1', Artist.Halo2Vol1, 'halo-2-vol-1.jpg'),
    album('All Of Me', Artist.MasayoshiTakanaka, 'all-of-me.jpg'),
    album('Collected', Artist.MassiveAttack, 'collected.jpg'),
    album('Mezzanine', Artist.MassiveAttack, 'mezzanine.jpg'),
    album('AIM', Artist.MIA, 'aim.jpg'),
    album('Destiny: The Taken King', Artist.TakenKing, 'taken-king.jpg'),
    album(
        'Music of the Spheres',
        Artist.MartinODonnell,
        'music-of-the-spheres.webp',
        'https://www.destinypedia.com/Music_of_the_Spheres'
    ),
    album('MVP (Réédition)', Artist.MisterV, 'mvp.jpg'),
    album('Modjo', Artist.Modjo, 'modjo.jpg'),
    album('The 2nd Law', Artist.Muse, '2nd-law.jpg'),
    album('Showbiz', Artist.Muse, 'showbiz.jpg'),
    album('Origin of Symmetry', Artist.Muse, 'origin-of-symmetry.jpg'),
    album('Hullabaloo Soundtrack', Artist.Muse, 'hullabaloo.jpg'),
    album('Pink Moon', Artist.NickDrake, 'pink-moon.jpeg'),
    album('Nicole', Artist.NIKI, 'nicole.jpg'),
    album('Buzz', Artist.NIKI, 'buzz.jpg'),
    album('Des visages des figures', Artist.NoirDesir, 'des-visages-des-figures.jpg'),
    album('Animals', Artist.PinkFloyd, 'animals.jpg'),
    album('The Dark Side Of The Moon', Artist.PinkFloyd, 'dark-side-of-the-moon.jpg'),
    album('Wish You Were Here', Artist.PinkFloyd, 'whish-you-were-here.jpg'),
    album('to hell with it', Artist.PinkPantheress, 'to-hell-with-it.jpg'),
    album('Heaven knows', Artist.PinkPantheress, 'heaven-knows.jpg'),
    album('To Be One With You', Artist.Pluralone, 'to-be-one-with-you.jpg'),
    album('Nurture', Artist.PorterRobinson, 'nurture.jpg'),
    album('Dummy', Artist.Portishead, 'dummy.jpg'),
    album('OK Computer', Artist.Radiohead, 'ok-computer.jpg'),
    album('In Rainbows', Artist.Radiohead, 'in-rainbows.jpg'),
    album('A Moon Shaped Pool', Artist.Radiohead, 'a-moon-shaped-pool.jpg'),
    album('Spectre', Artist.Radiohead, 'spectre.jpg'),
    album('Return of the Dream Canteen', Artist.RHCP, 'return-of-the-dream-canteen.jpg'),
    album('Blood Sugar Sx Magik', Artist.RHCP, 'blood-sugar-sx-magik.jpg'),
    album('The Getaway', Artist.RHCP, 'the-getaway.jpg'),
    album('Californication', Artist.RHCP, 'californication.jpg'),
    album('Stadium Arcadium', Artist.RHCP, 'stadium-arcadium.jpg'),
    album('The Red - The 1st Album', Artist.RedVelvet, 'the-red.jpg'),
    album('Dogma Resistance', Artist.RIOT, 'dogma-resistance.jpg'),
    album('Draining Love Story', Artist.Sewerslvt, 'draining-love-story.jpg'),
    album('We Are Not Your Kind', Artist.Slipknot, 'we-are-not-your-kind.jpg'),
    album(
        'A Light for Attracting Attention',
        Artist.TheSmile,
        'a-light-for-attracting-attention.jpg'
    ),
    album('Wall of Eyes', Artist.TheSmile, 'wall-of-eyes.jpg'),
    album('Bloodsport', Artist.SneakerPimps, 'bloodsport.jpg'),
    album('Squaring The Circle', Artist.SneakerPimps, 'squaring-the-circle.jpg'),
    album('Becoming X', Artist.SneakerPimps, 'becoming-x.jpg'),
    album('Virtual Paradise', Artist.Starjunk95, 'virtual-paradise.jpg'),
    album('Plastic Memories EP', Artist.Starjunk95, 'plastic-memories.jpg'),
    album('MIGNONNE', Artist.TaekoOnuki, 'mignonne.jpg'),
    album('orphic', Artist.Tessina, 'orphic.jpeg'),
    album('The Eraser', Artist.ThomYorke, 'the-eraser.jpg'),
    album('Sunshine Kitty', Artist.ToveLo, 'sunshine-kitty.jpg'),
    album('Queen Of The Clouds', Artist.ToveLo, 'queen-of-the-clouds.jpg'),
    album('Lady Wood', Artist.ToveLo, 'lady-wood.jpg'),
    album('After Hours (Deluxe)', Artist.TheWeeknd, 'after-hours.jpg'),
    album('lately I feel EVERYTHING', Artist.WILLOW, 'lately-i-feel.jpg'),
    album('The Unforgiving', Artist.WithinTemptation, 'the-unforgiving.jpg'),
    album('EP2', Artist.Yaeji, 'ep2.jpg'),
    album('RECORD', Artist.Zero7, 'record.jpg'),
    album('Bae', Artist.YungBae, 'bae.jpg'),
    album('MIRAI Addiction', Artist.Mirai, 'mirai.jpg'),
    album('Shadows Collide With People', Artist.JohnFrusciante, 'shadows-collide-with-people.jpg'),
    album('The Empyrean', Artist.JohnFrusciante, 'the-empyrean.jpg'),
    album('QALF infinity', Artist.Damso, 'qalf-infinity.jpg'),
    album('Fallen', Artist.Evanescence, 'fallen.jpg'),
    album('Slipknot', Artist.Slipknot, 'slipknot.jpg'),
    album('Let It Be', Artist.TheBeatles, 'let-it-be.jpg'),
    album('Abbey Road', Artist.TheBeatles, 'abbey-road.jpg'),
    album('Details', Artist.FrouFrou, 'details.jpg'),
    album('Deadwing', Artist.PorcupineTree, 'deadwing.jpg'),
    album('WLFGRL+', Artist.MachineGirl, 'wlfgrl.jpeg'),
    album('Deloused In the Comatorium', Artist.TheMarsVolta, 'deloused-in-the-comatorium.jpg'),
    album('Amputechture', Artist.TheMarsVolta, 'amputechture.jpg'),
    album('Maggot Brain', Artist.Funkadelic, 'maggot-brain.jpg'),
    album('TIMELESS', Artist.KAYTRANADA, 'timeless.jpg'),
    album('Diamond Eyes', Artist.Deftones, 'diamond-eyes.jpg'),
    album('Toxicity', Artist.SystemOfADown, 'toxicity.jpg'),
    album('Trust No One', Artist.DaveNavarro, 'trust-no-one.jpg'),
    album('A View of U', Artist.Machinedrum, 'a-view-ofu.jpg')
];

export default function (): Album[] {
    return albums.sort((a, b) => a.artist.localeCompare(b.artist));
}
