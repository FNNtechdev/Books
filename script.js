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
    "coverUrl": "Limitless.jpg"
  },
  {
    "title": "The Art of Positive Thinking",
    "author": "Elizabeth P. Brown",
    "price": 500,
    "description": "A self-help book for developing mindfulness and overcoming negative thoughts.",
    "coverUrl": "The_art_of_positive_thinking.jpg"
  },
  {
    "title": "Things No One Else Can Teach Us",
    "author": "Humble The Poet",
    "price": 500,
    "description": "Inspirational insights from the author of UNLEARN.",
    "coverUrl": "Things_no_one_else_can_teach_us.jpg"
  },
  {
    "title": "The Habit of Winning: Stories to Inspire, Motivate and Unleash the Winner within",
    "author": "Prakash Iyer",
    "price": 500,
    "description": "Stories to inspire motivation and unleash inner potential.",
    "coverUrl": "The_habit_of_winning.jpg"
  },
  {
    "title": "Do Epic Shit",
    "author": "Ankur Warikoo",
    "price": 500,
    "description": "A book of advice and motivation by Ankur Warikoo.",
    "coverUrl": "Do_epic_shit.jpg"
  },
  {
    "title": "Do What Works For You: A practical guide to align your actions with your authentic self",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A guide for aligning actions with one's authentic self.",
    "coverUrl": "Do_what_works_for_you.jpg"
  },
  {
    "title": "Speak With No Fear: Go from a nervous, nauseated, and sweaty speaker to an excited, energized, and passionate presenter",
    "author": "Mike Acker",
    "price": 500,
    "description": "A guide to overcoming public speaking anxiety.",
    "coverUrl": "Speak_with_no_fear.jpg"
  },
  {
    "title": "Stop Lying to Yourself: 101 Hard Truths to Help You Change Your Life",
    "author": "Simon Gilham",
    "price": 500,
    "description": "101 truths intended to help readers change their lives.",
    "coverUrl": "Stop_lying_to_yourself.jpg"
  },
  {
    "title": "The Code of the Extraordinary Mind: 10 Unconventional Laws to Redefine Your Life & Succeed On Your Own Terms",
    "author": "Vishen Lakhiani",
    "price": 500,
    "description": "10 unconventional laws to redefine life and achieve success.",
    "coverUrl": "The_code_of_the_extraordinary_mind.jpg"
  },
  {
    "title": "The Power of Your Subconscious Mind",
    "author": "Dr Joseph Murphy",
    "price": 500,
    "description": "A classic guide on how to use the power of your subconscious mind to achieve success, health, and wealth.",
    "coverUrl": "The_power_of_your_subconscious_mind.jpg"
  },
  {
    "title": "Surrounded by Idiots: The Four Types of Human Behaviour (or, How to Understand Those Who Cannot Be Understood)",
    "author": "Thomas Erikson",
    "price": 500,
    "description": "Explores the four basic personality types (Red, Yellow, Green, and Blue) and how to communicate with them.",
    "coverUrl": "Surrounded_by_idiots.jpg"
  },
  {
    "title": "How Money Works: Stop being a SUCKER",
    "author": "Tom Mathews and Steve Siebold",
    "price": 500,
    "description": "A guide to improving financial literacy and taking control of your financial future.",
    "coverUrl": "How_money_works.jpg"
  },
  {
    "title": "Finish What You Start: The Art of Following Through, Taking Action, Executing, & Self-Discipline",
    "author": "Peter Hollins",
    "price": 500,
    "description": "A handbook on developing self-discipline and overcoming the challenges of not finishing projects.",
    "coverUrl": "Finish_what_you_start.jpg"
  },
  {
    "title": "365 Days With Self-Discipline: 365 Life-Altering Thoughts on Self-Control, Mental Resilience, and Success",
    "author": "Martin Meadows",
    "price": 500,
    "description": "Daily thoughts and reflections to build self-control and mental resilience over a year.",
    "coverUrl": "365_days_with_self_discipline.jpg"
  },
  {
    "title": "Build Don't Talk: Things You Wish You Were Taught in School",
    "author": "Raj Shamani",
    "price": 500,
    "description": "A practical guide to the essential life skills (like finance, negotiation, and networking) that are not taught in school.",
    "coverUrl": "Build_dont_talk.jpg"
  },
  {
    "title": "How to Listen: Discover the hidden key to better communication",
    "author": "Oscar Trimboli",
    "price": 500,
    "description": "A book focused on improving listening skills as a fundamental tool for better communication.",
    "coverUrl": "How_to_listen.jpg"
  },
  {
    "title": "How Rich People Think",
    "author": "Steve Siebold",
    "price": 500,
    "description": "A look at the thinking and habits that separate the wealthy from the middle class.",
    "coverUrl": "How_rich_people_think.jpg"
  },
  {
    "title": "The Science of Attraction: What behavioral and evolutionary psychology can teach us about flirting, dating, and mating",
    "author": "Patrick King",
    "price": 500,
    "description": "An in-depth look at the psychological and evolutionary mechanisms behind human attraction and connection.",
    "coverUrl": "The_science_of_attraction.jpg"
  },
  {
    "title": "To Be A Man: A Guide to True Masculine Power",
    "author": "Robert Augustus Masters, PhD",
    "price": 500,
    "description": "A guide to exploring and understanding true masculine power and emotional integration.",
    "coverUrl": "To_be_a_man.jpg"
  },
 {
    "title": "Speak with Confidence",
    "author": "Mike Acker",
    "price": 500,
    "description": "Overcome self-doubt, communicate clearly, and inspire your audience.",
    "coverUrl": "Speak_with_confidence.jpg"
},
{
    "title": "Master Your Potential",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to break free from limitations and start tapping into your greatness.",
    "coverUrl": "Master_your_potential.jpg"
},
{
    "title": "Master Your Thinking",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to align with reality and achieve tangible results in the real world.",
    "coverUrl": "Master_your_thinking.jpg"
},
{
    "title": "Master Your Focus",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A practical guide to stop chasing the next thing and focus on what matters until it's done.",
    "coverUrl": "Master_your_focus.jpg"
},
{
    "title": "Dopamine Detox",
    "author": "Thibaut Meurisse",
    "price": 500,
    "description": "A short guide to remove distractions and get your brain to do hard things.",
    "coverUrl": "Dopamine_detox.jpg"
},
{
    "title": "The First 90 Days",
    "author": "Michael D. Watkins",
    "price": 500,
    "description": "Proven strategies for getting up to speed faster and smarter.",
    "coverUrl": "The_first_90_days.jpg"
},
{
    "title": "Hyperfocus",
    "author": "Chris Bailey",
    "price": 500,
    "description": "How to work less and achieve more.",
    "coverUrl": "Hyper_focus.jpg"
},
{
    "title": "The Comfort Zone",
    "author": "Kristen Butler",
    "price": 500,
    "description": "Create a life you really love with less stress and more flow.",
    "coverUrl": "The_comfort_zone.jpg"
},
{
    "title": "100 Lessons for a Quiet Mind and Powerful Life",
    "author": "Mohammed Joynal Abedin",
    "price": 500,
    "description": "Calm your mind, sharpen your focus, build the life you deserve.",
    "coverUrl": "100_lessons_of_a_quiet_mind_and_powerful_life.jpg"
},
{
    "title": "You Become What You Think",
    "author": "Shubham Kumar Singh",
    "price": 500,
    "description": "Master your mind, master your life.",
    "coverUrl": "You_become_what_you_think.jpg"
},
    {
  title: "How to Chase Change",
  author: "Alexis Fernandez-Preiksa",
  price: 500,
  description: "Transform your mindset in just 30 days with Alexis Fernandez-Preiksa’s powerful guide to personal growth. 'How to Chase Change' combines neuroscience, psychology, and daily mindset exercises to help you break habits, rewire your thoughts, and embrace positive transformation. A practical roadmap for anyone ready to become their best self.",
  coverUrl: "How_to_chase_change.jpg"
},

{
  title: "How to Stop Feeling Like Sh*t",
  author: "Andrea Owen",
  price: 500,
  description: "In this brutally honest yet empowering book, Andrea Owen reveals 14 habits that hold you back from happiness and self-confidence. With humor, compassion, and tough love, she teaches you how to stop self-sabotage, silence inner criticism, and finally build the emotional strength to thrive. A must-read for anyone ready to break free from their own limits.",
  coverUrl: "How_to_stop_feeling_like_shit.jpg"
},

{
  title: "How to Work Without Losing Your Mind",
  author: "Cate Sevilla",
  price: 500,
  description: "Cate Sevilla offers a refreshingly real guide to surviving modern work life. Through honest stories, practical advice, and humor, she helps you navigate burnout, imposter syndrome, toxic workplaces, and the pressure to 'have it all.' 'How to Work Without Losing Your Mind' is the comforting yet empowering handbook every professional needs to protect their peace and rediscover joy in what they do.",
  coverUrl: "How_to_work_without_losing_mind.jpg"
},
    {
    title: "How to Tell a Story: The Essential Guide to Memorable Storytelling from The Moth",
    author: "Meg Bowles, Catherine Burns, Jenifer Hixson, Sarah Austin Jenness, and Kate Tellers",
    price: 500,
    description: "Unlock the secret to connecting with any audience. Based on decades of experience from the acclaimed storytelling organization, **The Moth**, this guide provides the essential tools, tips, and exercises to craft and deliver your most **compelling and authentic true-life stories**. Learn how to find your voice, structure your narrative, and move listeners—a must-have for anyone who wants to communicate with greater impact.",
    coverUrl: "How_to_tell_a_story.jpg"
},
    {
    title: "The World Beyond Your Head: How to Flourish in an Age of Distraction",
    author: "Matthew Crawford",
    price: 500,
    description: "In an age of endless distractions, this thought-provoking book argues for the value of **focused attention and skilled engagement** with the world. Crawford pushes back against the 'inward turn' of modern life, showing how our deep, practical engagement with real, complex things—from craftsmanship to music—can restore our sense of self and help us **flourish amid the noise**. Discover how to reclaim your focus and find genuine meaning outside the echo chamber of your own thoughts.",
    coverUrl: "The_world_beyond_your_head.jpg"
},


{
    title: "That Sucked. Now What?: How to Embrace the Joy in Chaos and Find Magic in the Mess",
    author: "Dr. Neeta Bhushan",
    price: 500,
    description: "Life's setbacks are inevitable, but your reaction is a choice. This **empowering guide** shows you how to turn every disappointment, failure, and chaotic moment into a powerful opportunity for growth. Dr. Neeta Bhushan introduces her revolutionary **'Brave Table' framework** for navigating difficulty, helping you shift your perspective to find the **'magic in the mess,'** build resilience, and move forward with clarity and courage.",
    coverUrl: "That_sucked.jpg"
},
    {
    title: "The Overthinking Cure: How to Stay in the Present, Shake Negativity, and Stop Your Stress and Anxiety",
    author: "Nick Trenton",
    price: 500,
    description: "**Silence the endless mental chatter** and regain control of your life. This book offers simple, science-backed strategies to help you escape the trap of analysis paralysis. Learn how to **stay grounded in the present moment**, identify and dismantle negative thought patterns, and significantly reduce your stress and anxiety. It’s a practical, accessible roadmap to a clearer, calmer, and more focused mind.",
    coverUrl: "The_overthinking_cure.jpg"
},

{
    title: "The No Complaining Rule: Positive Ways to Deal with Negativity at Work",
    author: "Jon Gordon",
    price: 500,
    description: "Transform your team and your workplace culture by tackling the single biggest source of negativity: complaining. In this **powerful business fable**, Jon Gordon provides a simple yet revolutionary framework to inspire personal responsibility and positive action. Implement the 'No Complaining Rule' and learn to focus on **solutions, not problems**, leading to higher morale, greater energy, and improved productivity for everyone.",
    coverUrl: "The_no_complaining_rule.jpg"
},

{
    title: "How to Stop Breaking Your Own Heart",
    author: "Meggan Roxanne",
    price: 500,
    description: "End the painful cycle of self-sabotage and learn to heal your deepest emotional wounds. Meggan Roxanne, founder of **@thegoodquote**, offers a compassionate and insightful guide to recognizing and dismantling the self-limiting beliefs that hold you back. This book is a pathway to **radical self-acceptance**, teaching you to cultivate kindness towards yourself and build a resilient foundation for a life filled with genuine self-love. **Jay Shetty** calls it a book whose words 'have the power to make you feel seen, understood, and less alone.'",
    coverUrl: "How_to_stop_breaking_your_heart.jpg"
},
   {
    title: "Brain Hacks: 200+ Ways to Boost Your Brain Power",
    author: "Innovation Press (Various Contributors)",
    price: 500,
    description: "Supercharge your mental capabilities with **over 200 actionable, science-backed strategies** designed to enhance every aspect of your cognition. Whether you want to **improve focus, manage emotions, unlock creativity, or boost memory**, this comprehensive guide provides quick, powerful 'hacks' for daily life. It's a fun and practical way to expand your vocabulary, reduce stress, and permanently **increase your overall brain power**.",
    coverUrl: "Brain_hacks.jpg"
},
    {
    title: "The Science of Beauty: Debunk the myths and discover what goes into your beauty routine",
    author: "Dr. Michelle Wong (DK)",
    price: 500,
    description: "Get the truth behind your skincare and beauty products with this **visually stunning and rigorously scientific guide** from cosmetic chemist Dr. Michelle Wong. Move past the marketing hype and learn the **real chemistry** behind ingredients, routines, and beauty trends. This book debunks common myths, explains how your skin works, and empowers you to make **smart, evidence-based choices** for your most effective and personalized beauty regimen.",
    coverUrl: "The_science_of_beauty.jpg"
},
    {
    title: "Neuro-Habits: Rewire Your Brain to Stop Self-Defeating Behaviors and Make the Right Choice Every Time",
    author: "Peter Hollins",
    price: 500,
    description: "Tired of fighting your own worst tendencies? This essential guide uses the power of **neuroscience** to help you understand and **permanently change your behavior**. Learn simple yet effective techniques to bypass your brain’s natural resistance to change, eliminate self-defeating patterns, and install high-performance habits. It’s a practical, step-by-step blueprint for **rewiring your brain** to consistently make choices that lead to success and fulfillment.",
    coverUrl: "Neuro_habits.jpg"
},

{
    title: "You Are a Magnet: Guiding principles for a magnetic and joyful life",
    author: "Amber Lyon",
    price: 500,
    description: "Tap into your inherent power to attract the life you desire. This inspirational book provides **guiding principles** rooted in mindfulness and positive psychology to help you become a more **magnetic and joyful person**. Amber Lyon offers clear, modern wisdom on how to shift your energy, harness your intentions, and align your thoughts and actions to effortlessly draw abundance, connection, and deep happiness into your reality.",
    coverUrl: "You_are_a_magnet.jpg"
},

 {
    title: "A Year of Living Simply: The Joys of a Life Less Complicated",
    author: "Kate Humble",
    price: 500,
    description: "Inspired by her own journey, Kate Humble explores the profound benefits of choosing a simpler, more meaningful existence. This book is a beautifully written, inspiring account of scaling back and finding **joy in the small, essential things**. Discover how to declutter your mind, connect with nature, reduce consumption, and ultimately embrace the freedom and peace that comes with living a **less complicated life**.",
    coverUrl: "A_year_of_living_simply.jpg"
},
    {
    title: "The 5 Types of Wealth: A Transformative Guide to Design Your Dream Life",
    author: "Sahil Bloom",
    price: 500,
    description: "Move beyond money and redefine what it means to be truly rich. Bestselling author Sahil Bloom introduces a powerful framework for achieving holistic abundance by focusing on the **five pillars of wealth: Time, Social, Mental, Physical, and Financial**. This transformative guide offers practical, actionable strategies to optimize these five areas, helping you design a life that is not just financially successful, but also **balanced, purposeful, and deeply fulfilling**.",
    coverUrl: "The_5_types_of_wealth.jpg"
},
    {
    title: "Grow the F*ck Up: How to be an adult and get treated like one",
    author: "Sarah Knight",
    price: 500,
    description: "From the *New York Times* bestselling author of *Calm the F*ck Down* comes this **hilariously honest and refreshingly practical** guide to mastering modern adulthood. Sarah Knight tackles the awkward, confusing, and often frustrating realities of being an adult, from managing your finances to standing up for yourself. It’s an indispensable manual for stopping the procrastination, ditching the excuses, and finally learning **how to be—and get treated like—a responsible, capable adult**.",
    coverUrl: "Grow_the_fuck_up.jpg"
},
    {
    title: "The Ten Types of Human: A New Understanding of Who We Are and Who We Can Be",
    author: "Dexter Dias",
    price: 500,
    description: "Drawing on decades of experience as a human rights barrister, Dexter Dias unveils a new, powerful framework for understanding human behavior. Through **gripping true stories** from his legal cases, he identifies **ten core types of humans**—from the perpetrator to the hero—that exist within us all. This fascinating and timely book offers a profound understanding of our potential for both incredible good and shocking evil, ultimately providing a hopeful vision of **who we are and who we can strive to become**.",
    coverUrl: "The_ten_types_of_human.jpg"
},
    {
    title: "The Awe of God: The Astounding Way a Healthy Fear of God Transforms Your Life",
    author: "John Bevere",
    price: 500,
    description: "Bestselling author John Bevere challenges modern conceptions of faith and invites readers to rediscover the **transformative power of the fear of God**, not as a feeling of dread, but as profound reverence and awe. Discover how this healthy respect and wonder deepens your relationship with the Divine, equips you with **spiritual wisdom**, and ultimately leads to an astounding life marked by purpose, security, and true freedom. A powerful read for anyone seeking a deeper walk with faith.",
    coverUrl: "The_Awe_of_God.jpg"
},
    {
    title: "Keep It Shut: What to Say, How to Say It, and When to Say Nothing at All",
    author: "Karen Ehman",
    price: 500,
    description: "In a world drowning in noise and gossip, this book offers timely wisdom on the power of our words. Karen Ehman provides a humorous and heartfelt look at how to control our tongues, offering practical biblical advice on **what to say, how to say it with love and truth, and, crucially, when to say nothing at all**. Learn how to tame your tendency to overshare, gossip, or speak carelessly, transforming your communication into a force for grace and encouragement.",
    coverUrl: "Keep_it_shut.jpg"
},

{
    title: "Become Who You Were Meant To Be: A Devotional for Fulfilling Your Purpose and Maximizing Your Potential",
    author: "Dr. Myles Munroe",
    price: 500,
    description: "Unlock the extraordinary life you were created to live with this powerful devotional from the late Dr. Myles Munroe. Built on the principle that every individual is born with a unique gift, this book offers **daily wisdom and inspiration** to help you uncover your inherent purpose. Each reading is designed to challenge you to **maximize your full potential**, cultivate a purpose-driven mindset, and fulfill the destiny you were truly meant for.",
    coverUrl: "Become_who_you_were_meant_to_be.jpg"
},

{
    title: "The Daily Laws: 366 Meditations on Power, Seduction, Mastery, Strategy, and Human Nature",
    author: "Robert Greene",
    price: 500,
    description: "Start every day with a dose of profound wisdom from the master of strategy, Robert Greene (author of *The 48 Laws of Power*). This book is a **year-long devotional** that distills the timeless principles from his greatest works into 366 concise, powerful meditations. Learn to command respect, understand hidden human motivations, and achieve ultimate mastery—a perfect, accessible guide for those who want to **apply the laws of power and strategy** to their daily lives.",
    coverUrl: "The_daily_laws.jpg"
},

{
    title: "How to Be the Love You Seek: Break Cycles, Find Peace and Heal Your Relationships",
    author: "Dr. Nicole LePera (The Holistic Psychologist)",
    price: 500,
    description: "From the #1 *New York Times* bestselling author of *How to Do the Work*, Dr. Nicole LePera guides you through the process of **healing your relationship with yourself** so you can find the love you desire. Learn to identify and **break dysfunctional relationship cycles**, set strong boundaries, and address the roots of codependency and trauma. This deeply empathetic and practical guide empowers you to become the secure, authentic self who is capable of building and maintaining healthy, peaceful connections.",
    coverUrl: "How_to_be_the_love_you_seek.jpg"
},
    {
    title: "The Courage to Be Happy: Discover the Power of Positive Psychology and Choose Happiness Every Day",
    author: "Ichiro Kishimi and Fumitake Koga",
    price: 500,
    description: "The highly anticipated sequel to the global phenomenon, *The Courage to Be Disliked* (which sold over 2 million copies). Continuing the philosophical dialogue, this book dives deeper into **Adlerian psychology** to show you how to move from mere contentment to genuine, lasting happiness. Learn the revolutionary secret to finding satisfaction in work, love, and life, and discover the **courage it takes to choose happiness** every single day, regardless of external circumstances.",
    coverUrl: "The_courage_be_happy.jpg"
},
    {
    title: "Win Your Inner Battles: Defeat the Enemy Within and Live With Purpose",
    author: "Darius Foroux",
    price: 500,
    description: "Stop fighting against yourself and start living a life driven by purpose. Darius Foroux provides a clear, no-nonsense manual for **conquering self-doubt, fear, and destructive thoughts**—the true 'enemy within.' This book gives you practical tools and strategies rooted in behavioral science to build mental resilience, stop procrastination, and **finally align your daily actions with your biggest goals** so you can live with unwavering focus and purpose.",
    coverUrl: "Win_your_inner_battles.jpg"
},

{
    title: "Get Smart!: How to Think and Act Like the Most Successful and Highest-Paid People in Every Field",
    author: "Brian Tracy",
    price: 500,
    description: "Unleash your mental power and achieve extraordinary success with strategies from legendary productivity expert Brian Tracy (author of *Eat That Frog!*). This book reveals the **proven methods for thinking, planning, and acting** used by the world's highest-paid and most successful individuals. Learn how to **accelerate your learning curve**, boost your critical thinking skills, and immediately apply key insights to maximize your professional and personal results.",
    coverUrl: "Get_smart.jpg"
},

{
    title: "The Brain: The Story of You",
    author: "David Eagleman",
    price: 500,
    description: "Based on the acclaimed BBC television series, this book takes you on an exhilarating journey into the most complex object in the known universe: your brain. Neuroscientist David Eagleman explores groundbreaking questions like: *Who am I? What is reality?* and *How do I decide?* It’s a **clear, engaging, and mind-bending exploration** that illuminates how our brains shape our perception, memories, and identities, fundamentally changing the way you understand **the story of yourself**.",
    coverUrl: "The_brain.jpg"
},
    {
    title: "The Year of No Nonsense: How to Get Over Yourself and Get On with Your Life",
    author: "Meredith Atwood",
    price: 500,
    description: "Tired of the drama, the excuses, and the endless self-inflicted struggles? Join Meredith Atwood as she declares a **Year of No Nonsense**! This witty, relatable guide cuts through the BS and offers a refreshing, realistic path to ditching the victim mentality, owning your choices, and taking actionable steps toward the life you want. Learn how to **stop making things harder than they have to be** and finally get out of your own way.",
    coverUrl: "The_year_of_no_nonsense.jpg"
},
    
{
    title: "Power of Ignored Skills: Change the way you think and decide",
    author: "Manoj Tripathi",
    price: 500,
    description: "Unlock massive potential by mastering the **soft skills** that most people overlook. This insightful book reveals how seemingly simple abilities like **deep listening, critical questioning, and effective communication** hold the key to better decision-making and professional success. Learn to recognize and hone these 'ignored skills' to fundamentally change the way you think, engage with the world, and **secure better outcomes** in every area of your life.",
    coverUrl: "Power_of_ignored_skills.jpg"
},
    {
    title: "200 Quotes That Will Change the Way You Think",
    author: "Bookgains",
    price: 500,
    description: "Distill centuries of wisdom into a single, powerful collection. This book curates **200 of the most impactful, thought-provoking quotes** from influential thinkers, leaders, and artists, designed to shift your perspective and inspire meaningful action. As Charlie Munger advised, 'Those who will keep learning will keep rising in life.' Keep this book close for **instant motivation and clarity** on success, happiness, wealth, and life itself.",
    coverUrl: "200_quotes_that_will_change_the_way_you_think.jpg"
},
    {
    title: "Take Your Life Back: How to Stop Letting the Past and Other People Control You",
    author: "Stephen Arterburn, M.Ed. and David Stoop, Ph.D.",
    price: 500,
    description: "Are you living life as a puppet to past hurts or the demands of others? This essential recovery guide empowers you to **cut the emotional strings** that keep you stuck. Arterburn and Stoop provide practical, faith-based tools to help you identify the sources of external control, **heal from old wounds**, and establish healthy boundaries. Learn to reclaim your personal freedom and **take courageous control** over your own choices and destiny.",
    coverUrl: "Take_your_life_back.jpg"
},
    {
    title: "Emotional Intelligence Habits: A Powerful New Way to Increase Your Emotional Intelligence",
    author: "Travis Bradberry",
    price: 500,
    description: "From the bestselling author of *Emotional Intelligence 2.0*, this book is your practical blueprint for making emotional intelligence an automatic part of your life. It teaches you **daily, micro-habits** that seamlessly integrate powerful EI skills into your routine, allowing you to quickly **change your habits and change your life**. Learn to master your emotions, navigate complex social situations, and improve both your personal and professional relationships with ease.",
    coverUrl: "Emotional_intelligence_habits.jpg"
},
    {
    title: "Attitude Is Everything (Revised Edition): 10 Life-Changing Steps to Turning Attitude into Action",
    author: "Keith Harrell",
    price: 500,
    description: "Anthony Robbins calls this book a guide that 'illuminates solid techniques to take your life to new heights!' This revised edition provides a **clear, ten-step program** for harnessing the massive power of your mindset. Learn how to eliminate toxic thought patterns, cultivate genuine optimism, and, most critically, translate that positive **attitude into consistent, powerful action**. It’s the ultimate guide for anyone ready to embrace enthusiasm and achieve peak personal fulfillment.",
    coverUrl: "Attitude_is_everything.jpg"
},
    {
    title: "Do the Impossible: How to Become Extraordinary and Impact the World at Scale",
    author: "Thibaut Meurisse",
    price: 500,
    description: "Stop settling for average and start aiming for the extraordinary. This high-impact guide provides the specific mindset shifts and practical strategies needed to set truly massive goals and **achieve what others deem impossible**. Meurisse shows you how to overcome self-limiting beliefs, cultivate ruthless focus, and execute large-scale projects, empowering you to **become an extraordinary individual** who leaves a lasting impact on the world.",
    coverUrl: "Do_the_impossible.jpg"
},
    {
    title: "What's Your Dream?: Find your passion. Love your work. Build a richer life.",
    author: "Simon Squibb",
    price: 500,
    description: "Tired of dreaming without acting? Simon Squibb, entrepreneur and podcast host, delivers a motivational kick to stop you from giving up on your goals and start building the life you truly want. Praised by Jay Shetty, this vibrant guide offers **inspirational stories and actionable steps** to help you **discover your true passion**, align it with fulfilling work, and systematically build a life that feels authentic, meaningful, and genuinely richer.",
    coverUrl: "Whats_your_dream.jpg"
},
    {
    title: "The Power of Women: A Doctor's Journey of Hope and Healing",
    author: "Dr. Denis Mukwege",
    price: 500,
    description: "From Nobel Peace Prize laureate Dr. Denis Mukwege, this deeply moving memoir and powerful manifesto is a testament to the resilience of women. Mukwege recounts his life's work as a surgeon dedicated to helping survivors of sexual violence, revealing the profound cruelty of war but also the **unyielding strength, courage, and healing power of women**. This book is a beacon of hope and a stirring call to action for equality, justice, and recognizing the essential dignity of every woman.",
    coverUrl: "The_power_of_women.jpg"
},
{
    title: "Your Difference Is Your Strength: A Guide to Accepting Yourself—For Anyone Who Has Ever Felt Out of Place",
    author: "Kris Ferraro",
    price: 500,
    description: "For anyone who has ever felt like they didn't quite belong, this book offers a profound message of self-acceptance and empowerment. Ferraro, author of *Manifesting*, teaches you how to stop hiding the parts of yourself that are unique and instead recognize that your perceived 'flaws' are actually your **greatest assets**. This is a warm, insightful guide to embracing your authentic self and realizing that your **difference is the source of your truest power**.",
    coverUrl: "Your_difference_is_your_strength.jpg"
},
    {
    title: "55 Questions to Ask Yourself (Across 8 dimensions for a new you!)",
    author: "Manoj Chenthamarakshan",
    price: 500,
    description: "Transformation begins with the right questions. This book provides a deeply reflective set of **55 powerful questions** designed to probe eight critical dimensions of your life: from mental clarity and personal values to professional success. Use this guided inquiry to gain profound **self-awareness**, identify your core beliefs, and create a targeted, actionable plan for **becoming a 'new you'** with purpose and direction.",
    coverUrl: "55_questions_to_ask_yourself.jpg"
},


{
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David with Greg Dinkin",
    price: 500,
    description: "Master the mindset of a chess player in business and life. Praised by Ray Dalio, this book by entrepreneur Patrick Bet-David teaches you how to **think strategically by looking five steps ahead**. Learn how to identify your current position, predict competitors' actions, and build a cohesive, long-term strategy for dominating your field, giving you the **strategic edge** to build an empire.",
    coverUrl: "Your_next_five_moves.jpg"
},
    {
    title: "Learn to Earn: A Beginner's Guide to the Basics of Investing and Business",
    author: "Peter Lynch and John Rothchild",
    price: 500,
    description: "Start your financial journey with a **classic guide** from legendary investor **Peter Lynch**. This book is the perfect primer for young or new investors, explaining the fundamentals of the stock market and business through clear, accessible language. It teaches you to use the knowledge you already have about companies and products to make smart investment decisions, helping you **learn to earn** your financial independence.",
    coverUrl: "Learn_to_earn.jpg"
},
    {
    title: "The Art of Thinking Clearly",
    author: "Rolf Dobelli",
    price: 500,
    description: "Nicholas Nassim Taleb calls this book a masterpiece of 'imagination and realism.' Rolf Dobelli identifies **52 common cognitive biases**—simple thinking errors—that sabotage our decisions and happiness. This million-copy bestseller is an essential guide for anyone who wants to **improve judgment and decision-making**. By learning to avoid these pitfalls, you will think more rationally and achieve greater clarity in all aspects of life.",
    coverUrl: "The_art_of_thinking_clearly.jpg"
},
    {
    title: "How to Stop Worrying and Start Living",
    author: "Dale Carnegie",
    price: 500,
    description: "A **timeless classic** that has helped millions conquer anxiety and live a more joyful life. Dale Carnegie provides **time-tested methods** for breaking the worry habit and transforming it into positive action. Learn the magic formula for solving worry problems, how to relax and avoid fatigue, and simple techniques for banishing the 'worry habit' forever. This book is the definitive guide to **finding peace of mind**.",
    coverUrl: "Stop_worrying_start_living.jpg"
},
    {
    title: "Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings",
    author: "Thibaut Meurisse",
    price: 500,
    description: "From the bestselling author of *Master Your Motivation*, this practical guide provides the tools to **take full control of your emotional life**. Learn how to identify the root causes of negative feelings, shift your mindset, and develop effective strategies for managing stress, anger, and fear. It is a clear, actionable roadmap to achieving emotional resilience and **lasting inner peace**.",
    coverUrl: "Master_your_emotions.jpg"
},

{
    title: "The Art of Conscious Conversations: Transforming How We Talk, Listen, and Interact",
    author: "Chuck Wisner",
    price: 500,
    description: "Transform your relationships—both personal and professional—by mastering the way you communicate. Chuck Wisner introduces the concept of **Conscious Conversations**, offering simple, powerful frameworks to move beyond surface-level chatter to **deep, authentic connection**. Learn to listen more effectively, ask more insightful questions, and interact in ways that build trust and solve problems, fundamentally improving your human interactions.",
    coverUrl: "The_art_of_conscious_conversations.jpg"
},
    
{
    title: "The Power of Flexing: How to Use Small Daily Experiments to Create Big Life-Changing Growth",
    author: "Susan J. Ashford",
    price: 500,
    description: "Named the best book on personal effectiveness by Daniel H. Pink, this guide shows you a simple yet radical path to professional and personal growth. Susan J. Ashford reveals the secret to success lies in **'flexing'**: using small, strategic daily experiments—like stepping outside your comfort zone—to build new skills and create big changes. It’s an empowering approach to learning that prioritizes **actionable growth over static planning**.",
    coverUrl: "The_power_of_flexing.jpg"
},
    
{
    title: "Read People Like a Book: How to Analyze, Understand, and Predict People’s Emotions, Thoughts, Intentions, and Behaviors",
    author: "Patrick King",
    price: 500,
    description: "Gain an **unfair advantage** in every social interaction by mastering the art of human observation. This comprehensive guide teaches you the psychological tricks and non-verbal cues needed to quickly and accurately read body language, facial micro-expressions, and speech patterns. Learn how to **analyze and predict** people's true intentions, improve your influence, and navigate complex social situations with total confidence.",
    coverUrl: "Read_people_like_a_book.jpg"
},
     {
        "title": "Hidden Potential: The Science of Achieving Greater Things",
        "author": "Adam Grant",
        "price": 500,
        "description": "From the #1 New York Times bestselling author of *Think Again*, Adam Grant reveals a new framework for unlocking your greatness. This book shows that **hidden potential** is not about innate talent, but about the systems and strengths that allow you to constantly improve. Learn to build the character skills and supportive structures needed to achieve far more than you thought possible. As James Clear says, it 'reveals what it takes to become a better version of yourself.'",
        "coverUrl": "Hidden_potential.jpg"
    },
    {
        "title": "The Power of Writing It Down: A Simple Habit to Unlock Your Brain and Reimagine Your Life",
        "author": "Allison Fallon",
        "price": 500,
        "description": "Unlock your mind's true potential through the simple, transformative act of writing. Fallon shows you how to use journaling not just for reflection, but as a powerful tool to **unlock your brain**, process difficult emotions, and gain clarity on your life's path. Discover a practical, easy habit that helps you overcome creative blocks, reduce anxiety, and actively **reimagine and build the life you want**.",
        "coverUrl": "The_power_of_writing_it_down.jpg"
    },
    {
        "title": "Self Under Control: Definitive and practical guide to mastering the art of self-discipline using scientific principles and timeless wisdom",
        "author": "Abhilash CS",
        "price": 500,
        "description": "Be the person you look at in awe by mastering the art of self-discipline. This definitive guide combines **scientific principles with timeless wisdom** to provide a clear path to gaining control over your habits, focus, and actions. Learn how to stop being a puppet to your impulses and use genuine **self-control** to consistently make choices that lead to long-term success and fulfillment.",
        "coverUrl": "Self_under_control.jpg"
    },
    {
        "title": "Leading with Dignity: How to Create a Culture That Brings Out the Best in People",
        "author": "Donna Hicks, Ph.D.",
        "price": 500,
        "description": "Based on years of international conflict resolution, Dr. Donna Hicks reveals that **dignity** is the key to creating extraordinary teams and thriving relationships. This practical guide shows leaders and individuals how to foster a culture of respect, trust, and openness by recognizing and honoring the 10 elements of dignity. Learn to **bring out the best in people**, minimize conflict, and maximize performance in any setting.",
        "coverUrl": "Leading_with_dignity.jpg"
    },
    {
        "title": "Stillness Is the Key: An Ancient Strategy for Modern Life",
        "author": "Ryan Holiday",
        "price": 500,
        "description": "From the #1 New York Times bestselling author, Ryan Holiday draws on Stoicism, Buddhism, and Christianity to present **stillness** as the essential strategy for modern life. Learn how to cultivate mental calm, emotional control, and spiritual depth in a hyper-distracted world. This book is a powerful argument for slowing down, tuning out the noise, and accessing the **focused inner peace** required to achieve mastery and purpose.",
        "coverUrl": "Stillness_is_the_key.jpg"
    },
    {
        "title": "Introvert Power: Why Your Inner Life Is Your Hidden Strength",
        "author": "Laurie Helgoe, Ph.D.",
        "price": 500,
        "description": "Challenge the societal bias towards extroversion and discover the profound gifts of the quiet temperament. Dr. Helgoe reframes introversion not as a flaw, but as a **rich source of power, creativity, and connection**. Learn how to harness your inner life for success, recharge effectively, and communicate your needs and strengths with confidence, proving that your **inner strength** is your greatest asset.",
        "coverUrl": "Introvert_power.jpg"
    },
    {
        "title": "The Art of Self-Therapy: How to Grow, Gain Self-Awareness, & Understand Your Emotions",
        "author": "Nick Trenton",
        "price": 500,
        "description": "Empower yourself to become your own best therapist. Nick Trenton provides practical, easy-to-use techniques rooted in psychology for deepening your **self-awareness** and achieving profound personal growth. Learn to understand your emotions, challenge negative beliefs, and effectively heal from past experiences, giving you the tools to guide your own journey toward **emotional clarity and fulfillment**.",
        "coverUrl": "The_art_of_self_therapy.jpg"
    },
    {
        "title": "Don't Believe Everything You Think: Why your thinking is the beginning and end of suffering",
        "author": "Joseph Nguyen",
        "price": 500,
        "description": "This #1 international bestseller offers a simple yet life-changing truth: **your thoughts are not reality, and they are the source of all suffering**. Joseph Nguyen provides a clear, insightful guide to recognizing the mind's endless chatter as noise. By shifting your relationship with your own thinking, you can find immediate freedom, peace, and an end to self-inflicted anxiety.",
        "coverUrl": "Dont_believe_everything_you_think.jpg"
    },
    {
        "title": "“It always seems impossible until it’s done.”: Motivation for Dreamers & Doers",
        "author": "Kathryn & Ross Petras",
        "price": 500,
        "description": "A pocket-sized book packed with powerful **motivation for dreamers and doers** alike. This collection of quotes and insights, inspired by Nelson Mandela's famous words, is designed to fuel your ambition, overcome procrastination, and remind you that every great achievement once seemed impossible. Keep it close for a daily dose of courage to pursue your biggest goals.",
        "coverUrl":"It_alwsys_seems_impossible_until_its_done.jpg"
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
