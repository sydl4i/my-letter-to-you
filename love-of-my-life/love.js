var c = 0;

var when = ["let me rest my head on your shoulder", "intertwine your fingers with mine", "listen to me as I talk senseless", "send me something that made you chuckle", "look at me in silence", "are there for me", "look through your camera roll", "hold me close", "squeeze my hand tighter to nudge me", "feel good about yourself", "check on the solfish Instagram account", "hug me and smell like you", "read books in my room while I'm busy", "are present in any form", "share this-is-us memes", "define your practice with me", "soothe insecure me", "interact with my neocities site", "call me", "share your newest screenplay", "explain your family history with me", "send me pictures of cats", "offer me the eggs you don't want", "tell me I smell nice", "use words you have to explain the definitions of", "send a picture of my face as a reaction", "indulge in my dreams, as I do yours", "make me feel secure instead of desperate", "find ways to hug regardless of how uncomfortable it may be", "hold my drinks for me", "make executive decisions when I'm not right of mind", "eat in with me", "buy that random guy a meal", "do multiple takes of how you jump into the bed while we video call", "talk so deeply and lucidly about the things you care about", "listen to YouTube video essays in the car with me", "hug your family hello and goodbye", "hold the car door open for me", "hate on straight liquor, especially vodka", "walk on the outside of the sidewalk", "blow my hair out of my face", "carry me when I complain about my feet hurting", "shape me as I shape you", "pause in conversation until you can get your thoughts together", "talk about things I know nothing of", "know the answer to my random question", "know how to sense when I am grieving, and give me the space I need to mourn", "sense when I am upset", "offer to fight other people for me", "are near me", "exclaim how much you love the food you are eating", "send me something even if you think I've already seen it", "share pieces of your heart with me", "let me take the aux even if I play the same songs over and over", "let your full body weight rest on me when you fall into me", "take me under your wing", "let me play games on your phone", "recount to me your latest Wikipedia article read", "can sense when something's wrong, you know me", "listen to my newest revelation about my psyche", "save the best parts of the snack for me", "hold me in your arms when I cry", "kiss my tears away", "witness that we're becoming something greater", "tell me how much you love our hometown", "look at me intently as you play a questionably humorous video, waiting for validation of some form", "send me food when we're thousands of miles away", "listen to me ramble about the dream I had last night", "touch me and help me feel that I am real", "tell me of your excrutiating airplane piss situation", "mess with me when we play online games", "unknowingly knowingly creating porn on gartic phone", "tell me about all the art you make, or want to make, or are trying to make", "share with me the milestones you and your band are reaching or have crossed", "insist on calling me nicknames I only half put up with", "send me the best pieces you saw at the museum", "support me as best you can when some random allergies take me by storm", "share with me that drain music I don't quite get", "have your voice shift a little as you speak to me &mdash; and only me", "turn and hold me while we sleep", "lock your arms around me when I try to escape", "offer to lend me your jacket", "let me hold onto your shirt", "listen to me when no one else is", "defy expectations every single day", "waited for me outside class", "bring me along", "invite me to experience your culture", "tell me 'i love you' so many times without even knowing", "stay up for me, even though we both know you're so soo sleepy", "try very hard to hide your gift from me, which I sometimes find anyway", "make me feel all this love, even from a distance", "are loved by all your friends", "make me a pina colada", "know what I would take first in a fire", "go along with my silly plans", "get a mouse after my relentless insistence", "don't laugh at me when I horrendously mispronounce a word", "look at me in a crowd like you only see me", "wrap your arms around my waist and whisper the foulest gen alpha slang", "hold my backpack for me", "pat my knee in the car to check on how I'm doing", "tell me about the butter thing that happens when you stop holding hands because of an obstacle...I've clearly forgotten", "pull me back in for a little longer when we're about to say goodbye", "cry with me", "respond to my chaos with your own chaos", "tell me about Berserk", "call me every day, without fail", "make bomb spaghetti", "help me read over that email or application", "know every thing I'm referencing"];

function shuffle(array) {
    array.sort(()=>Math.random() - 0.5);
}

// shuffle on start
$(function() {
    shuffle(when);
});

$(document).click(function(e) {
    if (e.button == 0) {
        $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);
        c++;
        if (c == when.length) {
            $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

            $("body").css('background', '#000');
            $("#g p").css('color', '#fff');

            $(document).unbind("click");

        }
    }
});
