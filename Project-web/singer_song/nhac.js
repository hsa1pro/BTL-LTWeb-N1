const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const hero = $('.hero')
const cdWrapper = $('.cd-wrapper')
const audio = $('#audio')
const playBtn = $('.play-btn')
const progress = $('#progress-input')
const currentTime = $('.current-time')
const timeTotal = $('.time-total')
const itemContainer = $('.music-list .item-container')
const nextBtn = $('.next-btn')
const prevBtn = $('.prev-btn')
const randomBtn = $('.random-btn')
const listBtn = $('.list-btn')
const musicList = $('.music-list')
const playingIcon = $('.playing-icon')
const lyricsContent = $('.lyrics-content')

const app = {
    isPlaying: false,
    isRandom: false,
    isRedo: false,
    displayDiscIcon: false,
    checkClickNumber: 0,
    currentIndex: 0,
    songs: [
        {
            name: 'Nắng Ấm Xa Dần',
            singer: 'Sơn Tùng',
            path: '../songs/Nắng Ấm Xa Dần.mp3',
            image: '../music_img/naxd.jpg',
            lyrics: `Nắng ấm xa dần rồi<br><br> 
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần bỏ rơi để lại những giấc mơ<br><br>
            Giữ lại đi, giữ giữ lại đi<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần, xa dần theo những tiếng cười<br><br>
            Hãy mang đi giúp những nỗi buồn<br><br>
            Theo thời gian những hạt mưa như nặng thêm<br><br>
            Xóa hết thương yêu mặn nồng ngày nào giữa chúng ta<br><br>
            Anh lục tìm, vẫn cứ mãi lục tìm<br><br>
            Giơ bàn tay cố kìm nén những cảm xúc<br><br>
            Vùi mình vào đêm đen, anh chẳng tìm thấy lối ra, oh oh<br><br>
            Sau lưng là tiếng nói yêu anh chẳng rời xa anh (uh uh)<br><br>
            Trước mắt anh điều đấy nó dối trá tại sao người vội quên mau (là vì em)<br><br>
            Bài ca anh viết sẽ không được trọn vẹn đâu em (vội bước đi)<br><br>
            Em yêu một ai thật rồi, mãi chẳng là anh đâu<br><br>
            Vậy thì người cứ bước đi xa nơi này<br><br>
            Ánh bình minh sẽ không còn nơi đây<br><br>
            Bước đi xa nơi này<br><br>
            Những lời yêu sẽ không còn nơi đây<br><br>
            Phải tự đứng lên mà thôi<br><br>
            Che nhẹ đi những niềm đau và nỗi buồn<br><br>
            Xung quanh anh giờ đây cô đơn mình anh ôm giấc mơ (vì ai)<br><br>
            Nhìn em bước ra đi xa dần (eh)<br><br>
            Nhìn em bước ra đi xa dần (eh)<br><br>
            Nhìn em bước ra đi xa dần (eh)<br><br>
            Nhìn em bước ra đi xa dần<br><br>
            M T P<br><br>
            Đến rồi lại đi và cứ vội vàng đi<br><br>
            Trao cho anh bao yêu thương rồi em lại bỏ đi<br><br>
            Gieo cho anh bao nhiêu niềm đau rồi em mau rời bỏ anh xa<br><br>
            Anh quay mặt lặng lẽ quên mau<br><br>
            Uh em yêu quên thật rồi<br><br>
            Uh chẳng một lời chia ly<br><br>
            Quên rồi, em yêu quên rồi, quên rồi<br><br>
            Vậy thì người cứ bước đi xa nơi này<br><br>
            Ánh bình minh sẽ không còn nơi đây<br><br>
            Bước đi xa nơi này<br><br>
            Những lời yêu sẽ không còn nơi đây<br><br>
            Phải tự đứng lên mà thôi<br><br>
            Che nhẹ đi những niềm đau và nỗi buồn<br><br>
            Xung quanh anh giờ đây cô đơn mình anh ôm giấc mơ (là vì ai)<br><br>
            Vậy thì người cứ bước đi xa nơi này<br><br>
            Ánh bình minh sẽ không còn nơi đây<br><br>
            Bước đi xa nơi này<br><br>
            Những lời yêu sẽ không còn nơi đây<br><br>
            Phải tự đứng lên mà thôi<br><br>
            Che nhẹ đi những niềm đau và nỗi buồn<br><br>
            Xung quanh anh giờ đây cô đơn mình anh ôm giấc mơ<br><br>
            Nhìn em bước ra đi xa dần (eh)<br><br>
            Nhìn em bước ra đi xa dần (eh)<br><br>
            Nhìn em, nhìn em bước đi, huh (eh)<br><br>
            Nhìn em bước ra đi xa (eh)<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần bỏ rơi để lại những giấc mơ<br><br>
            Giữ lại đi, giữ giữ lại đi<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần rồi<br><br>
            Nắng ấm xa dần, xa dần theo những tiếng cười<br><br>
            Hãy mang đi giúp những nỗi buồn<br><br>`,
            rank: 1
        },
        {
            name: 'Vẽ',
            singer: 'Trúc Nhân',
            path: '../songs/Vẽ.mp3',
            image: '../music_img/Vẽ.png',
            lyrics: `<br><br>Vẽ giấc mơ bằng những nét nghiêng dại khờ, bằng màu mực ngây thơ<br><br>
            Vẽ hôm nay, tôi vẫn ngồi nơi đây, vẽ mọi điều mê say bằng đôi tay, tôi đã lớn thế này<br><br>
            Vẽ thế gian bằng những nét ngang thẳng hàng, chẳng một vệt lo toan<br><br>
            Tôi cứ đi trên những bước chân chẳng cần nghĩ suy và toan tính trước<br><br>
            Tôi mặc sức vươn mình để...<br><br>
            Vẽ lên trời cao rộng cơn gió lộng nâng nhẹ tôi bay cao<br><br>
            Vẽ nên nỗi nhớ cồn cào trong tim tôi, tôi yêu em mất rồi<br><br>
            Vẽ lên nhành hoa dại, tôi gửi lại cho ngày sau em ơi<br><br>
            Vẽ tôi đang giữa trời sao vẫn bơ vơ, cứ thế đứng ngóng chờ<br><br>
            Vẽ tôi đang ở đâu tôi chìm sâu vào trong cơn mê đắm<br><br>
            Vẽ tôi đi tìm lại những mảnh ghép hàn gắn cuộc đời tôi<br><br>
            Vã tôi xa mù khơi tôi tìm nơi nghỉ ngơi bình yên nhé<br><br>
            Vẽ cho tôi mặt trời, để thức dậy<br><br>
            Vẽ tôi đi tìm tôi, tôi nhận ra đời sao nhiều toan tính<br><br>
            Vẽ những bức họa hình với đường nét màu sắc thật ngỗn ngang<br><br>
            Vẽ tôi đang ở đây, đang ở đây và ôm đàn tôi hát<br><br>
            Vẽ tất cả điều này <br><br> Bằng tiếng hát<br><br>
            Vẽ giấc mơ bằng những nét nghiêng dại khờ, bằng màu mực ngây thơ<br><br>
            Vẽ hôm nay, tôi vẫn ngồi nơi đây, vẽ mọi điều mê say bằng đôi tay, tôi đã lớn thế này<br><br>
            Vẽ thế gian bằng những nét ngang thẳng hàng, chẳng một vệt lo toan<br><br>
            Tôi cứ đi trên những bước chân chẳng cần nghĩ suy và toan tính trước<br><br>
            Tôi mặc sức vươn mình để<br><br>
            Vẽ lên trời cao rộng cơn gió lộng nâng nhẹ tôi bay cao<br><br>
            Vẽ nên nỗi nhớ cồn cào trong tim tôi, tôi yêu em mất rồi<br><br>
            Vẽ lên nhành hoa dại, tôi gửi lại cho ngày sau em ơi<br><br>
            Vẽ tôi đang giữa trời sao vẫn bơ vơ, cứ thế đứng ngóng chờ<br><br>
            Vẽ tôi đang ở đâu tôi chìm sâu vào trong cơn mê đắm<br><br>
            Vẽ tôi đi tìm lại những mảnh ghép hàn gắn cuộc đời tôi<br><br>
            Vã tôi xa mù khơi tôi tìm nơi nghỉ ngơi bình yên nhé<br><br>
            Vẽ cho tôi mặt trời, để thức dậy<br><br>
            Vẽ tôi đi tìm tôi, tôi nhận ra đời sao nhiều toan tính<br><br>
            Vẽ những bức họa hình với đường nét màu sắc thật ngỗn ngang<br><br>
            Vẽ tôi đang ở đây, đang ở đây và ôm đàn tôi hát<br><br>
            Vẽ tất cả điều này <br><br> Bằng tiếng hát<br><br>
            Aye-aye-aye<br><br>
            Badibam badibam<br><br>
            Vẽ lên trời cao rộng cơn gió lộng nâng nhẹ tôi bay cao<br><br>
            Vẽ nên nỗi nhớ cồn cào trong tim tôi, tôi yêu em mất rồi<br><br>
            Vẽ lên nhành hoa dại, tôi gửi lại cho ngày sau em ơi<br><br>
            Vẽ tôi đang giữa trời sao vẫn bơ vơ, cứ thế đứng ngóng chờ Auuu<br><br>
            Vẽ tôi đang ở đâu tôi chìm sâu vào trong cơn mê đắm<br><br>
            Vẽ tôi đi tìm lại những mảnh ghép hàn gắn cuộc đời tôi<br><br>
            Vã tôi xa mù khơi tôi tìm nơi nghỉ ngơi bình yên nhé<br><br>
            Vẽ cho tôi mặt trời, để thức dậy<br><br>
            Vẽ tôi đi tìm tôi, tôi nhận ra đời sao nhiều toan tính<br><br>
            Vẽ những bức họa hình với đường nét màu sắc thật ngỗn ngang<br><br>
            Vẽ tôi đang ở đây, đang ở đây và ôm đàn tôi hát<br><br>
            Vẽ tất cả điều này... Bằng tiếng hát<br><br>`,
            rank: 2
        },
        {
            name: 'Một đêm say',
            singer: 'Thịnh Suy',
            path: '../songs/Một đêm say.mp3',
            image: '../music_img/Một đêm say.png',
            lyrics: `<br><br>Khi đôi môi em còn đỏ mọng<br><br>
            Em muốn nói em yêu <br><br>
            Khi men còn trong hơi thở<br><br>
            Lại gần hôn anh <br><br>
            Khi con tim không còn trên đầu<br><br>
            Khi hai má em hây hây<br><br>
            Em nói em say tiếng đàn<br><br>
            Vậy lại gần hôn anh đi<br><br>
            Lại gần hôn anh<br><br>
            Anh sẽ để em mặt trời<br><br>
            Lại gần hôn anh<br><br>
            Hay em để anh chơi vơi<br><br>
            Giờ còn đôi ta<br><br>
            Kia là núi đây là nhà<br><br>
            Giờ còn đôi ta<br><br>
            Em có muốn đi thật xa<br><br>
            Ta chỉ sống một lần trên đời<br><br>
            Suy nghĩ lắm chi em ơi<br><br>
            Bao nhiêu yêu thương trên đời<br><br>
            Thành vị ngọt trên đôi môi<br><br>
            Lại gần hôn anh<br><br>
            Anh sẽ để em mặt trời<br><br>
            Lại gần hôn anh<br><br>
            Hay em để anh chơi vơi<br><br>
            Giờ còn đôi ta<br><br>
            Kia là núi đây là nhà<br><br>
            Giờ còn đôi ta<br><br>
            Em có muốn đi thật xa<br><br>
            Lại gần hôn anh<br><br>
            Anh sẽ để em mặt trời<br><br>
            Lại gần hôn anh<br><br>
            Hay em để anh chơi vơi<br><br>
            Giờ còn đôi ta<br><br>
            Kia là núi đây là nhà<br><br>
            Giờ còn đôi ta<br><br>
            Em có muốn đi thật xa<br><br>
            Khi đôi môi em còn đỏ mọng<br><br>
            Em muốn nói em yêu anh<br><br>
            Khi men còn trong hơi thở<br><br>
            Lại gần hôn anh đi<br><br>
            Khi đôi môi em còn đỏ mọng<br><br>
            Khi anh nói anh yêu em<br><br>
            Khi anh ta còn say giấc nồng<br><br>
            Lại gần hôn anh đi<br><br>`,
            rank: 3
        },
        {
            name: 'XTC (Xích thêm chút)',
            singer: 'RPT',
            path: '../songs/Xích thêm chút (XTC).mp3',
            image: '../music_img/XTC.jpg',
            lyrics: `<br><br>Em ơi ta hãy yêu như chỉ có đêm nay được yêu<br><br>
            Cho anh say mắt môi em lại có nhạc hay để chill<br><br>
            Sâu trong tâm trí anh chính là nơi em thường tìm đến<br><br>
            Rồi tan vào trong giấc mơ<br><br>
            Ai cho em chút thơ ngọt ngào ấm trong từng hơi thở<br><br>
            Share cho em giấc mơ như bình minh xua tan mây mờ<br><br>
            Yêu em như Redbull vẫn tìm đến trong ly cùng Jager<br><br>
            Hey girl...<br><br>
            Có thể bay bằng hai cách (Yeah)<br><br>
            Bằng máy bay hoặc là Maybach (Yeah)<br><br>
            Chẳng cần cánh đâu anh là Superman (Yeah)<br><br>
            Chẳng phải người máy nhưng anh có Duracell (Yeah, yeah)<br><br>
            Em sexy girl bao anh xin chết<br><br>
            Anh chỉ có một trái tim xanh green heart phải nói là tín đét<br><br>
            Oh baby girl, tonight you are my princess<br><br>
            Ghi tên em vào Guinness... của anh... của anh<br><br>
            Nâng bàn tay của em để biết thời gian đang trôi qua rất nhanh<br><br>
            Hôn bờ môi của em cho cảm xúc anh không mất phanh<br><br>
            Qua nửa đêm trời sáng em mong anh không quên mất em<br><br>
            Quên làm sao lời ca long lanh trong đôi mắt xanh<br><br>
            Lối sống đẹp mình tripping<br><br>
            Volkswagen mình flipping<br><br>
            Let me see your moving<br><br>
            Grooving with Groovie<br><br>
            Lối sống đẹp mình tripping<br><br>
            Volkswagen mình flipping<br><br>
            Let me see your moving<br><br>
            Grooving with Groovie<br><br>
            Anh ơi ta hãy yêu như chỉ có đêm nay được yêu<br><br>
            Cho em say mắt môi anh lại có nhạc hay để chill<br><br>
            Sâu trong tâm trí em chính là nơi anh thường tìm đến<br><br>
            Rồi tan vào trong giấc mơ<br><br>
            Ai cho em chút thơ ngọt ngào ấm trong từng hơi thở<br><br>
            Trao cho em giấc mơ như bình minh xua tan mây mờ<br><br>
            Yêu anh như Redbull vẫn tìm đến trong ly cùng Jager<br><br>
            Hey boy...
            Anh bước vào căn phòng thiêu đốt mọi vật xung quanh<br><br>
            Con tim em nghe tiếng pop của rượu Champage<br><br>
            Không một ai khiến em rạo rực như anh<br><br>
            Đặt vong tay quanh eo này khẽ ôm from the back<br><br>
            You know I like that<br><br>
            Black hoodie with them bluejeans<br><br>
            Tóc messy mùi armani<br><br>
            Cho em lại gần một chút đi<br><br>
            The neckchains and the sex game<br><br>
            Đồng tử giãn lên như là...
            Đưa em vào cõi thần tiên (Yeah)<br><br>
            Baby can you see you are all I need<br><br>
            Yêu anh đến chết ngất đi infinity<br><br>
            Bao nhiêu phiền lo cất đi<br><br>
            'Cause you're here with me<br><br>
            You're my fantasy<br><br>
            You're my XTC<br><br>
            Ò, có 1 cô gái anh đã hút đã nói với anh là<br><br>
            Nếu tất cả mọi người trên thế giới<br><br>
            Đều chơi 1 viên kẹo cùng 1 thời điểm<br><br>
            Thì đúng là thế giới sẽ không còn viên để chữa tránh<br><br>
            Anh nghĩ đấy là một trò đùa<br><br>
            Còn em thì sao?<br><br>
            MCK
            'Cause your pussy feel so good<br><br>
            Nó đã khiến anh rơi vào<br><br>
            Vậy tình yêu là một trò chơi hay là cuộc chiến em khơi mào<br><br>
            Và em giấu đi mọi buồn đau ở sau làn mi<br><br>
            Đến khi nó phai nhạt đi<br><br>
            Và chẳng cần biết em đang cuồng quay ở nơi nào<br><br>
            Em nhìn như prada (Uh, prada)<br><br>
            Anh đã thấy em luôn cười balenciaga (Yeah, oh)<br><br>
            Anh đã lỡ thương người và anh chẳng cần nhiều lời nói<br><br>
            Anh chỉ quan tâm trái tim em có tính yêu đậm sâu<br><br>
            Ta hôn nhau thật lâu<br><br>
            Trong club đèn màu<br><br>`,
            rank: 4
        },
        {
            name: 'Lemon',
            singer: 'Kenshi Yonezu',
            path: '../songs/Lemon.mp3',
            image: '../music_img/Lemon.jpg',
            lyrics: `<br><br>夢ならばどれほどよかったでしょう<br><br>
            未だにあなたのことを夢にみる<br><br>
            忘れた物を取りに帰るように<br><br>
            古びた思い出の埃を払う<br><br>
            戻らない幸せがあることを<br><br>
            最後にあなたが教えてくれた<br><br>
            言えずに隠してた昏い過去も<br><br>
            あなたがいなきゃ永遠に昏いまま<br><br>
            きっともうこれ以上傷つくことなど<br><br>
            ありはしないとわかっている<br><br>
            あの日の悲しみさえ あの日の苦しみさえ<br><br>
            そのすべてを愛してた あなたとともに<br><br>
            胸に残り離れない 苦いレモンの匂い<br><br>
            雨が降り止むまでは帰れない<br><br>
            今でもあなたはわたしの光<br><br>
            暗闇であなたの背をなぞった<br><br>
            その輪郭を鮮明に覚えている<br><br>
            受け止めきれないものと出会うたび<br><br>
            溢れてやまないのは涙だけ<br><br>
            何をしていたの 何を見ていたの<br><br>
            わたしの知らない横顔で<br><br>
            どこかであなたが今<br><br>
            わたしと同じ様な<br><br>
            涙にくれ淋しさの中にいるなら<br><br>
            わたしのことなどどうか忘れてください<br><br>
            そんなことを心から願うほどに<br><br>
            今でもあなたはわたしの光<br><br>
            自分が思うより 恋をしていたあなたに<br><br>
            あれから思うように 息ができない<br><br>
            あんなに側にいたのに まるで嘘みたい<br><br>
            とても忘れられない それだけが確か<br><br>
            あの日の悲しみさえ あの日の苦しみさえ<br><br>
            そのすべてを愛してた あなたとともに<br><br>
            胸に残り離れない苦いレモンの匂い<br><br>
            雨が降り止むまでは帰れない<br><br>
            切り分けた果実の片方の様に<br><br>
            今でもあなたはわたしの光<br><br>`,
            rank: 5
        },
        {
            name: 'Inferno',
            singer: 'Sub Urban & Bella Poarch',
            path: '../songs/INFERNO.mp3',
            image: '../music_img/Inferno.jpg',
            lyrics: `<br><br>No halo
            Baby, I'm the reason why Hell's so hot<br><br>
            Inferno<br><br>
            Baby, I'm the reason why bad's so fun, Hell's so hot<br><br>
            Oh so<br><br>
            Terribly like terrible, she's the villain<br><br>
            One as sweet as caramel, she's my saint<br><br>
            Think I'm getting butterflies, but it's really<br><br>
            Something telling me to run away<br><br>
            No halo<br><br>
            Baby, I'm the reason why Hell's so hot<br><br>
            Inferno<br><br>
            Baby, I'm the reason why bad's so fun, Hell's so hot<br><br>
            Oh so<br><br>
            Na-na-na-na-na-na, yeah, yeah, yeah<br><br>
            Na-na-na-na-na-na, yeah<br><br>
            Bad's so fun, Hell's so hot<br><br>
            Oh so<br><br>
            Manic like a chandelier, crack the ceiling<br><br>
            Marie Antoinette 'cause she's lost her head<br><br>
            Falling for exteriors, as appealing<br><br>
            As they might be, I know I'm afraid<br><br>
            No halo<br><br>
            Baby, I'm the reason why Hell's so hot<br><br>
            Inferno<br><br>
            Baby, I'm the reason why bad's so fun, Hell's so hot<br><br>
            Oh so<br><br>
            Ah, ah<br><br>
            Ah, ah, ah, ah<br><br>
            Ah, ah<br><br>
            Bad's so fun, Hell's so hot<br><br>
            Oh so<br><br>
            Na-na-na-na-na-na, yeah, yeah, yeah<br><br>
            Na-na-na-na-na-na, yeah<br><br>
            Bad's so fun, Hell's so hot<br><br>
            Oh so hot<br><br>`,
            rank: 6
        },
        {
            name: 'How you like that',
            singer: 'BLACKPINK',
            path: '../songs/HowYouLikeThat.mp3',
            image: '../music_img/How you like that.jpg',
            lyrics: `<br><br>BLACKPINK in your area<br><br>
            보란 듯이 무너졌어<br><br>
            바닥을 뚫고 저 지하까지<br><br>
            옷 끝자락 잡겠다고<br><br>
            저 높이 두 손을 뻗어 봐도<br><br>
            다시 캄캄한 이곳에 light up the sky<br><br>
            네 두 눈을 보며, I'll kiss you goodbye<br><br>
            실컷 비웃어라 꼴 좋으니까<br><br>
            이제 너희 하나, 둘, 셋<br><br>
            Ho-how you like that?<br><br>
            You gon' like that, that-that-that-that, that-that-that-that<br><br>
            How you like that? (Bada-bing, bada-boom-boom-boom)<br><br>
            How you like that, that-that-that-that, that-that-that-that?<br><br>
            Now look at you, now look at me, look at you, now look at me<br><br>
            Look at you, now look at me, how you like that?<br><br>
            Now look at you, now look at me, look at you, now look at me<br><br>
            Look at you, now look at me, how you like that?<br><br>
            Your girl need it all and that's a hunnid<br><br>
            백 개 중에 백 내 몫을 원해<br><br>
            Karma come and get some<br><br>
            딱하지만 어쩔 수 없잖아<br><br>
            What's up? I'm right back<br><br>
            방아쇠를 cock back<br><br>
            Plain Jane get hijacked, don't like me?<br><br>
            Then tell me how you like that, like that<br><br>
            더 캄캄한 이곳에 shine like the stars<br><br>
            그 미소를 띠며, I'll kiss you goodbye<br><br>
            실컷 비웃어라 꼴 좋으니까<br><br>
            이제 너희 하나, 둘, 셋<br><br>
            Ho- how you like that?<br><br>
            You gon' like that, that-that-that-that, that-that-that-that<br><br>
            How you like that? (Bada-bing, bada-boom-boom-boom)<br><br>
            How you like that, that-that-that-that, that-that-that-that?<br><br>
            Now look at you, now look at me, look at you, now look at me<br><br>
            Look at you, now look at me, how you like that?<br><br>
            Now look at you, now look at me, look at you, now look at me<br><br>
            Look at you, now look at me, how you like that?<br><br>
            날개 잃은 채로 추락했던 날<br><br>
            어두운 나날 속에 갇혀 있던 날<br><br>
            그때쯤에 넌 날 끝내야 했어<br><br>
            Look up in the sky, it's a bird, it's a plane<br><br>
            Yeah-eh-eh-eh<br><br>
            Bring out your boss, bitch<br><br>
            Yeah-eh-eh-eh<br><br>
            BLACKPINK!<br><br>
            뚜뚜뚜뚜두두, 뚜뚜뚜뚜두두 (how you like that?)<br><br>
            뚜뚜뚜뚜두두, 뚜뚜뚜뚜두두두 (you gon' like that)<br><br>
            뚜뚜뚜뚜두두, 뚜뚜뚜뚜두두 (how you like that?)<br><br>
            뚜뚜뚜뚜두두, 뚜뚜뚜뚜두두두<br><br>`,
            rank: 7
        },
        {
            name: 'Gác lại âu lo',
            singer: 'Da Lab',
            path: '../songs/Gác lại âu lo.mp3',
            image: '../music_img/Gác lại âu lo.jpg',
            lyrics: `<br><br>Anh đi lạc trong sóng gió cuộc đời<br><br>
            Nào biết đâu sớm mai liệu bình yên có tới<br><br>
            Âu lo chạy theo những ánh sao đêm<br><br>
            Ngày cứ trôi chớp mắt thành phố đã sáng đèn<br><br>
            Ta cứ lặng lẽ chạy thật mau<br><br>
            Yêu thương chẳng nói kịp thành câu<br><br>
            Biết đâu liệu mai còn thấy nhau<br><br>
            Thức giấc để anh còn được thấy<br><br>
            Ánh mắt của em nhẹ nhìn anh<br><br>
            Đôi tay này sẽ không xa rời<br><br>
            Tạm gác hết những âu lo lại, cùng anh bước trên con đường<br><br>
            Ta sẽ không quay đầu để rồi phải tiếc nuối những chuyện cũ đã qua<br><br>
            Giữ trái tim luôn yên bình và quên hết những ưu phiền vấn vương<br><br>
            Cuộc đời này được bao lần nói yêu<br><br>
            Anh biết nơi để quay về, em biết nơi phải đi<br><br>                                   
            Anh biết chỗ trú chân dọc đường để tránh cơn mưa hạ đến mỗi chiều<br><br>
            Ta biết trao nhau ân cần, biết mỗi khi vui buồn có nhau<br><br>
            Thời gian để ta trưởng thành với nhau<br><br>
            Nhảy với anh đến khi đôi chân rã rời<br><br>
            Hát anh nghe những câu ca từ ngày xưa cũ<br><br>
            Thì thầm khẽ anh nghe em vẫn còn bao niềm mơ<br><br>
            Ôm lấy anh nghe mưa đầu mùa ghé chơi<br><br>
            Một giây không thấy nhau như một đời cô đơn quá<br><br>
            Trời mù mây bỗng nhiên ngát xanh khi em khẽ cười<br><br>
            Một ngày anh biết hết nguyên do của những yên vui trong đời<br><br>
            Là ngày duyên kiếp kia đưa ta gần lại với nhau<br><br>
            Tạm gác hết những âu lo lại, cùng anh bước trên con đường<br><br>
            Ta sẽ không quay đầu để rồi phải tiếc nuối những chuyện cũ đã qua<br><br>
            Giữ trái tim luôn yên bình và quên hết những ưu phiền vấn vương<br><br>
            Cuộc đời này được bao lần nói yêu<br><br>
            Anh biết nơi để quay về, em biết nơi phải đi<br><br>
            Anh biết chỗ trú chân dọc đường để tránh cơn mưa hạ đến mỗi chiều<br><br>
            Ta biết trao nhau ân cần, biết mỗi khi vui buồn có nhau<br><br>
            Thời gian để ta trưởng thành với nhau<br><br>
            Bờ vai anh rộng đủ để che chở cho em<br><br>
            Was a boy now a man cho em<br><br>
            Từng đi lạc ở trong thế giới điên rồ ngoài kia<br><br>
            Và tình yêu em trao anh ngày ấy đã mang anh về bên em<br><br>
            Yêu em như a fat kid loves cake<br><br>
            Nhắm mắt cảm nhận tình yêu tan dịu ngọt trên môi khi em hôn môi anh đây<br><br>
            Không có happy ending<br><br>
            Mỗi bình minh ta biết thêm trang mới nối dài câu chuyện mình<br><br>
            Như trong mơ nơi xa kia xanh biếc xanh biếc<br><br>
            Thiên đàng bên em nơi đây anh biết anh biết<br><br>
            Bóng đêm đã qua yên bình<br><br>
            Có thêm chúng ta nghe lòng đàn từng câu ca<br><br>
            Cuộc đời này chẳng hề hối tiếc những tháng năm ta đi cùng nhau<br><br>
            Anh biết em luôn ở đó nơi anh thuộc về<br><br>
            Tạm gác hết những âu lo lại, cùng anh bước trên con đường<br><br>
            Ta sẽ không quay đầu để rồi phải tiếc nuối những chuyện cũ đã qua<br><br>
            Giữ trái tim luôn yên bình và quên hết những ưu phiền vấn vương<br><br>
            Cuộc đời này được bao lần nói yêu<br><br>
            Anh biết nơi để quay về, em biết nơi phải đi<br><br>
            Anh biết chỗ trú chân dọc đường để tránh cơn mưa hạ đến mỗi chiều<br><br>
            Ta biết trao nhau ân cần, biết mỗi khi vui buồn có <br><br>
            Thời gian để ta trưởng thành với nhau<br><br>`,
            rank: 8
        },
        {
            name: 'Thức giấc',
            singer: 'Da Lab.',
            path: '../songs/Thức giấc.mp3',
            image: '../music_img/Thức giấc.png',
            lyrics: `<br><br>Sau những con đường quen<br><br>
            Ta đã vô tình đến<br><br>
            Là nụ cười em quẩn quanh với giấc mơ<br><br>
            Nơi những ánh đèn sáng<br><br>
            Ta với khung hình khác<br><br>
            Là bình yên cất giấu trước cuộc đời<br><br>
            Nhìn xem lần sau cuối<br><br>
            Là bao điều tiếc nuối<br><br>
            Tình yêu là thứ khiến em quên đi vài lần yếu đuối<br><br>
            Lặng nhìn giọt sương rơi<br><br>
            Lạc trong màu u tối<br><br>
            Là khi tình yêu ấy đã khiến em thôi những mộng mơ<br><br>
            Anh vẫn thức giấc trên giường với giấc mơ vừa tàn<br><br>
            Bản nhạc vụt tắt, bộ phim kia dừng lại<br><br>
            Nghe tiếng mưa rơi bên thềm anh ngước mắt lặng nhìn<br><br>
            Rồi chờ đợi mãi, vẫn không quay lại<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            Điều gì xảy ra khi chia đôi cơn mơ<br><br>
            Một thực tại kia không có em đợi chờ<br><br>
            Nhìn từng hạt mưa rơi bên hiên vỡ tan<br><br>
            Từng ký ức lỡ mang, sao nỡ quên vội vàng<br><br>
            Ở bên anh thêm một đêm thôi, một đêm thôi, anh đã từng định nói<br><br>
            Nhưng rồi lại lặng im thôi, lặng im thôi vì anh biết không thể trói buộc<br><br>
            Phía trước là bầu trời cao sâu<br><br>
            Sống với những mơ ước thì chẳng được bao lâu<br><br>
            Và tất cả đã hết, sẽ chẳng có hồi kết<br><br>
            Không một câu tạm biệt nhưng cũng chẳng sao đâu<br><br>
            Anh vẫn thức giấc trên giường với giấc mơ vừa tàn<br><br>
            Bản nhạc vụt tắt, bộ phim kia dừng lại<br><br>
            Nghe tiếng mưa rơi bên thềm anh ngước mắt lặng nhìn<br><br>
            Rồi chờ đợi mãi, vẫn không quay lại<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            Lênh đênh trên ranh giới giữa thực tại<br><br>
            Giật mình tỉnh giấc trống không cô đơn<br><br>
            Hay mơ tiếp những giấc mơ chẳng thành<br><br>
            Nhặt nhạnh từng chút hơi ấm em còn đâu đây<br><br>
            Lại là một ngày mới anh thức giấc với thở dài<br><br>
            Lại là một ngày mới đánh thức anh bằng nỗi đau<br><br>
            Dù biết không có phép màu, níu em quay trở lại<br><br>
            Chỉ một lần sau cuối cho anh được thấy hình bóng em<br><br>
            Yea yea ah<br><br>
            Làm sao anh biết mình đang mơ hay thực tại (ah)<br><br>
            It feels so real<br><br>
            Anh quay con quay mong con quay không dừng lại (ah)<br><br>
            Nếu em hiện ra, thì liệu anh có ngần ngại<br><br>
            Thả mình để anh ngã, chìm đắm trên đôi vai<br><br>
            Hay là vùng dậy để tỉnh giấc không bên ai<br><br>
            Nghe nỗi đau thêm dài (ah)<br><br>
            Càng muốn quên càng nhớ kỹ ghi lâu<br><br>
            Trong giấc mơ liệu ta có bên nhau?<br><br>
            Khi anh thấy ở trong vòng tay anh chẳng hề có em<br><br>
            Anh có nên nhắm mắt lại rồi lại đi xuống thêm sâu (ah)<br><br>
            Một mai thức giấc (ah)<br><br>
            Hay sẽ mãi mơ (ah)<br><br>
            Đoạn phim lặp đi lặp lại trong đầu<br><br>
            Anh không biết làm sao để mà anh thoát ra mau<br><br>
            Anh vẫn thức giấc trên giường với giấc mơ vừa tàn<br><br>
            Bản nhạc vụt tắt, bộ phim kia dừng lại<br><br>
            Nghe tiếng mưa rơi bên thềm anh ngước mắt lặng nhìn<br><br>
            Rồi chờ đợi mãi, vẫn không quay lại<br><br>
            Anh vẫn thức giấc trên giường với giấc mơ vừa tàn<br><br>
            Bản nhạc vụt tắt, bộ phim kia dừng lại<br><br>
            Nghe tiếng mưa rơi bên thềm anh ngước mắt lặng nhìn<br><br>
            Rồi chờ đợi mãi, vẫn không quay lại<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            No no no no no no no no no<br><br>
            Baby let me know<br><br>
            Nhìn xem lần sau cuối<br><br>
            Là bao điều tiếc nuối<br><br>
            Tình yêu là thứ khiến em quên đi vài lần yếu đuối<br><br>
            Lặng nhìn giọt sương rơi<br><br>
            Lạc trong màu u tối<br><br>
            Là khi tình yêu ấy đã khiến em thôi những mộng mơ (ohh ohhh)<br><br>`,
            rank: 9
        },
        {
            name: 'Lạc',
            singer: 'Rythmastic',
            path: '../songs/Lạc.mp3',
            image: '../music_img/Lạc.png',
            lyrics: `<br><br>Rhymastic... Space Speakers...<br><br>
            Có những lúc... Âm nhạc không để trải cuộc đời ta...<br><br>
            Chỉ đơn giản... Để kể lại những câu chuyện vô tình ta bắt gặp...<br><br>
            Lạc... Ta lạc vào giữa những dòng trăn trở<br><br>
            Tiệc tan đêm tàn, ta miên man với những tấc thơ<br><br>
            Có bút có mực, có người bạn là những trang vở<br><br>
            Nhẹ nhàng như thế ta cứ lạc vào một giấc mơ<br><br>
            Và ta cũng chẳng nhớ đây là đâu<br><br>
            Có vẻ như ta đang đứng trên một góc phố khu gầm cầu<br><br>
            Trong thân xác 1 thằng nhỏ áo ba lỗ, dắt theo sau 1 đứa em gái mù lòa mà nó chẳng rõ đang đi đâu<br><br>
            Có lẽ là tới con ngõ ở đằng sau<br><br>
            Nơi 1 thằng thanh niên đang đứng chờ và ra dấu<br><br>
            Thoáng giật mình, ta lại lạc giữa 1 lô những hàng lẩu<br><br>
            Tay cẩm rổ kẹo cao su "Cô ơi cô mua dùm cháu"<br><br>
            Đêm qua mau, ta lại thấy mình trong một căn gác<br><br>
            Cạnh thằng thanh niên kia đang ngồi đong đếm từng đồng bạc<br><br>
            Rồi hồn lìa khỏi xác, trở về chiếc bàn thân quen còn chút hơi men nơi cổ họng.<br><br>
            Ta lạc...<br><br>
            Lạc vào trong cơn mơ... Bơ vơ<br><br>
            Khi nơi đây vây kín ta là mịt mờ<br><br>
            Để ta đứng bỡ ngỡ... Thẫn thờ<br><br>
            Phía xa kia ta còn ai đang đợi chờ<br><br>
            Lạc... Ta lạc vào giữa muôn vạn làn khói<br><br>
            Bay thật chậm như thân xác này đang trôi<br><br>
            Miệng muốn nói, tay muốn viết mà như cạn lời<br><br>
            Rồi cứ thế nhắm mắt lại, ta lạc vào trong đêm tối<br><br>
            Gió đang rít hai bên tai<br><br>
            Xung quanh ta bao nhiêu người ta chẳng biết ai là ai<br><br>
            Lạc giữa tiếng xì xào, mọi thứ tối sầm lại<br><br>
            Bỗng nhận ra mẹ đang nằm cạnh ta, mắt mẹ nhắm mãi<br><br>
            Lạc vào trong mơ hồ, ta nghe tiếng khóc mếu<br><br>
            "Mẹ ơi cứu con với" – Đâu đó tiếng thằng nhóc kêu<br><br>
            Đầu ta quay, ta vùng vẫy giữa dòng nước xoáy<br><br>
            Để bỗng thấy có vòng tay ai ôm lấy đây ta không hiểu<br><br>
            Phải chăng cùng một người trao ta 2 lần sự sống<br><br>
            Để đổi lại là linh hồn trở về với hư không<br><br>
            Ta lạc một lần nữa giữa những tiếc khóc vô vọng<br><br>
            Giữa những nén nhang, chiếc khan tang và nắp quan tài đã đóng...<br><br>
            Ta lạc...<br><br>
            Lạc vào trong cơn mơ... Bơ vơ<br><br>
            Khi nơi đây vây kín ta là mịt mờ<br><br>
            Để ta đứng bỡ ngỡ... Thẫn thờ<br><br>
            Phía xa kia ta còn ai đang đợi chờ<br><br>
            Và ta lạc giữa dòng kí ức năm xưa<br><br>
            Khi ta còn có bố lo miếng ăn ngày dăm bữa<br><br>
            Đứa em gái mới ngày nào còn đang thời ẵm ngửa<br><br>
            Giờ đã lon ton chạy đùa dưới những góc nắng ban trưa<br><br>
            Đâu còn nữa những ngày tháng vui vẻ bên nhau<br><br>
            Khi những bữa cơm dần bị bố thay bằng những đêm nhậu<br><br>
            Chén rượu đầy bố uống cạn để cho quên sầu<br><br>
            Và để thay những nụ cười bằng những trận đánh ngày một thêm đau<br><br>
            Đến một ngày, khi những trận đòn vượt qua tầm kiểm soát<br><br>
            Đứa em gái tội nghiệp vô tình bị mảnh chai đâm vào mắt<br><br>
            Miệng nó khóc, máu nó chảy, tay nó nắm thật chặt<br><br>
            Ta kéo nó chạy, bỏ lại sau lưng tiếng la mắng quát nạt<br><br>
            Và tiếng chửi vẫn cứ đuổi theo mỗi con phố ta qua<br><br>
            Đến khi ta nghe tiếng xe đâm mạnh và tiếng bố ta la<br><br>
            Đó là khi ta lạc giữa mông lung và sợ hãi<br><br>
            Cứ thế ta đi lạc, mãi không thể trở lại...<br><br>
            Lạc vào trong cơn mơ... Bơ vơ<br><br>
            Khi nơi đây vây kín ta là mịt <br><br>
            Để ta đứng bỡ ngỡ... Thẫn thờ<br><br>
            Phía xa kia ta còn ai đang đợi chờ Ta lạc giữa những thân quen<br><br>
            Lạc trong cơn say mềm<br><br>
            Lạc giữa những xô bồ<br><br>
            Ta lạc giữa những góc phố...<br><br>
            Lạc trong bao đêm lạnh...<br><br>
            Lạc giữa những âm thanh...<br><br>
            Ta lạc giữa những chơi vơi...<br><br>
            Rồi lạc vào một mảnh đời...<br><br>`,
            rank: 10
        },
        {
            name: 'Playah',
            singer: 'Soobin Hoàng Sơn',
            path: '../songs/Playah.mp3',
            image: '../music_img/Playah.jpg',
            lyrics: `<br><br>Đoạn 1:
            <br><br>Em đã ra khỏi bầy<br><br>
            Thu hút anh đêm nay<br><br>
            Thiêu đốt nơi này như ngọn đèn rọi vào màn đêm tối<br><br>          
            Đôi trái tim còn dại lắm<br><br>
            Tới khúc sau còn dài lắm<br><br>       
            Mời em ly Whisky thôi thì look at me nha<br><br>         
            Đứng giữa chốn xa hoa em yêu kiều đến lạ<br><br>       
            Dáng dấp nữ nhân kia như bức tranh sắc họa<br><br>      
            6 mét cách xa nhau anh thu lại phút một<br><br>
            Anh đặt cược vào em đêm nay<br><br>           
            Trò chơi mà<br><br>           
            Có lẽ do anh vô tâm nên em thành vô hình<br><br>            
            Thả trôi nào<br><br>           
            Giữa những đôi môi vô tư nhưng anh lại vô tình<br><br>           
            Trò chơi mà<br><br>            
            Có lẽ do anh vô tâm nên em thành vô hình<br><br>            
            Thả trôi nào<br><br>          
            Giữa những đôi môi vô tư nhưng anh lại vô tình x2<br><br><br><br>           
            Đoạn 2:<br><br>           
            Let Go<br><br>          
            Hai tay lân la đệm đàn dọc xương hai bên vai em run lên<br><br>          
            Không gian trong đêm lả lướt đê mê trôi theo men say lòng ngất ngây<br><br>         
            Chẳng nghĩ đến ưu phiền rồi<br><br>         
            Chìm đắm trong cuồng điên<br><br>          
            Rồi thì ngày sau có nhớ đến nhau không lady<br><br><br><br>          
            Đoạn 3:<br><br>        
            Có lẽ anh không như người khác đâu<br><br>          
            Hai tay dang rộng ba bốn thước<br><br>         
            Anh đâu cần phải biết trước<br><br>`,
            rank: 11
        },
        {
            name: 'Big city boi',
            singer: 'Binz',
            path: '../songs/Big City Boy.mp3',
            image: '../music_img/Big city boi.jpg',
            lyrics: `<br><br>Em on top, không phải trending<br><br>
            Không phải YouTube, không phải trên Zing<br><br>
            Anh on top, em ở trên anh<br><br>
            Beat Touliver drop người ta gọi tên anh<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city-Spacespeakers in da house make some mother fucker noise ay<br><br>
            Thả tim đầy story em (thả)<br><br>
            Nhắn tin đầy trong DM (slide)<br><br>
            Có phiền thì sorry em (sorry)<br><br>
            Đón, 10 giờ pm? (ten)<br><br>
            Yea em thích coi sea game (dô)<br><br>
            Hợp âm anh thích là Cm (đô)<br><br>
            Xe em thích BM<br><br>
            Việc anh thích là see em<br><br>
            Trói em bằng cà vạt (trói)<br><br>
            Penhouse trên Đà Lạt (đồi)<br><br>
            Nếu mà ngoan em sẽ bị thương (đôi)<br><br>
            Nếu mà hư em sẽ được phạt<br><br>
            K-r-a-z-y about u<br><br>
            Hay là mang thêm friend đi không sao đâu<br><br>
            Yea anh không thường say yes<br><br>
            Với em không thể say no<br><br>
            Nhìn anh lúc nào cũng fresh<br><br>
            Make them haters say wow<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city-Spacespeakers in da house make some mother fucker noise<br><br>
            Shall we up all night, what u gonna do<br><br>
            Ngay sát DJ, what u gonna do<br><br>
            Them bottles keep coming, what u gonna do<br><br>
            Thành phố này không ngủ, tell me what u gonna do, ay<br><br>
            Từ lầu cao cho tới cuối ngõ<br><br>
            Mang chất đường phố về tận lối nhỏ<br><br>
            Đáy quần vẫn dưới gối oh<br><br>
            Rap game này anh đại diện không thể chối bỏ<br><br>
            Nhạc đơn giản, không phải cầu kì<br><br>
            Đừng hỏi anh tình yêu màu gì (không biết)<br><br>
            Mấy thằng ghét anh muốn spotlight<br><br>
            Sorry anh là cầu chì<br><br>
            Không lòng vòng anh như Hải Phòng (gang gang)<br><br>
            Thích anh rồi phải không? (gia)<br><br>
            Không cần vội em như Hà Nội (trưởng)<br><br>
            Cần thêm thời gian em mới trải lòng<br><br>
            Cần em như anh Cần Thơ (Cần Thơ)<br><br>
            Thật ra anh chỉ muốn em gần hơn (gần chút)<br><br>
            Thật ra anh chỉ muốn ta tương tác<br><br>
            Anh còn chưa ngủ, em nói ngừng mơ<br><br>
            Không chịu ngủ anh như Sài Gòn (Sài Gòn)<br><br>
            Party với bạn all night long (all night)<br><br>
            Nếu mà đó là, đó là thứ em muốn (tell me)<br><br>
            Anh có thể làm cho em, cho em hài lòng<br><br>
            Nghiện thuốc có thể Lào Cai (cai)<br><br>
            Nhưng nghiện em không thể nào cai (không cần)<br><br>
            Trai hư anh không phải diễn<br><br>
            Nhưng trai tốt anh phải vào vai<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city-Spacespeakers in da house make some mother fucker<br><br>
            Shall we up all night, what u gonna do<br><br>
            Ngay sát DJ, what u gonna do<br><br>
            Them bottles keep coming, what u gonna do<br><br>
            Thành phố này không ngủ, tell me what u gonna do, ay<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city boi<br><br>
            Big city<br><br>
            Big city-Spacespeakers in da house make some mother fucker noise<br><br>
            Shall we up all night, what u gonna do<br><br>
            Ngay sát DJ, what u gonna do<br><br>
            Them bottles keep coming, what u gonna do<br><br>
            Thành phố này không ngủ, tell me what u gonna do, ay<br><br>`,
            rank: 12
        },
    ],
    loadSongList() {
        const html = this.songs.map((song, index) => {
            return `<div class="item ${index === this.currentIndex ? 'active' : ''}" id="${index === this.currentIndex ? 'musicList-item-' + index : ''}" data-index = ${index}>
                    <span id="song-rank${song.rank}" class="song-rank">${song.rank}</span>
            <div class="song-avatar" style="background-image: url('${song.image}');"></div>
                    <div class="song-infomation">
                        <span>
                            <p class="name">${song.name}</p>
                            <p class="author">${song.singer}</p>
                        </span>
                        <span class="info-bonus"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </div>`
        }).join('')
        itemContainer.innerHTML = html
    },
    loadCurrentSong() {
        const html = `  <div class="cd" style="background-image: url('${this.songs[this.currentIndex].image}');">
                        </div>
                        <div class="ranking ranking${this.songs[this.currentIndex].rank}">${this.songs[this.currentIndex].rank}</div>
                        <div class="song-info">
                            <p class="song-name">${this.songs[this.currentIndex].name}</p>
                            <span class="singer">${this.songs[this.currentIndex].singer}</span>
                        </div>`
        cdWrapper.innerHTML = html

        // Load song lyrics
        lyricsContent.innerHTML = this.songs[this.currentIndex].lyrics

        audio.src = `${this.songs[this.currentIndex].path}`

        //Adjust playingIcon pot into the song (on music list) is playing
        playingIcon.style.top = `calc(36px + 24px + 80px * ${this.currentIndex})`

        //load Song-List after render current song
        this.loadSongList()

        this.scrollIntoViewCurrentSongInMusicList()
    },
    loadNextSong() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    loadPrevSong() {
        if (this.currentIndex > 0) {
            this.currentIndex--
        }
        this.loadCurrentSong()
    },
    loadRandomSong() {
        this.currentIndex = Math.floor(Math.random() * this.songs.length)
        this.loadCurrentSong()
    },
    scrollIntoViewCurrentSongInMusicList() {
        const currentItem = document.getElementById(`musicList-item-${this.currentIndex}`)
        setTimeout(() => {
            currentItem.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }, 300)
    },
    handleAudio() {
        if (this.isPlaying) {
            audio.play()
        } else {
            audio.pause()
            currentTime.innerHTML = '0:00'
            progress.value = 0
        }
    },
    handleEvents() {
        const _this = this
        //Handle when click on play button
        playBtn.onclick = () => {
            if (_this.isPlaying) {
                _this.isPlaying = false
                audio.pause()
                playBtn.innerHTML = `<i class="fas fa-play"></i>`
                playingIcon.classList.remove('active')
            } else {
                _this.isPlaying = true
                audio.play()
                playBtn.innerHTML = `<i class="fas fa-pause"></i>`
                playingIcon.classList.add('active')
            }
        }
        // Handle when song is playing
        audio.ontimeupdate = () => {
            if (audio.duration) {
                const progressPercent = audio.currentTime / audio.duration * 100
                // update value of progess and display on progress bar
                progress.value = progressPercent

                //display current-time
                const currentTimeMinute = Math.floor(audio.currentTime / 60)
                const currentTimeSecond = Math.floor(audio.currentTime - currentTimeMinute * 60)
                if (currentTimeSecond >= 10) {
                    currentTime.innerHTML = `${currentTimeMinute}:${currentTimeSecond}`
                } else {
                    currentTime.innerHTML = `${currentTimeMinute}:0${currentTimeSecond}`
                }
                //display song duration
                const durationMinute = Math.floor(audio.duration / 60)
                const durationSecond = Math.floor(audio.duration - durationMinute * 60)
                if (durationSecond >= 10) {
                    timeTotal.innerHTML = `${durationMinute}:${durationSecond}`
                } else {
                    timeTotal.innerHTML = `${durationMinute}:0${durationSecond}`
                }
                //when end current song
                if (audio.currentTime === audio.duration) {
                    // normal mode
                    if (!_this.isRandom) {
                        if (!_this.isRedo) {
                            _this.loadNextSong()
                            audio.play()
                        }
                    }
                    // redo mode
                    if (_this.isRedo) {
                        if (!_this.isRandom) {
                            _this.loadCurrentSong()
                            audio.play()
                        }
                    }
                    // random mode
                    if (_this.isRandom) {
                        if (!_this.isRedo) {
                            _this.loadRandomSong()
                            audio.play()
                        }
                    }
                }
            }
        }
        //Handle when seek the song by click on progress input
        progress.oninput = () => {
            audio.currentTime = progress.value / 100 * audio.duration
        }
        //Handle when the users click on next button
        nextBtn.onclick = () => {
            nextBtn.classList.add('active')
            setTimeout(() => {
                nextBtn.classList.remove('active')
            }, 200)
            // Handle random mode is actived or not
            if (_this.isRandom) {
                _this.loadRandomSong()
                _this.handleAudio()

            } else {
                _this.loadNextSong()
                _this.handleAudio()
            }
        }
        //Handle when the users click on prev button
        prevBtn.onclick = () => {
            prevBtn.classList.add('active')
            setTimeout(() => {
                prevBtn.classList.remove('active')
            }, 200)
            // when random mode is actived or not
            if (_this.isRandom) {
                _this.loadRandomSong()
                _this.handleAudio()
            } else {
                _this.loadPrevSong()
                _this.handleAudio()
            }
        }
        //Handle when users turn on random mode or redo mode
        randomBtn.onclick = () => {
            _this.checkClickNumber++
            switch (_this.checkClickNumber) {
                // random mode
                case 1:
                    randomBtn.classList.remove('redo-mode')
                    randomBtn.innerHTML = '<i class="fas fa-random"></i>'
                    _this.isRandom = true
                    _this.isRedo = false
                    randomBtn.classList.add('active')
                    break
                // redo-mode
                case 2:
                    _this.isRedo = true
                    _this.isRandom = false
                    randomBtn.classList.add('redo-mode')
                    randomBtn.innerHTML = '<i class="redo-icon fas fa-redo"></i>'
                    break
                // normal mode
                case 3:
                    _this.isRedo = false
                    _this.isRandom = false
                    randomBtn.classList.remove('active')
                    randomBtn.innerHTML = '<i class="fas fa-random"></i>'
                    _this.checkClickNumber = 0
                    break
            }
        }
        // Handle when users click on list button
        listBtn.onclick = () => {
            _this.displayDiscIcon = !(_this.displayDiscIcon)
            musicList.classList.toggle('active')
            cdWrapper.classList.toggle('hide')
            if (_this.displayDiscIcon) {
                listBtn.innerHTML = '<i class="fas fa-compact-disc disc-icon" data-id="disc-icon"></i>'
            } else {
                listBtn.innerHTML = '<i class="fas fa-list-alt"></i>'
            }
        }
        // Listen click on the playlist behaviour
        musicList.onclick = (e) => {
            const songNode = e.target.closest('.item:not(.active)')
            if (songNode || e.target.closest('.info-bonus')) {
                // Handle when click on a song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    songNode.classList.add('active')
                    _this.handleAudio()
                }
            }
        }
    },

    start() {
        this.handleEvents()
        this.loadCurrentSong()
    }
}

app.start()