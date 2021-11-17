const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const hero = $('.hero')
const cdWrapper = $('.cd-wrapper')
const audio = $('#audio')
const playBtn = $('.play-btn')
console.log(playBtn)
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
            name: 'Phía Sau Một Cô Gái',
            singer: 'Soobin Hoàng Sơn',
            path: '../songs/Phía Sau Một Cô Gái.mp3',
            image: '../music_img/Phía Sau Một Cô Gái.jpg',
            lyrics: `<br><br>
                1. Nhiều khi anh mong được một lần nói ra hết tất cả thay vì<br><br>
                Ngồi lặng im nghe em kể về anh ta bằng đôi mắt lấp lánh<br><br>
                Đôi lúc em tránh ánh mắt của anh<br><br>
                Vì dường như lúc nào em cũng hiểu thấu lòng anh<br><br>
                Không thể ngắt lời, càng không thể để giọt lệ nào được rơi<br><br><br>

                [ĐK:]<br><br>
                Nên anh lùi bước về sau để thấy em rõ hơn<br><br>
                Để có thể ngắm em từ xa âu yếm hơn<br><br>
                Cả nguồn sống bỗng chốc thu bé lại vừa bằng một cô gái<br><br><br>

                Hay anh vẫn sẽ lặng lẽ kế bên<br><br>
                Dù không nắm tay nhưng đường chung mãi mãi<br><br>
                Và từ ấy ánh mắt anh hồn nhiên đến lạ<br><br><br>

                2. Chẳng một ai có thể cản được trái tim khi đã lỡ yêu rồi<br><br>
                Đừng ai can ngăn tôi khuyên tôi buông xuôi vì yêu không có lỗi<br><br>
                Ai cũng ước muốn khao khát được yêu<br><br>
                Được chờ mong tới giờ ai nhắc đưa đón buổi chiều<br><br>
                Mỗi sáng thức dậy được ngắm một người nằm cạnh ngủ say<br><br><br>

                * Vì sao anh không thể gặp được em sớm hơn.<br><br>`,
            rank: 1
        },
        {
            name: 'Nếu Em Còn Tồn Tại',
            singer: 'Trịnh Đình Quang',
            path: '../songs/Nếu Em Còn Tồn Tại.mp3',
            image: '../music_img/Nếu Em Còn Tồn Tại.jpg',
            lyrics: `<br><br>
                Khi anh bắt đầu một tình yêu <br><br>
                Là lúc anh tự thay đổi mình <br><br>
                Không còn những đêm về khuya <br><br><br>

                Là vì em, người cho anh suy nghĩ phải sống tốt <br><br>
                Là vì em, tình yêu của em đáng được trân trọng <br><br>
                Thay vì phải xin lỗi, anh muốn tự mình thay đổi <br><br>
                Anh sẽ lo lắng về anh, như em đã từng <br><br>
                Cố gắng vun đắp mà không thành<br><br><br>

                [ĐK:] <br><br>
                Hứa với mình rằng em không được gục ngã <br><br>
                Anh muốn nhìn thấy em cười dù là cách xa <br><br>
                Anh sẽ vẫn tiếp tục để người ta nhìn em <br><br>
                Bằng sự nuối tiếc khi đã vô tình bỏ rơi em <br><br><br>

                Anh sẽ trở về xin em em đừng buồn <br><br>
                Hãy mạnh mẽ chờ bình minh trong cô đơn <br><br>
                Ngày mai sẽ vẫn là một ngày tuyệt vời <br><br>
                Khi em vẫn tồn tại trên thế giới này. <br><br>`, 
            rank: 2
        },
        {
            name: 'Ai Là Người Thương Em',
            singer: 'Quân A.P',
            path: '../songs/Ai Là Người Thương Em.mp3',
            image: '../music_img/Ai Là Người Thương Em.jpg',
            lyrics: `<br><br>
                Người con gái anh từng yêu sao rồi?<br><br>
                Có một mình đi dưới mưa lúc buồn?<br><br>
                Lệ còn rơi khi ngồi xem thước phim buồn?<br><br>
                Ôm thật chặt vào ai khóc như đứa trẻ?<br><br>
                Người con gái anh từng yêu quên rồi<br><br>
                Có những chiều tay nắm tay ngóng đợi<br><br>
                Hoàng hôn xuống ta kề vai nói những lời<br><br>
                Rằng đôi ta sẽ chỉ cần nhau thôi<br><br>
                Hà ha ha ha há ha hà ha<br><br>
                Cô gái anh yêu hay quan tâm anh và nhắc anh bao điều<br><br>
                Em thích hoa hồng và mùa đông được anh ôm phía sau lưng<br><br>
                Em nói bên anh qua bao nơi em cảm thấy rất nhẹ nhàng<br><br>
                Vậy giờ ai là người cho em yên bình?<br><br>
                Em muốn xa anh khi yêu thương đang gìn giữ vẫn an lành<br><br>
                Xóa những hi vọng một tình yêu và hai trái tim xanh<br><br>
                Quên hết bao năm đi bên em anh thật không thể làm được<br><br>
                Người mình thương giờ chẳng nhớ tên quen thuộc<br><br>
                Người mình thương giờ chẳng nhớ tên anh rồi.<br><br>`,
            rank: 3
        },
        {
            name: 'Chạm Đáy Nỗi Đau',
            singer: 'ERIK',
            path: '../songs/Chạm Đáy Nỗi Đau.mp3',
            image: '../music_img/Chạm Đáy Nỗi Đau.jpg',
            lyrics: `<br><br>
                Luôn bên em là tôi... lâu nay không chút thay đổi...<br><br>
                Thế nhưng bây giờ em muốn chia tay vì: Tôi vẫn còn trẻ con<br><br>
                Babe! Kajima! Stay here with me! Kajima!<br><br>
                Hụt hẫng...<br><br>
                Gạt nước mắt nhớ ngày buồn nhất...<br><br><br>

                Không muốn ai thay mình chăm sóc em những ngày tới!<br><br>
                Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...<br><br>
                Em bước đi nhẹ nhàng... (Em đang xa tôi nhẹ nhàng)<br><br>
                Nhưng trong anh bão tố! (Giấu hết bão tố trong tim)<br><br><br>

                (Chorus)<br><br>
                Nghẹn câu: "Em đừng đi nữa..."<br><br>
                Nhưng tại môi mím chặt chẳng thể một lần nói ra...<br><br>
                Chẳng ai có thể chỉ một ngày mà tốt hơn<br><br>
                Chẳng lầm lỗi nào chỉ một giây mà xóa mờ<br><br>
                Mình không thể lâu dài, chỉ vì tôi ngây ngô!<br><br>
                (Ngốc nghếch nên tình thơ mới chết<br><br>
                Vô vọng trong bóng tối mình tôi)<br><br>
                Thời gian sẽ minh chứng tất cả<br><br>
                Và cũng có thể ngoảnh đi bỏ mặc chúng ta..<br><br>
                Ngón tay ấy buông xuôi vì chẳng cần tôi ở bên<br><br>
                Đã từ chối cơ hội để đợi tôi vững vàng<br><br>
                Ngồi khóc giữa cơn mưa, mới thấu đâu là..<br><br>
                Chạm Đáy của Nỗi Đau...<br><br><br>

                (Giang tấu)<br><br>
                Ngày cuối ở bên<br><br>
                Môi tôi không thể nuôi can đảm để thốt lên<br><br>
                Rời xa vòng tay<br><br>
                Em cho tôi cảm giác nhung nhớ đến thế nào<br><br>
                Từ biệt chưa nói câu chào mà sao muốn bước đi vội?<br><br>
                Mới có nhau thôi lại xóa hết những yêu thương rồi?<br><br><br>

                Bàn tay tôi nắm chặt<br><br>
                Ngước lên bầu Trời để nước mắt không tuôn rơi<br><br>
                Người là ánh sáng dẫn tôi tìm những giấc mơ<br><br>
                Giờ phía trước mịt mù trong bóng tối<br><br>
                Nỗi sợ I'm losing you...<br><br><br>

                (Ver 2)<br><br>
                Babe! Kajima! Stay here with me! Kajima!<br><br>
                Hụt hẫng...<br><br>
                Gạt nước mắt nhớ ngày buồn nhất...
                Từ sâu trong lòng<br><br>
                Không muốn ai thay mình chăm sóc em những ngày tới!<br><br>
                Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...<br><br>
                Em bước đi nhẹ nhàng... (Em đang xa tôi nhẹ nhàng)<br><br>
                Nhưng trong anh bão tố! (Giấu hết bão tố trong tim)<br><br><br>

                (Chorus cuối)<br><br>
                Babe! Babe! Kajima!<br><br>
                Babe! Kajima!<br><br>
                Mình không thể lâu dài, chỉ vì tôi ngây ngô!<br><br><br>

                Thời gian sẽ minh chứng tất cả<br><br>
                Và cũng có thể ngoảnh đi bỏ mặc chúng ta..<br><br>
                Ngón tay ấy buông xuôi vì chẳng cần tôi ở bên<br><br>
                Đã từ chối cơ hội để đợi tôi vững vàng<br><br>
                Ngồi khóc giữa cơn mưa, mới thấu đâu là<br><br><br>
                Chạm Đáy của Nỗi Đau...<br><br>

                Không muốn ai thay mình chăm sóc em những ngày tới!<br><br>
                Thoáng nghĩ đã đau lòng nhưng trách ai đây ngoài tôi...<br><br>`,
            rank: 4
        },
        {
            name: 'Loving You (Sunny)',
            singer: 'Kimmese Ft. Đen',
            path: '../songs/Loving You.mp3',
            image: '../music_img/Loving You.jpg',
            lyrics: `<br><br>
                [Intro: Đen]<br><br>
                Thoát ra mối sầu đêm nay<br><br>
                Cho em gối đầu lên tay<br><br>
                Không cần thuê người tư vấn<br><br>
                Yên tâm mình sẽ tự phối màu thêm hay<br><br>
                Anh sẽ pha màu nhạt khói<br><br>
                Vào màu trầm của môi em<br><br>
                Và nếu bên nhau là lạc lối<br><br>
                Thì mình cứ để mọi thứ kia trôi êm<br><br><br>

                [Verse 1: Kimmese]<br><br>
                I wish you could give me another chance<br><br>
                Have you ever thought of us as a future plan<br><br>
                Inside my heart, I know I don't wanna give up<br><br>
                Until I can have your love<br><br>
                I know it's worth it baby<br><br>
                I know what makes me happy is you<br><br>
                Nobody could<br><br>
                Kiss me like the way you do<br><br>
                The way you talk to me yeah<br><br>
                I don't need no drugs only your love make me feel that high<br><br>
                Sunny that's why I love you<br><br><br>

                [Chorus: Kimmese]<br><br>
                Only you can make me feel in love again<br><br>
                Picture me in the battle, finding you again<br><br>
                I can feel the sunshine in me one more time<br><br>
                Whenever I see your green eyes<br><br>
                That's why I love you Sunny<br><br>
                Here's my heart just take it everywhere you go<br><br>
                Destiny will bring me back to you for sure<br><br>
                Woah... I know you got everything I want<br><br>
                If you still love me<br><br>
                Give me a chance<br><br>

                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh.., Sunny<br><br>
                You<br><br>

                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh... Sunny<br><br>
                You<br><br><br>

                [Verse 2: Kimmese]<br><br>
                You're amazing you're unique<br><br>
                And you're bad<br><br>
                Your lifestyle, interesting, passionate<br><br>
                And I adore you, by the way you carry yourself<br><br>
                Babe, you do it so well<br><br>
                And I like that, like that<br><br><br>

                I wanna show you my real world<br><br>
                No acting up, no playing games<br><br>
                No walls<br><br>
                Just spend with me and you will see<br><br>
                We are meant to be<br><br>
                Cause I'm yours, babe<br><br><br>

                [Chorus: Kimmese]<br><br>
                Only you can make me feel in love again<br><br>
                Picture me in the battle, finding you again<br><br>
                I can feel the sunshine in me one more time<br><br>
                Whenever I see your green eyes<br><br>
                That's why I love you Sunny<br><br><br>

                Here's my heart just take it everywhere you go<br><br>
                Destiny will bring me back to you for sure<br><br>
                Woah... I know you got everything I want<br><br>
                If you still love me<br><br>
                Give me a chance<br><br><br>

                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh... Sunny<br><br>
                You<br><br>

                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh... Sunny<br><br>
                You<br><br><br>

                [Verse 3: Đen]<br><br>
                Em không cần mặc đẹp, vì anh thích lôi thôi<br><br>
                Giam em bằng vòng tay rộng<br><br>
                Và tra tấn em bằng đôi môi<br><br>
                Lòng mình vui như tết á, không cần chờ đêm ba mươi<br><br>
                Thả mình vào trong biển lớn, không cần buồm mà ra khơi<br><br>
                Vì mình có quá nhiều ngày cô đơn nên ngày bên em dường như là không đủ<br><br>
                Mình sẽ phải cần thêm nhiều cà phê hơn vì đêm nay chúng ta sẽ không ngủ<br><br>
                Anh sẽ vặn ngược lại kim của đồng hồ, để nó luôn chỉ vào thời khắc nửa đêm<br><br>
                Ta sẽ có một ngày dài như là thế kỷ, như vậy mới đủ để cho anh hiểu em<br><br><br>

                Nói lời chân thật với nhau, đừng bắt tâm tư phải sàng và lọc<br><br>
                Em cần may túi ba gang vì lúc bên nhau là vàng là ngọc<br><br>
                Có hàng tá rapper ngoài kia nhưng sẽ không có một Đen thứ hai<br><br>
                Viết cho em những điều kì lạ, em sẽ nhận ra chỉ Đen chứ ai?<br><br><br>

                Bởi vì anh không thích đồ ngọt nên hãy yêu nhau theo cách mặn mà<br><br>
                Cứ yên tâm nhạc tình Đen viết luôn đặc quánh và rất đậm đà<br><br>
                Chắt chiu như trong một sớm trên lá đọng vệt trong ngần sương<br><br>
                Yêu em như cách anh viết nhạc, luôn cần mẫn mà không cần lương<br><br><br>

                [Outro: Kimmese]<br><br>
                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh... Sunny<br><br>
                You<br><br>

                Oh, Sunny<br><br>
                L-o-v-i-n-g<br><br>
                Oh oh... Sunny<br><br>
                You.<br><br>`,
            rank: 5
        },
        {
            name: 'Gặp Nhau Bên Nhau Là Ý Trời',
            singer: 'WIND',
            path: '../songs/Gặp Nhau Bên Nhau Là Ý Trời.mp3',
            image: '../music_img/Gặp Nhau Bên Nhau Là Ý Trời.jpg',
            lyrics: `<br><br>
                Đi cùng nhau qua bao ngày giông bão<br><br>
                Tình yêu ấy cứ ngỡ sẽ không phai tàn<br><br>
                Hạnh phúc sao quá mong manh<br><br>
                Còn niềm đau chẳng ai biết được<br><br>
                Thế giới trước mắt xa trong tầm với<br><br>
                Ta gặp nhau giữa dòng đời nghiệt ngã<br><br>
                Dù yêu nhau nhưng chẳng thể giữ được nhau<br><br>
                Cứ xa nhau như mây trời, tình yêu ta vụn vỡ giữa đời<br><br>
                Nước mắt lăn trên nỗi buồn<br><br><br>

                [Chorus:]<br><br>
                Vì ta yêu nhau đi qua ngàn giông bão<br><br>
                Gặp được nhau, bên nhau, xa nhau là ý trời<br><br>
                Ngày còn vương, ngày còn nhớ, từng yêu thương rớt rơi giữa đời<br><br>
                Bức tranh tình ta vẽ dở dang, từng kí ức cứ thế trôi theo ngàn nỗi nhớ<br><br>
                Lòng quặng đau mang con tim đau thương, nặng nỗi sầu<br><br>
                Ngày xa nhau chẳng ai thấu, chuyện tình yêu chẳng thể nguyên vẹn<br><br>
                Hỏi sao trời lại quá phũ phàng lau đi giọt nước mắt<br><br>
                Lòng còn đau nhưng môi gượng cười, nhắm mắt lại thả nỗi đau vào tim<br><br><br>

                [Ver 2:]<br><br>
                Ta gặp nhau giữa dòng đời nghiệt ngã<br><br>
                Dù yêu nhau nhưng chẳng thể giữ được nhau<br><br>
                Cứ xa nhau như mây trời, tình yêu ta vụn vỡ giữa đời<br><br>
                Nước mắt lăn trên nỗi buồn<br><br><br>
                
                [Chorus:]<br><br>
                Vì ta yêu nhau đi qua ngàn giông bão<br><br>
                Gặp được nhau, bên nhau, xa nhau là ý trời<br><br>
                Ngày còn vương, ngày còn nhớ, từng yêu thương rớt rơi giữa đời<br><br>
                Bức tranh tình ta vẽ dở dang, từng kí ức cứ thế trôi theo ngàn nỗi nhớ<br><br>
                Lòng quặng đau mang con tim đau thương, nặng nỗi sầu<br><br>
                Ngày xa nhau chẳng ai thấu, chuyện tình yêu chẳng thể nguyên vẹn<br><br>
                Dù đã có nhau nhưng chẳng thể cùng nhau<br><br>
                Còn lại đây những nỗi nhớ sẽ mãi vấn vương<br><br><br>

                Những ước hẹn xin tan vào trong vết mưa<br><br>
                Lạc bước giữa chốn đông người<br><br>
                Chuyện tình yêu vương mãi một đời<br><br>
                Tình tựa như cánh hoa cuối trời<br><br>
                Đến cuối cùng cũng chẳng thể nói lời xin lỗi.<br><br>`,
            rank: 6
        },
        {
            name: 'Họ Yêu Ai Mất Rồi',
            singer: 'Doãn Hiếu',
            path: '../songs/Họ Yêu Ai Mất Rồi.mp3',
            image: '../music_img/Họ Yêu Ai Mất Rồi.jpg',
            lyrics: `<br><br>
                [Verse 1]<br><br>
                Nhớ ánh mắt<br><br>
                Nhớ đôi môi của em<br><br>
                Nhớ đôi vai<br><br>
                Hoàng hôn nơi ta từng quen...<br><br>
                Giá như anh đừng gặp em<br><br>
                Thì giờ anh vẫn cứ tin hai chữ tình duyên.<br><br>
                Em ra đi để lại nỗi cô đơn đằng sau<br><br>
                Mặc cho những vỡ nát nơi anh em có thấy đâu<br><br>
                Dù đã biết mãi mãi không thể bên nhau<br><br>
                Vậy thì ngày đó đừng cố gieo tương tư cho nhau<br><br>
                Chầm chậm vô tư thế thôi<br><br>
                Người mình yêu đã yêu ai mất rồi<br><br><br>

                [Chorus]<br><br>
                Hình bóng ấy đã quá xa<br><br>
                Theo làn gió về với anh ta<br><br>
                Chỉ là những tiếc nuối của một thuở đôi mươi đã xa.<br><br>
                Anh đã cố đã đã đã đã cố rất nhiều<br><br>
                Chuyện tình yêu mấy đời ai hiểu<br><br>
                Phải rời xa thôi người mình yêu<br><br>
                Mãi chẳng thể yêu<br><br><br>

                [Verse 2]<br><br>
                Em ra đi để lại nỗi cô đơn đằng sau<br><br>
                Giờ đây nắng đã ngã nơi anh em có thấy đâu<br><br>
                Dù đã biết mãi mãi không thể bên nhau<br><br>
                Vậy thì ngày đó đừng cố gieo tương tư cho nhau<br><br>
                Tình tựa bèo dạt mây trôi<br><br>
                Người mình yêu đã yêu ai mất rồi<br><br><br>

                [Bridge]<br><br>
                Dù ngày mai bão giông ngập trời<br><br>
                Dù em đã yêu ai mất rồi<br><br>
                Thì anh vẫn đứng đây<br><br>
                Như xưa và chờ em tới<br><br>
                Xin em đừng khóc nước mắt<br><br>
                Nhạt nhòa đôi mi<br><br>
                Anh sẽ vẫn tiếc vẫn nhớ em vì<br><br>
                Hai đôi chân đã khác đường đi<br><br>
                Rồi mai xa anh em hãy nhớ<br><br>
                Có một người yêu em như anh đã từng.<br><br>`,
            rank: 7
        },
        {
            name: 'Người Lạ Thoáng Qua',
            singer: 'Đinh Tùng Huy',
            path: '../songs/Người Lạ Thoáng Qua.mp3',
            image: '../music_img/Người Lạ Thoáng Qua.jpg',
            lyrics: `<br><br>
                Phải chăng lúc này em có 1 người thế thay<br><br>
                Họ cho em nhiều, bên em sớm tối nuông chiều<br><br>
                Còn anh chỉ là giống như người lạ thoáng qua<br><br>
                Đau đến tận cùng nhưng vẫn giả vờ hạnh phúc<br><br><br>

                Phải chi bây giờ tất cả chỉ là giấc mơ<br><br>
                Một thương hai chờ, em đi anh cũng không ngờ<br><br>
                Đành ôm kỷ niệm cô đơn mình anh với đêm<br><br>
                Năm tháng êm đềm yêu em chẳng cần đong đếm<br><br><br>

                Vậy mà em nỡ buông tay anh rồi<br><br>
                Buồn đau anh khóc, anh than với trời<br><br>
                Thương thật lòng sao anh nhận lại bằng không<br><br>
                Nhành hoa thay lá như em thay lòng<br><br><br>

                Sao tim anh không ngừng nhớ mong<br><br>
                Đến bao giờ mới quên được người mình yêu<br><br>
                Chẳng bao giờ anh quên được người từng yêu.<br><br><br><br>`,
            rank: 8
        },
        {
            name: 'Túy Âm',
            singer: 'Xesi x Masew x Nhatnguyen',
            path: '../songs/Túy Âm.mp3',
            image: '../music_img/Túy Âm.jpg',
            lyrics: `<br><br>
                Rót đến tràn ly, anh chìm đắm trong men cay đắng nồng<br><br>
                Khóc chát làn mi, uống cùng anh cho đêm nay say chất ngất!<br><br>
                Dẫu năm tháng ấy còn đâu những đam mê ta kiếm tìm?<br><br>
                Màu mắt xanh ngời lạc giữa mây ngàn về chốn xa xôi...<br><br>
                Hãy say cùng anh, hãy hát cùng anh, hãy khóc cùng anh<br><br><br>

                Thêm 1 lần...<br><br>
                Để anh được gần trái tim của em dù trong phút giây<br><br>
                Hình bóng người tan biến dần phía sau những nỗi sầu<br><br>
                Với em chắc quá đủ cho một mối tình...<br><br>
                Dẫu em không thể ở lại với anh<br><br><br>

                Mình chẳng cùng với nhau đi hết quãng đường, <br><br>
                Ôm ấp hi vọng một ngày ngát xanh...<br><br>
                Tháng năm thăng trầm dòng đời ngả nghiêng<br><br>
                Mình tự rời bỏ nhau<br><br>
                Say đến điên dại, say hết kiếp người, say cho cháy lòng...<br><br>`,
            rank: 9
        },
        {
            name: 'Từng Yêu',
            singer: 'Phan Duy Anh',
            path: '../songs/Từng Yêu.mp3',
            image: '../music_img/Từng Yêu.jpg',
            lyrics: `<br><br>
                Có kí ức nào đẹp hơn ngày đôi ta bắt đầu<br><br>
                Có đớn đau nào nặng hơn ngày mình xa nhau<br><br>
                Có đôi mắt nào buồn hơn bờ mi em tuôn sầu<br><br>
                Có đắng cay nào bằng em vội vàng qua mau<br><br>
                Người đàn ông đang đi bên em là người như thế nào<br><br>
                Sợ người ta không yêu thương em anh biết phải làm sao<br><br><br>

                ĐK:<br><br>
                Nếu 1 ngày người em yêu bội bạc<br><br>
                Em đừng cần những thứ cao sang<br><br>
                Nếu sau này họ ra đi vội vàng<br><br>
                Anh vẫn chờ em dẫu muộn màng<br><br>
                Biết em thương người ấy đã rất nhiều<br><br>
                Anh hỏi lòng anh có bao nhiêu<br><br>
                Trái tim em giờ đã quên nuông chiều<br><br>
                Xin đừng quên ta đã từng yêu<br><br>`,
            rank: 10
        },
        {
            name: 'Tâm Sự Với Người Lạ',
            singer: 'Tiên Cookie',
            path: '../songs/Tâm Sự Với Người Lạ.mp3',
            image: '../music_img/Tâm Sự Với Người Lạ.jpg',
            lyrics: `<br><br>
                Ngày buồn rười rượi là ngày mà em xa tôi<br><br>
                Đợi hoài chờ hoài mà rồi người đâu không tới<br><br>
                Sao em không một lời dặn trước với tôi người ơi<br><br>

                Đành ngậm ngùi về nhìn từng hạt mưa bay bay<br><br>
                Đường về thì dài mà lòng thì như chia hai<br><br>
                Không ai khâu lành lại đành cứ thế đi miệt mài<br><br><br>

                [ĐK1:]<br><br>
                Because I’m so lonely lonely, girl<br><br>
                Xung quanh đông vui nhưng anh vẫn thấy sao mình thật cô đơn<br><br>
                Bao nhiêu suy tư hoang mang cứ dồn vào lòng chỉ riêng anh thôi<br><br>
                Nên đôi khi anh muốn tâm sự cùng người lạ<br><br>

                Một người không biết gì về đôi ta<br><br>
                Không kêu lên ôi sao anh ngốc quá sao còn yêu cô ta<br><br>
                Không khuyên anh nên quên hay gắn hàn điều gì<br><br>
                Vì anh đôi khi chỉ cần một người ở bên lắng nghe anh nói<br><br><br>

                [ĐK2:]<br><br>
                Because I’m so lonely lonely, girl<br><br>
                Ba năm trôi qua nhanh như chớp mắt em giờ nào có nhớ<br><br>
                Bao nhiêu suy tư thương đau cứ dồn vào lòng chỉ riêng anh thôi<br><br>
                Nên đôi khi anh muốn tâm sự cùng người lạ<br><br>

                Kể chuyện hai đứa lần đầu gặp xôn xao<br><br>
                Quen nhau yêu thương nhau từ lúc nào, sâu đậm ra sao<br><br>
                Ngay trong tim anh kí ức vẫn còn dạt dào<br><br>
                Và anh đôi khi chỉ cần một người ở bên, bên anh.<br><br>`,
            rank: 11
        },
        {
            name: '3107 3',
            singer: 'W/n ft. Nâu, Duongg',
            path: '../songs/3107 3.mp3',
            image: '../music_img/3107 3.jpg',
            lyrics: `<br><br>
                Xin lỗi em về những chuyện mà ta đã nghĩ<br><br>
                Xin lỗi em về những gì mà ta đã nói<br><br>
                Vì bao câu chuyện mình lúc xưa<br><br>
                Giờ đây chẳng thể viết tiếp được<br><br>
                Chỉ là xa thôi mà, chẳng khi nào ta ngừng nghĩ đến nhau<br><br><br>

                Bao tháng năm vô tư hồn nhiên biết mấy<br><br>
                Những chuyến xe ta đi cùng năm tháng ấy<br><br>
                Giờ đây chỉ là những thước phim<br><br>
                Phai mờ sâu vào những kỉ niệm<br><br>
                Điều duy nhất bây giờ, còn nhớ chỉ là vài câu<br><br><br>

                Xin lỗi vì những lời hứa, xin lỗi chẳng yêu được nữa<br><br>
                Xin lỗi vì em chẳng thể đến bên cạnh anh mỗi khi trời đổ mưa<br><br>
                Xin lỗi vì em đã đúng, xin lỗi vì anh đã sai<br><br>
                Xin lỗi vì ta chẳng thể đi cùng nhau để bây giờ cách xa<br><br><br>

                Rap:<br><br>
                Vòng xe thứ nhất là đón đưa em qua từng điểm hẹn ngày đầu tiên<br><br>
                Góc phố đèn mờ có ngọn đèn cũ thổi hồn nỗi buồn này vào tim<br><br>
                Vòng xe thứ hai là cùng với em đón nắng ngày xuân vào chiều tà<br><br>
                Là thèm được nhớ nhưng rồi phải buông với họ gọi đó là yêu xa<br><br>

                Em đâu hay biết, vẫn có người đứng chờ đợi em tới giữa khuya<br><br>
                Chỉ để quan tâm em dẫu biết rằng em đang bận lòng với nửa kia<br><br>
                Cùng một góc nhìn nhưng cảm xúc bây giờ dần trở nên vô vị<br><br>
                Đứng trên dốc tình chỉ là mỗi góc nhìn để thấy được em và đô thị<br><br>

                Ở trong thành phố, Lòng đành cố gào thét khiến cổ họng khát khô<br><br>
                Bây giờ là một giờ sáng, Cafe đậm hòa cùng gói Bastos<br><br>
                Anh từng sống trong tim em, quá thời hạn nhưng rồi phải ra đi<br><br>
                Thành phố hồi đó có trời gió và em còn hơn cả Paris<br><br><br>

                “Anh cũng chỉ nghĩ về những thứ mơ mộng thôi<br><br>
                Dẫu biết thực tế khác xa vời vợi rồi<br><br>
                Cũng chả rõ mình đã nhớ em về bao nhiêu đêm<br><br>
                Nhưng mà ít nhiều gì thì anh cũng đã từng là một người rất yêu em.<br><br>`,
            rank: 12
        },
        {
            name: 'Hoa Nở Không Màu',
            singer: 'Hoài Lâm',
            path: '../songs/Hoa Nở Không Màu.mp3',
            image: '../music_img/Hoa Nở Không Màu.jpg',
            lyrics: `<br><br>
                Chỉ là nỗi nhớ mãi đứng sau cuộc tình đã lỡ<br><br>
                Chỉ là cơn mơ cuốn theo cả một trời thương nhớ<br><br>
                Chỉ là nỗi đau thổn thức, chỉ là nhói thêm một chút<br><br>
                Chỉ là nước mắt cứ rưng rưng<br><br><br>

                Tìm về kí ức cố xóa đi đoạn tình ban sơ<br><br>
                Rồi lại chơ vơ đứng giữa nơi đại lộ tan vỡ<br><br>
                Mãi chìm đắm trong lầm lỡ<br><br>
                Trái tim vẫn không ngừng nhớ<br><br>
                Đợi chờ em đến hoá ngu ngơ<br><br><br>

                Tình yêu đã phai mờ như hoa nở không màu<br><br>
                Càng níu kéo nhưng lại càng xa cách nhau<br><br>
                Đành ôm nỗi đau này chết lặng giữa trời mây<br><br>
                Hằn lại sâu trong trái tim hao gầy<br><br><br>

                Giờ đây chúng ta là hai người dưng khác lạ<br><br>
                Buồn biết mấy nhưng lại chẳng thể nói ra<br><br>
                Cuộc đời lắm vô thường, sao cứ mãi vấn vương<br><br>
                Tự mình ôm lấy tổn thương riêng mình !<br><br><br>

                Chỉ là anh cố chấp luôn âm thầm<br><br>
                Bước về phía nắng ấm tìm em<br><br>
                Thế mà cơn mưa đêm xóa hết kỷ niệm<br><br>`,
            rank: 13
        },
        {
            name: 'Dạ Vũ',
            singer: 'Tăng Duy Tân',
            path: '../songs/Dạ Vũ.mp3',
            image: '../music_img/Dạ Vũ.jpg',
            lyrics: `<br><br>
                Verse 1:<br><br>
                Khi màn đêm vừa buông<br><br>
                Mưa vừa tuôn ở trên mái hiên, em vẫn cứ uống<br><br>
                Sương còn vương hàng trăm nỗi đau như kéo em xuống<br><br>
                Nơi vực sâu tận cùng trái tim khô cằn sỏi đá<br><br><br>

                Pre-chorus:<br><br>
                Chân trời xa vắng đưa con tim em đi về đâu<br><br>
                Sóng xô muuôn trùng, đẩy đưa tháng năm yêu lần đầu<br><br>
                Chưa từng cho phép suy tư, em không cho mình đau<br><br>
                Nhưng sâu trong thâm tâm trái tim em đang không ngừng nhỏ máu<br><br><br>

                Chorus:<br><br>
                Vì lỡ say trong một vòng tay ai<br><br>
                Dành cả tương lai đổi lấy nỗi buồn<br><br>
                Từ đó em không còn cần ai thương<br><br>
                Giọt sầu ai vương, nước mắt em tuôn, giữa đêm dài<br><br><br>

                Drop 1: (Whistle)<br><br>
                Verse 2:<br><br>
                Màn đêm ôm lấy em<br><br>
                Giữ em trong giấc mộng ngày còn ấm êm<br><br>
                Một hàng mi lấm lem<br><br>
                Ngả lưng lên nỗi buồn chẳng thể đong đếm<br><br>
                Chân trời xa vắng đưa con tim em đi về đâu<br><br>
                Sóng xô muôn trùng, đẩy đưa tháng năm yêu lần đầu<br><br>
                Chưa từng cho phép suy tư, em không cho mình đau<br><br>
                Nhưng sâu trong thâm tâm trái tim em đang không ngừng nhỏ máu<br><br><br>

                Chorus:<br><br>
                Vì lỡ say trong một vòng tay ai<br><br>
                Dành cả tương lai đổi lấy nỗi buồn<br><br>
                Từ đó em không còn cần ai thương<br><br>
                Giọt sầu ai vương, nước mắt em tuôn, giữa đêm dài<br><br>`,
            rank: 14
        },
        {
            name: 'Lạc Trôi',
            singer: 'Sơn Tùng MTP',
            path: '../songs/Lạc Trôi.mp3',
            image: '../music_img/Lạc Trôi.jpg',
            lyrics: `<br><br>
                Người theo hương hoa mây mù giăng lối<br><br>
                Làn sương khói phôi phai đưa bước ai xa rồi<br><br>
                Đơn côi mình ta vấn vương hồi ức trong men say chiều mưa buồn<br><br>
                Ngăn giọt lệ ngừng khiến khoé mi sầu bi<br><br><br>

                Đường xưa nơi cố nhân từ giã biệt li<br><br>
                Cánh hoa rụng rời<br><br>
                Phận duyên mong manh rẽ lối trong mơ ngày tương phùng<br><br><br>

                Điệp khúc:<br><br>

                Tiếng khóc cuốn theo làn gió bay<br><br>
                Thuyền ai qua sông lỡ quên vớt ánh trăng tàn nơi này<br><br>
                Trống vắng bóng ai dần hao gầy<br><br><br>

                Lòng ta xin nguyện khắc ghi trong tim tình nồng mê say<br><br>
                Mặc cho tóc mây vương lên đôi môi cay<br><br>
                Bâng khuâng mình ta lạc trôi giữa đời<br><br>
                Ta lạc trôi giữa trời<br><br><br>

                Rap:<br><br>

                Đôi chân lang thang về nơi đâu<br><br>
                Bao yêu thương giờ nơi đâu<br><br>
                Câu thơ tình xưa vội phai mờ<br><br>
                Theo làn sương tan biến trong cõi mơ<br><br>
                Mưa bụi vương trên làn mi mắt<br><br>
                Ngày chia lìa hoa rơi buồn hiu hắt<br><br>
                Tiếng đàn ai thêm sầu tương tư lặng mình trong chiều hoàng hôn<br><br>
                Tan vào lời ca<br><br>
                Lối mòn đường vắng một mình ta<br><br>
                Nắng chiều vàng úa nhuộm ngày qua<br><br>
                Xin đừng quay lưng xoá<br><br>
                Đừng mang câu hẹn ước kia rời xa<br><br>
                Yên bình nơi nào đây<br><br>
                Trôn vùi theo làn mây<br><br><br>
                 
                Ta đang lạc nơi nào<br><br>
                Ta đang lạc nơi nào<br><br>
                Lối mòn đường vắng một mình ta<br><br>
                Ta đang lạc nơi nào<br><br>
                Nắng chiều vàng úa nhuộm ngày qua<br><br>
                Ta đang lạc nơi nào.<br><br>`,
            rank: 15
        },
        {
            name: 'Hôm Nay Em Cưới Rồi',
            singer: 'Khải Đăng',
            path: '../songs/Hôm Nay Em Cưới Rồi.mp3',
            image: '../music_img/Hôm Nay Em Cưới Rồi.jpg',
            lyrics: `<br><br>
                Muốn đi vài hôm xa chính nơi ta từng có phút êm đềm<br><br>
                Trước ngày giống tố đến tìm<br><br>
                Đến khi nhận ra nên quý hơn những ngày tháng sống bên nhau<br><br><br>

                Thì mình muộn mất rồi!<br><br>
                Giờ này em có lẽ rất vui, cùng người em yêu chung bước không quay lại nhìn<br><br>
                Dù sao thì anh cũng mong em luôn bình yên<br><br>
                Và xin lỗi vì không đến chúc phúc cho em!<br><br><br>

                Đk:<br><br>
                Vì ngày hôm nay em cưới rồi vụn vỡ vết thương đau mãi trong tim<br><br>
                Người đàn ông may mắn ấy từ nay đã có em<br><br>
                Vẫn muốn đến đây gặp em một lần để thấy em hạnh phúc thế nào rồi anh đi<br><br><br>

                Vì ngày hôm nay em cưới rồi<br><br>
                Mai sau anh sống thế nào<br><br>
                Một người đã mang cả thế giới sánh đôi với tình yêu mới<br><br>
                Ngày em đẹp nhất trên đời là ngày chúng ta xa mãi 1 người<br><br>
                Nợ duyên đến nay mình trả hết rồi!<br><br><br>

                Đk cuối:<br><br>
                Dù có một đời anh cố gắng thì vẫn không sao giữ em<br><br>
                Một người đã mang cả thế giới sánh đôi với tình yêu mới.<br><br>`,
            rank: 16
        },
        {
            name: 'Thích Thì Đến',
            singer: 'Lê Bảo Bình',
            path: '../songs/Thích Thì Đến.mp3',
            image: '../music_img/Thích Thì Đến.jpg',
            lyrics: `<br><br>
                Chấm dứt là cách tốt thôi<br><br>
                Hai người dưng ngược lối<br><br>
                Suy nghĩ chi em ơi<br><br>
                Hà cớ chi níu kéo<br><br>
                Khi cuộc tình ta đã héo khô<br><br>
                Anh phải lùi lại một bước<br><br><br>

                Trả cho em sự tự do<br><br>
                Trả cho em những lời nói dối<br><br>
                Trả cho em những vết thương<br><br>
                Em xếp ngăn nắp vào anh bao ngày<br><br>
                Người dưng không cần quan tâm<br><br>
                Yêu đương gì đâu hỏi thăm<br><br>
                Hôm nay anh vấp ngã<br><br>
                Chỉ biết nhìn xa xăm<br><br>
                Người ấy là lựa chọn tuyệt vời<br><br>
                Của em thì em hãy<br><br>
                Ngước nhìn về bên ấy<br><br><br>

                Cớ sao lại nhìn về bên này<br><br>
                Có chắc sự tự do<br><br>
                Em nói với anh không như ý<br><br>
                Em xem anh là nơi<br><br>
                Em thích thì đến không thì đi<br><br>
                Em có bao giờ nghĩ<br><br>
                Là anh đớn đau bao năm tháng<br><br><br>

                Anh không hề than trách<br><br>
                Hay níu kéo em dù nửa lời<br><br>
                Bởi vì yêu em thôi<br><br>
                Nên anh đành phải ngậm ngùi<br><br>
                Nấp sau những mong muốn<br><br>
                Nhất thời của em vậy thôi.<br><br>`,
            rank: 17
        },
        {
            name: 'Bước Qua Nhau',
            singer: 'Vũ.',
            path: '../songs/Bước Qua Nhau.mp3',
            image: '../music_img/Bước Qua Nhau.jpg',
            lyrics: `<br><br>
                Cuộc đời cứ trôi, ta nhìn lại ngày tháng còn bên nhau, cùng những thăng trầm<br><br>
                Tại sao không vẫy tay chào nơi ta đứng bây giờ, hai nơi hai người dưng<br><br>
                Đợi em bước qua, để khiến anh nhận ra là đôi mắt em còn đang buồn<br><br>
                Màu hoa cài áo vẫn còn như lời hứa đã từng, giờ đây còn như xưa<br><br><br>

                Dòng người vội vàng bước qua, chợt như chiếc hôn thế thôi<br><br>
                Đôi môi chia làm đôi như ta đang mong vậy thôi<br><br>
                Người nghẹn ngào bước đi, chợt như chúng ta quay về<br><br>
                Giấu trái tim mình và đừng thổn thức khi thấy nhau<br><br>
                Đoàn tàu kia dừng lại, còn hai ta, bước qua nhau<br><br><br>

                BRIDGE:<br><br>

                Trôi đi theo mây trời<br><br>
                Từng cảm xúc trong tim anh đang cô đơn cùng với ngàn lời<br><br>
                Viết riêng cho bài ca tình đầu<br><br>
                Chỉ còn lại một thói quen từ lâu.<br><br>`,
            rank: 18
        },
        {
            name: 'Thanh Xuân',
            singer: 'Dalab',
            path: '../songs/Thanh Xuân.mp3',
            image: '../music_img/Thanh Xuân.jpg',
            lyrics: `<br><br>
                Thơm:<br>
                Hôm nay ta thức dậy cũng như thường nhật<br><br>
                Thấy thanh xuân ngày nào bỗng dưng trở lại<br><br>
                Em soi gương cười duyên chẳng còn thấy đâu những vết đồi mồi<br><br>
                Mặc một chiếc váy xinh ngồi chờ anh qua<br><br><br>

                Thỏ:<br>
                Anh sẽ đưa em quay trở về với những ngày hôm qua<br><br>
                Khi mà bao lo toan bộn bề vẫn đang ở nơi xa<br><br>
                Khi mà tuổi trẻ vẫn vương trên mái tóc<br><br>
                Khi mà bầu trời vẫn một vệt xanh trong<br><br>
                Đời vẫn mênh mông chân ta ung dung bước<br><br>
                Và tất cả những niềm mơ ở phía trước chẳng cách xa<br><br>
                Lại chỉ có đôi ta<br><br>
                Những ngày chỉ có đôi ta<br><br><br>

                Thơm:<br>
                Đưa em về thanh xuân<br><br>
                Về những dấu yêu ban đầu<br><br>
                Những âu lo cứ thế hững hờ qua tay<br><br>
                Ta thêm lần đôi mươi<br><br>
                Và những ước ao đã từng<br><br>
                Ở một tầng mây khác riêng hai chúng ta<br><br><br>

                Long:<br>
                Thời gian cứ thế nhẹ trôi dẫu em vài lần luyến tiếc<br><br>
                Màn đêm kéo những mộng mơ níu anh vào sâu mắt em<br><br>
                Chặng đường ta bước cùng nhau như thước phim lưu trong ký ức<br><br>
                Là thanh xuân ta đã dành cho nhau<br><br><br>

                Cào:<br>
                Anh vẫn sẽ đưa tay về phía em chẳng chờ đợi điều gì<br><br>
                Và anh vẫn sẽ đạp xe theo em vu vơ như xưa nhiều khi<br><br>
                Bó hoa cài bên cửa<br><br>
                Vẫn không lời nhắn gửi<br><br>
                Dành cho em cả nước mắt đắng bên cạnh kia những nụ cười<br><br>
                Ba mươi năm trong đời từng để vụt bao nhiêu điều tiếc nuối<br><br>
                Nhưng nếu một lần có lẽ vẫn chẳng cần trong tay em đến cuối<br><br>
                Cùng viết lên chuyện đời đến khi chỉ còn một điều để nói<br><br>
                P/s i love you babe<br><br><br>

                Long:<br>
                Bình yên ghé thăm chiều nay<br><br>
                Tuổi thanh xuân tô trời mây<br><br>
                Một tia nắng anh nhẹ mang vào trong lá thư tay<br><br>
                Từng bỡ ngỡ trao về nhau<br><br>
                Giọt nước mắt đôi tay khẽ lau<br><br>
                Cho vụng về trao ta như lần đầu<br><br><br>

                Thơm:<br>
                Đưa em về thanh xuân<br><br>
                Về những dấu yêu ban đầu<br><br>
                Những âu lo cứ thế hững hờ qua tay<br><br>
                Ta thêm lần đôi mươi<br><br>
                Và những ước ao đã từng<br><br>
                Ở một tầng mây khác riêng hai chúng ta<br><br><br>

                Thơm:<br>
                Đưa em về thanh xuân<br><br>
                Về những dấu yêu ban đầu<br><br>
                Những âu lo cứ thế hững hờ qua tay<br><br>
                Ta thêm lần đôi mươi<br><br>
                Và những ước ao đã từng<br><br>
                Ở một tầng mây khác riêng hai chúng ta<br><br><br>

                Thơm:<br>
                Hôm nay ta thức dậy cũng như thường nhật<br><br>
                Thấy thanh xuân ngày nào bỗng dưng trở lại<br><br>
                Em soi gương cười duyên chẳng còn thấy đâu những vết đồi mồi<br><br>
                Mặc một chiếc váy xinh ngồi chờ anh về<br><br>`,
            rank: 19
        },
        
        {
            name: 'Chạm Khẽ Tim Anh Một Chút Thôi',
            singer: 'Noo Phước Thịnh',
            path: '../songs/Chạm Khẽ Tim Anh Một Chút Thôi.mp3',
            image: '../music_img/Chạm Khẽ Tim Anh Một Chút Thôi.jpg',
            lyrics: `<br><br>
                Chạm nhẹ vào đôi mắt<br><br>
                Chạm nhẹ vào bờ vai<br><br>
                Chạm nhẹ vào đôi môi<br><br>
                Ngày mai xa anh rồi<br><br><br>

                Chạm nhẹ vào trí nhớ<br><br>
                Chạm nhẹ vào cơn mơ<br><br>
                Mình đã chạm khẽ vào nhau những ngày ngây thơ<br><br><br>

                Anh yêu cô gái nhỏ bé<br><br>
                Tin vào những lời bài hát<br><br>
                Tin rằng nếu khóc trong mưa sẽ bớt đau hơn<br><br>
                Anh yêu cô gái năm ấy<br><br>
                Tin vào những điều viển vông<br><br>
                Rằng tay và tay sẽ nắm lấy nhau tận cuối cuộc đời<br><br><br>

                Thời gian xoá đi những ngây thơ những điều vội vàng như trong giấc mơ<br><br>
                Để lại những cơn đau vu vơ chẳng còn bất ngờ<br><br>
                Một mai sớm kia em có thấy giữa lồng ngực mình đau khi nhớ anh<br><br>
                Thì đừng vội khóc hãy xiết tay anh nơi e bình yên<br><br><br>

                Đừng hôn nếu môi em chưa quên dư vị ngọt ngào hai ta đã trao<br><br>
                Đừng ôm nếu em thấy anh ta chẳng thể vỗ về<br><br>
                Đừng tin nếu chia tay anh ta nói rằng mình không xứng đáng với em<br><br>
                Và đừng vội khóc anh vẫn ở đây cho em bình yên<br><br>
                Chạm khẽ tim anh một chút thôi mai xa rồi<br><br>`,
            rank: 20
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
