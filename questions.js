const questions = [
  {
    "id": "TV_Q1",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ nào đồng nghĩa với từ “hòa bình”?",
    "options": {
      "A": "bình yên",
      "B": "hiền hòa",
      "C": "lặng yên",
      "D": "yên tĩnh"
    },
    "correctAnswer": "A",
    "explanation": "Từ 'bình yên' chỉ trạng thái yên ổn, không có chiến tranh hay loạn lạc, đồng nghĩa với 'hòa bình'. Các từ khác như 'hiền hòa' (tính chất hiền hậu, ôn hòa), 'lặng yên', 'yên tĩnh' (chỉ không gian không có tiếng động) không đồng nghĩa với 'hòa bình'."
  },
  {
    "id": "TV_Q2",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “kén” trong câu: “Tính cô ấy kén lắm.” thuộc từ loại nào?",
    "options": {
      "A": "động từ",
      "B": "tính từ",
      "C": "đại từ",
      "D": "danh từ"
    },
    "correctAnswer": "B",
    "explanation": "Trong câu 'Tính cô ấy kén lắm', từ 'kén' được dùng làm tính từ để chỉ đặc điểm tính cách (kén chọn, khó tính), đi kèm với từ chỉ mức độ 'lắm'. Bình thường 'kén' có thể là động từ (kén chồng) hoặc danh từ (kén tằm), nhưng trong ngữ cảnh này nó đóng vai trò tính từ."
  },
  {
    "id": "TV_Q3",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ nào dưới đây là động từ?",
    "options": {
      "A": "trang trại",
      "B": "chen chúc",
      "C": "ngoan ngoãn",
      "D": "chót vót"
    },
    "correctAnswer": "B",
    "explanation": "'Chen chúc' là từ chỉ hoạt động chen lấn vào nhau trong không gian chật hẹp, do đó thuộc từ loại Động từ. 'Trang trại' là danh từ; 'ngoan ngoãn' và 'chót vót' là tính từ."
  },
  {
    "id": "TV_Q4",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “đánh” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Bác nông dân đánh trâu ra đồng.",
      "B": "Các bạn không nên đánh nhau.",
      "C": "Sáng nào bố cũng đánh thức em dậy tập thể dục.",
      "D": "Các bạn không nên đánh đố nhau."
    },
    "correctAnswer": "B",
    "explanation": "Nghĩa gốc của từ 'đánh' là hành động tác động lực trực tiếp bằng tay hoặc dụng cụ lên đối tượng khác nhằm làm đau hoặc tổn thương. Ở câu B, 'đánh nhau' mang đúng nghĩa gốc này. Các câu khác như 'đánh trâu' (đuổi đi), 'đánh thức' (làm cho tỉnh dậy), 'đánh đố' (ra câu đố khó) đều là nghĩa chuyển."
  },
  {
    "id": "TV_Q5",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Những từ “đánh” trong các từ ngữ sau: “đánh cờ, đánh bạc, đánh trống” thuộc hiện tượng gì?",
    "options": {
      "A": "Từ đồng âm",
      "B": "Từ nhiều nghĩa",
      "C": "Từ đồng nghĩa",
      "D": "Từ trái nghĩa"
    },
    "correctAnswer": "B",
    "explanation": "Các từ 'đánh' trong 'đánh cờ, đánh bạc, đánh trống' đều có mối liên hệ nghĩa với nhau (sử dụng tay để thực hiện một trò chơi hoặc tạo âm thanh từ nhạc cụ), do đó đây là hiện tượng từ nhiều nghĩa."
  },
  {
    "id": "TV_Q6",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Cho các từ: “đồng nội, đồng hành, đồng tiền, trống đồng”. Các từ “đồng” này có quan hệ với nhau như thế nào?",
    "options": {
      "A": "Từ trái nghĩa",
      "B": "Từ nhiều nghĩa",
      "C": "Từ đồng âm",
      "D": "Từ đồng nghĩa"
    },
    "correctAnswer": "C",
    "explanation": "Các từ 'đồng' ở đây phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau và không liên quan gì đến nhau: 'đồng' trong 'đồng nội' nghĩa là cánh đồng; 'đồng' trong 'đồng hành' nghĩa là cùng; 'đồng' trong 'đồng tiền, trống đồng' nghĩa là kim loại đồng. Đây là hiện tượng từ đồng âm."
  },
  {
    "id": "TV_Q7",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “mắt” nào dưới đây mang nghĩa chuyển?",
    "options": {
      "A": "Mắt em bé đen lay láy.",
      "B": "Quả na mở mắt đón chào mùa thu.",
      "C": "Đôi mắt của cụ già đượm vẻ ưu tư.",
      "D": "Bạn Lan có đôi mắt rất đẹp."
    },
    "correctAnswer": "B",
    "explanation": "'Mắt' trong 'quả na mở mắt' là nghĩa chuyển (chỉ những vết nứt nhỏ hình con mắt trên vỏ quả na khi chín). Các phương án A, C, D đều chỉ cơ quan thị giác của con người/động vật, mang nghĩa gốc."
  },
  {
    "id": "TV_Q8",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “tai” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Bé nghe lời khuyên răn rót vào tai.",
      "B": "Cái tai chén này đã bị sứt một miếng nhỏ.",
      "C": "Tai nấm mèo này rất to và dày.",
      "D": "Nồi đất có hai cái tai để dễ bưng bê."
    },
    "correctAnswer": "A",
    "explanation": "'Tai' trong câu A chỉ bộ phận nghe của con người, mang nghĩa gốc. 'Tai chén', 'tai nấm', 'tai nồi' là các trường hợp chuyển nghĩa dựa trên sự đồng dạng về hình dáng (tai ở bên cạnh)."
  },
  {
    "id": "TV_Q9",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “ăn” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Gia đình em cùng nhau ăn cơm tối.",
      "B": "Chiếc xe này ăn xăng rất nhiều.",
      "C": "Bức ảnh này của Lan rất ăn ảnh.",
      "D": "Hồ nước này ăn thông ra sông lớn."
    },
    "correctAnswer": "A",
    "explanation": "Nghĩa gốc của từ 'ăn' là hoạt động nhai và nuốt thức ăn vào dạ dày để nuôi cơ thể. Ở câu A, 'ăn cơm' mang nghĩa gốc. Các trường hợp 'ăn xăng' (tiêu thụ), 'ăn ảnh' (hợp hình), 'ăn thông' (liên kết nối) đều mang nghĩa chuyển."
  },
  {
    "id": "TV_Q10",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “ngọn” nào dưới đây mang nghĩa gốc?",
    "options": {
      "A": "Ngọn gió thổi hiu hiu ngoài hiên.",
      "B": "Ngọn cây tre đung đưa theo chiều gió.",
      "C": "Ngọn đèn dầu tỏa ánh sáng le lói.",
      "D": "Ngọn lửa bốc lên ngùn ngụt."
    },
    "correctAnswer": "B",
    "explanation": "Nghĩa gốc của 'ngọn' là phần trên cùng của cây cối (ngọn tre, ngọn cây). Các từ 'ngọn gió', 'ngọn đèn', 'ngọn lửa' là nghĩa chuyển dựa trên sự tương đồng về vị trí cao hoặc hình dạng thon nhọn."
  },
  {
    "id": "TV_Q11",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “chân” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Học sinh xếp hàng dưới chân núi.",
      "B": "Chiếc bàn này có bốn chân rất vững chãi.",
      "C": "Chân bạn Nam bị trầy xước nhẹ do ngã xe.",
      "D": "Đoàn thuyền đã đi tới nơi chân trời góc bể."
    },
    "correctAnswer": "C",
    "explanation": "Nghĩa gốc của 'chân' là bộ phận nâng đỡ và di chuyển của con người, động vật (chân bạn Nam). Các từ 'chân núi', 'chân bàn', 'chân trời' là nghĩa chuyển dựa trên sự tương đồng về chức năng chịu đựng hoặc vị trí dưới cùng."
  },
  {
    "id": "TV_Q12",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “đầu” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Nước từ đầu nguồn đổ về cuồn cuộn.",
      "B": "Mái tóc đen nhánh xõa trên đầu cô gái.",
      "C": "Đầu súng trăng treo lơ lửng giữa trời đêm.",
      "D": "Bố em đứng ở đầu hàng quân ngũ."
    },
    "correctAnswer": "B",
    "explanation": "Nghĩa gốc của 'đầu' là phần trên cùng của cơ thể con người chứa bộ não và các giác quan chính. Ở câu B, 'đầu cô gái' dùng nghĩa gốc. Các từ 'đầu nguồn', 'đầu súng', 'đầu hàng' dùng nghĩa chuyển chỉ điểm bắt đầu hoặc điểm nhọn trên cùng."
  },
  {
    "id": "TV_Q13",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “cao” trong câu nào dưới đây được dùng với nghĩa chuyển?",
    "options": {
      "A": "Ngôi nhà mới xây có chiều cao năm mét.",
      "B": "Ngọn núi Fansipan cao nhất Việt Nam.",
      "C": "Anh ấy có tầm nhìn cao rộng về tương lai học tập.",
      "D": "Chiều cao của bé Lan đã tăng đáng kể."
    },
    "correctAnswer": "C",
    "explanation": "'Cao' trong 'tầm nhìn cao rộng' là nghĩa chuyển chỉ trình độ suy nghĩ vượt trội. Còn 'chiều cao năm mét', 'núi cao', 'chiều cao của bé Lan' chỉ khoảng cách thẳng đứng vật lý từ dưới lên trên, mang nghĩa gốc."
  },
  {
    "id": "TV_Q14",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ loại của từ “suy nghĩ” trong câu: “Những suy nghĩ của bạn rất sâu sắc.” là gì?",
    "options": {
      "A": "Động từ",
      "B": "Danh từ",
      "C": "Tính từ",
      "D": "Đại từ"
    },
    "correctAnswer": "B",
    "explanation": "Trong câu 'Những suy nghĩ của bạn...', từ 'suy nghĩ' đứng sau từ chỉ số lượng 'những' và làm chủ ngữ cho câu, nên nó đã bị danh từ hóa và đóng vai trò như một Danh từ."
  },
  {
    "id": "TV_Q15",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ loại của từ “và” trong tiếng Việt là gì?",
    "options": {
      "A": "Tính từ",
      "B": "Đại từ",
      "C": "Quan hệ từ",
      "D": "Danh từ"
    },
    "correctAnswer": "C",
    "explanation": "'Và' là một Quan hệ từ được sử dụng để liên kết các từ, cụm từ hoặc các vế câu có mối quan hệ song hành, đẳng lập."
  },
  {
    "id": "TV_Q16",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ nào trái nghĩa với từ “nhân hậu”?",
    "options": {
      "A": "độc ác",
      "B": "hiền lành",
      "C": "bao dung",
      "D": "ngoan ngoãn"
    },
    "correctAnswer": "A",
    "explanation": "Từ 'nhân hậu' chỉ tấm lòng thương người, hiền lành, độ lượng. Từ trái nghĩa trực tiếp với nó là 'độc ác' (độc hại, ác nghiệt, hay làm hại người khác)."
  },
  {
    "id": "TV_Q17",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ nào đồng nghĩa với từ “bao la”?",
    "options": {
      "A": "mênh mông",
      "B": "hẹp hòi",
      "C": "nhỏ bé",
      "D": "chật hẹp"
    },
    "correctAnswer": "A",
    "explanation": "Từ 'bao la' và 'mênh mông' đều mô tả một không gian rộng lớn, trải dài hút tầm mắt, nên chúng đồng nghĩa với nhau. Các từ khác là từ trái nghĩa."
  },
  {
    "id": "TV_Q18",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ nhiều nghĩa là gì?",
    "options": {
      "A": "Là từ có cách phát âm giống nhau nhưng nghĩa khác nhau hoàn toàn.",
      "B": "Là từ có một nghĩa gốc và một hoặc một số nghĩa chuyển.",
      "C": "Là những từ có ý nghĩa hoàn toàn trái ngược nhau.",
      "D": "Là các từ viết giống nhau nhưng có nguồn gốc từ loại khác nhau."
    },
    "correctAnswer": "B",
    "explanation": "Theo định nghĩa SGK Tiếng Việt lớp 5, từ nhiều nghĩa là từ có một nghĩa gốc và một hay một số nghĩa chuyển. Các nghĩa của từ nhiều nghĩa luôn có mối liên hệ nhất định với nhau."
  },
  {
    "id": "TV_Q19",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ đồng âm là gì?",
    "options": {
      "A": "Là các từ có ý nghĩa giống nhau hoặc gần giống nhau.",
      "B": "Là từ có cách phát âm giống nhau nhưng nghĩa hoàn toàn khác nhau, không liên quan.",
      "C": "Là những từ chỉ đặc điểm giống nhau của các sự vật.",
      "D": "Là từ có một nghĩa gốc và một số nghĩa chuyển liên quan."
    },
    "correctAnswer": "B",
    "explanation": "Từ đồng âm là những từ giống nhau về âm thanh (phát âm) nhưng khác hẳn nhau về nghĩa, các nghĩa này không có mối liên hệ nào với nhau."
  },
  {
    "id": "TV_Q20",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “cứng” trong câu nào dưới đây được dùng với nghĩa gốc?",
    "options": {
      "A": "Thép là một kim loại rất cứng.",
      "B": "Trước giặc thù, anh ấy vẫn cứng lòng.",
      "C": "Lập luận của bạn rất cứng rắn và thuyết phục.",
      "D": "Học lực môn Toán của Lan khá cứng."
    },
    "correctAnswer": "A",
    "explanation": "Nghĩa gốc của 'cứng' là có tính chất cơ học bền vững, khó làm biến dạng (thép cứng). Các nghĩa khác như 'cứng lòng' (kiên định), 'cứng rắn' (kiên quyết), 'khá cứng' (vững vàng) đều là nghĩa chuyển."
  },
  {
    "id": "TV_Q21",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “ăn” trong câu: “Tàu vào cảng ăn than.” được dùng với nghĩa gì?",
    "options": {
      "A": "Nghĩa gốc",
      "B": "Nghĩa chuyển",
      "C": "Nghĩa đồng âm",
      "D": "Nghĩa trái nghĩa"
    },
    "correctAnswer": "B",
    "explanation": "'Ăn' trong 'ăn than' nghĩa là nhận hoặc tiếp nhận nhiên liệu (than) để hoạt động. Đây là nghĩa chuyển dựa trên sự tương đồng về việc thu nhận chất nuôi dưỡng cơ thể từ bên ngoài vào."
  },
  {
    "id": "TV_Q22",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ loại của từ “học tập” trong câu: “Học tập là nhiệm vụ hàng đầu của học sinh.” là gì?",
    "options": {
      "A": "Tính từ",
      "B": "Động từ",
      "C": "Danh từ",
      "D": "Đại từ"
    },
    "correctAnswer": "C",
    "explanation": "Khi từ chỉ hoạt động đứng đầu câu làm chủ ngữ (Học tập là nhiệm vụ...) thì nó đóng vai trò ngữ pháp của một Danh từ (chỉ khái niệm sự việc)."
  },
  {
    "id": "TV_Q23",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Dòng nào toàn là các từ đồng nghĩa chỉ màu sắc của thiên nhiên?",
    "options": {
      "A": "xanh lá, xanh mướt, xanh um, xanh tươi",
      "B": "đỏ lòe, đỏ hoét, đỏ ngầu, đỏ rực",
      "C": "vàng hoe, vàng lịm, vàng giòn, vàng mộng",
      "D": "trắng tinh, trắng phau, trắng muốt, trắng trợn"
    },
    "correctAnswer": "A",
    "explanation": "Dòng A chứa toàn các từ đồng nghĩa mô tả các sắc thái xanh tốt tươi của cây cối, thiên nhiên. Các dòng khác chứa từ không chỉ màu sắc thiên nhiên hoặc có ý nghĩa tiêu cực (đỏ lòe, trắng trợn)."
  },
  {
    "id": "TV_Q24",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “sắc” nào dưới đây đồng âm với từ “sắc” trong “sắc thuốc”?",
    "options": {
      "A": "Lưỡi dao này rất sắc bén.",
      "B": "Mẹ sắc cho em một chén thuốc bắc ấm.",
      "C": "Cảnh sắc mùa thu thật êm đềm.",
      "D": "Khuôn mặt bạn ấy ánh lên vẻ sắc sảo."
    },
    "correctAnswer": "A",
    "explanation": "'Sắc' trong 'sắc thuốc' là động từ đun nấu thuốc cho cạn bớt nước. Còn 'sắc' trong 'sắc bén' (lưỡi dao bén) là tính từ. Hai từ này đồng âm nhưng nghĩa khác nhau hoàn toàn. Câu B dùng cùng một nghĩa. Câu C dùng nghĩa cảnh sắc (danh từ), câu D dùng sắc sảo (tính từ tính cách)."
  },
  {
    "id": "TV_Q25",
    "category": "Từ loại & Nghĩa của từ",
    "question": "Từ “lành” trong câu: “Mẹ em rất lành tính.” và “Chiếc áo rách đã được vá lành.” có quan hệ gì?",
    "options": {
      "A": "Từ đồng nghĩa",
      "B": "Từ trái nghĩa",
      "C": "Từ đồng âm",
      "D": "Từ nhiều nghĩa"
    },
    "correctAnswer": "D",
    "explanation": "Hai từ 'lành' này có chung nét nghĩa cơ bản là nguyên vẹn, không có yếu tố gây hại hoặc tổn hại (lành tính: tốt bụng, không hại ai; vá lành: làm nguyên vẹn lại vết rách). Do đó chúng có quan hệ từ nhiều nghĩa."
  },
  {
    "id": "TV_Q26",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu nào dưới đây dùng quan hệ từ chưa đúng?",
    "options": {
      "A": "Tuy em phải sống xa mẹ từ nhỏ nên em rất thương mẹ.",
      "B": "Tuy An mới khỏi ốm nhưng bạn ấy vẫn tham gia đội múa.",
      "C": "Mặc dù điểm môn Tiếng Việt chưa cao nhưng em vẫn yêu thích môn Tiếng Việt.",
      "D": "Cả lớp em luôn giúp đỡ Lan vì bạn ấy còn mặc cảm, tự ti."
    },
    "correctAnswer": "A",
    "explanation": "Câu A dùng sai cặp quan hệ từ. Cặp 'Tuy ... nên ...' kết hợp sai giữa quan hệ tương phản (Tuy) và quan hệ nguyên nhân - kết quả (nên). Phải sửa thành 'Tuy em phải sống xa mẹ từ nhỏ nhưng em vẫn rất thương mẹ' hoặc 'Vì em phải sống xa mẹ từ nhỏ nên em rất thương mẹ'."
  },
  {
    "id": "TV_Q27",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Trong các câu dưới đây, câu nào thuộc mẫu câu “Ai thế nào?”?",
    "options": {
      "A": "Đàn cò lững thững bay trên bầu trời.",
      "B": "Cô giáo nhẹ nhàng xoa đầu em.",
      "C": "Làn mây trắng quấn quanh ngọn núi.",
      "D": "Mấy chú voi đua nhau về đích."
    },
    "correctAnswer": "C",
    "explanation": "Mẫu câu 'Ai thế nào?' dùng để miêu tả đặc điểm, tính chất, trạng thái của sự vật. Câu C: 'Làn mây trắng' (Ai/Cái gì) - 'quấn quanh ngọn núi' (trạng thái thế nào). Các câu A, B, D đều có vị ngữ chỉ hoạt động chủ động nên thuộc mẫu câu 'Ai làm gì?'."
  },
  {
    "id": "TV_Q28",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu sau cần thêm mấy dấu phẩy: “Trong rừng Thỏ Nhím và Sóc đều nổi tiếng là thông minh nhanh trí”",
    "options": {
      "A": "1 dấu phẩy",
      "B": "2 dấu phẩy",
      "C": "3 dấu phẩy",
      "D": "4 dấu phẩy"
    },
    "correctAnswer": "C",
    "explanation": "Câu hoàn chỉnh cần 3 dấu phẩy: 'Trong rừng, (1 - ngăn cách trạng ngữ) Thỏ, (2 - ngăn cách các từ cùng chức vụ chủ ngữ) Nhím và Sóc đều nổi tiếng là thông minh, (3 - ngăn cách các vị ngữ/tính từ) nhanh trí.'"
  },
  {
    "id": "TV_Q29",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu: “Sông có thể cạn, núi có thể mòn, song chân lí đó không bao giờ thay đổi.” có mấy vế câu?",
    "options": {
      "A": "4 vế câu",
      "B": "3 vế câu",
      "C": "2 vế câu",
      "D": "1 vế câu"
    },
    "correctAnswer": "B",
    "explanation": "Câu ghép này có 3 vế câu liên kết với nhau: Vế 1: 'Sông có thể cạn'; Vế 2: 'núi có thể mòn'; Vế 3: 'song chân lí đó không bao giờ thay đổi'. Mỗi vế đều có cấu trúc chủ - vị độc lập."
  },
  {
    "id": "TV_Q30",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Quan hệ từ “mà” trong câu ghép: “Cò bảo mãi mà Vạc không nghe.” biểu thị mối quan hệ gì?",
    "options": {
      "A": "nguyên nhân - kết quả",
      "B": "tương phản",
      "C": "tăng tiến",
      "D": "điều kiện - kết quả"
    },
    "correctAnswer": "B",
    "explanation": "Quan hệ từ 'mà' trong câu này biểu thị sự ngược chiều, tương phản giữa việc 'Cò bảo mãi' và việc 'Vạc không nghe'. Do đó biểu thị quan hệ tương phản."
  },
  {
    "id": "TV_Q31",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Hai câu sau liên kết với nhau bằng cách nào: “Tết đến hoa đào nở thắm. Nó cũng là mùa xuân đấy.”",
    "options": {
      "A": "Lặp các từ ngữ",
      "B": "Dùng từ ngữ nối",
      "C": "Thay thế từ ngữ",
      "D": "Lặp từ ngữ và nối từ ngữ"
    },
    "correctAnswer": "C",
    "explanation": "Từ 'Nó' ở câu thứ hai được dùng để thay thế cho cụm từ 'Tết đến hoa đào nở thắm' ở câu trước nhằm liên kết hai câu lại với nhau và tránh lặp từ."
  },
  {
    "id": "TV_Q32",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu: “Trong khu vườn nắng vàng, các loài hoa đua nhau khoe sắc thắm và tỏa ngát hương thơm.” có trạng ngữ chỉ gì?",
    "options": {
      "A": "nơi chốn",
      "B": "nguyên nhân",
      "C": "thời gian",
      "D": "mục đích"
    },
    "correctAnswer": "A",
    "explanation": "Trạng ngữ 'Trong khu vườn nắng vàng' trả lời cho câu hỏi 'Ở đâu?', xác định vị trí diễn ra sự việc nên là trạng ngữ chỉ nơi chốn."
  },
  {
    "id": "TV_Q33",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Chủ ngữ trong câu: “Dưới bóng tre của ngàn xưa, thấp thoáng một mái chùa cổ kính.” là gì?",
    "options": {
      "A": "dưới bóng tre của ngàn xưa",
      "B": "thấp thoáng một mái chùa",
      "C": "mái chùa",
      "D": "một mái chùa cổ kính"
    },
    "correctAnswer": "D",
    "explanation": "Đây là câu đảo ngữ. Trạng ngữ là 'Dưới bóng tre của ngàn xưa'. Vị ngữ được đảo lên trước là 'thấp thoáng'. Chủ ngữ đứng sau là 'một mái chùa cổ kính' (chỉ đối tượng thực hiện trạng thái thấp thoáng)."
  },
  {
    "id": "TV_Q34",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Cặp quan hệ từ thích hợp điền vào chỗ chấm là: “…….. trời đang là mùa hè ………..buổi tối ở Tam Đảo vẫn lạnh.”",
    "options": {
      "A": "nếu…thì…",
      "B": "nhờ…mà…",
      "C": "tuy…nhưng…",
      "D": "không những…mà còn…"
    },
    "correctAnswer": "C",
    "explanation": "Vế 1 chỉ thời tiết mùa hè (thường nóng), vế 2 chỉ thời tiết Tam Đảo vẫn lạnh (ngược lại). Đây là mối quan hệ tương phản, phù hợp điền cặp quan hệ từ 'tuy ... nhưng ...'."
  },
  {
    "id": "TV_Q35",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Các vế trong câu ghép: “Cây chuối cũng ngủ, tàu lá lặng đi như thiếp vào trong nắng.” được nối với nhau bằng cách nào?",
    "options": {
      "A": "nối trực tiếp bằng dấu phẩy",
      "B": "nối bằng cặp quan hệ từ",
      "C": "nối bằng một quan hệ từ",
      "D": "nối bằng từ ngữ nối liên kết"
    },
    "correctAnswer": "A",
    "explanation": "Các vế câu 'Cây chuối cũng ngủ' và 'tau lá lặng đi...' được ngăn cách bởi dấu phẩy, không sử dụng từ nối nào. Đây là cách nối trực tiếp."
  },
  {
    "id": "TV_Q36",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Thứ tự các vế trong câu ghép: “Thầy phải kinh ngạc vì chú học đến đâu hiểu ngay đến đó và có trí nhớ lạ thường.” thể hiện quan hệ gì?",
    "options": {
      "A": "kết quả - nguyên nhân",
      "B": "nguyên nhân - kết quả",
      "C": "điều kiện - kết quả",
      "D": "kết quả - điều kiện"
    },
    "correctAnswer": "A",
    "explanation": "Vế 1: 'Thầy phải kinh ngạc' là kết quả; vế sau: 'vì chú học đến đâu...' bắt đầu bằng từ 'vì' nêu nguyên nhân dẫn đến sự kinh ngạc của thầy. Do đó thứ tự là kết quả trước - nguyên nhân sau."
  },
  {
    "id": "TV_Q37",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Cặp quan hệ từ “Nếu…thì…” trong câu nào dưới đây không thể hiện mối quan hệ điều kiện – kết quả?",
    "options": {
      "A": "Nếu trời mưa to thì chúng ta sẽ hoãn chuyến dã ngoại.",
      "B": "Nếu Lan chăm chỉ học tập thì bạn ấy đã đạt điểm cao hơn.",
      "C": "Nếu em là một chú chim thì em sẽ cất tiếng hót cho đời.",
      "D": "Nếu ngày mai rảnh thì mình qua nhà bạn chơi nhé."
    },
    "correctAnswer": "C",
    "explanation": "Câu C 'Nếu em là một chú chim...' thể hiện mối quan hệ giả thiết (không thể xảy ra trong thực tế) - kết quả, chứ không phải một điều kiện thực tế dẫn tới kết quả như các câu còn lại."
  },
  {
    "id": "TV_Q38",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu: “Hoa không những học giỏi mà còn hát rất hay.” có cặp quan hệ từ biểu thị quan hệ gì?",
    "options": {
      "A": "Nguyên nhân - kết quả",
      "B": "Tăng tiến",
      "C": "Tương phản",
      "D": "Giả thiết - kết quả"
    },
    "correctAnswer": "B",
    "explanation": "Cặp quan hệ từ 'không những ... mà còn ...' dùng để nối các vế câu bổ sung thông tin theo mức độ tăng dần (tăng tiến)."
  },
  {
    "id": "TV_Q39",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Trong câu: “Còn lá buồm thì cứ căng phồng như ngực người khổng lồ đẩy thuyền đi.” có mấy quan hệ từ?",
    "options": {
      "A": "3 quan hệ từ",
      "B": "2 quan hệ từ",
      "C": "1 quan hệ từ",
      "D": "4 quan hệ từ"
    },
    "correctAnswer": "B",
    "explanation": "Câu trên có 2 quan hệ từ là: 'thì' (nối trạng ngữ/chủ ngữ với vị ngữ) và 'như' (so sánh)."
  },
  {
    "id": "TV_Q40",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu ghép nào dưới đây biểu thị mối quan hệ tương phản?",
    "options": {
      "A": "Vì trời mưa to nên đường trơn trượt.",
      "B": "Mặc dù cơn bão rất lớn nhưng những cây tre vẫn đứng vững.",
      "C": "Hễ con người bảo vệ thiên nhiên thì thiên nhiên sẽ đem lại cuộc sống tốt đẹp.",
      "D": "Nam không chỉ đá bóng giỏi mà bạn ấy còn vẽ đẹp."
    },
    "correctAnswer": "B",
    "explanation": "Câu B dùng cặp quan hệ từ 'Mặc dù ... nhưng ...' nối hai vế câu có nội dung ngược chiều nhau (bão lớn vs đứng vững), biểu thị quan hệ tương phản. Câu A biểu thị nguyên nhân - kết quả, C biểu thị điều kiện/giả thiết - kết quả, D biểu thị tăng tiến."
  },
  {
    "id": "TV_Q41",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Xác định các bộ phận của câu: “Vào những đêm trăng sáng, trên dòng sông xanh, chiếc thuyền buồm nhẹ nhàng trôi.”",
    "options": {
      "A": "Có 2 trạng ngữ, 1 chủ ngữ, 1 vị ngữ.",
      "B": "Có 1 trạng ngữ, 2 chủ ngữ, 1 vị ngữ.",
      "C": "Có 2 trạng ngữ, 2 chủ ngữ, 2 vị ngữ.",
      "D": "Chỉ có trạng ngữ và vị ngữ, khuyết chủ ngữ."
    },
    "correctAnswer": "A",
    "explanation": "Câu này có 2 trạng ngữ ngăn cách bởi dấu phẩy: 'Vào những đêm trăng sáng' (trạng ngữ thời gian), 'trên dòng sông xanh' (trạng ngữ nơi chốn). Chủ ngữ là 'chiếc thuyền buồm'. Vị ngữ là 'nhẹ nhàng trôi'."
  },
  {
    "id": "TV_Q42",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Dấu hai chấm trong câu: “Cảnh vật xung quanh tôi đều thay đổi: lòng tôi đang có sự thay đổi lớn.” có tác dụng gì?",
    "options": {
      "A": "Báo hiệu bộ phận đứng sau là lời nói trực tiếp của nhân vật.",
      "B": "Báo hiệu bộ phận đứng sau là lời giải thích cho bộ phận đứng trước.",
      "C": "Dùng để ngăn cách các vế câu ghép song hành.",
      "D": "Dùng để đánh dấu các ý liệt kê."
    },
    "correctAnswer": "B",
    "explanation": "Dấu hai chấm ở đây báo hiệu vế câu đứng sau ('lòng tôi đang có sự thay đổi lớn') có vai trò giải thích nguyên nhân vì sao 'cảnh vật xung quanh tôi đều thay đổi'."
  },
  {
    "id": "TV_Q43",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu nào dưới đây dùng dấu hỏi chưa đúng?",
    "options": {
      "A": "Hãy giữ trật tự ?",
      "B": "Nhà bạn ở đâu ?",
      "C": "Vì sao hôm qua bạn nghỉ học ?",
      "D": "Một tháng có bao nhiêu ngày hả chị ?"
    },
    "correctAnswer": "A",
    "explanation": "Câu A 'Hãy giữ trật tự' là câu cầu khiến (yêu cầu, ra lệnh) nên cuối câu phải dùng dấu chấm than (!) hoặc dấu chấm (.), dùng dấu hỏi (?) là sai."
  },
  {
    "id": "TV_Q44",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Xác định kiểu cấu trúc câu ghép sau: “Gió thổi mạnh, cát bụi bay mù mịt, mọi người vội vã tìm chỗ trú.”",
    "options": {
      "A": "Nối trực tiếp không dùng từ nối.",
      "B": "Nối bằng quan hệ từ.",
      "C": "Nối bằng cặp đại từ quan hệ.",
      "D": "Nối bằng các quan hệ từ chỉ nguyên nhân."
    },
    "correctAnswer": "A",
    "explanation": "Các vế câu ghép: Vế 1: 'Gió thổi mạnh', Vế 2: 'cát bụi bay mù mịt', Vế 3: 'mọi người vội vã tìm chỗ trú' được nối với nhau trực tiếp qua các dấu phẩy, không sử dụng bất kỳ từ nối nào."
  },
  {
    "id": "TV_Q45",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Bộ phận trạng ngữ trong câu: “Nhờ sự giúp đỡ tận tình của cô giáo, bạn Nam đã tiến bộ vượt bậc.” trả lời cho câu hỏi nào?",
    "options": {
      "A": "Khi nào?",
      "B": "Ở đâu?",
      "C": "Vì sao/Nhờ đâu?",
      "D": "Để làm gì?"
    },
    "correctAnswer": "C",
    "explanation": "Trạng ngữ 'Nhờ sự giúp đỡ tận tình của cô giáo' bắt đầu bằng từ 'Nhờ', chỉ nguyên nhân/điều kiện dẫn tới kết quả tích cực, do đó trả lời cho câu hỏi 'Nhờ đâu?' hoặc 'Vì sao?'."
  },
  {
    "id": "TV_Q46",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Câu nào dưới đây có vị ngữ trả lời câu hỏi “Làm gì?”?",
    "options": {
      "A": "Mái tóc của bà em bạc trắng.",
      "B": "Bác thợ rèn đang quai những nhát búa mạnh mẽ.",
      "C": "Trường Tiểu học của em rất khang trang.",
      "D": "Bạn Lan là học sinh giỏi nhất lớp."
    },
    "correctAnswer": "B",
    "explanation": "Câu có vị ngữ trả lời câu hỏi 'Làm gì?' là câu kể 'Ai làm gì?', vị ngữ chỉ hoạt động chủ động của chủ thể. Ở đây câu B chỉ hoạt động 'đang quai những nhát búa'. Câu A, C thuộc câu kể 'Ai thế nào?', câu D thuộc câu kể 'Ai là gì?'."
  },
  {
    "id": "TV_Q47",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Trong câu ghép: “Mặt trời chưa xuất hiện nhưng tầng tầng lớp lớp bụi hồng ánh sáng đã tràn lan khắp không gian.”, các vế được nối bằng từ nào?",
    "options": {
      "A": "chưa",
      "B": "nhưng",
      "C": "đã",
      "D": "nhưng, đã"
    },
    "correctAnswer": "B",
    "explanation": "Câu ghép này gồm 2 vế câu, được nối với nhau bằng quan hệ từ 'nhưng' đứng ở ranh giới giữa 2 vế, biểu thị quan hệ tương phản."
  },
  {
    "id": "TV_Q48",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Tìm trạng ngữ trong câu: “Trên những chặng đường hành quân, để bảo vệ bí mật, các chiến sĩ chỉ đi vào ban đêm.”",
    "options": {
      "A": "Trên những chặng đường hành quân",
      "B": "để bảo vệ bí mật",
      "C": "Trên những chặng đường hành quân, để bảo vệ bí mật",
      "D": "vào ban đêm"
    },
    "correctAnswer": "C",
    "explanation": "Câu này có hai bộ phận trạng ngữ đứng đầu câu: 'Trên những chặng đường hành quân' (trạng ngữ nơi chốn) và 'để bảo vệ bí mật' (trạng ngữ mục đích). Hai trạng ngữ này được viết ngăn cách bởi dấu phẩy."
  },
  {
    "id": "TV_Q49",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Từ loại của từ “nhờ” trong câu: “Nhờ bác lao công, sân trường luôn sạch sẽ.” là gì?",
    "options": {
      "A": "Động từ",
      "B": "Quan hệ từ",
      "C": "Tính từ",
      "D": "Giới từ chỉ nơi chốn"
    },
    "correctAnswer": "B",
    "explanation": "Từ 'Nhờ' trong ngữ cảnh này được dùng để liên kết sự việc ở vế phụ (bác lao công) và sự việc ở vế chính (sân trường sạch sẽ), đóng vai trò như một Quan hệ từ chỉ nguyên nhân/phương tiện."
  },
  {
    "id": "TV_Q50",
    "category": "Ngữ pháp & Câu ghép",
    "question": "Vế câu thứ hai trong câu: “Hễ gió thổi mạnh, các bông hoa giấy lại rụng xuống lả tả.” là gì?",
    "options": {
      "A": "gi gió thổi mạnh",
      "B": "các bông hoa giấy",
      "C": "các bông hoa giấy lại rụng xuống lả tả",
      "D": "lại rụng xuống lả tả"
    },
    "correctAnswer": "C",
    "explanation": "Vế thứ nhất là 'gió thổi mạnh' (đi sau từ chỉ giả thiết 'Hễ'). Vế thứ hai đầy đủ chủ - vị là 'các bông hoa giấy lại rụng xuống lả tả'."
  },
  {
    "id": "TV_Q51",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào dưới đây là từ ghép phân loại?",
    "options": {
      "A": "Mua bán",
      "B": "múa hát",
      "C": "làn hương",
      "D": "cây lá"
    },
    "correctAnswer": "C",
    "explanation": "'Làn hương' là từ ghép phân loại vì từ này chỉ cụ thể một làn không khí mang hương thơm (phân loại hương thơm). Các từ còn lại như 'mua bán', 'múa hát', 'cây lá' là từ ghép tổng hợp chỉ các hoạt động hoặc sự vật chung chung."
  },
  {
    "id": "TV_Q52",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào dưới đây là từ láy?",
    "options": {
      "A": "đất đỏ",
      "B": "bé bỏng",
      "C": "dẻo dai",
      "D": "buôn bán"
    },
    "correctAnswer": "B",
    "explanation": "'Bé bỏng' là từ láy âm đầu (b) mang ý nghĩa giảm nhẹ, nhấn mạnh sự nhỏ bé, non nớt. Các từ khác như 'đất đỏ' (ghép phân loại), 'dẻo dai' (ghép tổng hợp), 'buôn bán' (ghép tổng hợp)."
  },
  {
    "id": "TV_Q53",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào dưới đây là từ ghép tổng hợp?",
    "options": {
      "A": "nương ngô",
      "B": "cỏ xước",
      "C": "bánh rán",
      "D": "nhà cửa"
    },
    "correctAnswer": "D",
    "explanation": "'Nhà cửa' là từ ghép tổng hợp chỉ chung nơi ăn chốn ở của con người. Các từ 'nương ngô', 'cỏ xước', 'bánh rán' đều là các từ ghép phân loại chỉ cụ thể loại nương, loại cỏ, hoặc loại bánh."
  },
  {
    "id": "TV_Q54",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “lững thững” trong câu: “Đàn cò lững thững bay trên bầu trời.” thuộc loại từ nào?",
    "options": {
      "A": "từ ghép tổng hợp",
      "B": "từ láy",
      "C": "từ ghép phân loại",
      "D": "từ đơn"
    },
    "correctAnswer": "B",
    "explanation": "'Lững thững' là từ láy bộ phận (láy vần 'ững' và âm đầu 'th/l' có sự điệp âm sinh động), mô tả nhịp điệu chậm chạp, thong thả."
  },
  {
    "id": "TV_Q55",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào dưới đây KHÔNG phải là từ láy?",
    "options": {
      "A": "nhanh nhảu",
      "B": "nhanh nhẹn",
      "C": "nhanh nhanh",
      "D": "nhanh gọn"
    },
    "correctAnswer": "D",
    "explanation": "'Nhanh gọn' là từ ghép tổng hợp gồm hai tiếng có nghĩa rõ ràng là 'nhanh' và 'gọn' kết hợp lại. Các từ khác 'nhanh nhảu', 'nhanh nhẹn' (láy phụ âm đầu), 'nhanh nhanh' (láy toàn bộ)."
  },
  {
    "id": "TV_Q56",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Dòng nào dưới đây chỉ gồm các từ láy?",
    "options": {
      "A": "ngoan ngoãn, chăm chỉ, thật thà, khó khăn",
      "B": "bạn bè, hư hỏng, gắn bó, bạn học",
      "C": "tu hú, tuổi tác, thơm tho, dẻo dai",
      "D": "giúp đỡ, bạn đường, bạn đọc, khó khăn"
    },
    "correctAnswer": "A",
    "explanation": "Dòng A gồm toàn bộ là các từ láy phụ âm đầu: 'ngoan ngoãn', 'chăm chỉ', 'thật thà', 'khó khăn'. Các dòng khác có lẫn từ ghép như 'hư hỏng', 'bạn học', 'giúp đỡ', 'tuổi tác'."
  },
  {
    "id": "TV_Q57",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào dưới đây là từ ghép tổng hợp?",
    "options": {
      "A": "trái cam",
      "B": "bạn bè",
      "C": "bút chì",
      "D": "xe đạp"
    },
    "correctAnswer": "B",
    "explanation": "'Bạn bè' là từ ghép tổng hợp chỉ chung một nhóm bạn. 'Trái cam', 'bút chì', 'xe đạp' là từ ghép phân loại chỉ cụ thể loại quả, loại bút, loại xe."
  },
  {
    "id": "TV_Q58",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Các từ: “đất nước, giang sơn, xã tắc, quốc gia” đều là:",
    "options": {
      "A": "Từ ghép tổng hợp",
      "B": "Từ láy bộ phận",
      "C": "Từ ghép phân loại",
      "D": "Từ đơn đa âm"
    },
    "correctAnswer": "A",
    "explanation": "Các từ này đều cấu tạo từ hai tiếng có nghĩa bao quát để chỉ chung lãnh thổ quốc gia, đất nước nói chung. Do đó chúng là từ ghép tổng hợp."
  },
  {
    "id": "TV_Q59",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ nào có cấu tạo khác với các từ còn lại: “bập bùng, rì rào, vi vu, sấm sét”?",
    "options": {
      "A": "bập bùng",
      "B": "rì rào",
      "C": "vi vu",
      "D": "sấm sét"
    },
    "correctAnswer": "D",
    "explanation": "'Sấm sét' là từ ghép tổng hợp gồm 2 tiếng có nghĩa độc lập ('sấm' và 'sét'). Các từ 'bập bùng', 'rì rào', 'vi vu' đều là từ láy tượng thanh miêu tả âm thanh."
  },
  {
    "id": "TV_Q60",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Trong câu: “Mùa xuân, cây cối đâm chồi nảy lộc.” có từ phức nào?",
    "options": {
      "A": "mùa xuân, cây cối, đâm chồi, nảy lộc",
      "B": "mùa xuân, cây cối",
      "C": "cây cối, đâm chồi",
      "D": "đâm chồi, nảy lộc"
    },
    "correctAnswer": "B",
    "explanation": "'Mùa xuân' là từ ghép phân loại (từ phức), 'cây cối' là từ láy (từ phức). Các chữ khác như 'đâm', 'chồi', 'nảy', 'lộc' là những từ đơn đứng riêng liên kết với nhau trong cụm động từ."
  },
  {
    "id": "TV_Q61",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “nhỏ nhắn” thuộc loại từ gì?",
    "options": {
      "A": "Từ ghép phân loại",
      "B": "Từ ghép tổng hợp",
      "C": "Từ láy",
      "D": "Từ đơn"
    },
    "correctAnswer": "C",
    "explanation": "'Nhỏ nhắn' là từ láy âm đầu (nh) biểu thị mức độ nhẹ nhàng, đáng yêu của tính chất nhỏ bé."
  },
  {
    "id": "TV_Q62",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “học hành” thuộc nhóm cấu tạo từ nào?",
    "options": {
      "A": "Từ ghép tổng hợp",
      "B": "Từ ghép phân loại",
      "C": "Từ láy âm đầu",
      "D": "Từ láy vần"
    },
    "correctAnswer": "A",
    "explanation": "'Học hành' gồm hai tiếng có nghĩa gần nhau kết hợp lại để chỉ chung việc học tập nói chung. Tuy phát âm có phụ âm đầu giống nhau nhưng do tiếng 'hành' có nghĩa (thực hành, làm), đây là từ ghép tổng hợp chứ không phải từ láy."
  },
  {
    "id": "TV_Q63",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Dòng nào dưới đây gồm các từ láy tượng hình?",
    "options": {
      "A": "líu lo, rầm rập, xôn xao, ào ào",
      "B": "lom khom, thướt tha, khẳng khiu, liêu xiêu",
      "C": "lạch cạch, mổ lách cách, rì rào",
      "D": "xinh xinh, nho nhỏ, đo đỏ"
    },
    "correctAnswer": "B",
    "explanation": "Từ láy tượng hình mô tả hình ảnh, dáng vẻ của sự vật: 'lom khom', 'thướt tha', 'khẳng khiu', 'liêu xiêu'. Dòng A, C là từ láy tượng thanh (chỉ âm thanh); dòng D là từ láy giảm nhẹ chỉ mức độ màu sắc/kích thước."
  },
  {
    "id": "TV_Q64",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “xe máy” là từ ghép loại gì?",
    "options": {
      "A": "Từ ghép tổng hợp",
      "B": "Từ ghép phân loại",
      "C": "Từ đơn đa âm",
      "D": "Từ phức ngẫu hợp"
    },
    "correctAnswer": "B",
    "explanation": "'Xe máy' là từ ghép phân loại vì tiếng 'máy' đứng sau phân loại cụ thể cho danh từ 'xe' (phân biệt với xe đạp, xe bò...)."
  },
  {
    "id": "TV_Q65",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “nhạt nhẽo” thuộc loại cấu tạo từ nào?",
    "options": {
      "A": "Từ ghép phân loại",
      "B": "Từ ghép tổng hợp",
      "C": "Từ láy",
      "D": "Từ đơn"
    },
    "correctAnswer": "C",
    "explanation": "'Nhạt nhẽo' là từ láy âm đầu (nh) biểu thị tính chất nhạt một cách tẻ nhạt, thiếu tình cảm."
  },
  {
    "id": "TV_Q66",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “bạn bè” thuộc loại cấu tạo từ nào?",
    "options": {
      "A": "Từ ghép phân loại",
      "B": "Từ ghép tổng hợp",
      "C": "Từ láy",
      "D": "Từ đơn"
    },
    "correctAnswer": "B",
    "explanation": "'Bạn bè' là từ ghép tổng hợp chỉ quan hệ bạn bè nói chung. Dù phát âm giống phụ âm đầu 'b', nhưng 'bè' vốn là từ cổ có nghĩa (như trong bè phái, kết bè), do đó đây là từ ghép tổng hợp."
  },
  {
    "id": "TV_Q67",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “chùa chiền” có cấu tạo từ thuộc nhóm nào?",
    "options": {
      "A": "Từ ghép tổng hợp",
      "B": "Từ láy âm đầu",
      "C": "Từ ghép phân loại",
      "D": "Từ đơn đa âm"
    },
    "correctAnswer": "A",
    "explanation": "'Chùa chiền' là từ ghép tổng hợp. Tiếng 'chiền' là từ Việt cổ có nghĩa là chùa (bắt nguồn từ tiếng Phạn 'caitya'). Vì cả hai tiếng đều có nghĩa chỉ chùa nên chúng ghép lại thành từ ghép tổng hợp."
  },
  {
    "id": "TV_Q68",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “lạnh lùng” thuộc nhóm từ loại nào xét theo cấu tạo?",
    "options": {
      "A": "Từ ghép tổng hợp",
      "B": "Từ ghép phân loại",
      "C": "Từ láy âm đầu",
      "D": "Từ láy vần"
    },
    "correctAnswer": "C",
    "explanation": "'Lạnh lùng' là từ láy phụ âm đầu 'l' dùng để chỉ thái độ lạnh nhạt, hờ hững."
  },
  {
    "id": "TV_Q69",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Từ “chim chóc” thuộc nhóm cấu tạo từ nào?",
    "options": {
      "A": "Từ ghép phân loại",
      "B": "Từ ghép tổng hợp",
      "C": "Từ láy âm đầu",
      "D": "Từ láy vần"
    },
    "correctAnswer": "C",
    "explanation": "'Chim chóc' là từ láy âm đầu 'ch'. Tiếng 'chim' có nghĩa, còn tiếng 'chóc' là tiếng đệm mất nghĩa có tác dụng khái quát hóa sự vật (chỉ loài chim nói chung)."
  },
  {
    "id": "TV_Q70",
    "category": "Cấu tạo từ (Từ ghép/Từ láy)",
    "question": "Dòng nào dưới đây gồm các từ ghép phân loại?",
    "options": {
      "A": "xe đạp, tàu hỏa, bút bi, đường sắt",
      "B": "sách vở, quần áo, bàn ghế, giày dép",
      "C": "mưa bão, sông ngòi, ruộng đồng, cây cối",
      "D": "xanh lè, xanh mát, xanh mượt, xanh um"
    },
    "correctAnswer": "A",
    "explanation": "Dòng A chứa toàn từ ghép phân loại chỉ các loại phương tiện, đồ dùng học tập cụ thể. Dòng B, C là từ ghép tổng hợp; dòng D chứa từ láy."
  },
  {
    "id": "TV_Q71",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Câu tục ngữ: “Tre non dễ uốn” khuyên răn chúng ta điều gì?",
    "options": {
      "A": "Tre lúc còn non rất mềm, dễ uốn cong làm đồ dùng.",
      "B": "Nên giáo dục, dạy dỗ trẻ em từ lúc còn nhỏ tuổi thì dễ tiếp thu và uốn nắn nhân cách.",
      "C": "Không nên uốn nắn những người đã trưởng thành.",
      "D": "Tre già rồi sẽ cứng, không uốn nắn được nữa."
    },
    "correctAnswer": "B",
    "explanation": "Đây là câu tục ngữ mượn đặc tính vật lý của cây tre non dễ uốn nắn để nói về giáo dục con người. Khuyên răn việc dạy dỗ, giáo dục đạo đức, nề nếp cho trẻ em nên bắt đầu từ sớm thì dễ đạt hiệu quả."
  },
  {
    "id": "TV_Q72",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Danh hiệu huân chương cao quý nhất của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là gì?",
    "options": {
      "A": "Huân chương Độc lập",
      "B": "Huân chương Lao động",
      "C": "Huân chương Sao vàng",
      "D": "Huân chương Quân công"
    },
    "correctAnswer": "C",
    "explanation": "Huân chương Sao vàng là Huân chương cao quý nhất của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam để tặng hoặc truy tặng cho cá nhân, tập thể có công lao đặc biệt xuất sắc đối với đất nước."
  },
  {
    "id": "TV_Q73",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Trẻ người non dạ” có nghĩa là gì?",
    "options": {
      "A": "Người có tuổi đời còn trẻ và dạ dày hoạt động chưa tốt.",
      "B": "Còn trẻ tuổi, chưa có nhiều kinh nghiệm sống nên suy nghĩ và hành động còn nông nổi, dại dột.",
      "C": "Người có tấm lòng nhân hậu, luôn nghĩ tốt cho người khác.",
      "D": "Những đứa trẻ ngoan ngoãn biết vâng lời cha mẹ."
    },
    "correctAnswer": "B",
    "explanation": "'Trẻ người non dạ' ý nói về những người tuổi đời còn ít, chưa trải sự đời nên kinh nghiệm sống còn non nớt, dễ tin người hoặc hành động thiếu chín chắn."
  },
  {
    "id": "TV_Q74",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đọc đoạn thơ sau và trả lời câu hỏi:\n“Đứng giữa nhà mà cháy\nMà tỏa sáng xung quanh\nChỉ thương cây đèn ấy\nKhông sáng nổi chân mình”\nĐoạn thơ trên sử dụng biện pháp nghệ thuật nổi bật nào?",
    "options": {
      "A": "So sánh",
      "B": "Nhân hóa",
      "C": "Điệp ngữ",
      "D": "Ẩn dụ"
    },
    "correctAnswer": "B",
    "explanation": "Biện pháp nghệ thuật nổi bật là Nhân hóa ('Chỉ thương cây đèn ấy/ Không sáng nổi chân mình' - gán cho cây đèn cảm xúc thương cảm của con người và tình cảnh trớ trêu như một số kiếp con người luôn hy sinh cho người khác mà quên bản thân)."
  },
  {
    "id": "TV_Q75",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Ý nghĩa của câu tục ngữ: “Học thầy không tày học bạn” là gì?",
    "options": {
      "A": "Học tập ở thầy cô không có ích bằng học tập từ bạn bè xung quanh.",
      "B": "Khuyên chúng ta ngoài học tập thầy cô, cần biết học hỏi thêm những điều hay lẽ phải từ bạn bè.",
      "C": "Không cần nghe lời thầy cô dạy bảo, chỉ cần làm theo bạn bè.",
      "D": "Bạn bè luôn giỏi hơn thầy cô giáo giáo viên."
    },
    "correctAnswer": "B",
    "explanation": "Câu tục ngữ đề cao vai trò của bạn bè trong học tập, khuyên chúng ta ngoài việc học hỏi ở thầy cô thì việc học tập tích cực, trao đổi thảo luận với bạn bè cũng là một phương pháp tiến bộ rất nhanh."
  },
  {
    "id": "TV_Q76",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Ý nghĩa của câu tục ngữ: “Đi một ngày đàng học một sàng khôn” là gì?",
    "options": {
      "A": "Mỗi ngày đi bộ một quãng đường dài sẽ giúp cơ thể khỏe mạnh, thông minh hơn.",
      "B": "Càng đi nhiều nơi, tiếp xúc nhiều với thế giới rộng lớn xung quanh thì con người càng học hỏi và tích lũy được nhiều kiến thức, hiểu biết.",
      "C": "Đi xa nhà rất vất vả nhưng sẽ mua được nhiều sàng gạo ngon.",
      "D": "Chỉ nên đi học hỏi kiến thức ở những nơi xa xôi, hẻo lánh."
    },
    "correctAnswer": "B",
    "explanation": "Câu tục ngữ khuyên chúng ta nên bước ra thế giới bên ngoài, đi đây đi đó để trải nghiệm thực tế vì thế giới rộng lớn sẽ mang lại nhiều bài học khôn ngoan, nâng cao hiểu biết."
  },
  {
    "id": "TV_Q77",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đọc đoạn văn sau và trả lời câu hỏi:\n“Mùa thu, tiết trời trong xanh dịu nhẹ, con đường làng bỗng như quen như lạ. Mỗi sớm đến trường, bước chân chợt ngập ngừng khi đánh thức những bụi cây non vẫn còn chưa tỉnh giấc...”\nTác giả miêu tả tiết trời mùa thu như thế nào?",
    "options": {
      "A": "Tiết trời trong xanh dịu nhẹ",
      "B": "Tiết trời ấm áp nắng vàng",
      "C": "Tiết trời lạnh lẽo âm u",
      "D": "Tiết trời se lạnh nhiều sương mù"
    },
    "correctAnswer": "A",
    "explanation": "Đoạn văn viết rõ ràng ở câu đầu tiên: 'Mùa thu, tiết trời trong xanh dịu nhẹ...'. Do đó phương án A là đáp án chính xác."
  },
  {
    "id": "TV_Q78",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đoạn văn trích ở câu hỏi trên có chứa từ láy nào?",
    "options": {
      "A": "quen lạ",
      "B": "ngập ngừng",
      "C": "đến trường",
      "D": "tỉnh giấc"
    },
    "correctAnswer": "B",
    "explanation": "Trong các phương án đưa ra, chỉ có từ 'ngập ngừng' là từ láy phụ âm đầu 'ng'. Cụm 'quen lạ' là từ ghép, 'đến trường' và 'tỉnh giấc' là cụm từ."
  },
  {
    "id": "TV_Q79",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Từ nào có thể thay thế cho từ “ngập ngừng” trong câu: “Mỗi sớm đến trường, bước chân chợt ngập ngừng...”?",
    "options": {
      "A": "do dự",
      "B": "quả quyết",
      "C": "dừng lại",
      "D": "mau lẹ"
    },
    "correctAnswer": "A",
    "explanation": "'Ngập ngừng' chỉ trạng thái bước chân chậm lại, vừa đi vừa lưỡng lự chưa quyết. Từ đồng nghĩa có thể thay thế là 'do dự'. 'Quả quyết', 'mau lẹ' là từ trái nghĩa."
  },
  {
    "id": "TV_Q80",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ nào dưới đây chỉ tinh thần đoàn kết, giúp đỡ lẫn nhau của nhân dân ta?",
    "options": {
      "A": "Lá lành đùm lá rách",
      "B": "Ăn quả nhớ kẻ trồng cây",
      "C": "Uống nước nhớ nguồn",
      "D": "Tôn sư trọng đạo"
    },
    "correctAnswer": "A",
    "explanation": "'Lá lành đùm lá rách' là thành ngữ chỉ tinh thần tương thân tương ái, đoàn kết giúp đỡ nhau lúc khó khăn hoạn nạn. Câu B, C nói về lòng biết ơn; câu D nói về kính trọng thầy cô giáo."
  },
  {
    "id": "TV_Q81",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Thắng không kiêu, bại không nản” khuyên răn chúng ta thái độ gì?",
    "options": {
      "A": "Khi chiến thắng thì phải khoe khoang, khi thất bại thì nên bỏ cuộc.",
      "B": "Cần giữ thái độ khiêm tốn khi đạt thành công và kiên trì, vững vàng không nản chí khi gặp thất bại.",
      "C": "Không nên tham gia các cuộc thi để tránh việc thắng thua.",
      "D": "Chỉ nên chơi với những người luôn chiến thắng."
    },
    "correctAnswer": "B",
    "explanation": "Thành ngữ khuyên răn con người cách đối nhân xử thế trước thắng và bại: không được kiêu ngạo khi thành công, và không được nản chí buông xuôi khi thất bại."
  },
  {
    "id": "TV_Q82",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Một nắng hai sương” phản ánh điều gì?",
    "options": {
      "A": "Sự thay đổi thất thường của thời tiết trong một ngày.",
      "B": "Sự vất vả, dãi dầu mưa nắng cực khổ của người lao động (đặc biệt là người nông dân).",
      "C": "Lợi ích của việc phơi nắng buổi sáng và hóng sương buổi đêm.",
      "D": "Thời gian làm việc ngắn ngủi của người đi cày ruộng."
    },
    "correctAnswer": "B",
    "explanation": "'Một nắng hai sương' mô tả người lao động phải làm việc từ lúc sương sớm chưa tan đến lúc sương đêm rơi xuống, trải qua nắng nôi vất vả cả ngày, thể hiện sự cần cù, gian khổ."
  },
  {
    "id": "TV_Q83",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Câu ca dao:\n“Dù ai nói ngả nói nghiêng\nLòng ta vẫn giữ như kiềng ba chân”\nKhuyên chúng ta điều gì?",
    "options": {
      "A": "Nên sử dụng kiềng ba chân để nấu ăn vì nó rất vững chãi.",
      "B": "Cần giữ vững lập trường, ý chí kiên định của bản thân, không bị dao động trước ý kiến bàn tán của người khác.",
      "C": "Không nên nghe theo bất kỳ lời khuyên nào từ người khác.",
      "D": "Nên đứng vững bằng ba chân."
    },
    "correctAnswer": "B",
    "explanation": "Câu ca dao mượn hình ảnh 'kiềng ba chân' không bao giờ lung lay để khuyên mỗi người cần có lòng kiên định, giữ vững ý chí, lập trường đúng đắn của mình trước tác động bên ngoài."
  },
  {
    "id": "TV_Q84",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Nghĩa của câu tục ngữ: “Gần mực thì đen, gần đèn thì rạng” là gì?",
    "options": {
      "A": "Mực có màu đen làm bẩn quần áo, đèn thắp sáng giúp nhìn rõ xung quanh.",
      "B": "Hoàn cảnh sống, môi trường xung quanh và bạn bè có ảnh hưởng rất lớn đến sự hình thành nhân cách của mỗi người.",
      "C": "Chỉ nên học bài lúc có đèn sáng, tránh viết mực đen.",
      "D": "Không nên đi lại trong đêm tối."
    },
    "correctAnswer": "B",
    "explanation": "Mực đại diện cho cái xấu, đèn đại diện cho cái tốt, cái sáng suốt. Câu tục ngữ khuyên răn con người chọn môi trường sống tốt, bạn bè tốt để học hỏi, tránh xa thói hư tật xấu."
  },
  {
    "id": "TV_Q85",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Câu tục ngữ nào dưới đây khuyên học sinh cần chăm chỉ, kiên trì học hỏi và rèn luyện thì sẽ đạt được thành công?",
    "options": {
      "A": "Có chí thì nên",
      "B": "Ăn vóc học hay",
      "C": "Có công mài sắt, có ngày nên kim",
      "D": "Học đi đôi với hành"
    },
    "correctAnswer": "C",
    "explanation": "'Có công mài sắt, có ngày nên kim' mượn việc kiên trì mài một thanh sắt lớn thành cây kim nhỏ bé, tinh xảo để khuyên con người kiên nhẫn vượt qua khó khăn, kiên trì rèn luyện sẽ thành công."
  },
  {
    "id": "TV_Q86",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Kề vai sát cánh” biểu thị tinh thần gì?",
    "options": {
      "A": "Đứng sát bên nhau để chụp ảnh kỷ niệm.",
      "B": "Sự đồng lòng, đoàn kết, cùng nhau chia sẻ gánh nặng và vượt qua khó khăn thách thức.",
      "C": "Hai người cùng nhau đi dạo bộ.",
      "D": "Tranh giành vị trí đứng đầu của nhau."
    },
    "correctAnswer": "B",
    "explanation": "'Kề vai sát cánh' thể hiện sự sát cánh kề cận bên nhau, đồng tâm hiệp lực, tương trợ lẫn nhau vượt qua gian khó."
  },
  {
    "id": "TV_Q87",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Từ “nhân” trong từ “nhân tài” có nghĩa là gì?",
    "options": {
      "A": "lòng thương người (nhân hậu)",
      "B": "người (con người)",
      "C": "nguyên nhân (lý do)",
      "D": "hột bên trong quả (nhân hạt)"
    },
    "correctAnswer": "B",
    "explanation": "'Nhân tài' nghĩa là người có tài năng xuất chúng. Tiếng 'nhân' ở đây có nghĩa Hán Việt là 'người'. Ở từ 'nhân hậu', 'nhân' mới mang nghĩa là lòng thương người."
  },
  {
    "id": "TV_Q88",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Câu tục ngữ: “Chị ngã em nâng” thể hiện điều gì?",
    "options": {
      "A": "Sự vụng về của người chị khi đi đứng bị té ngã.",
      "B": "Tình cảm yêu thương gắn bó, đùm bọc, nâng đỡ lẫn nhau giữa anh chị em ruột thịt trong gia đình.",
      "C": "Em nhỏ tuổi hơn nên luôn phải đi sau đỡ người lớn tuổi hơn.",
      "D": "Việc người em giúp người lớn khi họ gặp tai nạn giao thông."
    },
    "correctAnswer": "B",
    "explanation": "'Chị ngã em nâng' chỉ tình cảm ruột thịt bền chặt giữa anh chị em trong nhà, luôn sẵn sàng tương trợ, giúp đỡ lẫn nhau khi gặp hoạn nạn, khó khăn."
  },
  {
    "id": "TV_Q89",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ nào dưới đây KHÔNG đồng nghĩa với thành ngữ “Một lòng một dạ”?",
    "options": {
      "A": "Trước sau như một",
      "B": "Nghĩ sao làm vậy",
      "C": "Khăng khăng một mực",
      "D": "Trung thành vô hạn"
    },
    "correctAnswer": "B",
    "explanation": "'Một lòng một dạ' thể hiện thái độ kiên định, trung thành không thay đổi lòng dạ. 'Trước sau như một', 'khăng khăng một mực' đều mang nét nghĩa này. Còn 'nghĩ sao làm vậy' chỉ sự bộc trực, thẳng thắn, không liên quan."
  },
  {
    "id": "TV_Q90",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Hiện nay, di tích Văn Miếu – Quốc Tử Giám là nơi thờ tự ai?",
    "options": {
      "A": "Lão Tử và những người có công mở mang giáo dục thời xưa",
      "B": "Khổng Tử và các vị tiến sĩ, trạng nguyên",
      "C": "Lão Tử và các vị tiến sĩ, trạng nguyên",
      "D": "Khổng Tử và những người có công mở mang giáo dục thời xưa"
    },
    "correctAnswer": "D",
    "explanation": "Văn Miếu – Quốc Tử Giám thờ Khổng Tử (nhà triết học lỗi lạc phương Đông sáng lập Nho giáo) và Chu Văn An (người thầy giáo mẫu mực của nước Việt) cùng những người có công mở mang giáo dục thời xưa. Phương án D là chính xác nhất."
  },
  {
    "id": "TV_Q91",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ nào dưới đây chỉ tình cảm gắn bó tha thiết với quê hương xứ sở?",
    "options": {
      "A": "Quê cha đất tổ",
      "B": "Đi một ngày đàng học một sàng khôn",
      "C": "Chân cứng đá mềm",
      "D": "Nước chảy đá mòn"
    },
    "correctAnswer": "A",
    "explanation": "'Quê cha đất tổ' (hoặc 'Lá rụng về cội') chỉ mảnh đất nơi tổ tiên ông bà sinh sống lâu đời, thể hiện lòng hướng về nguồn cội quê hương xứ sở."
  },
  {
    "id": "TV_Q92",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đọc đoạn thơ sau:\n“Thuyền ta chầm chậm vào Ba Bể\nNúi dựng cheo leo, hồ lặng im\nLá rừng với gió ngân se sẽ\nHọa tiếng lòng ta với tiếng chim.”\nTừ “họa” trong câu thơ cuối có nghĩa là gì?",
    "options": {
      "A": "Tai họa, điều không may mắn ập đến.",
      "B": "Hội họa, vẽ tranh phong cảnh núi rừng.",
      "C": "Hát hòa theo, hòa nhịp cùng tiếng hát/tiếng lòng.",
      "D": "Tai ương bất ngờ do thiên nhiên gây ra."
    },
    "correctAnswer": "C",
    "explanation": "'Họa' ở đây là động từ chỉ hoạt động hòa âm, phụ họa theo, hát hòa nhịp theo tiếng lòng của con người với âm thanh thiên nhiên (tiếng chim)."
  },
  {
    "id": "TV_Q93",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đoạn thơ trích ở câu hỏi trên (Thuyền ta chầm chậm...) miêu tả cảnh đẹp ở địa danh nào?",
    "options": {
      "A": "Vịnh Hạ Long",
      "B": "Hồ Ba Bể",
      "C": "Đèo Hải Vân",
      "D": "Hồ Tây"
    },
    "correctAnswer": "B",
    "explanation": "Câu thơ đầu tiên nêu rõ địa danh: 'Thuyền ta chầm chậm vào Ba Bể'. Đây chính là hồ Ba Bể nổi tiếng ở tỉnh Bắc Kạn."
  },
  {
    "id": "TV_Q94",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đọc đoạn thơ sau của nhà thơ Nguyễn Khoa Điềm:\n“Mặt trời của bắp thì nằm trên núi\nMặt trời của mẹ, em nằm trên lưng.”\nHình ảnh “mặt trời của mẹ” trong câu thơ thứ hai chỉ ai?",
    "options": {
      "A": "Mặt trời thiên nhiên chiếu rọi ánh sáng ấm áp.",
      "B": "Đứa con thân yêu đang ngủ trên lưng mẹ.",
      "C": "Hạt bắp non mọc trên nương rẫy.",
      "D": "Lưng núi to lớn phía trước."
    },
    "correctAnswer": "B",
    "explanation": "Hình ảnh ẩn dụ 'mặt trời của mẹ' chỉ em bé đang nằm ngủ trên lưng mẹ. Con chính là nguồn sáng, nguồn sống ấm áp, niềm hy vọng lớn lao nhất của cuộc đời người mẹ."
  },
  {
    "id": "TV_Q95",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Từ “nhân” trong từ “nhân hậu” có nghĩa là gì?",
    "options": {
      "A": "người (con người)",
      "B": "lòng thương người",
      "C": "hạt bên trong của quả",
      "D": "nguyên nhân của sự việc"
    },
    "correctAnswer": "B",
    "explanation": "Trong từ 'nhân hậu', tiếng 'nhân' mang nghĩa là tình thương người, lòng nhân ái. (Hậu nghĩa là dày, sâu sắc)."
  },
  {
    "id": "TV_Q96",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Chân cứng đá mềm” thể hiện ý chí gì?",
    "options": {
      "A": "Sức mạnh phi thường làm cho những viên đá trở nên mềm mại.",
      "B": "Ý chí kiên trì, nghị lực vượt khó vượt khổ để vượt qua mọi thử thách, gian lao trên đường đời.",
      "C": "Đôi chân bền bỉ, cứng cáp khi đi trên những con đường nhiều đá sỏi.",
      "D": "Sự may mắn giúp công việc trôi chảy thuận lợi."
    },
    "correctAnswer": "B",
    "explanation": "'Chân cứng đá mềm' ca ngợi ý chí nghị lực của con người, khuyên nhủ vượt khó: khi ý chí kiên định và hành động bền bỉ (chân cứng) thì mọi trở ngại to lớn (đá mềm) đều có thể vượt qua."
  },
  {
    "id": "TV_Q97",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ nào dưới đây mang nghĩa khuyên răn con người phải ghi nhớ công ơn người giúp đỡ mình?",
    "options": {
      "A": "Ăn quả nhớ kẻ trồng cây",
      "B": "Có chí thì nên",
      "C": "Thẳng như ruột ngựa",
      "D": "Chân cứng đá mềm"
    },
    "correctAnswer": "A",
    "explanation": "'Ăn quả nhớ kẻ trồng cây' khuyên chúng ta khi được hưởng thụ thành quả tốt đẹp phải luôn nhớ tới công ơn nuôi dưỡng, vun đắp của người đi trước."
  },
  {
    "id": "TV_Q98",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Nghĩa của thành ngữ: “Nước chảy đá mòn” là gì?",
    "options": {
      "A": "Dòng nước chảy xiết có thể bào mòn những hòn đá lớn.",
      "B": "Sự kiên trì, bền bỉ mưu cầu việc lớn lâu ngày rồi cũng sẽ đạt kết quả tốt đẹp.",
      "C": "Sự tàn phá của thiên tai lũ lụt đối với địa hình đất đá.",
      "D": "Việc phí hoài thời gian vô ích vào những chuyện xa xôi."
    },
    "correctAnswer": "B",
    "explanation": "'Nước chảy đá mòn' chỉ ra quy luật tự nhiên nước chảy lâu ngày làm mòn đá cứng, từ đó khuyên răn con người sự kiên trì nhẫn nại sẽ vượt qua mọi khó khăn thử thách khó khăn nhất."
  },
  {
    "id": "TV_Q99",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Thành ngữ: “Thẳng như ruột ngựa” mô tả tính cách gì của con người?",
    "options": {
      "A": "Tính cách quanh co, dối trá, lừa lọc.",
      "B": "Tính cách bộc trực, thẳng thắn, có sao nói vậy, không giấu giếm hay mưu mô.",
      "C": "Cơ thể gầy gò, đi đứng thẳng lưng.",
      "D": "Tính cách nóng nảy, hay cáu gắt vô cớ."
    },
    "correctAnswer": "B",
    "explanation": "'Thẳng như ruột ngựa' mô tả tính cách thẳng thắn, bộc trực, chân thành, không quanh co giấu giếm suy nghĩa của bản thân."
  },
  {
    "id": "TV_Q100",
    "category": "Đọc hiểu & Thành ngữ/Tục ngữ",
    "question": "Đọc đoạn thơ sau của nhà thơ Ý Nhi:\n“Đất thương cây non trẻ\nNuôi cây dần lớn khôn\nCây thương mẹ vất vả\nTỏa một màu mát êm.”\nĐoạn thơ trên sử dụng nghệ thuật nhân hóa gợi cảm nhận gì sâu sắc nhất về mối quan hệ gia đình?",
    "options": {
      "A": "Cây xanh luôn mang lại bóng mát cho đất đai khô cằn.",
      "B": "Tình thương yêu nuôi nấng của cha mẹ đối với con cái và lòng biết ơn đền đáp công ơn sinh thành của con dành cho cha mẹ.",
      "C": "Sự phát triển tự nhiên của cây cối nhờ chất dinh dưỡng của đất đai.",
      "D": "Sự vất vả của người nông dân cày cuốc chăm sóc cây trồng."
    },
    "correctAnswer": "B",
    "explanation": "Qua biện pháp nhân hóa (Đất thương cây như cha mẹ thương con; Cây thương mẹ vất vả như con cái thương yêu cha mẹ), đoạn thơ ca ngợi tình yêu thương nuôi dưỡng bao la của đấng sinh thành và tấm lòng biết ơn, hiếu thảo đền đáp công ơn cha mẹ của con cái."
  },
  {
    "id": "TV_EY1",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Cho khổ thơ sau:\n\n“Thuyền ta chầm chậm vào Ba Bể\nNúi dựng cheo leo, hồ lặng im\nLá rừng với gió ngân se sẽ\nHọa tiếng lòng ta với tiếng chim.”\n\nHãy tìm các Danh từ, Động từ, Tính từ, Đại từ, và Quan hệ từ có trong khổ thơ trên.",
    "explanation": "<strong>Lời giải thích chi tiết:</strong><br>- <strong>Danh từ:</strong> thuyền, Ba Bể, núi, hồ, lá rừng, gió, tiếng lòng, tiếng chim.<br>- <strong>Động từ:</strong> vào, dựng, lặng im (chỉ trạng thái), ngân, họa.<br>- <strong>Tính từ:</strong> chầm chậm, cheo leo, se sẽ.<br>- <strong>Đại từ:</strong> ta (đại từ nhân xưng).<br>- <strong>Quan hệ từ:</strong> với (trong 'Lá rừng với gió' và 'Họa tiếng lòng ta với tiếng chim')."
  },
  {
    "id": "TV_EY2",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Tìm trạng ngữ, chủ ngữ, vị ngữ trong các câu dưới đây:\n\na) Hôm nay, tất cả học sinh khối năm làm bài khảo sát môn Toán, Tiếng Việt và Tiếng Anh.\nb) Mùa đông, gia đình nhà chim gõ kiến, chim họa mi ẩn náu trong hốc cây.\nc) Những con sếu đầu đỏ bay lững thững trên cánh đồng.\nd) Tuy ông nội tôi đã già nhưng ông vẫn làm vườn để mua vui mỗi ngày.",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>a) <strong>Trạng ngữ:</strong> Hôm nay (TN chỉ thời gian). <strong>Chủ ngữ:</strong> tất cả học sinh khối năm. <strong>Vị ngữ:</strong> làm bài khảo sát môn Toán, Tiếng Việt và Tiếng Anh.<br>b) <strong>Trạng ngữ:</strong> Mùa đông (TN chỉ thời gian). <strong>Chủ ngữ:</strong> gia đình nhà chim gõ kiến, chim họa mi. <strong>Vị ngữ:</strong> ẩn náu trong hốc cây.<br>c) <strong>Trạng ngữ:</strong> Không có. <strong>Chủ ngữ:</strong> Những con sếu đầu đỏ. <strong>Vị ngữ:</strong> bay lững thững trên cánh đồng.<br>d) Câu ghép có 2 vế nối bằng cặp QHT 'Tuy... nhưng...':<br>- Vế 1: <strong>Chủ ngữ 1:</strong> ông nội tôi | <strong>Vị ngữ 1:</strong> đã già.<br>- Vế 2: <strong>Chủ ngữ 2:</strong> ông | <strong>Vị ngữ 2:</strong> vẫn làm vườn để mua vui mỗi ngày."
  },
  {
    "id": "TV_EY3",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Cho các từ sau: trường mầm non, mầm non mới nhú lên, trẻ em là mầm non của đất nước, quả xanh, áo xanh, quả thận, quả bóng, quả cam. Xác định từ nào mang nghĩa gốc, từ nào mang nghĩa chuyển của các từ gạch chân (mầm non, xanh, quả).",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>- <strong>Từ 'mầm non':</strong><br>  + Nghĩa gốc: 'mầm non mới nhú lên' (chỉ bộ phận non nớt của cây).<br>  + Nghĩa chuyển: 'trường mầm non' (chỉ cấp học nhỏ tuổi), 'trẻ em là mầm non của đất nước' (chỉ thế hệ tương lai).<br>- <strong>Từ 'xanh':</strong><br>  + Nghĩa gốc: 'quả xanh' (chỉ màu sắc xanh của quả), 'áo xanh' (chỉ màu sắc của áo).<br>- <strong>Từ 'quả':</strong><br>  + Nghĩa gốc: 'quả cam' (chỉ bộ phận chứa hạt của cây ăn quả).<br>  + Nghĩa chuyển: 'quả thận' (chỉ cơ quan nội tạng), 'quả bóng' (chỉ vật thể hình cầu dùng để chơi)."
  },
  {
    "id": "TV_EY4",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Trong bài 'Khúc hát ru những em bé lớn trên lưng mẹ', nhà thơ Nguyễn Khoa Điềm viết:\n\n“Mặt trời của bắp thì nằm trên núi\nMặt trời của mẹ, em nằm trên lưng.”\n\nHãy nêu cảm nhận của em về hình ảnh mặt trời trong hai câu thơ cuối.",
    "explanation": "<strong>Lời giải chi tiết tham khảo:</strong><br>Đoạn thơ sử dụng hình ảnh đối chiếu độc đáo giữa hai 'mặt trời':<br>1. 'Mặt trời của bắp': Là mặt trời của thiên nhiên vũ trụ, tỏa ánh sáng và hơi ấm giúp cây bắp sinh trưởng, mang lại lương thực cho con người.<br>2. 'Mặt trời của mẹ': Là hình ảnh ẩn dụ sâu sắc chỉ đứa con yêu thương đang nằm trên lưng mẹ. Con chính là mặt trời bé con ấm áp nhất, là nguồn sống, niềm tin, nguồn cổ vũ to lớn giúp người mẹ có thêm sức mạnh vượt qua mọi khó khăn, gian khổ để làm việc, chiến đấu vì độc lập tự do. Đoạn thơ thể hiện tình mẫu tử thiêng liêng, cao cả gắn liền với tình yêu quê hương, đất nước."
  },
  {
    "id": "TV_EY5",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Cho các từ sau: thật thà, bạn bè, hư hỏng, san sẻ, bạn học, chăm chỉ, gắn bó, bạn đường, ngoan ngoãn, giúp đỡ, bạn đọc, khó khăn, thơm tho, tu hú, tuổi tác.\nHãy xếp các từ trên vào 3 nhóm:\n- Từ ghép tổng hợp\n- Từ ghép phân loại\n- Từ láy",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>- <strong>Từ ghép tổng hợp:</strong> bạn bè, hư hỏng, san sẻ, gắn bó, giúp đỡ, tuổi tác.<br>- <strong>Từ ghép phân loại:</strong> bạn học, bạn đường, bạn đọc, tu hú.<br>- <strong>Từ láy:</strong> thật thà, chăm chỉ, ngoan ngoãn, khó khăn, thơm tho."
  },
  {
    "id": "TV_EY6",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Đặt câu theo yêu cầu sau để phân biệt nghĩa gốc và nghĩa chuyển:\n\na) Từ 'chạy' mang nghĩa gốc.\nb) Từ 'chạy' mang nghĩa chuyển.\nc) Từ 'xanh' mang nghĩa gốc.\nd) Từ 'xanh' mang nghĩa chuyển.",
    "explanation": "<strong>Đáp án gợi ý:</strong><br>a) Từ 'chạy' nghĩa gốc (hoạt động dời chân nhanh bằng cơ thể): <em>Các cầu thủ đang chạy rất nhanh trên sân cỏ.</em><br>b) Từ 'chạy' nghĩa chuyển (hoạt động di chuyển cơ học/buôn bán/lo liệu): <em>Đồng hồ nhà em chạy rất chính xác.</em> hoặc <em>Bố em phải chạy vạy khắp nơi để lo tiền học.</em><br>c) Từ 'xanh' nghĩa gốc (chỉ màu sắc của lá cây/trời): <em>Lá bàng mùa hè xanh um tùm.</em><br>d) Từ 'xanh' nghĩa chuyển (chỉ trạng thái chưa chín/non nớt/tái mét): <em>Mặt bạn ấy xanh như tàu lá chuối sau khi nghe tin dữ.</em> hoặc <em>Đầu óc cậu ấy còn xanh lắm, chưa có kinh nghiệm.</em>"
  },
  {
    "id": "TV_EY7",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Dựa vào từ láy 'lung linh', hãy tạo ra 8 từ láy khác đều có khuôn vần 'ung – inh' bằng cách thay đổi âm đầu hoặc thanh (hoặc cả âm đầu và thanh) ở 2 tiếng sao cho thích hợp.",
    "explanation": "<strong>Lời giải gợi ý:</strong><br>Các từ láy có khuôn vần 'ung - inh' là:<br>1. Rung rinh<br>2. Xung xinh (hoặc xúng xính)<br>3. Thung thinh<br>4. Bùng binh<br>5. Mung minh<br>6. Phúng phính<br>7. Trung trinh<br>8. Rùng rình"
  },
  {
    "id": "TV_EY8",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Trong bài 'Con cò', nhà thơ Chế Lan Viên có viết:\n\n“Con dù lớn vẫn là con mẹ\nĐi hết đời, lòng mẹ vẫn theo con.”\n\nHai dòng thơ trên đã giúp em cảm nhận được điều gì đẹp đẽ và sâu sắc về tình mẫu tử?",
    "explanation": "<strong>Bài viết tham khảo:</strong><br>Hai dòng thơ sâu sắc của Chế Lan Viên đã đúc kết quy luật mẫu tử thiêng liêng và bất diệt. Lòng mẹ bao dung, vĩ đại bao trùm suốt cuộc đời con. Dù con có khôn lớn trưởng thành đến đâu, bay cao bay xa thế nào thì đối với mẹ, con vẫn luôn là đứa con bé bỏng cần được yêu thương, chở che. Sự dõi theo của lòng mẹ không giới hạn bởi không gian hay thời gian ('Đi hết đời, lòng mẹ vẫn theo con'). Tình thương yêu vô bờ bến ấy chính là điểm tựa tinh thần vững chãi nhất giúp con vững vàng trên mọi nẻo đường đời."
  },
  {
    "id": "TV_EY9",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Xác định trạng ngữ, chủ ngữ, vị ngữ của các câu sau:\n\na) Nắng trưa đã rọi xuống đỉnh đầu mà rừng sâu vẫn ẩm lạnh, ánh nắng lọt qua lá trong xanh.\nb) Cò và Vạc là hai anh em nhưng tính nết rất khác nhau.\nc) Một cô bé vừa gầy vừa thấp bị thầy giáo loại ra khỏi dàn đồng ca.\nd) Trong vườn, các loài hoa đua nở và ong bướm bay về đây rất nhiều.\ne) Tuy ông nội em đã già nhưng ông vẫn còn rất khỏe.",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>a) Câu ghép có 3 vế:<br>- Vế 1: <strong>Chủ ngữ 1:</strong> Nắng trưa | <strong>Vị ngữ 1:</strong> đã rọi xuống đỉnh đầu.<br>- Vế 2: <strong>Chủ ngữ 2:</strong> rừng sâu | <strong>Vị ngữ 2:</strong> vẫn ẩm lạnh.<br>- Vế 3: <strong>Chủ ngữ 3:</strong> ánh nắng | <strong>Vị ngữ 3:</strong> lọt qua lá trong xanh.<br>b) Câu ghép 2 vế nối bằng QHT 'nhưng':<br>- Vế 1: <strong>Chủ ngữ 1:</strong> Cò và Vạc | <strong>Vị ngữ 1:</strong> là hai anh em.<br>- Vế 2: <strong>Chủ ngữ 2:</strong> tính nết | <strong>Vị ngữ 2:</strong> rất khác nhau.<br>c) Câu đơn:<br>- <strong>Chủ ngữ:</strong> Một cô bé vừa gầy vừa thấp.<br>- <strong>Vị ngữ:</strong> bị thầy giáo loại ra khỏi dàn đồng ca.<br>d) Câu ghép có trạng ngữ chỉ nơi chốn 'Trong vườn' dùng chung cho 2 vế:<br>- <strong>Trạng ngữ:</strong> Trong vườn.<br>- Vế 1: <strong>Chủ ngữ 1:</strong> các loài hoa | <strong>Vị ngữ 1:</strong> đua nở.<br>- Vế 2: <strong>Chủ ngữ 2:</strong> ong, bướm | <strong>Vị ngữ 2:</strong> bay về đây rất nhiều.\ne) Câu ghép 2 vế nối bằng cặp QHT 'Tuy... nhưng...':<br>- Vế 1: <strong>Chủ ngữ 1:</strong> ông nội em | <strong>Vị ngữ 1:</strong> đã già.<br>- Vế 2: <strong>Chủ ngữ 2:</strong> ông | <strong>Vị ngữ 2:</strong> vẫn còn rất khỏe."
  },
  {
    "id": "TV_EY10",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Xác định từ loại (Danh từ, động từ hay tính từ) của những từ in đậm trong các câu sau:\n\na) Trong chiến dịch này, thắng lợi của chúng ta là rất lớn.\nb) Trong chiến dịch này, chúng ta đang thắng lợi lớn.\nc) Trong chiến dịch này, chúng ta đạt được kết quả rất thắng lợi.\nd) Thắng lợi này có ý nghĩa rất quan trọng đối với quân dân ta.",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>a) Từ 'thắng lợi' trong câu này đứng sau quán từ 'sự/nỗi/niềm' (ngầm hiểu thắng lợi của chúng ta) đóng vai trò làm Chủ ngữ nên là <strong>Danh từ</strong>.<br>b) Từ 'thắng lợi' trong câu này đi sau phó từ chỉ thời gian 'đang' chỉ hoạt động nên là <strong>Động từ</strong>.<br>c) Từ 'thắng lợi' trong câu này đi sau từ chỉ mức độ 'rất', bổ nghĩa cho danh từ 'kết quả' nên là <strong>Tính từ</strong>.<br>d) Từ 'thắng lợi' đứng đầu câu làm chủ ngữ chỉ sự việc nên là <strong>Danh từ</strong>."
  },
  {
    "id": "TV_EY11",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Cho đoạn văn sau:\n\n“Cầu Thê Húc màu son, cong như con tôm, dẫn vào đền Ngọc Sơn. Mái đền lấp ló bên gốc đa già, rễ lá xum xuê. Xa một chút là Tháp Rùa, tường rêu cổ kính. Tháp xây trên gò đất giữa hồ, cỏ mọc xanh um.”\n\nHãy xếp các từ gạch chân (Cầu Thê Húc, mái đền, lấp ló, già, Tháp Rùa, tường rêu, xây, xanh um) vào 3 nhóm: Danh từ, Động từ, Tính từ.",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>- <strong>Danh từ:</strong> Cầu Thê Húc, mái đền, Tháp Rùa, tường rêu.<br>- <strong>Động từ:</strong> lấp ló, xây.<br>- <strong>Tính từ:</strong> già, xanh um."
  },
  {
    "id": "TV_EY12",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Em hãy viết một đoạn văn ngắn (5-7 câu) theo kiểu kết bài mở rộng cho bài văn tả người mẹ thân yêu của em.",
    "explanation": "<strong>Đoạn văn tham khảo:</strong><br>Mẹ không chỉ là người sinh thành, nuôi nấng tôi khôn lớn bằng dòng sữa ngọt lành mà mẹ còn là một người cô, một người bạn lớn dìu dắt tôi trên mỗi bước đường đời. Hình bóng tảo tần, nụ cười ấm áp và cả ánh mắt lo âu của mẹ sẽ mãi là hành trang quý giá nhất nâng bước chân tôi đi tới tương lai. Dù mai này khôn lớn bay cao đến đâu, lòng tôi vẫn mãi hướng về mẹ như đóa hướng dương hướng về ánh mặt trời. Tôi tự hứa sẽ học tập thật tốt để mẹ luôn nở nụ cười tự hào trên môi, bù đắp cho những tháng ngày vất vả, lo toan của mẹ."
  },
  {
    "id": "TV_EY13",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Đặt câu để phân biệt các từ đồng âm sau:\n\na) Từ 'đứng' làm động từ (chỉ tư thế thẳng của cơ thể).\nb) Từ 'đứng' làm động từ nghĩa chuyển hoặc nghĩa đồng âm khác (ví dụ: đứng gió, đứng bóng).",
    "explanation": "<strong>Đáp án gợi ý:</strong><br>a) Đặt câu với từ 'đứng' chỉ tư thế thẳng đứng: <em>Chúng em đứng trang nghiêm dưới cờ Tổ quốc để chào cờ.</em><br>b) Đặt câu với từ 'đứng' chỉ thời tiết hoặc hiện tượng: <em>Trưa hè, trời đứng gió nên không khí vô cùng oi bức.</em> hoặc <em>Mặt trời đã đứng bóng, các bác nông dân rủ nhau nghỉ ngơi dưới gốc đa.</em>"
  },
  {
    "id": "TV_EY14",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Thực hiện các yêu cầu ngữ pháp sau:\n\na) Tìm danh từ, động từ, tính từ, đại từ trong câu: “Cây lá vừa tắm mưa xong, đang được mặt trời lau ráo, lúc ấy trông nó vừa tươi mát, vừa ấm áp.”\nb) Thêm dấu câu thích hợp vào câu sau: “Phượng gợi nhắc mùa thi đã đến mùa hè sắp về sắp gặt hái thành quả của chín tháng miệt mài học tập.”",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>a) Xác định từ loại:<br>- <strong>Danh từ:</strong> cây lá, mặt trời.<br>- <strong>Động từ:</strong> tắm, lau, trông.<br>- <strong>Tính từ:</strong> ráo, tươi mát, ấm áp.<br>- <strong>Đại từ:</strong> nó, lúc ấy.<br>b) Thêm dấu câu thích hợp:<br><em>“Phượng gợi nhắc mùa thi đã đến, mùa hè sắp về, sắp gặt hái thành quả của chín tháng miệt mài học tập.”</em> (Thêm hai dấu phẩy ngăn cách các vế câu và cụm vị ngữ)."
  },
  {
    "id": "TV_EY15",
    "category": "Tự luận cảm thụ & Ngữ pháp",
    "type": "essay",
    "question": "Đọc đoạn thơ sau trong bài 'Đất và cây' của nhà thơ Ý Nhi:\n\n“Đất thương cây non trẻ\nNuôi cây dần lớn khôn\nCây thương mẹ vất vả\nTỏa một màu mát êm.”\n\nHãy cho biết biện pháp nghệ thuật nổi bật sử dụng trong đoạn thơ trên. Biện pháp nghệ thuật đó giúp em cảm nhận được điều gì đẹp đẽ trong cuộc sống của chúng ta?",
    "explanation": "<strong>Lời giải chi tiết:</strong><br>- <strong>Biện pháp nghệ thuật nổi bật:</strong> Biện pháp Nhân hóa ('Đất' thương và nuôi 'cây'; 'Cây' biết thương 'mẹ' vất vả và biết tỏa bóng mát đền đáp). Tác giả đã dùng những từ chỉ cảm xúc, hoạt động của con người ('thương', 'nuôi', 'vất vả', 'lớn khôn') để gán cho các sự vật thiên nhiên.<br>- <strong>Cảm nhận sâu sắc:</strong> Qua hình ảnh đất mẹ bao dung che chở nuôi nấng cây non khôn lớn, và cây non hiếu thảo biết dâng tặng bóng mát êm dịu đền đáp công ơn, tác giả giúp chúng ta cảm nhận được vẻ đẹp thiêng liêng của tình cảm gia đình. Đó chính là tình thương yêu vô điều kiện của cha mẹ và lòng hiếu thảo, biết ơn đền đáp công ơn dưỡng dục vô bờ bến của con cái đối với cha mẹ."
  }
];

if (typeof module !== 'undefined') {
  module.exports = questions;
}
