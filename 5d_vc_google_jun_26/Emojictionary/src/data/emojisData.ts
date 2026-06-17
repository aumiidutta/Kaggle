export interface EmojiItem {
  emoji: string;
  name: string;
  meaning: string;
  category: 'faces' | 'gestures' | 'people' | 'objects' | 'foods' | 'flags' | 'animals' | 'nature' | 'signs' | 'activities' | 'travel';
  tags: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'ALL' },
  { id: 'faces', name: 'FACES' },
  { id: 'gestures', name: 'GESTURES' },
  { id: 'people', name: 'PEOPLE' },
  { id: 'objects', name: 'OBJECTS' },
  { id: 'foods', name: 'FOODS' },
  { id: 'flags', name: 'FLAGS' },
  { id: 'animals', name: 'ANIMALS' },
  { id: 'nature', name: 'NATURE' },
  { id: 'signs', name: 'SIGNS' },
  { id: 'activities', name: 'ACTIVITIES' },
  { id: 'travel', name: 'TRAVEL' }
] as const;

export const BASE_EMOJI_LIST: EmojiItem[] = [
  // === FACES ===
  {
    emoji: "😀",
    name: "Grinning Face",
    meaning: "A classically happy face expressing joy, cheerfulness, and lighthearted friendlines.",
    category: "faces",
    tags: ["happy", "smile", "joy", "cheerful"]
  },
  {
    emoji: "😃",
    name: "Grinning Face with Big Eyes",
    meaning: "Expresses delight, excitement, and a burst of genuine, open-mouthed happiness.",
    category: "faces",
    tags: ["excited", "happy", "smile", "laugh"]
  },
  {
    emoji: "😄",
    name: "Grinning Face with Smiling Eyes",
    meaning: "Shows warmth, genuine amusement, and heart-felt happiness with crinkled eyes.",
    category: "faces",
    tags: ["warm", "happy", "smile", "laugh"]
  },
  {
    emoji: "😁",
    name: "Beaming Face with Smiling Eyes",
    meaning: "A proud, slightly cheekier grin showing full teeth, conveying pride, joy, or playful mischief.",
    category: "faces",
    tags: ["teeth", "grin", "proud", "cheeky"]
  },
  {
    emoji: "😆",
    name: "Grinning Squinting Face",
    meaning: "Conveys hearty laughter, hysterical giggle, or excitement about something funny.",
    category: "faces",
    tags: ["laugh", "funny", "squint", "haha"]
  },
  {
    emoji: "😅",
    name: "Grinning Face with Sweat",
    meaning: "Expresses relief, nervousness, or embarrassment, often used for close calls.",
    category: "faces",
    tags: ["sweat", "nervous", "relief", "awkward"]
  },
  {
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning: "Laughing so hard that laughter tears are streams; the ultimate indicator of hysterical amusement.",
    category: "faces",
    tags: ["laugh", "tears", "funny", "lol"]
  },
  {
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    meaning: "An escalated laugh conveying overwhelming amusement, literally rolling with laughter.",
    category: "faces",
    tags: ["rofl", "laugh", "funny", "lol"]
  },
  {
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning: "A warm, blushing expression of happiness, contentment, and peaceful gratitude.",
    category: "faces",
    tags: ["blush", "kind", "happy", "blessed"]
  },
  {
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning: "Represents innocence, being good, angelic behavior, or feeling blessed.",
    category: "faces",
    tags: ["angel", "halo", "blessed", "good"]
  },
  {
    emoji: "🙂",
    name: "Slightly Smiling Face",
    meaning: "A passive, polite smile that can occasionally feel patronizing or mask mixed emotions.",
    category: "faces",
    tags: ["smile", "polite", "neutral", "passive"]
  },
  {
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning: "Indicates silliness, sarcasm, irony, or a playful feeling of 'everything is a mess'.",
    category: "faces",
    tags: ["sarcasm", "silly", "irony", "flip"]
  },
  {
    emoji: "😉",
    name: "Winking Face",
    meaning: "Indicates understanding, inside jokes, flirtation, or playful secret agreements.",
    category: "faces",
    tags: ["wink", "flirt", "joke", "understanding"]
  },
  {
    emoji: "😌",
    name: "Relieved Face",
    meaning: "Conveys feelings of peace, tranquility, and relief after a stressful moment.",
    category: "faces",
    tags: ["calm", "relieved", "relaxed", "peaceful"]
  },
  {
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning: "Expresses passionate love, deep adoration, or obsession with someone or something.",
    category: "faces",
    tags: ["love", "heart", "adore", "crush"]
  },
  {
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning: "Conveys warm, affectionate feelings and a sense of being loved or cared for.",
    category: "faces",
    tags: ["affection", "romantic", "loved", "hearts"]
  },
  {
    emoji: "😘",
    name: "Face Blowing a Kiss",
    meaning: "Represents dynamic affection, saying goodbye with love, or a romantic kiss.",
    category: "faces",
    tags: ["kiss", "love", "bye", "romantic"]
  },
  {
    emoji: "😗",
    name: "Kissing Face",
    meaning: "A simpler kissing face, often used to display genuine platonic affection or whistling.",
    category: "faces",
    tags: ["kiss", "whistle", "plain"]
  },
  {
    emoji: "😋",
    name: "Face Savoring Food",
    meaning: "Licking lips in anticipation or description of a delicious, savory meal.",
    category: "faces",
    tags: ["hungry", "yum", "delicious", "tongue"]
  },
  {
    emoji: "😛",
    name: "Face with Tongue",
    meaning: "A silly, cheekier face with open eyes, showing lighthearted teasing or goofiness.",
    category: "faces",
    tags: ["silly", "tongue", "tease", "goofy"]
  },
  {
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning: "Combines a playful wink with a protruding tongue, indicating high energy, fun, or joking.",
    category: "faces",
    tags: ["wink", "tongue", "crazy", "jest"]
  },
  {
    emoji: "🤪",
    name: "Zany Face",
    meaning: "Representing wild silliness, goofy antics, or feeling delightfully eccentric.",
    category: "faces",
    tags: ["crazy", "goofy", "silly", "zany"]
  },
  {
    emoji: "🤨",
    name: "Face with Raised Eyebrow",
    meaning: "Conveys skepticism, suspicion, disapproval, or mild intellectual inquiry.",
    category: "faces",
    tags: ["skeptic", "suspicious", "what", "questioning"]
  },
  {
    emoji: "🧐",
    name: "Face with Monocle",
    meaning: "Suggests a close, critical inspection, intellectual inquiry, or snooty examination.",
    category: "faces",
    tags: ["smart", "inspector", "fancy", "monocle"]
  },
  {
    emoji: "🤓",
    name: "Nerd Face",
    meaning: "Expresses intellect, technical expertise, or a playful embrace of dorky hobbies.",
    category: "faces",
    tags: ["nerd", "geek", "smart", "glasses"]
  },
  {
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning: "Represents coolness, confident ease, summer vibes, or a successful achievement.",
    category: "faces",
    tags: ["cool", "sun", "glasses", "swagger"]
  },
  {
    emoji: "🥸",
    name: "Disguised Face",
    meaning: "Represents disguise, espionage, acting incognito, or silly hidden identities.",
    category: "faces",
    tags: ["spy", "disguise", "incognito", "mustache"]
  },
  {
    emoji: "🤩",
    name: "Star-Struck",
    meaning: "Representing overwhelming excitement, amazement, or star-struck awe at something brilliant.",
    category: "faces",
    tags: ["star", "excited", "wow", "famous"]
  },
  {
    emoji: "🥳",
    name: "Partying Face",
    meaning: "Used to celebrate accomplishments, birthdays, holidays, or any cheerful event.",
    category: "faces",
    tags: ["party", "celebrate", "birthday", "fun"]
  },
  {
    emoji: "😏",
    name: "Smirking Face",
    meaning: "A sly, knowing, or flirtatious grin often used to convey sarcasm, self-satisfaction, or irony.",
    category: "faces",
    tags: ["smirk", "sly", "flirt", "knowing"]
  },
  {
    emoji: "😒",
    name: "Unamused Face",
    meaning: "Conveys feelings of irritation, boredom, skepticism, and lack of interest.",
    category: "faces",
    tags: ["bored", "irritated", "unamused", "whatever"]
  },
  {
    emoji: "😞",
    name: "Disappointed Face",
    meaning: "Expresses regret, sorrow, or disappointment over an unfortunate situation.",
    category: "faces",
    tags: ["sad", "sorry", "disappointed", "regret"]
  },
  {
    emoji: "😔",
    name: "Pensive Face",
    meaning: "A quiet, reflective expression showing deep inner sadness, sorrow, or regret.",
    category: "faces",
    tags: ["sad", "thoughtful", "sorry", "pensive"]
  },
  {
    emoji: "😟",
    name: "Worried Face",
    meaning: "Expresses mild anxiety, fretfulness, or concern about an upcoming event or result.",
    category: "faces",
    tags: ["anxious", "worried", "concerned", "fret"]
  },
  {
    emoji: "😕",
    name: "Confused Face",
    meaning: "Conveys a feeling of puzzlement, disorientation, or slight hesitation.",
    category: "faces",
    tags: ["confused", "puzzled", "what", "uncertain"]
  },
  {
    emoji: "🙁",
    name: "Slightly Frowning Face",
    meaning: "A mild form of unhappiness, slight disapproval, or light disappointment.",
    category: "faces",
    tags: ["sad", "frown", "mild"]
  },
  {
    emoji: "☹️",
    name: "Frowning Face",
    meaning: "A deeper, more heartfelt expression of sadness, displeasure, or grief.",
    category: "faces",
    tags: ["sad", "frown", "displeased"]
  },
  {
    emoji: "😣",
    name: "Persevering Face",
    meaning: "Shows effort, mild pain, or high concentration in overcoming a difficult situation.",
    category: "faces",
    tags: ["effort", "pain", "struggle", "hold-on"]
  },
  {
    emoji: "😖",
    name: "Confounded Face",
    meaning: "Conveys intense frustration, anger, or feeling completely overwhelmed by obstacles.",
    category: "faces",
    tags: ["ouch", "frustrated", "confounded", "overwhelmed"]
  },
  {
    emoji: "😫",
    name: "Tired Face",
    meaning: "Expresses exhausting mental or physical fatigue and being thoroughly fed up.",
    category: "faces",
    tags: ["tired", "exhausted", "done", "faint"]
  },
  {
    emoji: "😩",
    name: "Weary Face",
    meaning: "Conveys deep despair, sorrow, or being completely spent and unable to go on.",
    category: "faces",
    tags: ["weary", "sad", "done", "exhausted"]
  },
  {
    emoji: "🥺",
    name: "Pleading Face",
    meaning: "Big, glossy 'puppy dog' eyes representing pleading, begging, or being deeply touched.",
    category: "faces",
    tags: ["please", "beg", "sad", "cute"]
  },
  {
    emoji: "😢",
    name: "Crying Face",
    meaning: "A single falling tear showing modest sadness, grief, or personal hurt.",
    category: "faces",
    tags: ["cry", "sad", "tear", "hurt"]
  },
  {
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning: "Uncontrollable grief, overwhelming sadness, or tears of uncontrollable laughter/joy.",
    category: "faces",
    tags: ["sob", "cry", "sad", "tear", "overwhelmed"]
  },
  {
    emoji: "😤",
    name: "Face with Steam From Nose",
    meaning: "Expresses triumph, proud determination, or deep, boiling-mad annoyance.",
    category: "faces",
    tags: ["angry", "steam", "proud", "triumph"]
  },
  {
    emoji: "😠",
    name: "Angry Face",
    meaning: "Conveys strong displeasure, grumpiness, frustration, or severe irritation.",
    category: "faces",
    tags: ["angry", "mad", "unhappy", "displeased"]
  },
  {
    emoji: "😡",
    name: "Enraged Face",
    meaning: "A bright red face expressing boiling, deep-seated rage, fury, or hostility.",
    category: "faces",
    tags: ["rage", "angry", "fury", "red"]
  },
  {
    emoji: "🤬",
    name: "Face with Symbols on Mouth",
    meaning: "Represents using swear words, intense cursing, or a sudden burst of pure rage.",
    category: "faces",
    tags: ["swear", "curse", "angry", "rage"]
  },
  {
    emoji: "🤯",
    name: "Exploding Head",
    meaning: "Indicates shock, disbelief, mind-blowing revelation, or feeling totally overwhelmed.",
    category: "faces",
    tags: ["mind-blown", "shock", "wow", "amazing"]
  },
  {
    emoji: "😳",
    name: "Flushed Face",
    meaning: "Depicts wide eyes and red cheeks representing intense embarrassment, shock, or surprise.",
    category: "faces",
    tags: ["blush", "embarrassed", "shock", "shame"]
  },
  {
    emoji: "🥵",
    name: "Hot Face",
    meaning: "Conveys overheating due to summer temperatures, spicy food, or an attractive person.",
    category: "faces",
    tags: ["heat", "hot", "spicy", "sweat"]
  },
  {
    emoji: "🥶",
    name: "Cold Face",
    meaning: "Represents freezing winter weather, ice, hypothermia, or cold social behavior.",
    category: "faces",
    tags: ["ice", "blue", "cold", "winter"]
  },
  {
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning: "An expression of horror, shock, terror, and extreme surprise resembling 'The Scream' artwork.",
    category: "faces",
    tags: ["scared", "fear", "screen", "shock"]
  },
  {
    emoji: "😨",
    name: "Fearful Face",
    meaning: "Expresses fear, deep worry, or surprise at an unfavorable outcome.",
    category: "faces",
    tags: ["afraid", "scared", "anxious"]
  },
  {
    emoji: "😰",
    name: "Anxious Face with Sweat",
    meaning: "Depicts fear and stress under pressure, with beads of nervous sweat flowing.",
    category: "faces",
    tags: ["sweat", "anxious", "stress", "scared"]
  },
  {
    emoji: "😥",
    name: "Sad but Relieved Face",
    meaning: "Shows mild sadness mixed with relief about an narrow escape or resolved conflict.",
    category: "faces",
    tags: ["relieved", "tear", "worry", "sweat"]
  },
  {
    emoji: "😓",
    name: "Downcast Face with Sweat",
    meaning: "Represents being visually deflated, heavy of heart, and sweating from exertion or sorrow.",
    category: "faces",
    tags: ["sad", "stressed", "sweat", "tired"]
  },
  {
    emoji: "🤗",
    name: "Hugging Face",
    meaning: "Expresses affection, support, congratulations, or open-armed warmth.",
    category: "faces",
    tags: ["hug", "social", "love", "warm"]
  },
  {
    emoji: "🤔",
    name: "Thinking Face",
    meaning: "Depicts deep contemplation, questioning, skepticism, or playing detective.",
    category: "faces",
    tags: ["ponder", "think", "hmm", "question"]
  },
  {
    emoji: "🫣",
    name: "Face with Peeking Eye",
    meaning: "Scared or ashamed to look, but unable to resist peeking at a dramatic event.",
    category: "faces",
    tags: ["peek", "look", "scared", "gossip"]
  },
  {
    emoji: "🤭",
    name: "Face with Hand Over Mouth",
    meaning: "Expresses cheeky laughter, dynamic giggling, or sudden realization of a slip-up.",
    category: "faces",
    tags: ["giggle", "laugh", "secret", "gasp"]
  },
  {
    emoji: "🫢",
    name: "Face with Open Eyes and Hand Over Mouth",
    meaning: "Depicts gasping shock, extreme surprise, or sudden disbelief.",
    category: "faces",
    tags: ["shock", "wow", "gasp", "surprise"]
  },
  {
    emoji: "🫡",
    name: "Saluting Face",
    meaning: "Expresses respect, listening to orders, patriotism, or acknowledging a solid point.",
    category: "faces",
    tags: ["salute", "yes", "sir", "respect"]
  },
  {
    emoji: "🤫",
    name: "Shushing Face",
    meaning: "An index finger placed over lips signaling to keep quiet or share a secret.",
    category: "faces",
    tags: ["quiet", "shh", "secret", "silent"]
  },
  {
    emoji: "🫠",
    name: "Melting Face",
    meaning: "Expresses extreme heat, awkward embarrassment, or a literal feeling of dread and sinking.",
    category: "faces",
    tags: ["melt", "heat", "awkward", "sinking"]
  },
  {
    emoji: "🤥",
    name: "Lying Face",
    meaning: "A growing nose inspired by Pinocchio, representing lying, deceit, or high suspicion.",
    category: "faces",
    tags: ["lie", "pinocchio", "fake", "suspicious"]
  },
  {
    emoji: "😶",
    name: "Face Without Mouth",
    meaning: "Represents wordlessness, silence, keeping secrets, or having 'nothing left to say'.",
    category: "faces",
    tags: ["silent", "mute", "speechless", "empty"]
  },
  {
    emoji: "😐",
    name: "Neutral Face",
    meaning: "A plain, expressionless face showing mild disinterest, deadpan reaction, or indifference.",
    category: "faces",
    tags: ["poker", "neutral", "meh", "bored"]
  },
  {
    emoji: "😑",
    name: "Expressionless Face",
    meaning: "Slightly flat eyes showing utter unimpressment, boredom, or extreme patience with nonsense.",
    category: "faces",
    tags: ["bored", "meh", "done", "neutral"]
  },
  {
    emoji: "😬",
    name: "Grimacing Face",
    meaning: "Expresses awkwardness, tension, a close mistake, or cringing in embarrassment.",
    category: "faces",
    tags: ["awkward", "cringe", "grimace", "teeth"]
  },
  {
    emoji: "🫨",
    name: "Shaking Face",
    meaning: "Represents physical tremors, extreme excitement, earthquake, or dizziness.",
    category: "faces",
    tags: ["shake", "dizzy", "shock", "tremble"]
  },
  {
    emoji: "🥱",
    name: "Yawning Face",
    meaning: "Indicates physical fatigue, sleep deprivation, or that a speaker is extremely boring.",
    category: "faces",
    tags: ["tired", "bored", "sleep", "yawn"]
  },
  {
    emoji: "😴",
    name: "Sleeping Face",
    meaning: "Represents peaceful sleep, snoring, or that a conversation is putting someone to sleep.",
    category: "faces",
    tags: ["sleep", "snore", "zzz", "dream"]
  },
  {
    emoji: "🤤",
    name: "Drooling Face",
    meaning: "A face drooling out of deep sleep or longing for a delicious meal or attractive crush.",
    category: "faces",
    tags: ["hungry", "drool", "desire", "sleep"]
  },
  {
    emoji: "😪",
    name: "Sleepy Face",
    meaning: "An anime-inspired sleep indicator with a snot bubble, denoting fatigue or resting.",
    category: "faces",
    tags: ["sleepy", "anime", "tired"]
  },
  {
    emoji: "😵",
    name: "Dizzy Face",
    meaning: "Depicts spiral eyes signifying complete disorientation, extreme shock, or physical sickness.",
    category: "faces",
    tags: ["dizzy", "sick", "drunk", "shock"]
  },
  {
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning: "Signals absolute secrecy, promising to stay quiet, or being legally sealed from talking.",
    category: "faces",
    tags: ["secret", "quiet", "zip", "mouth"]
  },
  {
    emoji: "🥴",
    name: "Woozy Face",
    meaning: "Represents intoxication, exhaustion, fatigue, confusion, or overwhelming infatuation.",
    category: "faces",
    tags: ["drunk", "woozy", "tired", "love"]
  },
  {
    emoji: "🤢",
    name: "Nauseated Face",
    meaning: "Expresses physical sickness, disgust, or feeling repelled by an unappealing topic.",
    category: "faces",
    tags: ["sick", "disgust", "gross", "vomit"]
  },
  {
    emoji: "🤮",
    name: "Face Vomiting",
    meaning: "An explicit depiction of vomiting, representing severe illness or massive disgust.",
    category: "faces",
    tags: ["vomit", "sick", "disgusting"]
  },
  {
    emoji: "🤧",
    name: "Sneezing Face",
    meaning: "Represents catching a cold, allergies, or blowing your nose into a tissue.",
    category: "faces",
    tags: ["sick", "cold", "flu", "sneeze"]
  },
  {
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning: "Represents illness, clinical environments, or protecting oneself/others from disease.",
    category: "faces",
    tags: ["mask", "sick", "doctor", "health"]
  },
  {
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning: "An explicit indicator of having a physical fever or feeling under the weather.",
    category: "faces",
    tags: ["sick", "fever", "flu", "temp"]
  },
  {
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning: "Represents physical head trauma, concussion, medical recovery, or personal hurt.",
    category: "faces",
    tags: ["hurt", "injured", "accident", "hospital"]
  },
  {
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning: "Expresses greed, financial success, making a purchase, or striking it rich.",
    category: "faces",
    tags: ["cash", "rich", "money", "win"]
  },
  {
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning: "Represents country music, Western culture, rodeo, adventure, or confident whimsy.",
    category: "faces",
    tags: ["cowboy", "yeehaw", "hat", "west"]
  },
  {
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning: "Represents mischievous intent, playful deviance, bad plans, or mild villainy.",
    category: "faces",
    tags: ["evil", "devil", "horns", "cheeky"]
  },
  {
    emoji: "👿",
    name: "Angry Face with Horns",
    meaning: "Depicts a purple demon representing malicious intent, deep anger, or sinister actions.",
    category: "faces",
    tags: ["devil", "evil", "rage", "mad"]
  },
  {
    emoji: "👹",
    name: "Ogre",
    meaning: "A grotesque folklore monster representing scary vibes, Halloween, or Japanese mythology.",
    category: "faces",
    tags: ["monster", "scary", "red", "halloween"]
  },
  {
    emoji: "👺",
    name: "Goblin",
    meaning: "A red tengu mask representing arrogance, mischievous mythical beings, or angry ghosts.",
    category: "faces",
    tags: ["goblin", "red", "nose", "monster"]
  },
  {
    emoji: "🤡",
    name: "Clown Face",
    meaning: "Expresses silliness, circus, or mockery—suggesting someone is acting foolishly.",
    category: "faces",
    tags: ["clown", "silly", "mock", "fool"]
  },
  {
    emoji: "💩",
    name: "Pile of Poop",
    meaning: "A brown, smiling pile of poop representing humor, silliness, or that something is bad.",
    category: "faces",
    tags: ["poop", "silly", "joke", "brown"]
  },
  {
    emoji: "👻",
    name: "Ghost",
    meaning: "A goofy, cartoon ghost representing Halloween, spooky topics, or playing dead/ignoring someone.",
    category: "faces",
    tags: ["spooky", "scary", "ghost", "halloween"]
  },
  {
    emoji: "💀",
    name: "Skull",
    meaning: "Represents actual death, skeletal remains, or slang meaning 'laughing hysterically'.",
    category: "faces",
    tags: ["death", "dead", "bone", "laughing"]
  },
  {
    emoji: "👽",
    name: "Alien",
    meaning: "Expresses sci-fi topics, extra-terrestrials, quirky behavior, or feeling outer-worldly.",
    category: "faces",
    tags: ["space", "alien", "ufo", "weird"]
  },
  {
    emoji: "👾",
    name: "Alien Monster",
    meaning: "An 8-bit retro gaming space invader representing video games, computers, or vintage tech.",
    category: "faces",
    tags: ["game", "pixel", "retro", "arcade"]
  },
  {
    emoji: "🤖",
    name: "Robot",
    meaning: "Represents artificial intelligence, automation, coding, or unemotional communication.",
    category: "faces",
    tags: ["bot", "robot", "tech", "ai"]
  },
  {
    emoji: "🎃",
    name: "Jack-O-Lantern",
    meaning: "Carved pumpkin denoting Halloween, autumn, candy, or scary celebrations.",
    category: "faces",
    tags: ["pumpkin", "halloween", "harvest", "scary"]
  },

  // === GESTURES ===
  {
    emoji: "👋",
    name: "Waving Hand",
    meaning: "A waving hand representing friendly greetings, saying hello, or bidding farewell.",
    category: "gestures",
    tags: ["hello", "bye", "wave", "greet"]
  },
  {
    emoji: "🤚",
    name: "Raised Back of Hand",
    meaning: "A raised hand showing its back, often used to ask a question or signal stopping.",
    category: "gestures",
    tags: ["raised", "hand", "back", "stop"]
  },
  {
    emoji: "🖐️",
    name: "Hand with Fingers Splayed",
    meaning: "An open hand with fingers separated, indicating high-five, stopping, or the number five.",
    category: "gestures",
    tags: ["open", "five", "splayed", "highfive"]
  },
  {
    emoji: "✋",
    name: "Raised Hand",
    meaning: "A vertical raised hand indicating a halt signal, raising your hand to speak, or high-five.",
    category: "gestures",
    tags: ["stop", "raised", "five", "halt"]
  },
  {
    emoji: "🖖",
    name: "Vulcan Salute",
    meaning: "A split-finger gesture from Star Trek representing the greeting 'Live long and prosper'.",
    category: "gestures",
    tags: ["nerd", "salute", "trek", "spock"]
  },
  {
    emoji: "👌",
    name: "OK Hand",
    meaning: "Signifies approval, agreement, correctness, or that something is absolutely spot-on.",
    category: "gestures",
    tags: ["ok", "good", "perfect", "agree"]
  },
  {
    emoji: "🤌",
    name: "Pinched Fingers",
    meaning: "An Italian gesture representing questioning, confusion, or demanding clarification ('what do you want?').",
    category: "gestures",
    tags: ["italian", "what", "size", "pinched"]
  },
  {
    emoji: "🤏",
    name: "Pinching Hand",
    meaning: "Indicates a small quantity, minor distance, or a slight amount of something.",
    category: "gestures",
    tags: ["small", "little", "tiny", "pinch"]
  },
  {
    emoji: "✌️",
    name: "Victory Hand",
    meaning: "A classic peace sign or victory gesture representing harmony, goodbye, or double items.",
    category: "gestures",
    tags: ["peace", "victory", "two", "bye"]
  },
  {
    emoji: "🤞",
    name: "Crossed Fingers",
    meaning: "Representing luck, hoping for positive results, or a secret promise.",
    category: "gestures",
    tags: ["luck", "hope", "crossed", "wish"]
  },
  {
    emoji: "🤟",
    name: "Love-You Gesture",
    meaning: "Combining thumb, index, and pinky to mean 'I Love You' in American Sign Language.",
    category: "gestures",
    tags: ["love", "asl", "hand", "heart"]
  },
  {
    emoji: "🤘",
    name: "Sign of the Horns",
    meaning: "A heavy metal rocking salute, representing rock music, energy, or cool vibes.",
    category: "gestures",
    tags: ["rock", "metal", "devil", "cool"]
  },
  {
    emoji: "🤙",
    name: "Call Me Hand",
    meaning: "A phone gesture representing 'call me', the Hawaii 'Shaka' surfer greeting, or chill vibes.",
    category: "gestures",
    tags: ["call", "phone", "shaka", "hangloose"]
  },
  {
    emoji: "👈",
    name: "Backhand Index Pointing Left",
    meaning: "An index finger pointing horizontally to the left, directing focus to preceding text or items.",
    category: "gestures",
    tags: ["left", "point", "direction", "look"]
  },
  {
    emoji: "👉",
    name: "Backhand Index Pointing Right",
    meaning: "Points to the right, highlighting link urls, buttons, or next actions in text.",
    category: "gestures",
    tags: ["right", "point", "direction", "look"]
  },
  {
    emoji: "👆",
    name: "Backhand Index Pointing Up",
    meaning: "Points directly upwards, focusing readers on the text or information written above.",
    category: "gestures",
    tags: ["up", "above", "point", "look"]
  },
  {
    emoji: "🖕",
    name: "Middle Finger",
    meaning: "An offensive hand gesture representing deep annoyance, vulgar rejection, or dismissal.",
    category: "gestures",
    tags: ["rude", "finger", "mad", "vulgar"]
  },
  {
    emoji: "👇",
    name: "Backhand Index Pointing Down",
    meaning: "Points downwards, inviting users to scroll down, click below, or inspect lower text.",
    category: "gestures",
    tags: ["down", "below", "scroll", "point"]
  },
  {
    emoji: "☝️",
    name: "Index Pointing Up",
    meaning: "A raised front finger representing a question, emphasizing a point, or the number one.",
    category: "gestures",
    tags: ["up", "one", "ask", "attention"]
  },
  {
    emoji: "👍",
    name: "Thumbs Up",
    meaning: "Extremely popular indicator of approval, likes, agreement, success, and digital affirmation.",
    category: "gestures",
    tags: ["like", "good", "yes", "agree"]
  },
  {
    emoji: "👎",
    name: "Thumbs Down",
    meaning: "Expresses disapproval, dislike, rejection, bad quality, or digital negation.",
    category: "gestures",
    tags: ["dislike", "no", "bad", "reject"]
  },
  {
    emoji: "✊",
    name: "Raised Fist",
    meaning: "A symbol of resistance, solidarity, empowerment, personal strength, or defiance.",
    category: "gestures",
    tags: ["power", "fist", "protest", "solidarity"]
  },
  {
    emoji: "👊",
    name: "Oncoming Fist",
    meaning: "A fist coming straight at you, representing punching, high intensity, or a cool fist-bump.",
    category: "gestures",
    tags: ["punch", "fist-bump", "bro", "hit"]
  },
  {
    emoji: "🤛",
    name: "Left-Facing Fist",
    meaning: "A fist facing left, used in tandem with the right-facing fist to depict a standard fist-bump.",
    category: "gestures",
    tags: ["bump", "left", "fist"]
  },
  {
    emoji: "🤜",
    name: "Right-Facing Fist",
    meaning: "A fist facing right, symbolizing a cooperative, friendly greeting or fist-bump.",
    category: "gestures",
    tags: ["bump", "right", "fist"]
  },
  {
    emoji: "👏",
    name: "Clapping Hands",
    meaning: "Expresses applause, congratulations, appreciation, or sarcastic clapping in text.",
    category: "gestures",
    tags: ["claps", "good", "cheer", "congrats"]
  },
  {
    emoji: "🙌",
    name: "Raising Hands",
    meaning: "Celebrating double achievements, high-fives, expressing relief, or giving praise.",
    category: "gestures",
    tags: ["yay", "celebrate", "praise", "hands"]
  },
  {
    emoji: "🫶",
    name: "Heart Hands",
    meaning: "Two hands forming a heart shape, expressing deep love, modern support, and gratitude.",
    category: "gestures",
    tags: ["love", "heart", "thanks", "affection"]
  },
  {
    emoji: "👐",
    name: "Open Hands",
    meaning: "Represents openness, inviting hugs, offering comfort, or sharing transparent thoughts.",
    category: "gestures",
    tags: ["open", "hug", "give", "together"]
  },
  {
    emoji: "🤲",
    name: "Palms Up Together",
    meaning: "Represents praying, reading a book, asking for donations, or looking for answers.",
    category: "gestures",
    tags: ["pray", "hold", "gather", "hands"]
  },
  {
    emoji: "🤝",
    name: "Handshake",
    meaning: "Represents agreements, business partnerships, introductions, or mutual respect.",
    category: "gestures",
    tags: ["agreement", "deal", "meet", "trust"]
  },
  {
    emoji: "🙏",
    name: "Folded Hands",
    meaning: "Represents prayer, deep gratitude, high respect, pleading, or a grateful 'thank you'.",
    category: "gestures",
    tags: ["please", "thankyou", "pray", "namaste"]
  },
  {
    emoji: "✍️",
    name: "Writing Hand",
    meaning: "Shows a hand holding a pen, representing documentation, homework, blogging, or signing contracts.",
    category: "gestures",
    tags: ["write", "pen", "sign", "author"]
  },
  {
    emoji: "💅",
    name: "Nail Polish",
    meaning: "Expresses beauty, cosmetic pampering, high fashion, self-care, or a sassy 'not my business' attitude.",
    category: "gestures",
    tags: ["beauty", "nail", "salon", "sassy"]
  },
  {
    emoji: "🤳",
    name: "Selfie",
    meaning: "A holding arm taking a photograph, representing smartphones, social media, and self-portraits.",
    category: "gestures",
    tags: ["photo", "selfie", "phone", "pose"]
  },

  // === PEOPLE ===
  {
    emoji: "👶",
    name: "Baby",
    meaning: "Represents infancy, newborns, family growth, or acting in a childish manner.",
    category: "people",
    tags: ["kid", "infant", "child", "family"]
  },
  {
    emoji: "👧",
    name: "Girl",
    meaning: "A young female child, symbolizing children, daughters, or youth.",
    category: "people",
    tags: ["kid", "child", "daughter", "youth"]
  },
  {
    emoji: "🧒",
    name: "Child",
    meaning: "A gender-neutral young child, ideal for all-inclusive descriptions of kids.",
    category: "people",
    tags: ["kid", "child", "youth"]
  },
  {
    emoji: "👦",
    name: "Boy",
    meaning: "A young male child, representing childhood, sons, or school-age boys.",
    category: "people",
    tags: ["kid", "boy", "son", "youth"]
  },
  {
    emoji: "👩",
    name: "Woman",
    meaning: "An adult female person, symbolizing women, mothers, or general sisterhood.",
    category: "people",
    tags: ["female", "mother", "lady", "adult"]
  },
  {
    emoji: "👨",
    name: "Man",
    meaning: "An adult male person, representing men, fathers, or general brotherhood.",
    category: "people",
    tags: ["male", "father", "guy", "adult"]
  },
  {
    emoji: "🧑",
    name: "Person",
    meaning: "A gender-neutral adult, advocating for general human representation in digital writing.",
    category: "people",
    tags: ["human", "adult", "inclusive"]
  },
  {
    emoji: "👵",
    name: "Old Woman",
    meaning: "An older female, evoking warm grandmothers, aging, or senior citizens.",
    category: "people",
    tags: ["grandma", "senior", "elder", "old"]
  },
  {
    emoji: "👴",
    name: "Old Man",
    meaning: "An older male, representing warm grandfathers, retirement, wisdom, or senior citizens.",
    category: "people",
    tags: ["grandpa", "elder", "senior", "wise"]
  },
  {
    emoji: "👮",
    name: "Police Officer",
    meaning: "A general officer in uniform, representing law enforcement, security, or emergency duties.",
    category: "people",
    tags: ["police", "cop", "security", "law"]
  },
  {
    emoji: "🕵️",
    name: "Detective",
    meaning: "A shadowy investigator in a trench coat, symbolizing investigations, mystery, or sleuthing.",
    category: "people",
    tags: ["spy", "detective", "mystery", "inspector"]
  },
  {
    emoji: "💂",
    name: "Guard",
    meaning: "A sentinel wearing a tall bearskin hat, representing sentry duty, London, or royal guards.",
    category: "people",
    tags: ["guard", "royal", "london", "sentry"]
  },
  {
    emoji: "👷",
    name: "Construction Worker",
    meaning: "Wearing a yellow hard hat, representing hardware renovation, engineering, and manual labor.",
    category: "people",
    tags: ["worker", "builder", "hard-hat", "labor"]
  },
  {
    emoji: "🧑‍⚕️",
    name: "Health Worker",
    meaning: "A clinical practitioner with a stethoscope, representing doctors, nurses, and medicine.",
    category: "people",
    tags: ["doctor", "nurse", "clinic", "medical"]
  },
  {
    emoji: "🧑‍🎓",
    name: "Student",
    meaning: "Wearing a graduation cap, representing university, colleges, exams, and scholarship.",
    category: "people",
    tags: ["student", "school", "graduate", "college"]
  },
  {
    emoji: "🧑‍🏫",
    name: "Teacher",
    meaning: "A classroom instructor standing at a chalkboard, denoting school, lectures, and lessons.",
    category: "people",
    tags: ["teacher", "professor", "class", "school"]
  },
  {
    emoji: "🧑‍⚖️",
    name: "Judge",
    meaning: "A courthouse official with a gavel, denoting law, court trials, scale of justice, and verdicts.",
    category: "people",
    tags: ["court", "judge", "lawyer", "gavel"]
  },
  {
    emoji: "🧑‍🍳",
    name: "Cook",
    meaning: "A professional chef wearing a white toque hat, representing baking, meals, and restaurants.",
    category: "people",
    tags: ["chef", "cook", "kitchen", "bake"]
  },
  {
    emoji: "🧑‍🔧",
    name: "Mechanic",
    meaning: "A technician holding a wrench, representing repair workshops, engineering, and car maintenance.",
    category: "people",
    tags: ["mechanic", "fix", "wrench", "garage"]
  },
  {
    emoji: "🧑‍🔬",
    name: "Scientist",
    meaning: "A scientist with a chemistry beaker, representing laboratory research, physics, and medical breakthroughs.",
    category: "people",
    tags: ["science", "lab", "research", "beaker"]
  },
  {
    emoji: "🧑‍💻",
    name: "Technologist",
    meaning: "A programmer coding behind a laptop screen, denoting software engineering, developers, and tech work.",
    category: "people",
    tags: ["coding", "dev", "laptop", "programmer"]
  },
  {
    emoji: "🧑‍🚀",
    name: "Astronaut",
    meaning: "Wearing an outer-space spacesuit, denoting space travel, cosmic voyages, and astronomy.",
    category: "people",
    tags: ["space", "astronaut", "nasa", "rocket"]
  },
  {
    emoji: "🧑‍🚒",
    name: "Firefighter",
    meaning: "A brave responder with an axe and helmet, denoting fire safety, emergency support, and rescues.",
    category: "people",
    tags: ["fire", "hero", "rescue", "fireman"]
  },
  {
    emoji: "🦸",
    name: "Superhero",
    meaning: "A dynamic caped crusader representing heroism, superpowers, justice, and personal strength.",
    category: "people",
    tags: ["hero", "cape", "marvel", "strong"]
  },
  {
    emoji: "🦹",
    name: "Supervillain",
    meaning: "A sinister bad guy representing crime, wicked schemes, evil masters, and opposition to heroes.",
    category: "people",
    tags: ["evil", "badguy", "enemy", "conspiracy"]
  },
  {
    emoji: "🧙",
    name: "Mage",
    meaning: "A fantasy wizard or witch with a magic wand, representing sorcery, spelling, and fairy tales.",
    category: "people",
    tags: ["wizard", "witch", "magic", "fantasy"]
  },
  {
    emoji: "🧚",
    name: "Fairy",
    meaning: "A mythical pixie with magical wings, denoting forest folklore, wishing stars, and folklore tales.",
    category: "people",
    tags: ["fairy", "pixie", "wings", "magic"]
  },
  {
    emoji: "🧛",
    name: "Vampire",
    meaning: "A spooky vampire with fangs, representing Draculan folklore, Halloween, and dark shadows.",
    category: "people",
    tags: ["scary", "vampire", "dracula", "halloween"]
  },
  {
    emoji: "🧜",
    name: "Merperson",
    meaning: "A mythical aquatic person with a fish tail, representing blue oceans, sirens, and fairy tales.",
    category: "people",
    tags: ["mermaid", "siren", "ocean", "sea"]
  },
  {
    emoji: "💃",
    name: "Woman Dancing",
    meaning: "A high-energy dancer in a red flamenco dress, representing party celebrations, salsa, and dynamic fun.",
    category: "people",
    tags: ["dance", "salsa", "party", "fun"]
  },
  {
    emoji: "🕺",
    name: "Man Dancing",
    meaning: "A groovy disco dancer showing fancy footwork, representing clubs, parties, and musical joy.",
    category: "people",
    tags: ["disco", "dance", "party", "groovy"]
  },
  {
    emoji: "💏",
    name: "Kiss",
    meaning: "A romantic couple with a small floating heart, representing couples, dating, and mutual affection.",
    category: "people",
    tags: ["love", "couple", "kiss", "dating"]
  },
  {
    emoji: "👨‍👩‍👦",
    name: "Family (Father, Mother, Son)",
    meaning: "Represents loving domestic homes, parents raising children, and family support.",
    category: "people",
    tags: ["family", "home", "parent", "kid"]
  },

  // === ANIMALS ===
  {
    emoji: "🐶",
    name: "Dog Face",
    meaning: "The cute, friendly face of a dog, denoting puppies, pet ownership, and animal loyalty.",
    category: "animals",
    tags: ["dog", "puppy", "pet", "friend"]
  },
  {
    emoji: "🐱",
    name: "Cat Face",
    meaning: "A cute, whiskered cat face, representing kittens, domestic cats, and independent pets.",
    category: "animals",
    tags: ["cat", "kitty", "pet", "meow"]
  },
  {
    emoji: "🐭",
    name: "Mouse Face",
    meaning: "A grey mouse face with pink whiskers, representing woodland rodents, pests, or cute pets.",
    category: "animals",
    tags: ["mouse", "rodent", "hamster"]
  },
  {
    emoji: "🐹",
    name: "Hamster",
    meaning: "Conveys adorable, chubby-cheeked rodents, household pets, and fun running wheels.",
    category: "animals",
    tags: ["hamster", "pet", "chubby"]
  },
  {
    emoji: "🐰",
    name: "Rabbit Face",
    meaning: "A cute white bunny face with pink ears, representing Easter, spring, or woodland pets.",
    category: "animals",
    tags: ["rabbit", "bunny", "easter", "cute"]
  },
  {
    emoji: "🦊",
    name: "Fox",
    meaning: "A wild orange fox representing clever logic, woodland nature, or sneaky behavior.",
    category: "animals",
    tags: ["fox", "clever", "sly", "forest"]
  },
  {
    emoji: "🐻",
    name: "Bear",
    meaning: "A furry brown bear representing wilderness, strength, or cozy stuffed teddy bears.",
    category: "animals",
    tags: ["bear", "forest", "wild", "teddy"]
  },
  {
    emoji: "🐼",
    name: "Panda",
    meaning: "A black-and-white giant panda face, representing species conservation, China, or cute sleepy habits.",
    category: "animals",
    tags: ["panda", "china", "cute", "conservation"]
  },
  {
    emoji: "🐨",
    name: "Koala",
    meaning: "The grey Australian marsupial climbing eucalyptus trees, representing friendly down-under nature.",
    category: "animals",
    tags: ["koala", "australia", "cute", "eucalyptus"]
  },
  {
    emoji: "🐯",
    name: "Tiger Face",
    meaning: "A roaring orange striped tiger representing raw power, wildlife safaris, and leadership.",
    category: "animals",
    tags: ["tiger", "wildcat", "power", "safari"]
  },
  {
    emoji: "🦁",
    name: "Lion",
    meaning: "The majestic king of the jungle, representing raw bravery, royalty, and wildlife conservation.",
    category: "animals",
    tags: ["lion", "safari", "brave", "king"]
  },
  {
    emoji: "🐮",
    name: "Cow Face",
    meaning: "A black-and-white spotted dairy cow, evoking farm meadows, milk production, and pastoral fields.",
    category: "animals",
    tags: ["cow", "farm", "cowboy", "milk"]
  },
  {
    emoji: "🐷",
    name: "Pig Face",
    meaning: "A friendly pink pig face, denoting agricultural farm Animals, bacon, or piggy banks.",
    category: "animals",
    tags: ["pig", "farm", "pork"]
  },
  {
    emoji: "🐒",
    name: "Monkey",
    meaning: "A playful brown monkey, denoting zoo safaris, forest trees, or cheeky silliness.",
    category: "animals",
    tags: ["monkey", "silly", "jungle", "zoo"]
  },
  {
    emoji: "🐧",
    name: "Penguin",
    meaning: "An adorable black-and-white flightless bird, denoting cold polar regions, icebergs, and march of penguins.",
    category: "animals",
    tags: ["penguin", "polar", "ice", "antarctica"]
  },
  {
    emoji: "🐦",
    name: "Bird",
    meaning: "A generic small songbird, representing blue skies, spring chirping, and flying high.",
    category: "animals",
    tags: ["bird", "nature", "sky", "fly"]
  },
  {
    emoji: "🦅",
    name: "Eagle",
    meaning: "A soaring bird of prey representing freedom, acute vision, national symbols, and personal courage.",
    category: "animals",
    tags: ["eagle", "usa", "freedom", "predator"]
  },
  {
    emoji: "🦆",
    name: "Duck",
    meaning: "A green-headed mallard duck, denoting pond life, quacking sounds, and wet riverbeds.",
    category: "animals",
    tags: ["duck", "pond", "quack"]
  },
  {
    emoji: "🦉",
    name: "Owl",
    meaning: "A nocturnal feathered bird representing wisdom, evening, and wildlife studies.",
    category: "animals",
    tags: ["owl", "wise", "night", "bird"]
  },
  {
    emoji: "🦇",
    name: "Bat",
    meaning: "A flying mammal associated with cave spelunking, evening sky, vampires, and spooky Halloween vibes.",
    category: "animals",
    tags: ["bat", "halloween", "scary", "cave"]
  },
  {
    emoji: "🐝",
    name: "Honeybee",
    meaning: "A striped yellow-and-black pollinator representing hard work, ecosystem health, and sweet honey honeycombs.",
    category: "animals",
    tags: ["bee", "honey", "garden", "pollinate"]
  },
  {
    emoji: "🦋",
    name: "Butterfly",
    meaning: "A colorful blue winged insect representing metamorphous, pretty spring gardens, and lighthearted feelings.",
    category: "animals",
    tags: ["insect", "nature", "pretty", "spring"]
  },
  {
    emoji: "🐬",
    name: "Dolphin",
    meaning: "A smart marine mammal jumping in ocean waves, denoting summer vacations, marine parks, and intelligence.",
    category: "animals",
    tags: ["dolphin", "ocean", "swim", "coast"]
  },
  {
    emoji: "🐙",
    name: "Octopus",
    meaning: "An eight-legged sea creature, representing mysteries of deep-ocean trenches or seafood restaurants.",
    category: "animals",
    tags: ["octopus", "ocean", "sea", "tentacles"]
  },
  {
    emoji: "🦞",
    name: "Lobster",
    meaning: "A bright red saltwater crustacean, evoking East Coast dining and ocean floors.",
    category: "animals",
    tags: ["lobster", "crab", "seafood", "ocean"]
  },

  // === NATURE ===
  {
    emoji: "☀️",
    name: "Sun",
    meaning: "The daytime solar star denoting bright sunshine, warm summer, and positive mornings.",
    category: "nature",
    tags: ["sun", "day", "warm", "summer"]
  },
  {
    emoji: "🌙",
    name: "Crescent Moon",
    meaning: "A gold crescent moon representing evening stargazing, cozy bedtime, or lunar calendar holiday cycles.",
    category: "nature",
    tags: ["moon", "night", "stars", "sleep"]
  },
  {
    emoji: "⭐",
    name: "Star",
    meaning: "The bright star symbol denoting glowing space, highest review scores, awards, and brilliance.",
    category: "nature",
    tags: ["star", "space", "sky", "award"]
  },
  {
    emoji: "🌍",
    name: "Earth Globe Europe-Africa",
    meaning: "The blue planet earth, highlighting international geography, eco sustainability, and global connection.",
    category: "nature",
    tags: ["earth", "world", "globe", "nature"]
  },
  {
    emoji: "🌈",
    name: "Rainbow",
    meaning: "A multi-colored atmospheric rainbow denoting natural magic, hopeful weather, and LGBTQ+ pride.",
    category: "nature",
    tags: ["rainbow", "sky", "colorful", "pride"]
  },
  {
    emoji: "⚡",
    name: "High Voltage",
    meaning: "A yellow lightning bolt signifying thunderstorms, dynamic power grids, energy, and swift speed.",
    category: "nature",
    tags: ["thunder", "storm", "power", "speed"]
  },
  {
    emoji: "🔥",
    name: "Fire",
    meaning: "A red-orange flame representing heat, cooking, wildfires, or modern trending slang for 'excellent'.",
    category: "nature",
    tags: ["fire", "hot", "trending", "lit"]
  },
  {
    emoji: "🌊",
    name: "Water Wave",
    meaning: "A curling blue ocean wave representing high surf, maritime voyages, beaches, and aquatic nature.",
    category: "nature",
    tags: ["wave", "ocean", "surf", "water"]
  },
  {
    emoji: "🌲",
    name: "Evergreen Tree",
    meaning: "A resilient conifer pine tree, evoking alpine woodlands, winter season, and outdoor camping hikes.",
    category: "nature",
    tags: ["tree", "forest", "nature", "camping"]
  },
  {
    emoji: "🍁",
    name: "Maple Leaf",
    meaning: "An orange-red maple leaf, denoting beautiful autumn foliage, country hikes, and Canadian pride.",
    category: "nature",
    tags: ["leaf", "autumn", "fall", "canada"]
  },
  {
    emoji: "🌹",
    name: "Rose",
    meaning: "A romantic red blossom representing romantic love, botanical gardens, and special events.",
    category: "nature",
    tags: ["flower", "rose", "romantic", "valentines"]
  },
  {
    emoji: "🌻",
    name: "Sunflower",
    meaning: "A glowing yellow sunflower reaching for daytime sun, denoting happiness and beautiful gardens.",
    category: "nature",
    tags: ["flower", "sun", "summer", "yellow"]
  },
  {
    emoji: "🌵",
    name: "Cactus",
    meaning: "A prickly green desert plant representing warm dry climates, water conservation, and southwestern design.",
    category: "nature",
    tags: ["cactus", "desert", "dry", "west"]
  },
  {
    emoji: "❄️",
    name: "Snowflake",
    meaning: "A symmetrical crystalline snowflake, denoting freezing winter, skiing vacations, and holiday cold.",
    category: "nature",
    tags: ["snow", "winter", "cold", "christmas"]
  },
  {
    emoji: "🌋",
    name: "Volcano",
    meaning: "A geologic peak in active eruption, representing tectonic plates, earthquakes, and heat energy.",
    category: "nature",
    tags: ["volcano", "lava", "hot", "hazard"]
  },
  {
    emoji: "🌸",
    name: "Cherry Blossom",
    meaning: "A beautiful pink cherry blossom, representing spring blossom trees, festivals, and botanical gardens.",
    category: "nature",
    tags: ["flower", "pink", "spring", "cherry", "blossom"]
  },
  {
    emoji: "🌴",
    name: "Palm Tree",
    meaning: "A tall palm tree, representing tropical beaches, summer holidays, and sunny islands.",
    category: "nature",
    tags: ["tree", "palm", "tropical", "beach", "island"]
  },
  {
    emoji: "🍀",
    name: "Four Leaf Clover",
    meaning: "The rare four-leaf clover, representing St. Patrick's Day, exceptional good luck, and green Irish landscapes.",
    category: "nature",
    tags: ["clover", "lucky", "green", "clover", "fortune"]
  },
  {
    emoji: "🪐",
    name: "Ringed Planet",
    meaning: "A colorful cosmic planet with planetary rings, representing deep space astronomy and science fiction.",
    category: "nature",
    tags: ["planet", "saturn", "space", "cosmic", "universe"]
  },
  {
    emoji: "🌿",
    name: "Herb",
    meaning: "A green leafy sprig of herb, representing cooking seasonings, herbal medicine, and green woodlands.",
    category: "nature",
    tags: ["herb", "green", "nature", "leaf", "cook"]
  },
  {
    emoji: "🍂",
    name: "Fallen Leaf",
    meaning: "A collection of golden-brown dry leaves, representing autumn foliage walks, cool weather, and foliage fall.",
    category: "nature",
    tags: ["leaf", "autumn", "fall", "brown"]
  },
  {
    emoji: "🪵",
    name: "Wood",
    meaning: "A split log of wood showing annual growth rings, representing forest logging, fireplaces, and wilderness cabins.",
    category: "nature",
    tags: ["wood", "log", "forest", "fire", "cabin"]
  },

  // === FOODS ===
  {
    emoji: "🍎",
    name: "Red Apple",
    meaning: "The classic orchard fruit associated with fresh snacks, teachers, healthy diets, and fall harvest.",
    category: "foods",
    tags: ["fruit", "apple", "diet", "healthy"]
  },
  {
    emoji: "🍒",
    name: "Cherries",
    meaning: "Multiple sweet bright red cherries joined at the stem, representing summer berry orchards and sweet desserts.",
    category: "foods",
    tags: ["fruit", "cherry", "sweet", "berry", "red"]
  },
  {
    emoji: "🍍",
    name: "Pineapple",
    meaning: "A sweet tropical pineapple fruit, representing summer beach mocktails, resort tours, and warm hospitality.",
    category: "foods",
    tags: ["fruit", "tropical", "pineapple", "sweet", "summer"]
  },
  {
    emoji: "🥝",
    name: "Kiwi Fruit",
    meaning: "A fuzzy brown kiwi fruit cut in half showing green seed pulp, representing healthy snack nutrients.",
    category: "foods",
    tags: ["fruit", "kiwi", "green", "healthy", "diet"]
  },
  {
    emoji: "🥐",
    name: "Croissant",
    meaning: "A flaky golden butter croissant pastry, denoting Parisian bakeries, morning coffee, and French breakfast.",
    category: "foods",
    tags: ["bakery", "pastry", "bread", "breakfast", "french"]
  },
  {
    emoji: "🌮",
    name: "Taco",
    meaning: "A crispy Mexican taco shell filled with seasoned beef, salad, cheese, and fresh garnishes.",
    category: "foods",
    tags: ["taco", "mexican", "lunch", "spicy", "food"]
  },
  {
    emoji: "🍜",
    name: "Steaming Bowl",
    meaning: "A hot steaming bowl of fresh Japanese ramen noodles, denoting rich broth comfort foods, chopsticks, and restaurants.",
    category: "foods",
    tags: ["noodle", "ramen", "soup", "japanese", "dinner"]
  },
  {
    emoji: "🍦",
    name: "Soft Ice Cream",
    meaning: "A spiral swirl of sweet vanilla soft-serve ice cream in a wafer cone, representing boardwalk summer treats.",
    category: "foods",
    tags: ["icecream", "sweet", "dessert", "summer", "cone"]
  },
  {
    emoji: "🍷",
    name: "Wine Glass",
    meaning: "A beautiful stemmed glass of deep red vintage wine, representing wine tastings and fine dinners.",
    category: "foods",
    tags: ["wine", "drink", "alcohol", "glass", "dinner"]
  },
  {
    emoji: "🍹",
    name: "Tropical Drink",
    meaning: "A vibrant multi-colored tropical summer drink garnished with a slice, representing beach resorts and cocktails.",
    category: "foods",
    tags: ["drink", "cocktail", "summer", "vacation", "island"]
  },
  {
    emoji: "🍌",
    name: "Banana",
    meaning: "A peeled yellow tropical fruit rich in potassium, representing dynamic energy, snacks, or comedy.",
    category: "foods",
    tags: ["fruit", "banana", "sweet", "yellow"]
  },
  {
    emoji: "🍇",
    name: "Grapes",
    meaning: "A cluster of sweet purple grapes, denoting fresh summer fruit, vineyards, and custom wines.",
    category: "foods",
    tags: ["fruit", "grapes", "wine", "sweet"]
  },
  {
    emoji: "🍉",
    name: "Watermelon",
    meaning: "A sliced pink-red watermelon with black seeds, representing summer picnics and sweet hydration.",
    category: "foods",
    tags: ["fruit", "melon", "summer", "sweet"]
  },
  {
    emoji: "🍓",
    name: "Strawberry",
    meaning: "A sweet, red garden berry denoting spring desserts, milkshakes, and sweet fruit snacks.",
    category: "foods",
    tags: ["fruit", "strawberry", "sweet", "berry"]
  },
  {
    emoji: "🥑",
    name: "Avocado",
    meaning: "A sliced green superfood, highly popular for breakfast toasts, Mexican guacamole, and dieting.",
    category: "foods",
    tags: ["diet", "green", "toast", "veggie"]
  },
  {
    emoji: "🥦",
    name: "Broccoli",
    meaning: "A leafy green vegetable floret represent healthy vitamins, cooking, and dinner sides.",
    category: "foods",
    tags: ["diet", "veggie", "green", "healthy"]
  },
  {
    emoji: "🥕",
    name: "Carrot",
    meaning: "An orange root vegetable associated with rabbit snacks, salad ingredients, and healthy eyesight.",
    category: "foods",
    tags: ["diet", "carrot", "orange", "veggie"]
  },
  {
    emoji: "🍞",
    name: "Bread",
    meaning: "A classic baked loaf, denoting breakfast sandwiches, artisan bakeries, and essential sustenance.",
    category: "foods",
    tags: ["bread", "bakery", "toast", "carbs"]
  },
  {
    emoji: "🧀",
    name: "Cheese Wedge",
    meaning: "A yellow block with dairy holes, representing deli sandwiches, pizza toppings, or saying 'cheese' for photos.",
    category: "foods",
    tags: ["cheese", "dairy", "yellow"]
  },
  {
    emoji: "🍕",
    name: "Pizza Slice",
    meaning: "A delicious slice of cheesy tomato pepperoni pizza, symbolizing party foods and quick dinners.",
    category: "foods",
    tags: ["pizza", "cheese", "italian", "dinner"]
  },
  {
    emoji: "🍔",
    name: "Hamburger",
    meaning: "A grilled beef patty with cheese, tomato, and lettuce on a bun, representing classic fast-food.",
    category: "foods",
    tags: ["burger", "meat", "fastfood", "lunch"]
  },
  {
    emoji: "🍟",
    name: "French Fries",
    meaning: "Crispy golden fried potatoes in a red sleeve box, standard fast-food side for lunches.",
    category: "foods",
    tags: ["fries", "potato", "fastfood", "side"]
  },
  {
    emoji: "🍣",
    name: "Sushi",
    meaning: "Japanese nigiri slice of orange raw fish over white rice, representing Japanese culinary arts.",
    category: "foods",
    tags: ["sushi", "japanese", "seafood", "rice"]
  },
  {
    emoji: "🍿",
    name: "Popcorn",
    meaning: "Hot buttered cinema kernels in a striped tub, denoting cinema movies, theater, and snacks.",
    category: "foods",
    tags: ["popcorn", "movie", "theater", "crunchy"]
  },
  {
    emoji: "🍩",
    name: "Donut",
    meaning: "A sweet glazed round pastry with colorful rainbow sprinkles, high popular for desk breakfasts.",
    category: "foods",
    tags: ["sweet", "donut", "sprinkles", "bakery"]
  },
  {
    emoji: "☕",
    name: "Hot Beverage",
    meaning: "A warm ceramic mug of steaming coffee or herbal tea, essential for morning energy.",
    category: "foods",
    tags: ["coffee", "tea", "morning", "steam"]
  },
  {
    emoji: "🍺",
    name: "Beer Mug",
    meaning: "A golden glass mug of beer with foam, representing local pubs, happy hours, and toast celebrations.",
    category: "foods",
    tags: ["beer", "drink", "pub", "alcohol"]
  },
  {
    emoji: "🥂",
    name: "Clinking Glasses",
    meaning: "Two sparkling champagne flutes in toast, representing luxurious celebrations, weddings, and anniversaries.",
    category: "foods",
    tags: ["toast", "champagne", "celebrate", "party"]
  },

  // === ACTIVITIES ===
  {
    emoji: "⚽",
    name: "Soccer Ball",
    meaning: "The black-and-white soccer football, representing international tournaments, local clubs, and exercise.",
    category: "activities",
    tags: ["football", "soccer", "sports", "match"]
  },
  {
    emoji: "🏀",
    name: "Basketball",
    meaning: "The textured orange basketball, representing court games, NBA seasons, and school sports.",
    category: "activities",
    tags: ["basketball", "hoops", "sports", "nba"]
  },
  {
    emoji: "🏈",
    name: "American Football",
    meaning: "The brown lace leather pigskin ball, representing NFL match, stadiums, and high school culture.",
    category: "activities",
    tags: ["football", "nfl", "sports", "superbowl"]
  },
  {
    emoji: "🎾",
    name: "Tennis Ball",
    meaning: "The bright fuzzy yellow-green tennis ball, representing court sets, racket sports, and fitness.",
    category: "activities",
    tags: ["tennis", "racket", "sports", "atp"]
  },
  {
    emoji: "🚴",
    name: "Cyclist",
    meaning: "A person riding a road bicycle, denoting exercise workouts, city commuting, or professional road races.",
    category: "activities",
    tags: ["bike", "cycling", "ride", "workout"]
  },
  {
    emoji: "🏃",
    name: "Runner",
    meaning: "A sprinting athletic figure, representing jogging, track-and-field marathons, or rushing in a hurry.",
    category: "activities",
    tags: ["run", "jog", "match", "hurry"]
  },
  {
    emoji: "🎨",
    name: "Artist Palette",
    meaning: "A wooden palette showing blobs of multi-colored oil paints, denoting artistic painting and museums.",
    category: "activities",
    tags: ["art", "paint", "design", "creative"]
  },
  {
    emoji: "🎤",
    name: "Microphone",
    meaning: "An audio vocal microphone, denoting musical singing, podcast audio recording, or karaoke clubs.",
    category: "activities",
    tags: ["sing", "voice", "podcast", "karaoke"]
  },
  {
    emoji: "🎸",
    name: "Guitar",
    meaning: "An electric red guitar, representing rock bands, musical concerts, and playing music.",
    category: "activities",
    tags: ["music", "rock", "band", "instrument"]
  },
  {
    emoji: "🎮",
    name: "Video Game Controller",
    meaning: "A hand-held gaming gamepad controller, representing arcade gaming, consoles, and streaming hobbies.",
    category: "activities",
    tags: ["game", "xbox", "ps", "streamer"]
  },
  {
    emoji: "🏆",
    name: "Trophy",
    meaning: "A shining golden cup award representing championship victories, school awards, and total success.",
    category: "activities",
    tags: ["win", "award", "prize", "champion"]
  },
  {
    emoji: "♟️",
    name: "Chess Pawn",
    meaning: "A classic black chess pawn, denoting strategic table top games, intelligence, and deep plans.",
    category: "activities",
    tags: ["chess", "strategy", "game", "board"]
  },

  // === TRAVEL ===
  {
    emoji: "🚗",
    name: "Automobile",
    meaning: "A standard red passenger sedan car, representing dynamic road trips, highway driving, and commutes.",
    category: "travel",
    tags: ["car", "drive", "roadtrip", "commute"]
  },
  {
    emoji: "✈️",
    name: "Airplane",
    meaning: "A blue-white passenger airplane soaring, denoting international airport flights, foreign vacations, and tourism.",
    category: "travel",
    tags: ["fly", "vacation", "airport", "travel"]
  },
  {
    emoji: "🚀",
    name: "Rocket",
    meaning: "A space rocket blast, representing scientific outer-space exploration, tech launches, and fast growth.",
    category: "travel",
    tags: ["rocket", "space", "launch", "fast"]
  },
  {
    emoji: "🛥️",
    name: "Motorboat",
    meaning: "A sleek modern boat sailing over open blue waters, representing summer vacations, lakes, and harbor cruises.",
    category: "travel",
    tags: ["boat", "sea", "lake", "harbor"]
  },
  {
    emoji: "🚲",
    name: "Bicycle",
    meaning: "A classic dual wheel bicycle, representing eco friendly transport, local cycling paths, and outdoor exercise.",
    category: "travel",
    tags: ["bike", "cycling", "ride", "transport"]
  },
  {
    emoji: "⛰️",
    name: "Mountain",
    meaning: "A towering geologic peak, denoting wilderness hikes, climbing tours, and outdoor natural wonders.",
    category: "travel",
    tags: ["mountain", "climb", "nature", "hike"]
  },
  {
    emoji: "🏖️",
    name: "Beach with Umbrella",
    meaning: "A sandy shore displaying a relaxing beach umbrella, denoting dynamic summer vacations and tropical rest.",
    category: "travel",
    tags: ["beach", "sea", "island", "vacation"]
  },
  {
    emoji: "⛺",
    name: "Tent",
    meaning: "An outdoor camping canvas tent, evoking mountain hikes, campfire stories, and wilderness sleeping.",
    category: "travel",
    tags: ["camping", "tent", "forest", "hiking"]
  },
  {
    emoji: "🏰",
    name: "Castle",
    meaning: "A medieval stone fairy-tale castle fortress, evoking fairy tales, royal history, or European tours.",
    category: "travel",
    tags: ["castle", "royal", "history", "europe"]
  },
  {
    emoji: "🗺️",
    name: "World Map",
    meaning: "An unfolded cartography paper map, representing route navigation, travel planning, and international tours.",
    category: "travel",
    tags: ["map", "route", "travel", "explore"]
  },
  {
    emoji: "🚁",
    name: "Helicopter",
    meaning: "A dynamic flying helicopter with propellers, representing urgent air rescue, scenic tours, and speedy transit.",
    category: "travel",
    tags: ["fly", "helicopter", "chopper", "air", "travel"]
  },
  {
    emoji: "🚄",
    name: "High-Speed Train",
    meaning: "A sleek aerodynamic high-speed shinkansen train, representing Japanese public transit, fast commutes, and railways.",
    category: "travel",
    tags: ["train", "bullet", "transit", "travel", "rail"]
  },
  {
    emoji: "⛵",
    name: "Sailboat",
    meaning: "A classic sailboat catching ocean winds with its white canvas sails, representing yachting races and summer lake tours.",
    category: "travel",
    tags: ["boat", "sail", "sea", "yacht", "ocean", "lake"]
  },
  {
    emoji: "🗽",
    name: "Statue of Liberty",
    meaning: "A famous green New York copper landmark statue carrying a torch, representing American liberty and tourism.",
    category: "travel",
    tags: ["america", "ny", "liberty", "statue", "landmark", "tourist"]
  },
  {
    emoji: "🗼",
    name: "Tokyo Tower",
    meaning: "A tall orange-and-white lattice Eiffel-inspired tower icon, representing Tokyo, tourism, and Japanese urban travel.",
    category: "travel",
    tags: ["tokyo", "japan", "tower", "landmark", "travel"]
  },
  {
    emoji: "🏝️",
    name: "Desert Island",
    meaning: "A beautiful remote desert sand island with a green palm tree, representing pristine tropical luxury beach holidays.",
    category: "travel",
    tags: ["island", "beach", "tropical", "sea", "palm", "vacation"]
  },
  {
    emoji: "🎒",
    name: "Backpack",
    meaning: "A strong outdoor backpack used by students, wilderness hikers, and world bag packers for secure luggage.",
    category: "travel",
    tags: ["backpack", "bag", "hike", "school", "luggage", "travel"]
  },
  {
    emoji: "🧳",
    name: "Luggage",
    meaning: "A modern wheeled suitcase with an extendable handle, representing international flights, checking in at hotels, and general travel.",
    category: "travel",
    tags: ["suitcase", "luggage", "bag", "travel", "flight", "trip"]
  },

  // === OBJECTS ===
  {
    emoji: "💻",
    name: "Laptop",
    meaning: "A modern open personal computer, representing professional office work, studying, or software development.",
    category: "objects",
    tags: ["computer", "tech", "office", "code"]
  },
  {
    emoji: "📱",
    name: "Mobile Phone",
    meaning: "A modern smartphone, representing texting, social media, custom apps, and telecom calling.",
    category: "objects",
    tags: ["phone", "tech", "screen", "mobile"]
  },
  {
    emoji: "🔑",
    name: "Key",
    meaning: "A metallic key, denoting physical security, unlocking doors, passwords, or the answer to a riddle.",
    category: "objects",
    tags: ["key", "unlock", "security", "safe"]
  },
  {
    emoji: "📚",
    name: "Books",
    meaning: "A neat stack of three colorful textbooks, representing school libraries, reading, exams, and wisdom.",
    category: "objects",
    tags: ["books", "read", "library", "school"]
  },
  {
    emoji: "🔨",
    name: "Hammer",
    meaning: "A dynamic carpenter tool, representing building construction, hardware renovation, or manual fixing chores.",
    category: "objects",
    tags: ["hammer", "tool", "hardware", "fix"]
  },
  {
    emoji: "🎁",
    name: "Wrapped Gift",
    meaning: "A gift box tied with a satin ribbon bow, representing birthday parties, Christmas, and surprise presents.",
    category: "objects",
    tags: ["gift", "present", "birthday", "party"]
  },
  {
    emoji: "🎈",
    name: "Balloon",
    meaning: "A red festive round floating balloon, denoting celebrations, children parties, and grand festivals.",
    category: "objects",
    tags: ["balloon", "party", "celebration", "festive"]
  },
  {
    emoji: "🔬",
    name: "Microscope",
    meaning: "A clinical laboratory microscope, denoting medical research, biological studies, and school science classes.",
    category: "objects",
    tags: ["science", "medical", "lab", "lens"]
  },
  {
    emoji: "🕶️",
    name: "Sunglasses",
    meaning: "A pair of cool dark eyeglasses, representing eye safety, bright summer skies, and cool casual swagger.",
    category: "objects",
    tags: ["glasses", "sun", "cool", "summer"]
  },
  {
    emoji: "👟",
    name: "Running Shoe",
    meaning: "A modern sporty athletic sneaker, representing jogging workouts, running sports, and casual outfits.",
    category: "objects",
    tags: ["shoe", "sport", "sneakers", "walk"]
  },
  {
    emoji: "💡",
    name: "Light Bulb",
    meaning: "A glowing electric light bulb, representing a brilliant new creative idea, quick thinking, intelligence, and inspiration.",
    category: "objects",
    tags: ["bulb", "light", "idea", "creative", "think"]
  },
  {
    emoji: "🖊️",
    name: "Pen",
    meaning: "A professional design writing pen, representing literature, typing notes, drawing art, or signing official business documents.",
    category: "objects",
    tags: ["pen", "writing", "office", "draw", "sign"]
  },
  {
    emoji: "🎨",
    name: "Artist Palette",
    meaning: "A classic artist paint palette board with multiple color mixes, representing creative painting projects, visual design, and craft hobbies.",
    category: "objects",
    tags: ["palette", "art", "paint", "design", "creative"]
  },
  {
    emoji: "📷",
    name: "Camera",
    meaning: "A sleek modern electronic pocket camera, representing family album memories, vacation landscape photography, and video filming.",
    category: "objects",
    tags: ["camera", "photo", "shoot", "lens", "video"]
  },
  {
    emoji: "🧪",
    name: "Test Tube",
    meaning: "A glass laboratory test tube with bubbling chemicals, denoting scientific laboratory experiments, chemical trials, and educational research.",
    category: "objects",
    tags: ["test", "chem", "science", "lab", "trial"]
  },
  {
    emoji: "🧩",
    name: "Puzzle Piece",
    meaning: "A single interlocking jigsaw puzzle piece, representing strategic problem solving, matching structures, and team logic games.",
    category: "objects",
    tags: ["puzzle", "toy", "game", "logic", "solve"]
  },
  {
    emoji: "✉️",
    name: "Envelope",
    meaning: "A classic white closed paper letter envelope, representing postages, mailbox letters, invitations, and corporate emails.",
    category: "objects",
    tags: ["mail", "envelope", "letter", "post", "email"]
  },
  {
    emoji: "📦",
    name: "Package",
    meaning: "A sturdy brown cardboard storage box, representing logistics shipments, customer mailing, and retail parcel unboxing.",
    category: "objects",
    tags: ["box", "package", "parcel", "ship", "delivery"]
  },
  {
    emoji: "⏳",
    name: "Hourglass",
    meaning: "A flowing glass hourglass with falling sand grains, representing active countdown timers, deadlines, and patient waiting.",
    category: "objects",
    tags: ["time", "hourglass", "wait", "timer", "sand"]
  },
  {
    emoji: "🔋",
    name: "Battery",
    meaning: "A green power battery icon indicating a high electric charge, representing rechargeable energy, power stations, and active fuel.",
    category: "objects",
    tags: ["battery", "power", "charge", "energy", "electricity"]
  },
  {
    emoji: "🛡️",
    name: "Shield",
    meaning: "A heavy metallic protector seal shield, representing high physical armor, cybersecurity guards, and structural safety.",
    category: "objects",
    tags: ["shield", "armor", "defense", "secure", "safety"]
  },
  {
    emoji: "🔔",
    name: "Bell",
    meaning: "A golden ringing brass alarm bell, representing mobile push notification icons, sound ring alerts, and wake reminders.",
    category: "objects",
    tags: ["bell", "alarm", "ring", "alert", "sound"]
  },

  // === SIGNS ===
  {
    emoji: "⚠️",
    name: "Warning",
    meaning: "A yellow caution road triangle, warning users about hazards, software errors, or physical obstacles.",
    category: "signs",
    tags: ["warning", "caution", "yellow", "danger"]
  },
  {
    emoji: "♻️",
    name: "Recycling Symbol",
    meaning: "The trio of green chase arrows, representing ecological recycling, eco friendly choices, and green waste.",
    category: "signs",
    tags: ["recycle", "green", "eco", "trash"]
  },
  {
    emoji: "☮️",
    name: "Peace Symbol",
    meaning: "A serene circular peace insignia representing diplomatic harmony, anti-war movements, and goodwill.",
    category: "signs",
    tags: ["peace", "blue", "harmony"]
  },
  {
    emoji: "☯️",
    name: "Yin Yang",
    meaning: "An elegant circular black-and-white yin-yang symbol, representing life balance, philosophy, and dual cosmic forces.",
    category: "signs",
    tags: ["yinyang", "balance", "peace", "philosophy"]
  },
  {
    emoji: "☸️",
    name: "Wheel of Dharma",
    meaning: "A golden wheel circular emblem represent spiritual laws, Buddhist ethics, cosmic order, and religious teachings.",
    category: "signs",
    tags: ["dharma", "wheel", "buddhist", "religion", "spiritual"]
  },
  {
    emoji: "⚛️",
    name: "Atom Symbol",
    meaning: "An atomic structure symbol showing orbiting electron paths, representing physics classroom studies, chemistry science, and modern technology.",
    category: "signs",
    tags: ["atom", "science", "physics", "element", "tech"]
  },
  {
    emoji: "🧿",
    name: "Nazar Amulet",
    meaning: "A brilliant blue glass evil-eye protection charm, representing traditional lucky symbols and warding off bad fortunes.",
    category: "signs",
    tags: ["eye", "amulet", "lucky", "charm", "protection"]
  },
  {
    emoji: "♿",
    name: "Wheelchair Symbol",
    meaning: "The universal blue handicap accessibility symbol icon, representing inclusivity and support services.",
    category: "signs",
    tags: ["accessibility", "disabled", "wheelchair", "blue", "support"]
  },
  {
    emoji: "☣️",
    name: "Biohazard",
    meaning: "The distinct black triple-loop biohazard warning emblem on a bright yellow backdrop, cautioning about infectious medical waste.",
    category: "signs",
    tags: ["biohazard", "warning", "hazard", "medical", "virus"]
  },
  {
    emoji: "☢️",
    name: "Radioactive",
    meaning: "A classic black three-leaf fan radioactive alert symbol on a vivid warning yellow alert background.",
    category: "signs",
    tags: ["radioactive", "nuclear", "warning", "danger", "radiation"]
  },
  {
    emoji: "🕉️",
    name: "Om",
    meaning: "The sacred spiritual syllable symbol representing the deep cosmic chime sounds of Indian Hindu faiths.",
    category: "signs",
    tags: ["om", "hindu", "sacred", "peace", "religion"]
  },
  {
    emoji: "✝️",
    name: "Latin Cross",
    meaning: "The historic Christian latin cross landmark symbol representing religious faith, prayer, and church services.",
    category: "signs",
    tags: ["cross", "christian", "church", "faith", "religion"]
  },
  {
    emoji: "☪️",
    name: "Star and Crescent",
    meaning: "The crescent moon paired with a star, representing Islamic cultural traditions, faith, and local mosques.",
    category: "signs",
    tags: ["crescent", "star", "islam", "faith", "religion"]
  },

  // === FLAGS ===
  {
    emoji: "🏁",
    name: "Chequered Flag",
    meaning: "The black-and-white checker grid flag, denoting Formula-1 racing finishes, victories, and successfully finishing tasks.",
    category: "flags",
    tags: ["race", "finish", "car", "flag"]
  },
  {
    emoji: "🏳️‍🌈",
    name: "Rainbow Flag",
    meaning: "The vibrant pride banner, representing pride movements, diversity, and LGBTQ+ community inclusion.",
    category: "flags",
    tags: ["pride", "rainbow", "love", "flag"]
  }
];

// === DYNAMIC VARIATION GENERATOR ===
const SKIN_TONES = [
  { code: "🏻", name: "Light Skin Tone", tag: "light skin" },
  { code: "🏼", name: "Medium-Light Skin Tone", tag: "medium-light skin" },
  { code: "🏽", name: "Medium Skin Tone", tag: "medium skin" },
  { code: "🏾", name: "Medium-Dark Skin Tone", tag: "medium-dark skin" },
  { code: "🏿", name: "Dark Skin Tone", tag: "dark skin" }
];

const hairStyleCodes = [
  { code: "\u{1F9B1}", name: "Curly Hair", tag: "curly" },
  { code: "\u{1F9B0}", name: "Red Hair", tag: "redhead" },
  { code: "\u{1F9B3}", name: "White Hair", tag: "whitehair" },
  { code: "\u{1F9B2}", name: "Bald Head", tag: "bald" }
];

const genders = [
  { base: "👩", desc: "Woman", tag: "female" },
  { base: "🧑", desc: "Person", tag: "person" },
  { base: "👨", desc: "Man", tag: "male" }
];

function generateDynamicEmojis(): EmojiItem[] {
  const dynamicItems: EmojiItem[] = [];

  // 1. Gestures / Hands
  const baseGesturesWithSkin = [
    { emoji: "👋", name: "Waving Hand", tags: ["wave", "hello", "goodbye"] },
    { emoji: "🤚", name: "Raised Back of Hand", tags: ["backhand", "raised", "stop"] },
    { emoji: "🖐", name: "Hand with Fingers Splayed", tags: ["hand", "splayed", "five"] },
    { emoji: "✋", name: "Raised Hand", tags: ["stop", "highfive", "halt"] },
    { emoji: "🖖", name: "Vulcan Salute", tags: ["spock", "star-trek", "live-long-and-prosper"] },
    { emoji: "👌", name: "OK Hand", tags: ["ok", "correct", "perfect", "good"] },
    { emoji: "🤌", name: "Pinched Fingers", tags: ["pinched", "italian", "gesture", "what"] },
    { emoji: "🤏", name: "Pinched Hand", tags: ["pinch", "small", "little"] },
    { emoji: "✌️", name: "Victory Hand", tags: ["victory", "peace", "two"] },
    { emoji: "🤞", name: "Crossed Fingers", tags: ["goodluck", "fingers-crossed", "hope"] },
    { emoji: "🫰", name: "Hand with Index Finger and Thumb Crossed", tags: ["heart", "kpop", "money", "snap"] },
    { emoji: "🤟", name: "Love-You Gesture", tags: ["ily", "love", "signing"] },
    { emoji: "🤘", name: "Sign of the Horns", tags: ["rockon", "metal", "horns"] },
    { emoji: "🤙", name: "Call Me Hand", tags: ["shaka", "hangloose", "call"] },
    { emoji: "🫵", name: "Index Pointing At the Viewer", tags: ["you", "point", "recruited"] },
    { emoji: "🫱", name: "Rightwards Hand", tags: ["hand", "reach", "right"] },
    { emoji: "🫲", name: "Leftwards Hand", tags: ["hand", "reach", "left"] },
    { emoji: "🫳", name: "Palm Down Hand", tags: ["drop", "shoo", "dismiss"] },
    { emoji: "🫴", name: "Palm Up Hand", tags: ["beckon", "gather", "offer"] },
    { emoji: "👈", name: "Backhand Index Pointing Left", tags: ["point", "left", "direction"] },
    { emoji: "👉", name: "Backhand Index Pointing Right", tags: ["point", "right", "direction"] },
    { emoji: "👆", name: "Backhand Index Pointing Up", tags: ["point", "up", "above"] },
    { emoji: "🖕", name: "Middle Finger", tags: ["rude", "flip-off", "offensive"] },
    { emoji: "👇", name: "Backhand Index Pointing Down", tags: ["point", "down", "below"] },
    { emoji: "☝️", name: "Index Pointing Up", tags: ["pointer", "one", "important"] },
    { emoji: "👍", name: "Thumbs Up", tags: ["good", "yes", "approve", "like"] },
    { emoji: "👎", name: "Thumbs Down", tags: ["bad", "no", "dislike", "reject"] },
    { emoji: "✊", name: "Raised Fist", tags: ["fist", "power", "solidarity"] },
    { emoji: "👊", name: "Oncoming Fist", tags: ["punch", "bump", "fistbump"] },
    { emoji: "🤛", name: "Left-Facing Fist", tags: ["fist", "punch", "fistbump"] },
    { emoji: "🤜", name: "Right-Facing Fist", tags: ["fist", "punch", "fistbump"] },
    { emoji: "👏", name: "Clapping Hands", tags: ["applause", "bravo", "praise"] },
    { emoji: "🫶", name: "Heart Hands", tags: ["love", "heart", "affection"] },
    { emoji: "🙌", name: "Raised Hands", tags: ["celebrate", "hallelujah", "hooray"] },
    { emoji: "👐", name: "Open Hands", tags: ["hug", "open", "welcoming"] },
    { emoji: "🤲", name: "Palms Up Together", tags: ["prayer", "book", "offering"] },
    { emoji: "🤝", name: "Handshake", tags: ["agreement", "deal", "shake", "business"] },
    { emoji: "🙏", name: "Folded Hands", tags: ["please", "thankyou", "pray", "namaste"] },
    { emoji: "✍️", name: "Writing Hand", tags: ["write", "pencil", "signature"] },
    { emoji: "💅", name: "Nail Polish", tags: ["manicure", "beauty", "sass", "care"] },
    { emoji: "🤳", name: "Selfie", tags: ["camera", "phone", "picture", "self"] },
    { emoji: "💪", name: "Flexed Biceps", tags: ["strong", "flex", "workout", "power"] },
    { emoji: "🦵", name: "Leg", tags: ["limb", "kick", "foot"] },
    { emoji: "🦶", name: "Foot", tags: ["walk", "sole", "footprint"] },
    { emoji: "👂", name: "Ear", tags: ["hear", "listen", "noise"] },
    { emoji: "🦻", name: "Ear with Hearing Aid", tags: ["hearing-aid", "accessible"] },
    { emoji: "👃", name: "Nose", tags: ["smell", "scent", "sniff"] }
  ];

  for (const item of baseGesturesWithSkin) {
    const cleanedEmoji = item.emoji.replace(/\uFE0F/g, "");
    for (const tone of SKIN_TONES) {
      dynamicItems.push({
        emoji: `${cleanedEmoji}${tone.code}`,
        name: `${item.name}: ${tone.name}`,
        meaning: `A variant of the ${item.name} emoji, representing ${tone.name.toLowerCase()} and used for expressing ${item.tags[0]} with corresponding personal representation.`,
        category: "gestures",
        tags: [...item.tags, tone.tag, "skin-tone"]
      });
    }
  }

  // Handshakes with mixed skin tones (🫱 + tone1 + ZWJ + 🫲 + tone2)
  for (const tone1 of SKIN_TONES) {
    for (const tone2 of SKIN_TONES) {
      if (tone1.code === tone2.code) {
        dynamicItems.push({
          emoji: `🤝${tone1.code}`,
          name: `Handshake: ${tone1.name}`,
          meaning: `A handshake with ${tone1.name.toLowerCase()} representing mutual agreement, greeting, or a successful deal.`,
          category: "gestures",
          tags: ["handshake", "deal", "agreement", tone1.tag]
        });
      } else {
        dynamicItems.push({
          emoji: `🫱${tone1.code}\u{200D}🫲${tone2.code}`,
          name: `Handshake: ${tone1.name}, ${tone2.name}`,
          meaning: `A handshake between two people of different skin tones (${tone1.name.toLowerCase()} and ${tone2.name.toLowerCase()}), symbolizing cooperation, unity, and friendship.`,
          category: "gestures",
          tags: ["handshake", "agreement", "unity", "deal", "business", tone1.tag, tone2.tag]
        });
      }
    }
  }

  // 2. People & Faces
  const basePeopleWithSkin = [
    { emoji: "👶", name: "Baby", tags: ["kid", "child", "toddler", "youth"] },
    { emoji: "👧", name: "Girl", tags: ["kid", "child", "youth", "female"] },
    { emoji: "🧒", name: "Child", tags: ["kid", "child", "youth", "gender-neutral"] },
    { emoji: "👦", name: "Boy", tags: ["kid", "child", "youth", "male"] },
    { emoji: "👩", name: "Woman", tags: ["adult", "female", "lady"] },
    { emoji: "🧑", name: "Person", tags: ["adult", "people", "human"] },
    { emoji: "👨", name: "Man", tags: ["adult", "male", "guy"] },
    { emoji: "👵", name: "Old Woman", tags: ["elder", "grandma", "grandmother"] },
    { emoji: "🧓", name: "Older Person", tags: ["elder", "senior", "grandparent"] },
    { emoji: "👴", name: "Old Man", tags: ["elder", "grandpa", "grandfather"] }
  ];

  for (const item of basePeopleWithSkin) {
    for (const tone of SKIN_TONES) {
      dynamicItems.push({
        emoji: `${item.emoji}${tone.code}`,
        name: `${item.name}: ${tone.name}`,
        meaning: `An image of a ${item.name.toLowerCase()} with ${tone.name.toLowerCase()}, expressing age, identity, or personal representation.`,
        category: "people",
        tags: [...item.tags, tone.tag, "skin-tone"]
      });
    }
  }

  // Curly, Red, White, Bald hairs:
  for (const gender of genders) {
    for (const style of hairStyleCodes) {
      for (const tone of SKIN_TONES) {
        dynamicItems.push({
          emoji: `${gender.base}${tone.code}\u{200D}${style.code}`,
          name: `${gender.desc} with ${style.name}: ${tone.name}`,
          meaning: `A ${gender.desc.toLowerCase()} with curly, red, white, or bald hair and ${tone.name.toLowerCase()}, representing hair diversity and identity.`,
          category: "people",
          tags: [gender.tag, style.tag, tone.tag, "hair"]
        });
      }
    }
  }

  // Blonde hair
  for (const tone of SKIN_TONES) {
    dynamicItems.push({
      emoji: `👱${tone.code}`,
      name: `Blond-Haired Person: ${tone.name}`,
      meaning: `A person with fair blond hair, depicting ${tone.name.toLowerCase()} and natural hair colors.`,
      category: "people",
      tags: ["blond", "hair", tone.tag]
    });
  }

  // Beard versions
  for (const tone of SKIN_TONES) {
    dynamicItems.push({
      emoji: `🧔${tone.code}`,
      name: `Bearded Person: ${tone.name}`,
      meaning: `A person wearing a facial beard, representing ${tone.name.toLowerCase()} and personal style.`,
      category: "people",
      tags: ["beard", "facial-hair", tone.tag]
    });
  }

  // Professional careers
  const baseProfessions = [
    { base: "👮", name: "Police Officer", codeSuffix: "", tags: ["police", "cop", "security"] },
    { base: "👷", name: "Construction Worker", codeSuffix: "", tags: ["worker", "construction", "builder"] },
    { base: "💂", name: "Guard", codeSuffix: "", tags: ["guard", "soldier", "army"] },
    { base: "🕵️", name: "Detective", codeSuffix: "", tags: ["sleuth", "spy", "investigate"] },
    { base: "🧑", name: "Health Worker", codeSuffix: "\u{200D}⚕️", tags: ["doctor", "nurse", "medical"] },
    { base: "🧑", name: "Farmer", codeSuffix: "\u{200D}🌾", tags: ["farm", "agriculture", "grow"] },
    { base: "🧑", name: "Cook", codeSuffix: "\u{200D}🍳", tags: ["chef", "cooking", "food"] },
    { base: "🧑", name: "Graduate", codeSuffix: "\u{200D}🎓", tags: ["student", "school", "degree", "diploma"] },
    { base: "🧑", name: "Singer", codeSuffix: "\u{200D}🎤", tags: ["singer", "musician", "performer"] },
    { base: "🧑", name: "Teacher", codeSuffix: "\u{200D}🏫", tags: ["teacher", "professor", "class"] },
    { base: "🧑", name: "Factory Worker", codeSuffix: "\u{200D}🏭", tags: ["industrial", "laborer", "factory"] },
    { base: "🧑", name: "Technologist", codeSuffix: "\u{200D}💻", tags: ["programmer", "developer", "coding", "laptop"] },
    { base: "🧑", name: "Office Worker", codeSuffix: "\u{200D}💼", tags: ["manager", "professional", "company"] },
    { base: "🧑", name: "Mechanic", codeSuffix: "\u{200D}🔧", tags: ["mechanic", "tools", "repair"] },
    { base: "🧑", name: "Scientist", codeSuffix: "\u{200D}🔬", tags: ["chemist", "lab", "research"] },
    { base: "🧑", name: "Artist", codeSuffix: "\u{200D}🎨", tags: ["paint", "palette", "creative"] },
    { base: "🧑", name: "Firefighter", codeSuffix: "\u{200D}🚒", tags: ["rescue", "fire", "extinguish"] },
    { base: "🧑", name: "Pilot", codeSuffix: "\u{200D}✈️", tags: ["fly", "airplane", "travel"] },
    { base: "🧑", name: "Astronaut", codeSuffix: "\u{200D}🚀", tags: ["space", "nasa", "rocket"] },
    { base: "🧑", name: "Judge", codeSuffix: "\u{200D}⚖️", tags: ["court", "justice", "trial"] }
  ];

  for (const prof of baseProfessions) {
    for (const gender of genders) {
      for (const tone of SKIN_TONES) {
        let emojiStr = "";
        let finalGenderTag = gender.tag;
        let pName = prof.name;

        if (prof.base === "🧑") {
          emojiStr = `${gender.base}${tone.code}${prof.codeSuffix}`;
          pName = `${gender.desc === 'Person' ? '' : `${gender.desc} `}${prof.name}`;
        } else {
          // If the profession does not use '🧑' base, we only keep the gender-neutral base
          // version to completely avoid appending ZWJ + ♀️ / ♂️.
          if (gender.base !== "🧑") {
            continue;
          }
          const cleanedProfBase = prof.base.replace(/\uFE0F/g, "");
          emojiStr = `${cleanedProfBase}${tone.code}`;
          pName = prof.name;
        }

        dynamicItems.push({
          emoji: emojiStr,
          name: `${pName}: ${tone.name}`,
          meaning: `A professional ${pName.toLowerCase()} with ${tone.name.toLowerCase()}, representing active trade careers and professional representation.`,
          category: "people",
          tags: [...prof.tags, finalGenderTag, tone.tag, "profession"]
        });
      }
    }
  }

  // 3. Activity / Sports
  const baseActivities = [
    { base: "🧗", name: "Climber", tags: ["climb", "escalate", "mountain"] },
    { base: "🏇", name: "Horse Racing", tags: ["horse", "race", "derby"] },
    { base: "🏂", name: "Snowboarder", tags: ["snow", "winter", "ski"] },
    { base: "🏌️", name: "Golfer", tags: ["golf", "club", "putt"] },
    { base: "🏄", name: "Surfer", tags: ["surf", "wave", "ocean"] },
    { base: "🚣", name: "Rower", tags: ["boat", "paddle", "crew"] },
    { base: "🏊", name: "Swimmer", tags: ["swim", "pool", "water"] },
    { base: "⛹️", name: "Basketball Player", tags: ["hoops", "basketball", "bounce"] },
    { base: "🏋️", name: "Weightlifter", tags: ["lift", "muscle", "gym"] },
    { base: "🚴", name: "Cyclist", tags: ["bike", "commute", "road"] },
    { base: "🚵", name: "Mountain Cyclist", tags: ["bike", "mountain", "dirt"] },
    { base: "🤸", name: "Gymnast", tags: ["cartwheel", "athletics", "flip"] },
    { base: "🤽", name: "Water Polo Player", tags: ["polo", "pool", "water"] },
    { base: "🤾", name: "Handball Player", tags: ["throw", "court", "game"] },
    { base: "🤹", name: "Juggler", tags: ["balls", "circus", "trick"] },
    { base: "🧘", name: "Person in Lotus Position", tags: ["meditation", "yoga", "zen"] },
    { base: "🛀", name: "Person Taking Bath", tags: ["bath", "soap", "tub"] },
    { base: "🛌", name: "Person in Bed", tags: ["sleep", "nap", "dream"] }
  ];

  for (const act of baseActivities) {
    const cleanedActBase = act.base.replace(/\uFE0F/g, "");
    if (act.base === "🛀" || act.base === "🛌" || act.base === "🏇" || act.base === "🏂") {
      for (const tone of SKIN_TONES) {
        dynamicItems.push({
          emoji: `${cleanedActBase}${tone.code}`,
          name: `${act.name}: ${tone.name}`,
          meaning: `Representing a ${act.name.toLowerCase()} with ${tone.name.toLowerCase()}.`,
          category: "activities",
          tags: [...act.tags, tone.tag]
        });
      }
    } else {
      for (const gender of genders) {
        for (const tone of SKIN_TONES) {
          // Skip if gender is Woman/Man to completely avoid appending ♀️ and ♂️
          if (gender.base !== "🧑") {
            continue;
          }

          dynamicItems.push({
            emoji: `${cleanedActBase}${tone.code}`,
            name: `${act.name}: ${tone.name}`,
            meaning: `A professional or amateur ${act.name.toLowerCase()} with ${tone.name.toLowerCase()}, representing movement, fitness, and skills.`,
            category: "activities",
            tags: [...act.tags, gender.tag, tone.tag]
          });
        }
      }
    }
  }

  // 4. Movements (Plain and Skin Tone Variations, no arrows)
  const baseMovements = [
    { base: "🚶", name: "Person Walking", tags: ["walk", "pedestrian", "travel"] },
    { base: "🏃", name: "Person Running", tags: ["run", "sprint", "fast"] },
    { base: "🧎", name: "Person Kneeling", tags: ["kneel", "pray", "rest"] },
    { base: "🧑‍🦯", name: "Person with White Cane", tags: ["blind", "accessibility", "cane"] },
    { base: "🧑‍🦼", name: "Person in Motorized Wheelchair", tags: ["wheelchair", "accessibility", "motor"] },
    { base: "🧑‍🦽", name: "Person in Manual Wheelchair", tags: ["wheelchair", "accessibility"] }
  ];

  for (const mov of baseMovements) {
    const cleanedMovBase = mov.base.replace(/\uFE0F/g, "");
    
    // 1. Plain base emoji
    dynamicItems.push({
      emoji: cleanedMovBase,
      name: mov.name,
      meaning: `An image of ${mov.name.toLowerCase()}, representing movement, travel, and physical activity.`,
      category: "people",
      tags: mov.tags
    });

    // 2. With skin tones
    const baseChar = cleanedMovBase.substring(0, 2); 
    const suffix = cleanedMovBase.substring(2);     
    
    for (const tone of SKIN_TONES) {
      const skinEmoji = `${baseChar}${tone.code}${suffix}`;
      const nameWithTone = `${mov.name}: ${tone.name}`;
      
      dynamicItems.push({
        emoji: skinEmoji,
        name: nameWithTone,
        meaning: `An image of ${mov.name.toLowerCase()} with ${tone.name.toLowerCase()}, representing movement, travel, and physical activity.`,
        category: "people",
        tags: [...mov.tags, tone.tag]
      });
    }
  }

  // 5. Couples & Relationships
  const coupleBases = [
    { emoji: "👭", name: "Women Holding Hands", tags: ["women", "pair", "friends", "couple"] },
    { emoji: "👬", name: "Men Holding Hands", tags: ["men", "pair", "friends", "couple"] },
    { emoji: "👫", name: "Woman and Man Holding Hands", tags: ["couple", "pair", "friends"] },
    { emoji: "🧑‍🤝‍🧑", name: "People Holding Hands", tags: ["people", "pair", "friends"] }
  ];

  for (const base of coupleBases) {
    for (const tone of SKIN_TONES) {
      dynamicItems.push({
        emoji: `${base.emoji}${tone.code}`,
        name: `${base.name}: ${tone.name}`,
        meaning: `A representation of ${base.name.toLowerCase()} with ${tone.name.toLowerCase()}, representing companionship, relationships, and romance.`,
        category: "people",
        tags: [...base.tags, tone.tag]
      });
    }
  }

  const loveBases = [
    { code: "❤️", name: "Couple with Heart", tag: "love" },
    { code: "❤️\u{200D}💋", name: "Kiss", tag: "kiss" }
  ];

  const personPairs = [
    { p1: "👨", p2: "👨", name: "Men", tag: "men" },
    { p1: "👩", p2: "👩", name: "Women", tag: "women" },
    { p1: "👩", p2: "👨", name: "Woman and Man", tag: "hetero" },
    { p1: "🧑", p2: "🧑", name: "People", tag: "neutral" }
  ];

  for (const pair of personPairs) {
    for (const love of loveBases) {
      for (const tone1 of SKIN_TONES) {
        for (const tone2 of SKIN_TONES) {
          const comboEmoji = `${pair.p1}${tone1.code}\u{200D}${love.code}\u{200D}${pair.p2}${tone2.code}`;
          const comboTitle = `${love.name} (${pair.name}): ${tone1.name}, ${tone2.name}`;
          
          dynamicItems.push({
            emoji: comboEmoji,
            name: comboTitle,
            meaning: `A romantic ${love.name.toLowerCase()} between two people (${tone1.name.toLowerCase()} and ${tone2.name.toLowerCase()}), symbolizing loving bonds, dating, and partnerships.`,
            category: "people",
            tags: [pair.tag, love.tag, "relationship", tone1.tag, tone2.tag]
          });
        }
      }
    }
  }

  // Base Kiss and Couple representation with single skin tones
  for (const tone of SKIN_TONES) {
    dynamicItems.push({
      emoji: `💑${tone.code}`,
      name: `Couple with Heart: ${tone.name}`,
      meaning: `A loving couple with a floating heart in ${tone.name.toLowerCase()}.`,
      category: "people",
      tags: ["love", "couple", tone.tag]
    });
    dynamicItems.push({
      emoji: `💏${tone.code}`,
      name: `Kiss: ${tone.name}`,
      meaning: `A romantic kiss between two people in ${tone.name.toLowerCase()}.`,
      category: "people",
      tags: ["kiss", "love", "romance", tone.tag]
    });
  }

  return dynamicItems;
}

const specialCuratedItems: EmojiItem[] = [
  {
    emoji: "🫠",
    name: "Melting Face",
    meaning: "A yellow face melting into a puddle, representing hot summer heat, embarrassment, dread, or slowly sinking feelings.",
    category: "faces",
    tags: ["melt", "heat", "hot", "sinking", "dread"]
  },
  {
    emoji: "🫨",
    name: "Shaking Face",
    meaning: "A face shaking violently, representing physical vibrations, earthquakes, shock, panic, or sheer disbelief.",
    category: "faces",
    tags: ["shake", "shock", "earthquake", "vibrate", "scared"]
  },
  {
    emoji: "🫢",
    name: "Face with Open Eyes and Hand Over Mouth",
    meaning: "A hand covering gaping lips with wide eyes, representing shock, sudden gasps, surprise, or an accidental secret slip.",
    category: "faces",
    tags: ["gasp", "surprise", "secret", "accidental"]
  },
  {
    emoji: "🫣",
    name: "Face with Peeking Eye",
    meaning: "Covers eyes with split fingers, looking through, representing curiosity, spooky contents, or wanting to look yet scared.",
    category: "faces",
    tags: ["peek", "gaze", "curious", "scared", "hide"]
  },
  {
    emoji: "🫡",
    name: "Saluting Face",
    meaning: "A yellow salute face denoting respect, yes-sir military obedience, gratitude, or solemn duties.",
    category: "faces",
    tags: ["salute", "respect", "military", "honor"]
  },
  {
    emoji: "🫥",
    name: "Dotted Line Face",
    meaning: "A face framed with dashed lines, representing introversion, social isolation, invisibility, or feeling completely ignored.",
    category: "faces",
    tags: ["disappear", "invisible", "ignored", "quiet", "detached"]
  },
  {
    emoji: "🫤",
    name: "Diagonal Mouth Face",
    meaning: "A slanted diagonal mouth representing skepticism, feeling conflicted, mixed reviews, or feeling meh.",
    category: "faces",
    tags: ["skeptic", "diagonal", "meh", "unsure", "conflicted"]
  },
  {
    emoji: "😶‍🌫️",
    name: "Face in Clouds",
    meaning: "A face enveloped in mist or clouds, representing foggy thinking, confusion, daydreaming, or a smoke-screen status.",
    category: "faces",
    tags: ["foggy", "cloud", "fog", "whimsical", "detached"]
  },
  {
    emoji: "🐦‍🔥",
    name: "Phoenix",
    meaning: "A mythical firebird flapping wings, representing immortality, rebirth, regeneration, and climbing out of ashes.",
    category: "animals",
    tags: ["phoenix", "fire", "magic", "rebirth", "immortal"]
  },
  {
    emoji: "🍋‍🟩",
    name: "Lime",
    meaning: "A sour green citrus fruit, representing limeade mocktails, tacos, garnish, and dynamic summer freshness.",
    category: "foods",
    tags: ["lime", "sour", "green", "garnish", "drink"]
  },
  {
    emoji: "🍄‍🟫",
    name: "Brown Mushroom",
    meaning: "A nutritious brown edible fungus, denoting autumn cooking, woodsy stews, and herbal health.",
    category: "foods",
    tags: ["mushroom", "brown", "cook", "stew", "nature"]
  },
  {
    emoji: "⛓️‍💥",
    name: "Broken Chain",
    meaning: "A metal chain link shattering in half, representing breaking free, freedom, liberation, or server disconnections.",
    category: "objects",
    tags: ["chain", "broken", "free", "liberate", "sever"]
  },
  {
    emoji: "🫏",
    name: "Donkey",
    meaning: "A friendly grey donkey, representing farm work, stubborn pride, or travel through canyons.",
    category: "animals",
    tags: ["donkey", "stubborn", "mule", "farm"]
  },
  {
    emoji: "🫎",
    name: "Moose",
    meaning: "A large brown wild moose with antlers, representing Canadian wildlife, woodlands, and alpine heights.",
    category: "animals",
    tags: ["moose", "antlers", "canada", "forest"]
  },
  {
    emoji: "🪿",
    name: "Goose",
    meaning: "A white farm goose, representing pond quacks, countryside walks, or mischievous behaviors.",
    category: "animals",
    tags: ["goose", "quack", "farm", "mischief"]
  },
  {
    emoji: "🐦‍⬛",
    name: "Black Bird",
    meaning: "A generic black crow or raven, representing mystical lore, autumnal nature, or eerie shadows.",
    category: "animals",
    tags: ["crow", "raven", "blackbird", "mystery"]
  },
  {
    emoji: "🪽",
    name: "Wing",
    meaning: "A beautiful white angel wing, representing flight, speed, freedom, protection, or spiritual journeys.",
    category: "animals",
    tags: ["wing", "fly", "angel", "freedom"]
  },
  {
    emoji: "🪼",
    name: "Jellyfish",
    meaning: "A glowing blue bioluminescent jellyfish, denoting ocean stingers, aquarium visits, or alien beauty.",
    category: "animals",
    tags: ["jellyfish", "sea", "sting", "glow", "ocean"]
  },
  {
    emoji: "🪻",
    name: "Hyacinth",
    meaning: "A beautiful purple blooming hyacinth stalk, representing gorgeous spring flowers, sweet fragrances, and bouquets.",
    category: "nature",
    tags: ["flower", "purple", "spring", "hyacinth"]
  },
  {
    emoji: "🫛",
    name: "Pea Pod",
    meaning: "A green veggie pea pod containing small round peas, representing healthy cooking and fresh garden harvests.",
    category: "foods",
    tags: ["peas", "green", "veggie", "diet", "pod"]
  },
  {
    emoji: "🫚",
    name: "Ginger Root",
    meaning: "A gnarly yellow ginger root, representing healing herbal teas, Asian cooking, or herbal spice.",
    category: "foods",
    tags: ["ginger", "spice", "cooking", "tea", "root"]
  },
  {
    emoji: "🪭",
    name: "Folding Hand Fan",
    meaning: "A beautiful red pleated hand fan, representing traditional dances, hot climates, and elegant accessories.",
    category: "objects",
    tags: ["fan", "red", "dance", "hot", "culture"]
  },
  {
    emoji: "🪮",
    name: "Hair Comb",
    meaning: "A wooden comb or detangler, representing daily grooming, beauty salons, and self care.",
    category: "objects",
    tags: ["comb", "hair", "groom", "salon", "care"]
  },
  {
    emoji: "🪈",
    name: "Flute",
    meaning: "A slender transverse woodwind flute, representing classical melodies, folk music, or band concerts.",
    category: "activities",
    tags: ["music", "flute", "wind", "melody"]
  },
  {
    emoji: "🪇",
    name: "Maracas",
    meaning: "A pair of colorful rhythm maracas, representing Latin percussion, carnival parties, and musical joy.",
    category: "activities",
    tags: ["maracas", "percussion", "music", "shake", "party"]
  },
  {
    emoji: "🪯",
    name: "Khanda",
    meaning: "The sacred religious emblem of Sikhism, representing spiritual authority, truth, and faith.",
    category: "signs",
    tags: ["khanda", "sikh", "faith", "religion"]
  },
  {
    emoji: "🛜",
    name: "Wireless",
    meaning: "A blue signal indicator for Wi-Fi and wireless networks, representing internet and telecom connections.",
    category: "objects",
    tags: ["wifi", "internet", "signal", "wireless", "telecom"]
  }
];

// Perform deduplication
const seen = new Set<string>();
const finalCombinedList: EmojiItem[] = [];

for (const item of [...BASE_EMOJI_LIST, ...specialCuratedItems, ...generateDynamicEmojis()]) {
  if (!seen.has(item.emoji)) {
    seen.add(item.emoji);
    finalCombinedList.push(item);
  }
}

export const EMOJI_LIST = finalCombinedList;

