// Dark mode detection and toggle
let darkMode = localStorage.getItem('darkMode');

// Check for saved user preference, if none, check system preference
if (darkMode === 'enabled') {
    document.documentElement.classList.add('dark');
} else if (darkMode === 'disabled') {
    document.documentElement.classList.remove('dark');
} else {
    // No saved preference, use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
}

// Theme toggle functionality
function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }
}

// Wait for DOM to load before adding event listener
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleDarkMode);
    }
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 2500);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Books data
const books = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        price: 500,
        description: "Transform your life with tiny changes that deliver remarkable results. Learn how small habits compound into extraordinary achievements through proven strategies backed by science.",
        coverUrl:"Atomic_Habits.jpg"

    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        price: 500,
        description: "Discover the financial lessons that will change your perspective on money and investing. Learn what the rich teach their kids about money that the poor and middle class do not.",
        coverUrl: "Rich_dad_poor_dad.jpg"

    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        price: 500,
        description: "The timeless classic that has inspired millions to achieve success. Unlock the secrets of the world's most successful people and learn the principles that lead to wealth and achievement.",
        coverUrl: "Think_and_grow_rich.jpg"

    },
    {
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        price: 500,
        description: "The definitive book on value investing. Learn the principles of sound investment strategy that have guided the world's most successful investors for over 70 years.",
        coverUrl: "The_intelligent_investor.jpg"

    },
    {
        title: "The Richest Man in Babylon",
        author: "George S. Clason",
        price: 500,
        description: "Ancient wisdom for modern wealth. Discover timeless financial principles through captivating stories set in ancient Babylon that remain relevant today.",
        coverUrl:  "The_richest_man_in_Babylon.jpg"

    },
    {
        title: "Focus",
        author: "Daniel Goleman",
        price: 500,
        description: "Master the art of focused writing and productivity. Learn techniques to overcome writer's block, maintain concentration, and produce your best work consistently.",
        coverUrl: "Focus.jpg"

    },
    {
        title: "Things I Never Said to Myself",
        author: "Duduzile Noeleen Ngwenya",
        price: 500,
        description: "A journey of self-discovery and personal growth. Explore the inner dialogues and reflections that lead to greater self-awareness and emotional intelligence.",
        coverUrl:  "Things_I_never_said_to_myself.jpg"

    },
    {
    "title": "Grit: The Power of Passion and Perseverance",
    "author": "Angela Duckworth",
    "price": 500,
    "description": "Explores the psychological trait of grit, defined as passion and sustained persistence applied toward long-term achievement, and how it is a key predictor of success.",
    "coverUrl": "Grit.jpg"
},
{
    "title": "The Art of Laziness: Overcome Procrastination & Boost Your Productivity",
    "author": "Library Mindset",
    "price": 500,
    "description": "A guide on how to overcome procrastination and boost productivity, offering a different perspective on time management and efficiency.",
    "coverUrl": "The_art_of_laziness.jpg"
},
{
    "title": "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
    "author": "Brianna Wiest",
    "price": 500,
    "description": "Focuses on helping readers understand and overcome self-sabotaging behaviors to achieve self-mastery and realize their true potential.",
    "coverUrl": "The_mountain_is_you.jpg"
},
{
    "title": "Deep Work: Rules for Focused Success in a Distracted World",
    "author": "Cal Newport",
    "price": 500,
    "description": "Presents rules and strategies for achieving 'deep work'—the ability to focus without distraction on a cognitively demanding task—as a skill vital for success.",
    "coverUrl": "Deep_work.jpg"
},
{
    "title": "The Magic of Thinking Big",
    "author": "David Schwartz, PhD",
    "price": 500,
    "description": "A timeless classic that offers practical methods for gaining wealth, fulfillment, and happiness by cultivating the habit of thinking big and believing in oneself.",
    "coverUrl": "The_magic_of_thinking_big.jpg"
},
{
    "title": "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships",
    "author": "Leil Lowndes",
    "price": 500,
    "description": "Provides practical and actionable communication techniques to help readers excel in social and business relationships.",
    "coverUrl": "How_to_talk_to_anyone.jpg"
},
{
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 500,
    "description": "A classic novel about a shepherd boy named Santiago who journeys from Spain to the Egyptian desert in search of a hidden treasure, learning about the importance of following your dreams.",
    "coverUrl": "The_Alchemist.jpg"
},
{
    "title": "Stop Talking, Start Doing: A Kick in the Pants in Six Parts",
    "author": "Sháá Wasmund with Richard Newton",
    "price": 500,
    "description": "A straightforward guide designed to help readers overcome inaction and start achieving their goals by taking immediate, purposeful steps.",
    "coverUrl": "Stop_talking_start_doing.jpg"
},
{
    "title": "Best Self: Be You, Only Better",
    "author": "Mike Bayer",
    "price": 500,
    "description": "Offers a step-by-step approach to identifying your authentic 'Best Self' and creating an action plan to live a more fulfilled life, guided by a celebrity life coach.",
    "coverUrl": "Best_self.jpg"
},
{
    "title": "You Were Not Born To Suffer: Overcome Fear, Insecurity and Depression and Love Yourself Back to Happiness, Confidence and Peace",
    "author": "Blake D Bauer",
    "price": 500,
    "description": "A guide to understanding the root causes of suffering, fear, and insecurity, offering a path toward self-love, confidence, and inner peace.",
    "coverUrl": "You_were_not_born_to_suffer.jpg"
},
{
    "title": "Boundaries: When to Say Yes, How to Say No to Take Control of Your Life",
    "author": "Dr. Henry Cloud & Dr. John Townsend",
    "price": 500,
    "description": "A Christian-based guide on setting healthy personal boundaries in relationships and life to help manage personal space, responsibility, and emotional well-being.",
    "coverUrl": "Boundaries.jpg"
},
{
    "title": "Do It Today: Overcome Procrastination, Improve Productivity & Achieve More Meaningful Things",
    "author": "Darius Foroux",
    "price": 500,
    "description": "A practical guide focused on overcoming procrastination and boosting personal productivity by taking immediate action on important tasks.",
    "coverUrl": "Do_it_today.jpg"
},
{
    "title": "Make Your Bed: Small things that can change your life... and maybe the world",
    "author": "William H. McRaven",
    "price": 500,
    "description": "Based on a commencement speech, this book shares ten life lessons from Navy SEAL training that emphasize discipline, perseverance, and the impact of small daily achievements.",
    "coverUrl": "Make_your_bed.jpg"
},
{
    "title": "How to Listen with Intention: The Foundation of True Connection, Communication, & Relationships",
    "author": "Patrick King",
    "price": 500,
    "description": "A guide on developing intentional listening skills to improve communication, deepen relationships, and foster true connections with others.",
    "coverUrl": "How_to_listen_with_intention.png"
},
{
    "title": "The Science of Self-Discipline: The Willpower, Mental Toughness and Self-Control to Resist Temptation and Achieve Your Goals",
    "author": "Peter Hollins",
    "price": 500,
    "description": "Examines the psychological principles behind self-discipline, offering techniques to build willpower, mental toughness, and self-control to achieve long-term goals.",
    "coverUrl": "The_science_of_self_discipline.png"
},
{
    "title": "Believe in Yourself",
    "author": "Dr. Joseph Murphy",
    "price": 500,
    "description": "Focuses on the power of the subconscious mind and positive thinking to help readers gain confidence, achieve goals, and transform their lives through self-belief.",
    "coverUrl": "Believe_in_yourself.png"
},
{
    "title": "The Art of Letting Go: Stop Overthinking, Stop Negative Spirals, and Find Emotional Freedom",
    "author": "Nick Trenton",
    "price": 500,
    "description": "Provides strategies to stop overthinking and negative thought patterns to achieve greater emotional freedom and mental peace.",
    "coverUrl": "The_art_of_letting_go.jpg"
},
{
    "title": "The Power of Decision-Making: Your decisions decide your destiny",
    "author": "Manoj Tripathi",
    "price": 500,
    "description": "A guide emphasizing the crucial role of effective decision-making in shaping one's destiny and overall life success.",
    "coverUrl": "The_power_of_decision_making.png"
},
{
    "title": "What Got You Here Won't Get You There: How Successful People Become Even More Successful",
    "author": "Marshall Goldsmith",
    "price": 500,
    "description": "Identifies common behavioral flaws that hold back highly successful people and offers advice on overcoming these habits to reach the next level of achievement.",
    "coverUrl": "What_got_you_here_wont_get_you_there.jpg"
},
{
    "title": "The Laws of Human Nature",
    "author": "Robert Greene",
    "price": 500,
    "description": "A deep dive into the primal, hidden drivers of human behavior, offering strategies to understand people's motivations and master one's own impulses.",
    "coverUrl": "The_laws_of_human_nature.png"
},
{
    "title": "Make It Happen: Manifest the Life of Your Dreams",
    "author": "Jordanna Levin",
    "price": 500,
    "description": "A guide on the principles of manifestation, combining self-help with practical steps to turn dreams into reality and create a life aligned with your desires.",
    "coverUrl": "Make_it_happen.jpg"
},
{
    "title": "The Confidence Code: The Science and Art of Self-Assurance—What Women Should Know",
    "author": "Katty Kay and Claire Shipman",
    "price": 500,
    "description": "An exploration of the essential role of confidence in success, providing insights from psychology and practical advice specifically for women to develop self-assurance.",
    "coverUrl": "The_confidence_code.jpg"
},
{
    "title": "Focus on What Matters: A Collection of Stoic Letters on Living Well",
    "author": "Darius Foroux",
    "price": 500,
    "description": "A collection of letters based on Stoic philosophy, providing timeless wisdom and practical advice on productivity, focus, and living a meaningful life.",
    "coverUrl": "Focus_on_what_matters.jpg"
},
{
    "title": "this time you return to yourself",
    "author": "Duduzile Noeleen Ngwenya",
    "price": 500,
    "description": "A poetic or contemplative collection focusing on self-discovery, healing, and the journey of returning to one's authentic self after various life experiences.",
    "coverUrl": "This_time_you_return_to_yourself.jpg"
},
{
    "title": "What Are You Doing With Your Life?",
    "author": "J. Krishnamurti",
    "price": 500,
    "description": "A philosophical and spiritual work that challenges readers to question the nature of their existence, purpose, and conditioning in order to live a truly free life.",
    "coverUrl": "What_are_you_doing_with_your_life.jpg"
},
{
    "title": "Rich Routines: Simple Habits That Enrich Every Area of Your Life",
    "author": "Steve Houghton",
    "price": 500,
    "description": "A guide detailing simple, effective daily habits to build 'wealth' across five key areas: Financial, Emotional, Mental, Physical, and Spiritual.",
    "coverUrl": "Rich_routines.png"
},
{
    "title": "Things We Don’t Talk About",
    "author": "Pandora Owl",
    "price": 500,
    "description": "Likely a collection of poems or prose that addresses deep, often difficult or taboo emotional and psychological topics that are commonly left unsaid.",
    "coverUrl": "Things_we_dont_talk_about.jpg"
},
{
    "title": "Habits of a Godly Woman",
    "author": "Joyce Meyer",
    "price": 500,
    "description": "A Christian devotional or self-help book that outlines spiritual and practical habits for women seeking to deepen their faith and live a life aligned with Christian values.",
    "coverUrl": "Habits_of_a_Godly_woman.jpg"
},
{
    "title": "Where The F**k Do I Go From Here?",
    "author": "Bhavya Arora",
    "price": 500,
    "description": "A candid and motivational guide for those feeling lost or at a crossroads, offering advice and steps to find direction and forge a path forward in life.",
    "coverUrl": "Where_did_I_go.png"
},
{
    "title": "The Psychology of Money: Timeless lessons on wealth, greed, and happiness",
    "author": "Morgan Housel",
    "price": 500,
    "description": "Explores the idea that success with money has less to do with intelligence and more to do with behavior, sharing lessons on personal finance, investment, and happiness.",
    "coverUrl": "The_psychology_of_money.jpg"
},
{
    "title": "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
    "author": "Mark Manson",
    "price": 500,
    "description": "A bestselling guide that argues true happiness comes from not caring about everything, but rather from identifying and caring only about what is truly important.",
    "coverUrl": "The_subtle_art.jpg"
},
{
    "title": "The Diary of a CEO: The 33 Laws of Business & Life",
    "author": "Steven Bartlett",
    "price": 500,
    "description": "A business and life manifesto drawn from the host's personal experiences, offering lessons and laws for achieving success in both business and personal life.",
    "coverUrl": "The_diary_of_a_CEO.jpg"
},
{
    "title": "Healing Is the New High: A Guide to Overcoming Emotional Turmoil and Finding Freedom",
    "author": "Vex King",
    "price": 500,
    "description": "A guide that focuses on self-healing, moving past emotional turmoil, and achieving inner freedom by adopting a positive mindset and practices.",
    "coverUrl": "Healing_is_the_new_high.jpg"
},
{
    "title": "Believe It to Achieve It: Overcome Your Doubts, Let Go of the Past, and Unlock Your Full Potential",
    "author": "Brian Tracy and Christina Stein, Ph.D.",
    "price": 500,
    "description": "Offers a practical framework for overcoming self-doubt and past limitations to harness your inner potential and achieve your most important goals.",
    "coverUrl": "Believe_it_to_achieve_it.jpg"
},
{
    "title": "Hullabaloo, Bu-Bye, Koko, Come In",
    "author": "Koleka Putuma",
    "price": 500,
    "description": "A collection of poetry exploring themes of identity, race, class, and feminism in contemporary South Africa, known for its powerful and critical voice.",
    "coverUrl": "Hullo.jpg"
},
{
    "title": "dear self,",
    "author": "Patience Tamarra",
    "price": 500,
    "description": "A reflective collection of letters or short prose dedicated to self-love, personal growth, and emotional healing.",
    "coverUrl": "Dear_self.jpg"
},
{
    "title": "Just Not Winning: When life feels like a losing game, even showing up is a win.",
    "author": "Ntombizinhle B Sithole",
    "price": 500,
    "description": "A motivational and comforting read that shifts the perspective on success, emphasizing that resilience and perseverance are victories in themselves.",
    "coverUrl": "Just_not_winning.jpg"
},
{
    "title": "You Get Better With Time Love: This is how you love yourself",
    "author": "Duduzile Noeleen Ngwenya",
    "price": 500,
    "description": "A self-love guide that focuses on the journey of continuous personal improvement, acceptance, and how to authentically love and care for yourself.",
    "coverUrl": "You_get_better_with_time_love.jpg"
},
{
    "title": "Do It For Your Self: A Motivational Journal",
    "author": "Kara Cutruzzula (Illustrated by Tessa Forrest)",
    "price": 500,
    "description": "A motivational journal designed to encourage self-care, goal setting, and personal reflection, making motivation an internal, rather than external, pursuit.",
    "coverUrl": "Do_it_for_yourself.jpg"
},
{
    "title": "Power Moves: Ignite Your Confidence & Become A Force",
    "author": "Sarah Jakes Roberts",
    "price": 500,
    "description": "A motivational guide for women on how to tap into their confidence, overcome self-doubt, and harness their inner power to make significant strides in life and career.",
    "coverUrl": "Power_moves.jpg"
},
{
    "title": "Who Moved My Cheese? An Amazing Way to Deal With Change in Your Work and in Your Life",
    "author": "Dr Spencer Johnson",
    "price": 500,
    "description": "A simple allegorical tale about four characters dealing with changes in their supply of cheese, offering practical lessons on handling change, fear, and adaptation.",
    "coverUrl": "Who_moved_my_cheese.jpg"
},
{
    "title": "When Grief Comes: Finding Strength for Today and Hope for Tomorrow",
    "author": "Kirk H. Neely",
    "price": 500,
    "description": "A compassionate guide offering comfort, spiritual strength, and enduring hope to those navigating the pain of loss and grief.",
    "coverUrl": "When_grief_comes.jpg"
},
{
    "title": "Disciple: Walking with God",
    "author": "Rorisang Thandekiso",
    "price": 500,
    "description": "A personal and spiritual memoir or guide on deepening one's relationship with God and embracing the journey of Christian discipleship.",
    "coverUrl": "Discipline.jpg"
},
{
    "title": "Finding Me",
    "author": "Viola Davis",
    "price": 500,
    "description": "The candid and powerful memoir of Oscar-winning actress Viola Davis, recounting her journey from poverty and trauma to becoming a celebrated artist.",
    "coverUrl": "Finding_me.jpg"
},
{
    "title": "Woman Evolve: Break Up with Your Fears & Revolutionize Your Life",
    "author": "Sarah Jakes Roberts",
    "price": 500,
    "description": "A transformative guide for women, encouraging them to leave behind past limitations and embrace their personal evolution and purpose.",
    "coverUrl": "Woman_evolve.jpg"
},
{
    "title": "Tuesdays with Morrie: an old man, a young man, and life's greatest lesson",
    "author": "Mitch Albom",
    "price": 500,
    "description": "A poignant memoir about a series of visits between a journalist and his former college professor who is dying, chronicling life lessons on love, work, community, and death.",
    "coverUrl": "Tuesdays_with_Morrie.jpg"
},
{
    "title": "How Did We Get Here? A girl's guide to finding herself",
    "author": "Mpoomy Ledwaba",
    "price": 500,
    "description": "A personal guide offering advice, reflection, and encouragement for young women on the journey of self-discovery and finding purpose.",
    "coverUrl": "How_did_we_get_here.jpg"
},
{
    "title": "The 48 Laws of Power",
    "author": "Robert Greene",
    "price": 500,
    "description": "A controversial but influential guide that distills the history of power into 48 laws, drawn from the philosophies of Machiavelli, Sun Tzu, and others.",
    "coverUrl": "The_48_laws_of_power.jpg"
},
{
    "title": "Becoming",
    "author": "Michelle Obama",
    "price": 500,
    "description": "A deeply personal memoir by the former First Lady of the United States, chronicling her roots, her time in the White House, and her journey to finding her voice.",
    "coverUrl": "Becoming_Michelle_Obama.jpg"
},
{
    "title": "The Psychology of Being That Girl: The Ultimate Guide to Self-Development.",
    "author": "Aniya Holmes",
    "price": 500,
    "description": "A modern guide to self-development, focusing on building confidence, routines, and a mindset that embodies the aspirational 'That Girl' aesthetic and lifestyle.",
    "coverUrl": "The_psychology_of_being_that_girl.jpg"
},
{
    "title": "Limitless: Upgrade Your Brain, Learn Anything Faster, and Unlock Your Exceptional Life",
    "author": "Jim Kwik",
    "price": 500,
    "description": "Techniques for upgrading your brain and accelerating learning.",
    "coverUrl": "images/Limitless.jpg"
  },
  {
    "title": "The Art of Positive Thinking",
    "author": "Elizabeth P. Brown",
    "price": 500,
    "description": "A self-help book for developing mindfulness and overcoming negative thoughts.",
    "coverUrl": "images/The_art_of_positive_thinking.jpg"
  },
  {
    "title": "Things No One Else Can Teach Us",
    "author": "Humble The Poet",
    "price": 500,
    "description": "Inspirational insights from the author of UNLEARN.",
    "coverUrl": "images/Things_no_one_else_can_teach_us.jpg"
  },
  {
    "title": "The Habit of Winning: Stories to Inspire, Motivate and Unleash the Winner within",
    "author": "Prakash Iyer",
    "price": 500,
    "description": "Stories to inspire motivation and unleash inner potential.",
    "coverUrl": "images/The_habit_of_winning.jpg"
  },
  {
    "title": "Do Epic Shit",
    "author": "Ankur Warikoo",
    "price": 500,
    "description": "A book of advice and motivation by Ankur Warikoo.",
    "coverUrl": "images/Do_epic_shit.jpg"
  },
  {
    "title": "Do What Works For You: A practical guide to align your actions with your authentic self",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A guide for aligning actions with one's authentic self.",
    "coverUrl": "images/Do_what_works_for_you.jpg"
  },
  {
    "title": "Speak With No Fear: Go from a nervous, nauseated, and sweaty speaker to an excited, energized, and passionate presenter",
    "author": "Mike Acker",
    "price": 500,
    "description": "A guide to overcoming public speaking anxiety.",
    "coverUrl": "images/Speak_with_no_fear.jpg"
  },
  {
    "title": "Stop Lying to Yourself: 101 Hard Truths to Help You Change Your Life",
    "author": "Simon Gilham",
    "price": 500,
    "description": "101 truths intended to help readers change their lives.",
    "coverUrl": "images/Stop_lying_to_yourself.jpg"
  },
  {
    "title": "The Code of the Extraordinary Mind: 10 Unconventional Laws to Redefine Your Life & Succeed On Your Own Terms",
    "author": "Vishen Lakhiani",
    "price": 500,
    "description": "10 unconventional laws to redefine life and achieve success.",
    "coverUrl": "images/The_code_of_the_extraordinary_mind.jpg"
  },
  {
    "title": "The Power of Your Subconscious Mind",
    "author": "Dr Joseph Murphy",
    "price": 500,
    "description": "A classic guide on how to use the power of your subconscious mind to achieve success, health, and wealth.",
    "coverUrl": "images/The_Power_of_Your_subconscious_mind.jpg"
  },
  {
    "title": "Surrounded by Idiots: The Four Types of Human Behaviour (or, How to Understand Those Who Cannot Be Understood)",
    "author": "Thomas Erikson",
    "price": 500,
    "description": "Explores the four basic personality types (Red, Yellow, Green, and Blue) and how to communicate with them.",
    "coverUrl": "images/Surrounded_by_idiots.jpg"
  },
  {
    "title": "How Money Works: Stop being a SUCKER",
    "author": "Tom Mathews and Steve Siebold",
    "price": 500,
    "description": "A guide to improving financial literacy and taking control of your financial future.",
    "coverUrl": "images/How_money_works.jpg"
  },
  {
    "title": "Finish What You Start: The Art of Following Through, Taking Action, Executing, & Self-Discipline",
    "author": "Peter Hollins",
    "price": 500,
    "description": "A handbook on developing self-discipline and overcoming the challenges of not finishing projects.",
    "coverUrl": "images/Finish_what_you_start.jpg"
  },
  {
    "title": "365 Days With Self-Discipline: 365 Life-Altering Thoughts on Self-Control, Mental Resilience, and Success",
    "author": "Martin Meadows",
    "price": 500,
    "description": "Daily thoughts and reflections to build self-control and mental resilience over a year.",
    "coverUrl": "images/365_days_with_self_discipline.jpg"
  },
  {
    "title": "Build Don't Talk: Things You Wish You Were Taught in School",
    "author": "Raj Shamani",
    "price": 500,
    "description": "A practical guide to the essential life skills (like finance, negotiation, and networking) that are not taught in school.",
    "coverUrl": "images/Build_dont_talk.jpg"
  },
  {
    "title": "How to Listen: Discover the hidden key to better communication",
    "author": "Oscar Trimboli",
    "price": 500,
    "description": "A book focused on improving listening skills as a fundamental tool for better communication.",
    "coverUrl": "images/How_to_listen.jpg"
  },
  {
    "title": "How Rich People Think",
    "author": "Steve Siebold",
    "price": 500,
    "description": "A look at the thinking and habits that separate the wealthy from the middle class.",
    "coverUrl": "images/How_rich_people_think.jpg"
  },
  {
    "title": "The Science of Attraction: What behavioral and evolutionary psychology can teach us about flirting, dating, and mating",
    "author": "Patrick King",
    "price": 500,
    "description": "An in-depth look at the psychological and evolutionary mechanisms behind human attraction and connection.",
    "coverUrl": "images/The_science_of_attraction.jpg"
  },
  {
    "title": "To Be A Man: A Guide to True Masculine Power",
    "author": "Robert Augustus Masters, PhD",
    "price": 500,
    "description": "A guide to exploring and understanding true masculine power and emotional integration.",
    "coverUrl": "images/To_be_a_man.jpg"
  },
 {
    "title": "Speak with Confidence",
    "author": "Mike Acker",
    "price": 500,
    "description": "Overcome self-doubt, communicate clearly, and inspire your audience.",
    "coverUrl": "images/Speak_with_confidence.jpg"
},
{
    "title": "Master Your Potential",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to break free from limitations and start tapping into your greatness.",
    "coverUrl": "images/Master_your_potential.jpg"
},
{
    "title": "Master Your Thinking",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to align with reality and achieve tangible results in the real world.",
    "coverUrl": "images/Master_your_thinking.jpg"
},
{
    "title": "Master Your Focus",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to stop chasing the next thing and focus on what matters until it's done.",
    "coverUrl": "images/Master_your_focus.jpg"
},
{
    "title": "Dopamine Detox",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A short guide to remove distractions and get your brain to do hard things.",
    "coverUrl": "images/Dopamine_detox.jpg"
},
{
    "title": "The First 90 Days",
    "author": "Michael D. Watkins",
    "price": 500,
    "description": "Proven strategies for getting up to speed faster and smarter.",
    "coverUrl": "images/The_first_90_days.jpg"
},
{
    "title": "Hyperfocus",
    "author": "Chris Bailey",
    "price": 500,
    "description": "How to work less and achieve more.",
    "coverUrl": "images/Hyper_focus.jpg"
},
{
    "title": "The Comfort Zone",
    "author": "Kristen Butler",
    "price": 500,
    "description": "Create a life you really love with less stress and more flow.",
    "coverUrl": "images/The_comfort_zone.jpg"
},
{
    "title": "100 Lessons for a Quiet Mind and Powerful Life",
    "author": "Mohammed Joynal Abedin",
    "price": 500,
    "description": "Calm your mind, sharpen your focus, build the life you deserve.",
    "coverUrl": "images/100_lessons_of_a_quiet_mind_and_powerful_life.jpg"
},
{
    "title": "You Become What You Think",
    "author": "Shubham Kumar Singh",
    "price": 500,
    "description": "Master your mind, master your life.",
    "coverUrl": "images/You_become_what_you_think.jpg"
},
{
        title: "The Power of Positive Thinking",
        author: "Norman Vincent Peale",
        price: 500,
        description: "Transform your mindset and unlock your potential. Learn practical techniques to overcome negativity, build confidence, and achieve your goals through the power of positive thinking.",
        coverUrl: "The_power_of_positive_thinking.jpg"

    }
];

// Render books
function renderBooks(booksToRender = books) {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = booksToRender.map(book => `
        <div class="book-card">
            <div class="book-card-inner">
                <div class="book-card-front bg-white dark:bg-[#1a1a1a] shadow-lg">
                    <img src="${book.coverUrl}" alt="${book.title}" class="w-full h-80 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-1">${book.title}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">by ${book.author}</p>
                        <p class="text-[#5D5CDE] font-bold text-xl">Ksh ${book.price}</p>
                    </div>
                </div>
                <div class="book-card-back bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                    <h3 class="font-bold text-xl mb-4">${book.title}</h3>
                    <p class="text-sm mb-4">${book.description}</p>
                    <p class="font-semibold mb-2">Author: ${book.author}</p>
                    <p class="text-2xl font-bold mb-4">Ksh ${book.price}</p>
                    <a href="https://wa.me/254724986797?text=Hi! I'm interested in ordering ${book.title} by ${book.author}" target="_blank" class="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                        Order Now
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

renderBooks();

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
});

// Blogs data
const blogs = [
    {
        title: "The Benefits of Reading Physical Books",
        excerpt: "In our digital age, there's something magical about holding a real book. Discover why physical books enhance memory, reduce eye strain, and create a deeper connection with the content.",
        date: "2024-12-15",
        quote: "A book is a dream that you hold in your hand."
    },
    {
        title: "Top 5 Books Every Entrepreneur Should Read",
        excerpt: "Success leaves clues in the pages of these transformative books. From mindset to strategy, these reads will revolutionize your approach to business and life.",
        date: "2025-05-10",
        quote: "Knowledge is power, but only when applied."
    },
    {
        title: "How Reading Transforms Your Brain",
        excerpt: "Science proves that reading literally changes your brain structure. Learn about the neurological benefits and cognitive advantages that come from regular reading habits.",
        date: "2025-10-21",
        quote: "Today a reader, tomorrow a leader."
    }
];

// Render blogs
function renderBlogs() {
    const blogsGrid = document.getElementById('blogsGrid');
    blogsGrid.innerHTML = blogs.map(blog => `
        <div class="blog-card card-bg bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            <div class="p-6">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">${new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 class="text-xl font-bold mb-3">${blog.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${blog.excerpt}</p>
                <div class="border-l-4 border-[#5D5CDE] pl-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                    <p class="italic text-[#5D5CDE]">"${blog.quote}"</p>
                </div>
            </div>
        </div>
    `).join('');
}

renderBlogs();

// Reviews data
let reviews = [
    {
        name: "Sarah Hassan",
        rating: 5,
        text: "Excellent service! My book arrived in perfect condition within 3 days. The quality is outstanding and the price is unbeatable. Highly recommend Fnntech.dev!",
        date: "2024-12-30"
    },
    {
        name: "John Kamau",
        rating: 5,
        text: "I've ordered multiple books from Fnntech.dev and each time the experience has been flawless. Authentic books, fast delivery, and great customer service. This is my go-to bookstore now!",
        date: "2025-07-08"
    },
    {
        name: "Grace Akinyi",
        rating: 4,
        text: "Great collection of books at affordable prices. The delivery was prompt and the book quality is superb. Will definitely order again. Thank you Fnntech.dev!",
        date: "2025-10-25"
    }
];
// Lightbox logic
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  // Close when clicking outside image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.add('hidden');
  });

// Reviews are stored in memory for this session

// Render reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const displayReviews = reviews.slice(0, 6); // Show max 6 reviews

    reviewsContainer.innerHTML = displayReviews.map(review => `
        <div class="card-bg bg-white dark:bg-[#1a1a1a] rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800">
            <div class="flex items-center gap-2 mb-3">
                ${Array(5).fill(0).map((_, i) => `
                    <i class="fas fa-star ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-700'}"></i>
                `).join('')}
            </div>
            <p class="text-gray-700 dark:text-gray-300 mb-4">"${review.text}"</p>
            <div class="flex items-center justify-between">
                <p class="font-semibold">${review.name}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">${new Date(review.date).toLocaleDateString()}</p>
            </div>
        </div>
    `).join('');

    // Update review count
    document.getElementById('reviewCount').textContent = reviews.length;

    // Update average rating
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    const avgRatingContainer = document.getElementById('averageRating');
    avgRatingContainer.innerHTML = Array(5).fill(0).map((_, i) => `
        <i class="fas fa-star ${i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-300'}"></i>
    `).join('');
}

renderReviews();

// Rating input functionality
let selectedRating = 5;
const ratingStars = document.querySelectorAll('#ratingInput .star');
const ratingValue = document.getElementById('ratingValue');

// Initialize rating display
ratingStars.forEach((s, index) => {
  if (index < selectedRating) {
    s.classList.add('active');
  }
});

// Handle user clicks
ratingStars.forEach(star => {
  star.addEventListener('click', function() {
    selectedRating = parseInt(this.getAttribute('data-rating'));

    // Update active stars
    ratingStars.forEach((s, index) => {
      if (index < selectedRating) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    // Update displayed rating (optional)
    if (ratingValue) {
      ratingValue.textContent = `Your rating: ${selectedRating} ⭐`;
    }
  });
});


// Review form submission
const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newReview = {
        name: document.getElementById('reviewerName').value,
        rating: selectedRating,
        text: document.getElementById('reviewText').value,
        date: new Date().toISOString()
    };

    reviews.unshift(newReview); // Add to beginning

    renderReviews();
    reviewForm.reset();
    selectedRating = 4;
    ratingStars.forEach((s, index) => {
        if (index < selectedRating) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });

    // Show success message using custom modal instead of alert
    const successModal = document.createElement('div');
    successModal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]';
    successModal.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 text-center">
            <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">Thank You!</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">Your review has been submitted successfully.</p>
            <button onclick="this.closest('.fixed').remove()" class="px-6 py-2 bg-[#5D5CDE] text-white rounded-full font-semibold hover:bg-[#4a49b8] transition">Close</button>
        </div>
    `;
    document.body.appendChild(successModal);

    // Scroll to reviews
    document.getElementById('reviewsContainer').scrollIntoView({ behavior: 'smooth' });
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
