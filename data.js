// Ngân hàng câu hỏi trắc nghiệm Logistics & Y Khoa
const appDatabase = {
  "kinh-te": {
    "name": "Logistics và quản lý chuỗi cung ứng",
    "subjects": {
      "vi-mo": {
        "name": "Kinh tế vi mô",
        "lessons": {
          "chuong-2": {
            "title": "Chương 2: Cung – Cầu hàng hóa (15 câu)",
            "questions": [
              {
                "q": "Trong nền kinh tế chỉ huy, tác nhân kinh tế nào đóng vai trò chủ đạo?",
                "opts": [
                  "Thị trường",
                  "Nhà nước",
                  "Người dân",
                  "Các doanh nghiệp"
                ],
                "ans": 1,
                "exp": "Trong nền kinh tế chỉ huy, Nhà nước quyết định toàn bộ việc phân bổ nguồn lực và sản xuất thông qua kế hoạch tập trung."
              },
              {
                "q": "Trong mô hình kinh tế thị trường, các vấn đề cơ bản của hệ thống kinh tế được giải quyết:",
                "opts": [
                  "Thông qua thị trường.",
                  "Thông qua các vấn đề của chính phủ.",
                  "Thông qua chỉ tiêu pháp lệnh của nhà nước",
                  "Thông qua thị trường và các kế hoạch của chính phủ."
                ],
                "ans": 0,
                "exp": "Cơ chế thị trường tự do tự điều tiết cung cầu và giá cả để giải quyết các vấn đề kinh tế cơ bản."
              },
              {
                "q": "Vấn đề nào dưới đây không thuộc kinh tế vi mô:",
                "opts": [
                  "Sự khác biệt thu nhập của quốc gia",
                  "Cung cầu",
                  "Tiêu dùng",
                  "Sự thay đổi công nghệ"
                ],
                "ans": 0,
                "exp": "Thu nhập quốc gia thuộc phạm vi nghiên cứu của Kinh tế vĩ mô."
              },
              {
                "q": "Chủ đề mang tính trọng tâm nhất mà kinh tế học nghiên cứu là gì?",
                "opts": [
                  "Sự khan hiếm nguồn lực.",
                  "Tối đa hóa lợi nhuận.",
                  "Tiền tệ.",
                  "Cơ chế giá cả."
                ],
                "ans": 0,
                "exp": "Kinh tế học nghiên cứu cách phân bổ nguồn lực khan hiếm để thỏa mãn nhu cầu vô hạn của con người."
              },
              {
                "q": "Cách tiếp cận một cách khoa học và khách quan để nghiên cứu các quan hệ kinh tế là",
                "opts": [
                  "Kinh tế học chuẩn tắc.",
                  "Kinh tế học vĩ mô.",
                  "Kinh tế chính trị.",
                  "Kinh tế học thực chứng."
                ],
                "ans": 3,
                "exp": "Kinh tế học thực chứng giải thích các hiện tượng kinh tế một cách khách quan dựa trên thực tế kiểm chứng."
              },
              {
                "q": "Kinh tế học vi mô tập trung nghiên cứu kinh tế dưới góc độ nào?",
                "opts": [
                  "Hành vi của người tiêu dùng và doanh nghiệp.",
                  "Thị trường chứng khoán.",
                  "Toàn bộ nền kinh tế.",
                  "Chính phủ."
                ],
                "ans": 0,
                "exp": "Kinh tế vi mô tập trung vào hành vi của các cá nhân và doanh nghiệp đơn lẻ."
              },
              {
                "q": "Câu nào sau đây thuộc kinh tế vi mô:",
                "opts": [
                  "Chính sách thuế và chi tiêu của chính phủ là công cụ để chính phủ điều tiết nền kinh tế",
                  "Lợi nhuận kinh tế là động lực thu hút các doanh nghiệp mới gia nhập vào ngành sản xuất",
                  "Khi Chính phủ tăng thuế thì đường tổng cầu sẽ dịch chuyển sang trái",
                  "Tỷ lệ thất nghiệp ở Việt Nam hiện nay ở mức cao"
                ],
                "ans": 1,
                "exp": "Hành vi doanh nghiệp gia nhập thị trường là vấn đề vi mô."
              },
              {
                "q": "Do nhiều người từ các tỉnh nhập cư vào thành phố Hà Nội kết quả là đường cầu mặt hàng gạo ở Hà Nội:",
                "opts": [
                  "Vận động dọc",
                  "Dịch chuyển sang phải.",
                  "Dịch chuyển sang trái.",
                  "Không dịch chuyển."
                ],
                "ans": 1,
                "exp": "Số lượng người tiêu dùng tăng làm tăng cầu tại mọi mức giá, khiến đường cầu dịch chuyển sang phải."
              },
              {
                "q": "Đường cầu thị trường có thể được xác định:",
                "opts": [
                  "Cộng tất cả đường cầu cá nhân theo chiều dọc",
                  "Cộng lượng mua của các người mua lớn",
                  "Không câu nào đúng",
                  "Cộng tất cả đường cầu của các cá nhân theo chiều ngang"
                ],
                "ans": 3,
                "exp": "Đường cầu thị trường bằng tổng lượng cầu của các cá nhân ở mỗi mức giá (cộng theo chiều ngang)."
              },
              {
                "q": "Hàm số cầu của một hàng hóa là sự tương quan giữa:",
                "opts": [
                  "Lượng cầu hàng hóa đó với tổng hữu dụng.",
                  "Lượng cầu hàng hóa đó với giá cả của nó.",
                  "Lượng cầu hàng hóa đó với tổng số doanh thu của người bán.",
                  "Lượng cầu hàng hóa đó với tổng số chi tiêu của người tiêu dùng."
                ],
                "ans": 1,
                "exp": "Hàm cầu biểu thị mối quan hệ giữa lượng cầu Qd và mức giá P."
              },
              {
                "q": "Hiện tượng nào sau đây không gây ra sự dịch chuyển của đường cầu:",
                "opts": [
                  "Sự gia tăng giá mặt hàng thay thế.",
                  "Sự gia tăng giá mặt hàng bổ sung.",
                  "Sự thay đổi giá bán của bản thân mặt hàng đó.",
                  "Sự giảm sụt của thu nhập."
                ],
                "ans": 2,
                "exp": "Giá của chính hàng hóa đó thay đổi chỉ gây ra sự di chuyển dọc trên đường cầu, không làm dịch chuyển đường cầu."
              },
              {
                "q": "Nếu giá hàng hoá A tăng lên gây ra sự dịch chuyển của đường cầu đối với hàng hoá B về phía bên trái:",
                "opts": [
                  "B là hàng hoá cấp thấp",
                  "A và B là hàng hoá thay thế trong tiêu dùng",
                  "A và B là hàng hóa bổ sung trong tiêu dùng",
                  "A là hàng hóa cấp thấp"
                ],
                "ans": 2,
                "exp": "Giá A tăng làm giảm lượng mua A, kéo theo giảm lượng mua B -> A và B là hàng hóa bổ sung."
              },
              {
                "q": "Quy luật cầu chỉ ra rằng nếu các yếu tố không đổi thì:",
                "opts": [
                  "Giữa lượng cầu và thu nhập có mối quan hệ đồng biến.",
                  "Giữa số lượng hàng hóa và giá cả hàng hóa có mối quan hệ nghịch biến",
                  "Giữa số lượng hàng hóa và sở thích có mối quan hệ đồng biến.",
                  "Giữa lượng cầu hàng hóa này và giá hàng hóa thay thế có mối liên hệ với nhau."
                ],
                "ans": 1,
                "exp": "Quy luật cầu: Giá và lượng cầu có quan hệ nghịch biến (ceteris paribus)."
              },
              {
                "q": "Trong điều kiện giá cả không đổi, đường cầu dịch chuyển là do tác động của các nhân tố:",
                "opts": [
                  "Giá cả sản phẩm thay thế.",
                  "Công nghệ.",
                  "Chính sách trợ cấp của chính phủ dành cho người tiêu dùng.",
                  "Dự báo của nhà sản xuất về tình trạng cung cầu trong tương lai."
                ],
                "ans": 0,
                "exp": "Giá mặt hàng thay thế là yếu tố ngoại sinh làm dịch chuyển đường cầu."
              },
              {
                "q": "Khi thu nhập của người tiêu dùng tăng lên:",
                "opts": [
                  "Cầu của hàng hóa thông thường, cao cấp giảm",
                  "Cầu của hàng hóa thông thường, cao cấp không đổi",
                  "Cầu hàng hóa thứ cấp tăng",
                  "Cầu hàng hóa thông thường, cao cấp tăng"
                ],
                "ans": 3,
                "exp": "Hàng thông thường và cao cấp có cầu tăng khi thu nhập của người tiêu dùng tăng."
              }
            ]
          },
          "chuong-3": {
            "title": "Chương 3: Cân bằng cung cầu và hệ số co giãn của cầu (10 câu)",
            "questions": [
              {
                "q": "Khi thu nhập giảm các yếu tố khác không đổi, giá cả và sản lượng cân bằng mới của hàng hóa thông thường sẽ:",
                "opts": [
                  "Giá thấp hơn và lượng cân bằng nhỏ hơn.",
                  "Giá thấp hơn và lượng cân bằng lớn hơn.",
                  "Không thay đổi.",
                  "Giá cao hơn và lượng cân bằng nhỏ hơn."
                ],
                "ans": 0,
                "exp": "Hàng hóa thông thường có cầu đồng biến với thu nhập. Khi thu nhập giảm → Cầu giảm (đường cầu dịch trái) → Giá cân bằng giảm và lượng cân bằng giảm."
              },
              {
                "q": "Dư cầu:",
                "opts": [
                  "Chỉ xuất hiện khi giá thấp hơn giá cân bằng.",
                  "Do cung quá cao.",
                  "Đồng nghĩa với dư thừa hàng hóa.",
                  "Không duy trì lâu trong thị trường và giá sẽ giảm."
                ],
                "ans": 0,
                "exp": "Dư cầu (thiếu hụt hàng hóa) xảy ra khi lượng cầu lớn hơn lượng cung, tức là khi giá thị trường thấp hơn mức giá cân bằng."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 60 + 5Q; Pd = 80 - 5Q, khi đó giá cân bằng trên thị trường sẽ là:",
                "opts": [
                  "50",
                  "80",
                  "60",
                  "70"
                ],
                "ans": 3,
                "exp": "Tại điểm cân bằng: Ps = Pd ⇔ 60 + 5Q = 80 - 5Q ⇔ 10Q = 20 ⇔ Q = 2. Thay Q = 2 vào hàm giá: P = 60 + 5(2) = 70."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 50 + 5Q; Pd = 100 - 5Q, khi đó lượng cân bằng trên thị trường là:",
                "opts": [
                  "6",
                  "8",
                  "7",
                  "5"
                ],
                "ans": 3,
                "exp": "Tại điểm cân bằng: Ps = Pd ⇔ 50 + 5Q = 100 - 5Q ⇔ 10Q = 50 ⇔ Q = 5."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 50 + 5Q; Pd = 100 - 5Q, khi đó hệ số co dãn của cầu tại mức giá cân bằng là:",
                "opts": [
                  "1",
                  "-1",
                  "-3",
                  "3"
                ],
                "ans": 2,
                "exp": "Từ Q cân bằng = 5 suy ra P cân bằng = 75. Hàm cầu: Pd = 100 - 5Q ⇔ Qd = 20 - 0,2P. Hệ số co giãn: Ed = (Qd)' * (P/Q) = (-0,2) * (75 / 5) = -3."
              },
              {
                "q": "Trong nền kinh tế thị trường, giá cân bằng được xác định bởi:",
                "opts": [
                  "Cầu hàng hoá",
                  "Chi phí sản xuất hàng hoá",
                  "Cung hàng hoá",
                  "Tương tác giữa cung và cầu"
                ],
                "ans": 3,
                "exp": "Giá cân bằng là mức giá mà tại đó lượng cung bằng lượng cầu, được quyết định bởi sự tương tác lẫn nhau giữa cả cung và cầu trên thị trường."
              },
              {
                "q": "Dư cung:",
                "opts": [
                  "Chỉ xuất hiện khi giá cao hơn giá cân bằng.",
                  "Không duy trì lâu trong thị trường và giá sẽ tăng.",
                  "Đồng nghĩa với thiếu hụt hàng hóa.",
                  "Do cầu quá cao."
                ],
                "ans": 0,
                "exp": "Dư cung (thừa hàng) xuất hiện khi lượng cung vượt quá lượng cầu, điều này chỉ xảy ra khi mức giá thực tế cao hơn giá cân bằng."
              },
              {
                "q": "Trạng thái thiếu hụt hàng hóa là trạng thái mà ở đó:",
                "opts": [
                  "Lượng cầu bằng lượng cung",
                  "Lượng cầu nhỏ hơn lượng cung",
                  "Lượng cầu hàng hóa bằng không",
                  "Lượng cầu vượt quá lượng cung"
                ],
                "ans": 3,
                "exp": "Thiếu hụt hàng hóa (dư cầu) xảy ra khi lượng người mua muốn mua (lượng cầu Qd) lớn hơn lượng người bán sẵn sàng bán (lượng cung Qs)."
              },
              {
                "q": "Nếu giá trần thấp hơn giá cân bằng, sẽ không dẫn đến điều nào dưới đây:",
                "opts": [
                  "Dư thừa hàng hóa.",
                  "Thị trường chợ đen và tham nhũng.",
                  "Phi hiệu quả về kinh tế.",
                  "Thiết hụt hàng hóa."
                ],
                "ans": 0,
                "exp": "Giá trần (Pmax) đặt dưới giá cân bằng sẽ kích thích cầu và kìm hãm cung, gây ra thiếu hụt hàng hóa chứ không bao giờ dẫn đến dư thừa hàng hóa."
              },
              {
                "q": "Khi thu nhập tăng các yếu tố khác không đổi, giá cả và sản lượng cân bằng mới của hàng hóa thông thường sẽ:",
                "opts": [
                  "Giá cao hơn và lượng cân bằng lớn hơn.",
                  "Giá cao hơn và lượng cân bằng nhỏ hơn.",
                  "Không thay đổi.",
                  "Giá thấp hơn và lượng cân bằng nhỏ hơn."
                ],
                "ans": 0,
                "exp": "Với hàng hóa thông thường, thu nhập tăng làm cầu tăng (đường cầu dịch phải) → Điểm cân bằng mới dịch chuyển dọc theo đường cung dẫn tới giá cao hơn và lượng cân bằng lớn hơn."
              }
            ]
          },
          "chuong-4": {
            "title": "Chương 4: Lý thuyết hành vi người tiêu dùng (20 câu)",
            "questions": [
              {
                "q": "Câu nào dưới đây thuộc về kinh tế vĩ mô?",
                "opts": [
                  "Tác động của thâm hụt ngân sách đến lạm phát.",
                  "Các nguyên nhân làm giảm mức giá lúa.",
                  "Công ty may 10 áp dụng công nghệ sản xuất mới khiến cho sản lượng cung ứng tăng.",
                  "Các nguyên nhân làm giá cam giảm."
                ],
                "ans": 0,
                "exp": "Lạm phát và thâm hụt ngân sách là các biến số tổng thể của toàn bộ nền kinh tế, thuộc phạm vi nghiên cứu của Kinh tế vĩ mô."
              },
              {
                "q": "Ưu điểm của mô hình kinh tế chỉ huy là:",
                "opts": [
                  "Giải quyết được những nhu cầu công cộng xã hội.",
                  "Phát huy tính năng động, sáng tạo của các chủ thể kinh tế.",
                  "Bảo đảm cho các nhà sản xuất kinh doanh tự do lựa chọn và quyết định việc sản xuất kinh doanh và tiêu dùng của mình.",
                  "Đáp ứng kịp thời những nhu cầu luôn luôn thay đổi của thị trường."
                ],
                "ans": 0,
                "exp": "Kinh tế chỉ huy do Nhà nước điều hành tập trung nên có ưu thế tập trung nguồn lực giải quyết các mục tiêu xã hội, công trình công cộng."
              },
              {
                "q": "Trong nền kinh tế chỉ huy, tác nhân kinh tế nào đóng vai trò chủ đạo?",
                "opts": [
                  "Người dân.",
                  "Nhà nước.",
                  "Thị trường.",
                  "Các doanh nghiệp."
                ],
                "ans": 1,
                "exp": "Nhà nước đưa ra mọi quyết định sản xuất cái gì, như thế nào và cho ai thông qua các chỉ tiêu pháp lệnh."
              },
              {
                "q": "Trong mô hình kinh tế thị trường, các vấn đề cơ bản của hệ thống kinh tế được giải quyết:",
                "opts": [
                  "Thông qua các vấn đề của chính phủ.",
                  "Thông qua thị trường và các kế hoạch của chính phủ.",
                  "Thông qua thị trường.",
                  "Thông qua chỉ tiêu pháp lệnh của nhà nước."
                ],
                "ans": 2,
                "exp": "Trong nền kinh tế thị trường tự do thuần túy, cơ chế giá cả và cung cầu của thị trường tự động điều tiết việc phân bổ nguồn lực."
              },
              {
                "q": "Nhân tố nào dưới đây không làm dịch chuyển đường cung của Tivi:",
                "opts": [
                  "Sự tăng lên trong giá của Tivi.",
                  "Chính phủ đánh thuế vào người sản xuất.",
                  "Sự cải tiến công nghệ sản xuất Tivi.",
                  "Nguyên liệu sản xuất Tivi tăng."
                ],
                "ans": 0,
                "exp": "Giá của chính hàng hóa đó thay đổi chỉ gây ra sự vận động (di chuyển) dọc theo đường cung, không làm dịch chuyển đường cung."
              },
              {
                "q": "Nếu giá hàng hóa A tăng lên gây ra sự dịch chuyển của đường cầu đối với hàng hóa B về phía bên phải:",
                "opts": [
                  "A là hàng hóa cấp thấp.",
                  "A và B là hàng hóa bổ sung trong tiêu dùng.",
                  "A và B là hàng hóa thay thế trong tiêu dùng.",
                  "B là hàng hóa cấp thấp."
                ],
                "ans": 2,
                "exp": "Giá A tăng -> người tiêu dùng giảm mua A và chuyển sang mua hàng hóa thay thế B -> Cầu hàng B tăng (dịch chuyển sang phải)."
              },
              {
                "q": "Nhân tố nào sau đây làm dịch chuyển đường cầu của máy ảnh sang phải:",
                "opts": [
                  "Chính phủ đánh thuế vào ngành kinh doanh máy ảnh.",
                  "Giá phim tăng.",
                  "Giá máy ảnh giảm.",
                  "Thu nhập dân chúng tăng."
                ],
                "ans": 3,
                "exp": "Máy ảnh là hàng hóa thông thường, khi thu nhập dân chúng tăng sẽ làm tăng nhu cầu mua máy ảnh tại mọi mức giá -> đường cầu dịch sang phải."
              },
              {
                "q": "Trường hợp nào sau đây gây ra sự di chuyển hay sự vận động dọc theo đường cung của xăng:",
                "opts": [
                  "Mức lương của công nhân lọc dầu tăng lên.",
                  "Giá xăng giảm.",
                  "Người mua dự đoán giá xăng sẽ giảm trong thời gian tới.",
                  "Có sự cải tiến trong công nghệ lọc dầu."
                ],
                "ans": 1,
                "exp": "Sự thay đổi của chính mức giá bán sản phẩm (giá xăng) dẫn đến sự vận động dọc theo đường cung."
              },
              {
                "q": "Hàm số cầu của một hàng hóa là sự tương quan giữa:",
                "opts": [
                  "Lượng cầu hàng hóa đó với tổng số chi tiêu của người tiêu dùng.",
                  "Lượng cầu hàng hóa đó với tổng số doanh thu của người bán.",
                  "Lượng cầu hàng hóa đó với giá cả của nó.",
                  "Lượng cầu hàng hóa đó với tổng hữu dụng."
                ],
                "ans": 2,
                "exp": "Hàm cầu biểu diễn mối quan hệ phụ thuộc giữa lượng cầu (Qd) và mức giá (P) của hàng hóa đó."
              },
              {
                "q": "Điều nào dưới đây không làm dịch chuyển đường cầu đối với thịt bò:",
                "opts": [
                  "Thị hiếu đối với thịt bò thay đổi.",
                  "Thu nhập của người tiêu dùng tăng lên.",
                  "Giá thịt bò giảm xuống.",
                  "Giá hàng hóa thay thế cho thịt bò tăng lên."
                ],
                "ans": 2,
                "exp": "Giá bản thân thịt bò thay đổi chỉ gây ra sự trượt dọc trên đường cầu, không làm dịch chuyển đường cầu."
              },
              {
                "q": "Đường cầu của nước rửa chén Sunlight dịch chuyển sang phải là do:",
                "opts": [
                  "Giá nước rửa chén Sunlight giảm.",
                  "Giá của nước rửa chén Sunlight tăng.",
                  "Giá các loại nước rửa chén khác tăng.",
                  "Giá của nước rửa chén khác giảm."
                ],
                "ans": 2,
                "exp": "Các loại nước rửa chén khác là hàng hóa thay thế cho Sunlight; khi giá đối thủ tăng, người tiêu dùng chuyển sang mua Sunlight nhiều hơn -> Cầu Sunlight dịch phải."
              },
              {
                "q": "Trong điều kiện giá cả không đổi, đường cầu dịch chuyển là do tác động của các nhân tố:",
                "opts": [
                  "Dự báo của nhà sản xuất về tình trạng cung cầu trong tương lai.",
                  "Giá cả sản phẩm thay thế.",
                  "Công nghệ.",
                  "Chính sách trợ cấp của chính phủ dành cho người tiêu dùng."
                ],
                "ans": 1,
                "exp": "Giá cả hàng hóa thay thế/bổ sung, thu nhập, thị hiếu... là các nhân tố ngoại sinh làm dịch chuyển đường cầu."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 60 + 5Q; Pd = 80 - 5Q. Khi đó hệ số co giãn của cầu tại mức giá cân bằng là:",
                "opts": [
                  "8.",
                  "-8.",
                  "7.",
                  "-7."
                ],
                "ans": 3,
                "exp": "Cân bằng: 60 + 5Q = 80 - 5Q <=> 10Q = 20 <=> Q = 2, P = 70. Hàm cầu Qd = 16 - 0.2P. Ed = (Qd)' * (P/Q) = (-0.2) * (70 / 2) = -7."
              },
              {
                "q": "Giá trần luôn dẫn tới:",
                "opts": [
                  "Sự dư cung.",
                  "Sự thiếu hụt hàng hóa.",
                  "Sự gia nhập ngành.",
                  "Sự cân bằng thị trường."
                ],
                "ans": 1,
                "exp": "Giá trần (Pmax) luôn được áp dưới giá cân bằng để bảo vệ người mua, dẫn đến lượng cầu vượt lượng cung (gây thiếu hụt hàng hóa)."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 60 + 5Q; Pd = 80 - 5Q. Khi đó lượng cân bằng trên thị trường sẽ là:",
                "opts": [
                  "5.",
                  "3.",
                  "2.",
                  "4."
                ],
                "ans": 2,
                "exp": "Tại điểm cân bằng: Ps = Pd <=> 60 + 5Q = 80 - 5Q <=> 10Q = 20 <=> Q = 2."
              },
              {
                "q": "Hình vẽ sau thể hiện cung - cầu về một loại sản phẩm. Điểm cân bằng ban đầu là điểm A. Nếu chi phí đầu vào để sản xuất sản phẩm giảm đáng kể, điểm cân bằng mới sẽ là:",
                "opts": [
                  "Điểm J.",
                  "Điểm M.",
                  "Điểm L.",
                  "Điểm K."
                ],
                "ans": 1,
                "exp": "Chi phí đầu vào giảm làm cung tăng (đường cung S dịch chuyển sang phải và xuống dưới), cắt đường cầu D tại điểm cân bằng mới M có sản lượng cao hơn và giá thấp hơn."
              },
              {
                "q": "Dư cầu:",
                "opts": [
                  "Không duy trì lâu trong thị trường và giá sẽ giảm.",
                  "Chỉ xuất hiện khi giá thấp hơn giá cân bằng.",
                  "Đồng nghĩa với dư thừa hàng hóa.",
                  "Do cung quá cao."
                ],
                "ans": 1,
                "exp": "Dư cầu (thiếu hụt) xảy ra khi lượng cầu lớn hơn lượng cung, điều này chỉ xuất hiện khi giá thị trường thấp hơn giá cân bằng."
              },
              {
                "q": "Hàm cung và cầu về cam trên thị trường: Ps = 50 + 5Q; Pd = 100 - 5Q. Khi đó hệ số co giãn của cầu tại mức giá cân bằng là:",
                "opts": [
                  "3.",
                  "-1.",
                  "1.",
                  "-3."
                ],
                "ans": 3,
                "exp": "Cân bằng: 50 + 5Q = 100 - 5Q <=> 10Q = 50 <=> Q = 5, P = 75. Qd = 20 - 0.2P. Ed = (-0.2) * (75 / 5) = -3."
              },
              {
                "q": "Hệ số co giãn của cầu theo giá là:",
                "opts": [
                  "Luôn bằng 0.",
                  "Là một số âm.",
                  "Luôn bằng 1.",
                  "Là một số dương."
                ],
                "ans": 1,
                "exp": "Do quy luật cầu (giá và lượng cầu nghịch biến), hệ số co giãn của cầu theo giá Ed = (% delta Q) / (% delta P) luôn mang dấu âm."
              },
              {
                "q": "Nếu giá trần thấp hơn giá cân bằng, sẽ không dẫn đến điều nào dưới đây:",
                "opts": [
                  "Dư thừa hàng hóa.",
                  "Phi hiệu quả về kinh tế.",
                  "Thiếu hụt hàng hóa.",
                  "Thị trường chợ đen và tham nhũng."
                ],
                "ans": 0,
                "exp": "Giá trần thấp hơn giá cân bằng chỉ gây thiếu hụt hàng hóa chứ không thể dẫn đến dư thừa hàng hóa."
              }
            ]
          },
          "chuong-5": {
            "title": "Chương 5: Lý thuyết về hành vi của doanh nghiệp (20 câu)",
            "questions": [
              {
                "q": "Khi thu nhập tăng lên (các yếu tố khác không đổi), đường ngân sách sẽ:",
                "opts": [
                  "Dịch chuyển song song vào bên trong",
                  "Thoải hơn đường ngân sách cũ",
                  "Dốc hơn đường ngân sách cũ",
                  "Dịch chuyển song song ra bên ngoài"
                ],
                "ans": 3,
                "exp": "Khi thu nhập I tăng trong khi giá hàng hóa Px, Py không đổi, độ dốc không đổi (-Px/Py) và đường ngân sách dịch chuyển song song ra ngoài."
              },
              {
                "q": "Lợi ích cận biên (MU) phản ánh:",
                "opts": [
                  "Tỷ giá giữa hai hàng hóa.",
                  "Tổng thể sự hài lòng do toàn bộ sự tiêu dùng hàng hóa và dịch vụ mang lại.",
                  "Số đơn vị hàng hóa Y cần phải từ bỏ khi tăng thêm một đơn vị hàng hóa X.",
                  "Mức độ hài lòng do tiêu dùng một đơn vị sản phẩm cuối cùng mang lại."
                ],
                "ans": 3,
                "exp": "Lợi ích cận biên (Marginal Utility) là độ thỏa dụng tăng thêm khi tiêu dùng thêm một đơn vị sản phẩm (MU = delta TU / delta Q)."
              },
              {
                "q": "Câu nào sau đây không đúng?",
                "opts": [
                  "Đường bàng quan có độ dốc âm",
                  "Các đường bàng quan luôn cắt nhau",
                  "Các điểm trên một đường bàng quan có độ ưa thích như nhau",
                  "Đường bàng quan có dạng lồi so với gốc tọa độ"
                ],
                "ans": 1,
                "exp": "Theo tiên đề về tính bắc cầu, các đường bàng quan của một người tiêu dùng không bao giờ cắt nhau."
              },
              {
                "q": "Trong giới hạn ngân sách và sở thích, để tối đa hóa lợi ích người dùng nên mua số lượng sản phẩm theo nguyên tắc:",
                "opts": [
                  "Lợi ích biên của các sản phẩm phải bằng nhau.",
                  "Ưu tiên mua các sản phẩm có mức giá rẻ hơn.",
                  "Lợi ích biên trên mỗi đơn vị giá cả của các sản phẩm phải bằng nhau.",
                  "Số tiền chi tiêu cho các sản phẩm phải bằng nhau."
                ],
                "ans": 2,
                "exp": "Nguyên tắc tối đa hóa hữu dụng: MUx / Px = MUy / Py = ... (lợi ích cận biên trên một đồng chi tiêu phải bằng nhau)."
              },
              {
                "q": "Khi đạt tối đa hóa lợi ích thì lợi ích cận biên từ đơn vị cuối cùng của các hàng hóa phải bằng nhau (MUx=MUy=…=MUn). Điều này:",
                "opts": [
                  "Đúng hay sai tùy theo sở thích người tiêu dùng.",
                  "Luôn luôn sai",
                  "Đúng hay sai tùy theo thu nhập của người tiêu dùng.",
                  "Đúng khi giá các hàng hóa bằng nhau."
                ],
                "ans": 3,
                "exp": "Công thức tổng quát là MUx/Px = MUy/Py. Do đó MUx = MUy chỉ đúng khi Px = Py (giá các hàng hóa bằng nhau)."
              },
              {
                "q": "Đường biểu thị mối quan hệ giữa giá sản phẩm và thu nhập của người tiêu thụ là đường:",
                "opts": [
                  "Đường bàng quan",
                  "Đường đồng phí",
                  "Đường ngân sách",
                  "Đường đồng lượng"
                ],
                "ans": 2,
                "exp": "Phương trình đường ngân sách: I = Px*X + Py*Y, thể hiện mối quan hệ giữa thu nhập I và giá các sản phẩm."
              },
              {
                "q": "Tỷ lệ thay thế biên của hàng hóa X cho hàng hóa Y (MRSx/y) thể hiện:",
                "opts": [
                  "Tỷ lệ đánh đổi giữa 2 sản phẩm trên thị trường",
                  "Số đơn vị hàng hóa Y cần phải từ bỏ khi tăng thêm một đơn vị hàng hóa X",
                  "Tỷ giá giữa 2 sản phẩm",
                  "Độ dốc của đường ngân sách"
                ],
                "ans": 1,
                "exp": "MRSxy = -delta Y / delta X, cho biết số lượng hàng Y mà người tiêu dùng sẵn sàng từ bỏ để tiêu dùng thêm 1 đơn vị hàng X mà độ thỏa dụng không đổi."
              },
              {
                "q": "Giá trị tuyệt đối của độ dốc của một đường bàng quan điển hình với Y ở trục tung và X ở trục hoành được tính bằng:",
                "opts": [
                  "MUy/MUx",
                  "MUx/MUy",
                  "Px/Py",
                  "Py/Px"
                ],
                "ans": 1,
                "exp": "Độ dốc của đường bàng quan chính là MRSxy = MUx / MUy."
              },
              {
                "q": "Tổng lợi ích (TU) là:",
                "opts": [
                  "Số đơn vị hàng hóa Y cần phải từ bỏ khi tăng thêm một đơn vị hàng hóa X",
                  "Mức độ hài lòng do tiêu dùng một đơn vị sản phẩm cuối cùng mang lại",
                  "Tỷ giá giữa hai hàng hóa",
                  "Tổng thể sự hài lòng do toàn bộ sự tiêu dùng hàng hóa và dịch vụ mang lại"
                ],
                "ans": 3,
                "exp": "Tổng lợi ích (Total Utility) là tổng mức độ thỏa mãn thu được từ việc tiêu dùng một lượng hàng hóa, dịch vụ nhất định."
              },
              {
                "q": "Điểm phối hợp tối ưu (đạt TUmax) giữa hai sản phẩm X và Y là:",
                "opts": [
                  "Tiếp điểm giữa đường bàng quan và đường đồng phí",
                  "Tiếp điểm giữa đường đồng lượng và đường đồng phí",
                  "Tiếp điểm giữa đường đồng lượng và đường ngân sách",
                  "Tiếp điểm giữa đường bàng quan và đường ngân sách"
                ],
                "ans": 3,
                "exp": "Điểm cân bằng tiêu dùng tối ưu là tiếp điểm giữa đường bàng quan cao nhất có thể với đường ngân sách."
              },
              {
                "q": "Giả định nhà sản xuất chỉ sử dụng 2 yếu tố sản xuất K và L thì tại điểm tương ứng với mức sản lượng tối đa:",
                "opts": [
                  "Năng suất biên tính trên giá của mỗi yếu tố sản xuất phải bằng nhau đồng thời số lượng các yếu tố đưa vào sản xuất cũng phải bằng nhau.",
                  "Độ dốc của đường đồng lượng bằng độ dốc của đường bàng quan.",
                  "Năng suất biên tính trên giá của mỗi yếu tố sản xuất phải bằng nhau và số lượng các yếu tố sản xuất phải nằm trong giới hạn tổng chi phí doanh nghiệp bỏ ra kinh doanh.",
                  "Tỷ lệ thay thế biên bằng tỷ lệ giá cả của hai yếu tố sản xuất K và L."
                ],
                "ans": 2,
                "exp": "Điều kiện tối ưu sản xuất: MPk / Pk = MPl / Pl và Pk*K + Pl*L = TC."
              },
              {
                "q": "Một nhà sản xuất cần 2 yếu tố K và L để sản xuất sản phẩm. Biết người này đã chi ra một khoản tiền là TC = 35.600 để mua 2 yếu tố này với giá tương ứng PK = 200; PL = 400. Cho biết hàm sản xuất là Q = 3K (L-1). Phương án sản xuất tối ưu là:",
                "opts": [
                  "K= 88, L= 44",
                  "K= 89, L= 44",
                  "K= 88, L= 45",
                  "K= 90, L= 45"
                ],
                "ans": 2,
                "exp": "MPk/Pk = MPl/Pl <=> 3(L-1)/200 = 3K/400 <=> K = 2L - 2. Thay vào 200K + 400L = 35600 giải ra L = 45, K = 88."
              },
              {
                "q": "Chi phí biên (MC) là:",
                "opts": [
                  "Chi phí tăng thêm trong tổng chi phí sản xuất khi sản xuất thêm một đơn vị sản phẩm.",
                  "Chi phí tăng thêm khi sử dụng thêm một đơn vị yếu tố sản xuất.",
                  "Chi phí tăng thêm khi sử dụng thêm một đơn vị sản phẩm.",
                  "Chi phí tăng thêm trong tổng chi phí sản xuất khi sử dụng thêm một yếu tố sản xuất."
                ],
                "ans": 0,
                "exp": "Chi phí biên MC = delta TC / delta Q, là phần chi phí tăng thêm khi sản xuất thêm một đơn vị sản phẩm đầu ra."
              },
              {
                "q": "Cho biết hàm sản xuất là Q = 3K (L-1). Hàm năng suất biên của các yếu tố K và L là:",
                "opts": [
                  "MPK = L – 1; MPL = 3K",
                  "MPK = 3L- 3; MPL = 3K",
                  "MPK = L- 1; MPL = 3K- 3",
                  "MPK = 3L- 3; MPL = 3K- 3"
                ],
                "ans": 1,
                "exp": "MPk = dQ/dK = 3(L - 1) = 3L - 3; MPl = dQ/dL = 3K."
              },
              {
                "q": "Câu phát biểu nào dưới đây không đúng với khái niệm dài hạn trong kinh tế học:",
                "opts": [
                  "Không có yếu tố sản xuất nào là cố định.",
                  "Dài hạn là khoảng thời gian từ 5 năm trở lên.",
                  "Các doanh nghiệp có thể thay đổi quy mô sản xuất.",
                  "Các doanh nghiệp ra khỏi ngành khi giá bán nhỏ hơn chi phí sản xuất trung bình."
                ],
                "ans": 1,
                "exp": "Trong kinh tế học, dài hạn được định nghĩa là khoảng thời gian đủ để doanh nghiệp thay đổi tất cả các yếu tố sản xuất, không quy định mốc thời gian cố định 5 năm."
              },
              {
                "q": "Điều kiện tối đa hóa lợi nhuận của doanh nghiệp trong ngắn hạn là",
                "opts": [
                  "Doanh thu cận biên bằng không.",
                  "Chi phí cận biên bằng doanh thu cận biên.",
                  "Doanh thu cận biên bằng với mức giá.",
                  "Doanh thu trung bình bằng với mức giá"
                ],
                "ans": 1,
                "exp": "Mọi doanh nghiệp muốn tối đa hóa lợi nhuận đều phải sản xuất tại mức sản lượng có MR = MC."
              },
              {
                "q": "Tổng chi phí sản xuất sản phẩm A là TC = 400 + 3Q + Q2. Chi phí biến đổi trung bình là:",
                "opts": [
                  "(400/Q) + 3 + Q",
                  "3Q + Q2",
                  "400",
                  "3 + Q"
                ],
                "ans": 3,
                "exp": "VC = 3Q + Q^2 => AVC = VC / Q = 3 + Q."
              },
              {
                "q": "Năng suất biên (MP) của một yếu tố sản xuất biến đổi là:",
                "opts": [
                  "Số sản phẩm tăng thêm trong tổng sản phẩm của các yếu tố sản xuất.",
                  "Số sản phẩm tăng thêm trong tổng sản phẩm khi sử dụng thêm một đồng chi phí của các yếu tố sản xuất biến đổi.",
                  "Số sản phẩm trung bình tính cho mỗi đơn vị yếu tố sản xuất biến đổi.",
                  "Số sản phẩm tăng thêm trong tổng sản phẩm khi sử dụng thêm một đơn vị yếu tố sản xuất biến đổi, các yếu tố sản xuất còn lại giữ nguyên."
                ],
                "ans": 3,
                "exp": "Năng suất biên của một yếu tố phản ánh sự gia tăng của tổng sản lượng khi tăng thêm 1 đơn vị yếu tố đó, các yếu tố khác giữ nguyên."
              },
              {
                "q": "Tổng chi phí sản xuất sản phẩm A là TC = 400 + 3Q + Q2. Chi phí cố định trung bình là:",
                "opts": [
                  "3Q + Q2",
                  "400/Q",
                  "3 + Q",
                  "(400/Q) + 3 + Q"
                ],
                "ans": 1,
                "exp": "FC = 400 => AFC = FC / Q = 400 / Q."
              },
              {
                "q": "Một nhà sản xuất cần 2 yếu tố K và L để sản xuất sản phẩm. Biết người này đã chi ra một khoản tiền là TC = 35.600 để mua 2 yếu tố này với giá tương ứng PK = 200; PL = 400. Cho biết hàm sản xuất là Q = 3K (L-1). Nhà sản xuất muốn sản xuất 1014 đơn vị sản lượng. Phương án sản xuất tối ưu với điều kiện chi phí sản xuất tối thiểu là:",
                "opts": [
                  "K=26; L=13",
                  "K= 28; L= 14",
                  "K= 28; L= 13",
                  "K= 26; L =14"
                ],
                "ans": 3,
                "exp": "Từ điều kiện tối ưu K = 2(L-1). Thay vào Q = 3 * 2(L-1) * (L-1) = 6(L-1)^2 = 1014 => (L-1)^2 = 169 => L - 1 = 13 => L = 14, K = 26."
              }
            ]
          },
          "chuong-6": {
            "title": "Chương 6: Cạnh tranh và độc quyền (20 câu)",
            "questions": [
              {
                "q": "Các điểm nằm trên đường bàng quan biểu thị:",
                "opts": [
                  "Số đơn vị hàng hóa Y cần phải từ bỏ khi tăng thêm một đơn vị hàng hóa X",
                  "Các tập hợp hàng hóa khác nhau đem lại lợi ích giống nhau",
                  "Các tập hợp hàng hóa khác nhau có lợi ích khác nhau",
                  "Những phối hợp khác nhau của hai sản phẩm X và Y cùng tạo ra mức chi phí như nhau."
                ],
                "ans": 1,
                "exp": "Đường bàng quan tập hợp các giỏ hàng hóa khác nhau nhưng cùng mang lại mức độ thỏa dụng (lợi ích) như nhau cho người tiêu dùng."
              },
              {
                "q": "Một người tiêu thụ có phương án tiêu dùng tối ưu là X = 7, Y = 3. Tổng lợi ích của người này được thể hiện qua hàm số TU = X(8-Y). Tổng lợi ích người đó đạt được khi tiêu dùng theo phương án tối ưu là:",
                "opts": [
                  "TUmax = 21",
                  "TUmax = 35",
                  "TUmax = 33",
                  "TUmax = 28"
                ],
                "ans": 1,
                "exp": "TUmax = 7 * (8 - 3) = 7 * 5 = 35."
              },
              {
                "q": "Đường bàng quan biểu thị tất cả những phối hợp tiêu dùng giữa hai loại sản phẩm mà người tiêu dùng:",
                "opts": [
                  "Sử dụng hết số tiền mà mình có",
                  "Đạt được mức lợi ích như nhau",
                  "Đạt được mức lợi ích giảm dần",
                  "Đạt được mức lợi ích tăng dần"
                ],
                "ans": 1,
                "exp": "Định nghĩa đường bàng quan: tập hợp các phối hợp tiêu dùng đem lại mức thỏa mãn (lợi ích) như nhau."
              },
              {
                "q": "Nếu lợi ích cận biên có giá trị bằng không (MU=0) thì ta có thể biết rằng:",
                "opts": [
                  "Tổng lợi ích đang tăng.",
                  "Tổng lợi ích đạt cực đại.",
                  "Tổng lợi ích đang giảm.",
                  "Tổng lợi ích là âm."
                ],
                "ans": 1,
                "exp": "Vì MU = d(TU)/dQ, khi đạo hàm bậc nhất bằng 0 thì tổng lợi ích TU đạt giá trị cực đại."
              },
              {
                "q": "Phối hợp tối ưu của người tiêu dùng là phối hợp thỏa mãn điều kiện:",
                "opts": [
                  "Độ dốc của đường đồng lượng bằng độ dốc của đường đồng phí",
                  "Đường đồng phí tiếp xúc với đường đồng lượng",
                  "Độ dốc của đường ngân sách bằng với độ dốc của đường bàng quan",
                  "Thu nhập không đổi, giá cả của hàng hóa thay đổi"
                ],
                "ans": 2,
                "exp": "Tại điểm tối ưu, đường ngân sách tiếp xúc với đường bàng quan, tức độ dốc của hai đường bằng nhau (MRSxy = Px/Py)."
              },
              {
                "q": "Đường biểu thị mối quan hệ giữa giá sản phẩm và thu nhập của người tiêu thụ là đường:",
                "opts": [
                  "Đường ngân sách",
                  "Đường đồng phí",
                  "Đường bàng quan",
                  "Đường đồng lượng"
                ],
                "ans": 0,
                "exp": "Đường ngân sách xác định các tập hợp hàng hóa người tiêu dùng có thể mua với mức giá và thu nhập cho trước."
              },
              {
                "q": "Một người tiêu dùng có thu nhập I = 1.200 dùng để mua hai sản phẩm X và Y với giá tương ứng là PX = 100; PY = 300. Lợi ích người này được thể hiện qua hàm số TU = XY. Phương án tiêu dùng tối ưu là:",
                "opts": [
                  "X = 3 và Y= 2",
                  "X = 2 và Y= 6",
                  "X = 2 và Y= 3",
                  "X = 6 và Y = 2"
                ],
                "ans": 3,
                "exp": "MUx = Y, MUy = X. MUx/Px = MUy/Py <=> Y/100 = X/300 <=> X = 3Y. 100X + 300Y = 1200 <=> 100(3Y) + 300Y = 1200 <=> 600Y = 1200 => Y = 2, X = 6."
              },
              {
                "q": "Khi đạt tối đa hóa lợi ích thì lợi ích cận biên từ đơn vị cuối cùng của các hàng hóa phải bằng nhau (MUx=MUy=…=MUn). Điều này:",
                "opts": [
                  "Đúng hay sai tùy theo sở thích người tiêu dùng.",
                  "Đúng khi giá các hàng hóa bằng nhau.",
                  "Đúng hay sai tùy theo thu nhập của người tiêu dùng.",
                  "Luôn luôn sai"
                ],
                "ans": 1,
                "exp": "Điều kiện cân bằng là MUx/Px = MUy/Py. Do đó MUx = MUy khi và chỉ khi Px = Py."
              },
              {
                "q": "Tổng lợi ích của người tiêu dùng A được thể hiện qua hàm số TU = XY. Lợi ích cận biên của mỗi hàng hóa là:",
                "opts": [
                  "MUx = Y/X, MUy = X/Y",
                  "MUx = X, MUy = Y",
                  "MUx = Y, MUy = X",
                  "MUx = X/Y, MUy = Y/X"
                ],
                "ans": 2,
                "exp": "MUx = d(TU)/dX = Y; MUy = d(TU)/dY = X."
              },
              {
                "q": "Tỷ lệ thay thế biên của hàng hóa X cho hàng hóa Y (MRSx/y) thể hiện:",
                "opts": [
                  "Độ dốc của đường ngân sách",
                  "Số đơn vị hàng hóa Y cần phải từ bỏ khi tăng thêm một đơn vị hàng hóa X",
                  "Tỷ lệ đánh đổi giữa 2 sản phẩm trên thị trường",
                  "Tỷ giá giữa 2 sản phẩm"
                ],
                "ans": 1,
                "exp": "MRSxy phản ánh lượng hàng Y phải hy sinh để tiêu dùng thêm 1 đơn vị hàng X giữ nguyên mức hữu dụng."
              },
              {
                "q": "Một nhà sản xuất cần 2 yếu tố K và L để sản xuất sản phẩm X. Biết người này đã chi ra một khoản tiền là TC = 15.000 để mua 2 yếu tố này với giá tương ứng PK = 600; PL = 300. Cho biết hàm sản xuất là Q = 2K(L-2). Phương án sản xuất tối ưu là:",
                "opts": [
                  "K = 26; L = 26",
                  "K = 12; L = 12",
                  "K = 26; L = 12",
                  "K = 12; L = 26"
                ],
                "ans": 3,
                "exp": "MPk/Pk = MPl/Pl <=> 2(L-2)/600 = 2K/300 <=> L - 2 = 2K <=> L = 2K + 2. 600K + 300(2K+2) = 15000 <=> 1200K = 14400 => K = 12, L = 26."
              },
              {
                "q": "Nhận định nào dưới đây KHÔNG ĐÚNG với đặc điểm của đường đồng lượng",
                "opts": [
                  "Đường đồng lượng càng dịch xa gốc tọa độ biểu thị sản lượng càng tăng lên",
                  "Đường đồng lượng có dạng cong lồi về phía gốc tọa độ",
                  "Đường đồng lượng có độ dốc âm",
                  "Các đường đồng lượng cắt nhau"
                ],
                "ans": 3,
                "exp": "Tương tự đường bàng quan, các đường đồng lượng không bao giờ cắt nhau."
              },
              {
                "q": "Doanh thu tăng thêm khi doanh nghiệp tiêu thụ thêm 1 đơn vị hàng hóa hoặc dịch vụ là:",
                "opts": [
                  "Tổng doanh thu tính trên mỗi đơn vị hàng hóa hoặc dịch vụ bán ra",
                  "Doanh thu cận biên.",
                  "Doanh thu trung bình.",
                  "Độ dốc của đường doanh thu trung bình."
                ],
                "ans": 1,
                "exp": "Doanh thu cận biên MR = delta TR / delta Q là phần doanh thu tăng thêm khi bán thêm một đơn vị sản phẩm."
              },
              {
                "q": "Hàm tổng chi phí của một xí nghiệp như sau: TC = 50 + 10Q -5Q2 + Q3. Hàm tổng chi phí biến đổi là:",
                "opts": [
                  "3Q2 - 10Q + 10",
                  "Q2 - 5Q + 10",
                  "Q2 - 5Q + 50/Q + 10",
                  "Q3 - 5Q2 + 10Q"
                ],
                "ans": 3,
                "exp": "Chi phí cố định FC = 50. Chi phí biến đổi VC = TC - FC = Q^3 - 5Q^2 + 10Q."
              },
              {
                "q": "Tổng chi phí sản xuất sản phẩm A là TC = 400 + 3Q + Q2. Chi phí biến đổi trung bình là:",
                "opts": [
                  "3Q + Q2",
                  "(400/Q) + 3 + Q",
                  "400",
                  "3 + Q"
                ],
                "ans": 3,
                "exp": "VC = 3Q + Q^2 => AVC = VC / Q = 3 + Q."
              },
              {
                "q": "Nguyên tắc tối đa hóa lợi nhuận trong ngắn hạn:",
                "opts": [
                  "MR= MC",
                  "MR= ATC",
                  "MR > MC",
                  "MR < MC"
                ],
                "ans": 0,
                "exp": "Mọi doanh nghiệp đều tối đa hóa lợi nhuận khi sản xuất ở mức sản lượng thỏa mãn MR = MC."
              },
              {
                "q": "Một nhà sản xuất cần 2 yếu tố K và L để sản xuất sản phẩm. Biết người này đã chi ra một khoản tiền là TC = 35.600 để mua 2 yếu tố này với giá tương ứng PK = 200; PL = 400. Cho biết hàm sản xuất là Q = 3K (L-1). Phương án sản xuất tối ưu là:",
                "opts": [
                  "K= 88, L= 45",
                  "K= 90, L= 45",
                  "K= 89, L= 44",
                  "K= 88, L= 44"
                ],
                "ans": 0,
                "exp": "MPk/Pk = MPl/Pl <=> 3(L-1)/200 = 3K/400 <=> K = 2L - 2. 200(2L - 2) + 400L = 35600 <=> 800L = 36000 => L = 45, K = 88."
              },
              {
                "q": "Một nhà sản xuất cần 2 yếu tố K và L để sản xuất sản phẩm X. Biết người này đã chi ra một khoản tiền là TC = 15.000 để mua 2 yếu tố này với giá tương ứng PK = 600; PL = 300. Cho biết hàm sản xuất là Q = 2K(L-2). Sản lượng tối đa đạt được là:",
                "opts": [
                  "Q = 240",
                  "Q = 520",
                  "Q = 1248",
                  "Q = 576"
                ],
                "ans": 3,
                "exp": "Tại điểm tối ưu K = 12, L = 26 => Q = 2 * 12 * (26 - 2) = 24 * 24 = 576."
              },
              {
                "q": "Chi phí cố định bình quân (AFC) được tính bằng:",
                "opts": [
                  "ATC ở điểm cực tiểu",
                  "TC+ VC",
                  "A.VC+ MC",
                  "ATC- AVC"
                ],
                "ans": 3,
                "exp": "Vì ATC = AFC + AVC nên AFC = ATC - AVC."
              },
              {
                "q": "Cho biết hàm sản xuất là Q = 3K (L-1). Hàm năng suất biên của các yếu tố K và L là:",
                "opts": [
                  "MPK = 3L- 3; MPL = 3K",
                  "MPK = L – 1; MPL = 3K",
                  "MPK = L- 1; MPL = 3K- 3",
                  "MPK = 3L- 3; MPL = 3K- 3"
                ],
                "ans": 0,
                "exp": "MPk = dQ/dK = 3(L - 1) = 3L - 3; MPl = dQ/dL = 3K."
              }
            ]
          },
          "chuong-7": {
            "title": "Chương 7: Thị trường yếu tố sản xuất (20 câu)",
            "questions": [
              {
                "q": "Đối với hãng cạnh tranh hoàn hảo, câu nào sau đây là đúng:",
                "opts": [
                  "Sản phẩm không có khả năng thay thế",
                  "Việc gia nhập hay rút lui khỏi thị trường khó khăn",
                  "Đường doanh thu biên nằm dưới đường cầu",
                  "Doanh thu biên chính là giá bán"
                ],
                "ans": 3,
                "exp": "Do hãng cạnh tranh hoàn hảo chấp nhận giá thị trường P cố định nên MR = AR = P."
              },
              {
                "q": "Đường cung của doanh nghiệp cạnh tranh hoàn hảo là:",
                "opts": [
                  "Phần đường SMC từ AVC min trở lên.",
                  "Là nhánh bên phải của đường SMC.",
                  "Không có phương án nào đúng.",
                  "Phần đường SMC từ AC min trở lên."
                ],
                "ans": 0,
                "exp": "Trong ngắn hạn, đường cung của hãng cạnh tranh hoàn hảo là phần đường chi phí cận biên ngắn hạn SMC nằm phía trên điểm cực tiểu của AVC."
              },
              {
                "q": "Cầu về sản phẩm B là P=120-Q. Thị trường này do một hãng độc quyền khống chế, chi phí của hãng độc quyền này là: TC =500+Q2+4Q. Với Q = 60 thì khi đó lợi nhuận của hãng sẽ là:",
                "opts": [
                  "700",
                  "200",
                  "-740",
                  "2500"
                ],
                "ans": 2,
                "exp": "Tại Q = 60 => P = 120 - 60 = 60. TR = 60 * 60 = 3600. TC = 500 + 60^2 + 4(60) = 4340. Lợi nhuận = TR - TC = 3600 - 4340 = -740."
              },
              {
                "q": "Cầu về sản phẩm B là P=100-Q. Thị trường này do một hãng độc quyền khống chế, chi phí của hãng độc quyền này là: TC =500+Q2+4Q. Với Q=24, lợi nhuận khi đó là bao nhiêu?",
                "opts": [
                  "0",
                  "652",
                  "1824",
                  "1172"
                ],
                "ans": 1,
                "exp": "Tại Q = 24 => P = 100 - 24 = 76. TR = 76 * 24 = 1824. TC = 500 + 24^2 + 4(24) = 1172. Lợi nhuận = 1824 - 1172 = 652."
              },
              {
                "q": "Doanh nghiệp độc quyền có các hàm số sau: P= 5.000-2Q; MC = 6Q. Để tối đa hóa lợi nhuận thì doanh nghiệp sẽ sản xuất ở mức giá",
                "opts": [
                  "P = 2.000",
                  "P = 1.500",
                  "P = 4.000",
                  "P = 500"
                ],
                "ans": 2,
                "exp": "TR = 5000Q - 2Q^2 => MR = 5000 - 4Q. Tối ưu: MR = MC <=> 5000 - 4Q = 6Q <=> Q = 500. Giá bán: P = 5000 - 2(500) = 4000."
              },
              {
                "q": "Doanh nghiệp độc quyền có MR = 5.000 - 4Q; MC = 6Q. Để tối đa hóa lợi nhuận thì doanh nghiệp sẽ sản xuất sản lượng là:",
                "opts": [
                  "Q=600",
                  "Q=400",
                  "Q=700",
                  "Q=500"
                ],
                "ans": 3,
                "exp": "MR = MC <=> 5000 - 4Q = 6Q <=> 10Q = 5000 <=> Q = 500."
              },
              {
                "q": "Doanh nghiệp có các hàm số sau: P= 5.000-2Q. Với Q= 1250 thì doanh thu là:",
                "opts": [
                  "TR=3.125.000",
                  "TR=18.000.000",
                  "TR=2.250.000",
                  "TR=20.000.000"
                ],
                "ans": 0,
                "exp": "P = 5000 - 2(1250) = 2500. Doanh thu TR = P * Q = 2500 * 1250 = 3,125,000."
              },
              {
                "q": "Trong thị trường độc quyền hoàn toàn:",
                "opts": [
                  "Các công ty có thể gia nhập hoặc rút lui khỏi ngành trong dài hạn mà không gặp nhiều khó khăn.",
                  "Chỉ có một người bán duy nhất bán một loại hàng hóa mà có thể có một vài sản phẩm thay thế tương tự nhau.",
                  "Có một vài người bán cùng bán một loại hàng hóa độc nhất không thể thay thế.",
                  "Chỉ có một người bán duy nhất bán một loại hàng hóa độc nhất không thể thay thế."
                ],
                "ans": 3,
                "exp": "Đặc trưng độc quyền hoàn toàn: duy nhất một người bán sản phẩm độc nhất, không có hàng hóa thay thế gần gũi."
              },
              {
                "q": "Doanh nghiệp trong thị trường độc quyền hoàn toàn với MR = (-1/5)Q + 30. Tìm Q để doanh thu cực đại:",
                "opts": [
                  "P=150",
                  "P = 110",
                  "P = 210",
                  "P = 120"
                ],
                "ans": 0,
                "exp": "Doanh thu TR đạt cực đại khi doanh thu cận biên MR = 0 <=> (-1/5)Q + 30 = 0 <=> Q = 150 (tương ứng phương án 150)."
              },
              {
                "q": "Doanh thu biên trong thị trường độc quyền hoàn toàn thì:",
                "opts": [
                  "Bằng với giá.",
                  "Nhỏ hơn giá",
                  "Lớn hơn giá.",
                  "Có thể lớn hơn, nhỏ hơn hoặc bằng giá."
                ],
                "ans": 1,
                "exp": "Do đường cầu dốc xuống, để bán thêm sản phẩm doanh nghiệp phải hạ giá nên MR luôn nhỏ hơn mức giá P tại mọi mức sản lượng Q > 0."
              },
              {
                "q": "Khi P < AVCmin, doanh nghiệp cạnh tranh hoàn hảo nên quyết định:",
                "opts": [
                  "Sản xuất tại xuất lượng có AVCmin",
                  "Ngừng sản xuất",
                  "Sản xuất ở sản lượng tại đó MC = MR",
                  "Sản xuất tại xuất lượng có P = MC"
                ],
                "ans": 1,
                "exp": "Khi giá bán không đủ bù đắp chi phí biến đổi trung bình tối thiểu (P < AVCmin), tiếp tục sản xuất sẽ lỗ thêm cả biến phí nên hãng phải đóng cửa/ngừng sản xuất."
              },
              {
                "q": "Trong thị trường cạnh tranh hoàn hảo, để lợi nhuận tối đa doanh nghiệp cung ứng tại mức sản lượng có:",
                "opts": [
                  "Chi phí thấp nhất",
                  "MR=P",
                  "P=MC",
                  "Chi phí bình quân thấp nhất"
                ],
                "ans": 2,
                "exp": "Hãng cạnh tranh hoàn hảo có MR = P, nên điều kiện tối đa hóa lợi nhuận MR = MC trở thành P = MC."
              },
              {
                "q": "Để tối đa hóa lợi nhuận, các doanh nghiệp so sánh chi phí cận biên của một yếu tố với:",
                "opts": [
                  "Doanh thu mà của mọi yếu tố được sử dụng",
                  "Doanh thu mà yếu tố đó tạo ra",
                  "Doanh thu cận biên mà yếu tố đó tạo ra",
                  "Tổng chi phí để sử dụng yếu tố đó"
                ],
                "ans": 2,
                "exp": "Nguyên tắc tuyển dụng/thuê yếu tố sản xuất: so sánh chi phí cận biên của yếu tố (MFC) với doanh thu sản phẩm cận biên của yếu tố đó (MRP)."
              },
              {
                "q": "Sản phẩm doanh thu cận biên của yếu tố sản xuất là",
                "opts": [
                  "Sự thay đổi của tổng doanh thu do sử dụng thêm một đơn vị của một yếu tố sản xuất đó",
                  "Sự thay đổi của tổng doanh thu do sử dụng thêm một đơn vị của tất cả các yếu tố sản xuất.",
                  "Sự thay đổi của giá sản phẩm khi sử dụng thêm một đơn vị của một yếu tố sản xuất đó",
                  "Sự thay đổi của tổng doanh thu do tiêu thụ thêm một đơn vị hàng hoá dịch vụ."
                ],
                "ans": 0,
                "exp": "Sản phẩm doanh thu cận biên (Marginal Revenue Product - MRP) là lượng tổng doanh thu tăng thêm khi sử dụng thêm một đơn vị yếu tố sản xuất đó."
              },
              {
                "q": "Giả định hàm sản xuất của doanh nghiệp có dạng Q = 12L - L2. Giá bán sản phẩm là P= 20. Đường cầu lao động (Ld) là:",
                "opts": [
                  "Ld = 240 + 40L",
                  "Ld = 12 + 2L",
                  "Ld = 12 - 2L",
                  "Ld = 240 - 40L"
                ],
                "ans": 3,
                "exp": "MP_L = 12 - 2L. Đường cầu lao động chính là đường MRP_L = P * MP_L = 20 * (12 - 2L) = 240 - 40L."
              },
              {
                "q": "Mức tiền lương tối thiểu được quy định cao hơn mức tiền lương cân bằng trên thị trường lao động dẫn đến:",
                "opts": [
                  "Dư thừa việc làm",
                  "Thất nghiệp.",
                  "Đường cung lao động thay đổi",
                  "Đường cầu lao động thay đổi"
                ],
                "ans": 1,
                "exp": "Tiền lương tối thiểu cao hơn lương cân bằng tạo ra dư cung lao động (số người muốn làm lớn hơn số chỗ làm doanh nghiệp thuê), dẫn đến thất nghiệp."
              },
              {
                "q": "Mức tiền lương tăng lên 10% tạo ra 2% tăng lên về số lượng lao động cung ứng. Vậy, hệ số co giãn của cung về lao động là",
                "opts": [
                  "0,2%",
                  "0,2",
                  "5%",
                  "5"
                ],
                "ans": 1,
                "exp": "Es = (% delta Ls) / (% delta W) = 2% / 10% = 0.2."
              },
              {
                "q": "Cung lao động là",
                "opts": [
                  "lượng lao động mà người lao động sẵn sàng và có khả năng cung ứng tại các mức tiền công tối thiểu.",
                  "lượng lao động mà người lao động sẵn sàng và có khả năng cung ứng tại các mức tiền công khác nhau trong một giai đoạn nhất định",
                  "lượng lao động mà người lao động sẵn sàng và có khả năng cung ứng tại các mức tiền công khác nhau trong mọi thời kì.",
                  "lượng lao động mà người lao động sẵn sàng cung ứng tại các mức tiền công khác nhau trong một giai đoạn nhất định"
                ],
                "ans": 1,
                "exp": "Cung lao động là số lượng lao động mà người lao động sẵn sàng và có khả năng cung ứng ở các mức tiền công khác nhau trong một thời kỳ nhất định."
              },
              {
                "q": "Khi giá của sản phẩm đầu ra tăng:",
                "opts": [
                  "Có sự di chuyển dọc đường cầu lao động",
                  "Đường cầu lao động dịch chuyển sang bên phải",
                  "Đường cầu lao động không thay đổi",
                  "Đường cầu lao động dịch chuyển sang bên trái"
                ],
                "ans": 1,
                "exp": "Giá sản phẩm P tăng làm MRP_L = P * MP_L tăng tại mọi mức lao động, khiến đường cầu lao động dịch chuyển sang phải."
              },
              {
                "q": "Cung lao động của ngành là",
                "opts": [
                  "sự cộng theo chiều dọc đường cung lao động của các cá nhân",
                  "Không có câu trả lời đúng",
                  "sự cộng theo chiều ngang đường cung lao động của các cá nhân",
                  "do Chính phủ quy định"
                ],
                "ans": 2,
                "exp": "Đường cung lao động của ngành được xác định bằng cách cộng lượng cung lao động của tất cả cá nhân ở từng mức tiền công (cộng theo chiều ngang)."
              }
            ]
          }
        }
      },
      "van-hoa-kd": {
        "name": "Văn hóa kinh doanh",
        "lessons": {
          "chuong-1": {
            "title": "Chương 1: Tổng quan về văn hóa kinh doanh (10 câu)",
            "questions": [
              {
                "q": "Thông qua giao lưu văn hóa sẽ làm biến đổi một cách tế nhị và dần dần thói quen, thị hiếu và sở thích của người bản địa, và những thay đổi này sẽ mở ra thị trường mới cho các nhà sản xuất. Vậy văn hóa kinh doanh có vai trò gì?",
                "opts": [
                  "Văn hóa kinh doanh là phương thức phát triển sản xuất kinh doanh bền vững",
                  "Văn hóa kinh doanh là nguồn lực phát triển kinh doanh",
                  "Văn hóa kinh doanh là sự khác biệt hóa, cái bản sắc riêng của doanh nghiệp",
                  "Văn hóa kinh doanh là điều kiện để đẩy mạnh kinh doanh quốc tế"
                ],
                "ans": 3,
                "exp": "Giao lưu văn hóa làm biến đổi thị hiếu và thói quen tiêu dùng của người bản địa, mở ra thị trường mới, tạo điều kiện thúc đẩy kinh doanh quốc tế."
              },
              {
                "q": "Những quy ước thông thường của cuộc sống hàng ngày, những hành vi ứng xử, thói quen, nếp sinh hoạt tương đối ổn định của các thành viên trong nhóm xã hội được lưu truyền từ thế hệ này qua thế hệ khác. Đó là biểu hiện của nhân tố nào cấu thành nên văn hóa?",
                "opts": [
                  "Thói quen",
                  "Kiến thức và sự hiểu biết",
                  "Phong tục tập quán",
                  "Giáo dục và nhận thức"
                ],
                "ans": 2,
                "exp": "Phong tục tập quán là các quy ước, hành vi ứng xử và nếp sinh hoạt ổn định được truyền qua nhiều thế hệ trong cộng đồng."
              },
              {
                "q": "Là một hệ thống hữu cơ những giá trị vật chất và tinh thần do con người sáng tạo và tích lũy qua quá trình hoạt động thực tiễn, trong sự tương tác giữa con người với môi trường tự nhiên và xã hội của mình. Đây là khái niện của",
                "opts": [
                  "Triết lý kinh doanh",
                  "Văn hóa kinh doanh",
                  "Triết lý",
                  "Văn hóa"
                ],
                "ans": 3,
                "exp": "Đây là định nghĩa tổng quát về Văn hóa: hệ thống các giá trị vật chất và tinh thần do con người sáng tạo và tích lũy qua thực tiễn."
              },
              {
                "q": "Là nguồn lực phát triển kinh doanh. Đó là vai trò của",
                "opts": [
                  "Văn hóa kinh doanh",
                  "Văn hóa doanh nghiệp",
                  "Triết lý kinh doanh",
                  "Triết lý doanh nghiệp"
                ],
                "ans": 0,
                "exp": "Văn hóa kinh doanh đóng vai trò là một nguồn lực quan trọng thúc đẩy hoạt động sản xuất kinh doanh phát triển."
              },
              {
                "q": "Kinh doanh và văn hóa có mối quan hệ biện chứng với nhau. Bao gồm kinh doanh có văn hóa và kinh doanh phi văn hóa. Đó chính là vai trò nào của văn hóa kinh doanh?",
                "opts": [
                  "Văn hóa kinh doanh là sự khác biệt hóa, cái bản sắc riêng của doanh nghiệp",
                  "Văn hóa kinh doanh là nguồn lực phát triển kinh doanh",
                  "Văn hóa kinh doanh là điều kiện để đẩy mạnh kinh doanh quốc tế",
                  "Văn hóa kinh doanh là phương thức phát triển sản xuất kinh doanh bền vững"
                ],
                "ans": 3,
                "exp": "Kinh doanh có văn hóa giúp ngăn ngừa tiêu cực và bảo đảm sự hài hòa lợi ích lâu dài, là phương thức phát triển sản xuất kinh doanh bền vững."
              },
              {
                "q": "Phát huy những tiềm năng của con người và qua đó góp phần nâng cao các giá trị của văn hóa. Đó là chức năng nào của văn hóa?",
                "opts": [
                  "Chức năng nhận thức",
                  "Chức năng giáo dục",
                  "Chức năng giải trí",
                  "Chức năng thẩm mỹ"
                ],
                "ans": 1,
                "exp": "Chức năng giáo dục của văn hóa thể hiện ở việc đánh thức và phát huy tiềm năng con người, từ đó nâng cao các giá trị văn hóa xã hội."
              },
              {
                "q": "Những luật lệ do con người đặt ra để điều tiết và định hình những quan hệ tương hỗ giữa con người. Những yếu tố này ảnh hưởng trực tiếp tới môi trường kinh doanh và qua đó ảnh hưởng sâu sắc tới việc hình thành và phát triển văn hóa kinh doanh. Đó là sự tác động của nhân tố nào đến văn hóa kinh doanh?",
                "opts": [
                  "Nền văn hóa xã hội",
                  "Quá trình toàn cầu hóa",
                  "Sự khác biệt và giao lưu văn hóa",
                  "Thể chế xã hội"
                ],
                "ans": 3,
                "exp": "Thể chế xã hội (luật pháp, chính sách và cơ chế điều tiết) tác động trực tiếp đến môi trường kinh doanh và sự hình thành văn hóa kinh doanh."
              },
              {
                "q": "Sự giao lưu văn hóa tạo điều kiện cho các chủ thể kinh doanh lựa chọn khía cạnh tốt về văn hóa của các chủ thể khác. Đó chính là tác động của nhân tố nào đến văn hóa kinh doanh?",
                "opts": [
                  "Thể chế xã hội",
                  "Nền văn hóa xã hội",
                  "Sự khác biệt và giao lưu văn hóa",
                  "Quá trình toàn cầu hóa"
                ],
                "ans": 2,
                "exp": "Giao lưu văn hóa tạo cơ hội cọ xát, học hỏi và tiếp thu những mặt tích cực, phù hợp từ các nền văn hóa khác."
              },
              {
                "q": "Nhân tố văn hóa có mặt trong mọi công tác, hoạt động xã hội và thường tác động tới con người một cách gián tiếp, vô hình tạo ra các khuôn mẫu xã hội. Do đó văn hóa đóng vai trò gì?",
                "opts": [
                  "Linh hồn và hệ điều tiết của sự phát triển",
                  "Tư tưởng và quan điểm của sự phát triển",
                  "Động lực của sự phát triển xã hội",
                  "Mục tiêu của sự phát triển"
                ],
                "ans": 0,
                "exp": "Văn hóa thẩm thấu vào mọi hoạt động và điều chỉnh hành vi con người theo chuẩn mực chung, đóng vai trò linh hồn và hệ điều tiết của sự phát triển."
              },
              {
                "q": "Văn hóa tạo nên nếp suy nghĩ và cảm nhận chung mang tính bản sắc có đặc trưng cơ bản là gì?",
                "opts": [
                  "Văn hóa mang tính vùng miền",
                  "Văn hóa mang tính địa phương",
                  "Văn hóa mang tính dân tộc",
                  "Văn hóa mang tính độc đáo"
                ],
                "ans": 2,
                "exp": "Tính dân tộc là đặc trưng cốt lõi tạo ra hệ giá trị, bản sắc và cách suy nghĩ, cảm nhận tương đồng của các thành viên trong một dân tộc."
              }
            ]
          },
          "chuong-3": {
            "title": "Chương 3: Đạo đức kinh doanh & Triết lý doanh nghiệp (20 câu)",
            "questions": [
              {
                "q": "Quan niệm “trọng nông, ức thương” của nho giáo là triết lý được rút ra từ thời kỳ nào?",
                "opts": [
                  "Thời kỳ thực dân phong kiến",
                  "Thời kỳ dựng nước đến khi bị Pháp xâm lược",
                  "Thời kỳ đổi mới từ 1986 đến nay",
                  "Thời kỳ kháng chiến chống Mỹ và theo cơ chế quan liêu bao cấp"
                ],
                "ans": 1,
                "exp": "Tư tưởng Nho giáo 'trọng nông ức thương' chi phối toàn bộ xã hội phong kiến Việt Nam từ thời kỳ dựng nước độc lập tự chủ cho đến trước khi thực dân Pháp xâm lược."
              },
              {
                "q": "Muốn phát huy sức mạnh của triết lý kinh doanh trong xã hội nước ta hiện nay cần thực hiện biện pháp gì?",
                "opts": [
                  "Tìm hiểu triết lý kinh doanh của nước ngoài",
                  "Lãnh đạo doanh nghiệp phải là người tích cực truyền bá triết lý kinh doanh ở trong và ngoài doanh nghiệp",
                  "Nghiên cứu triết lý kinh doanh truyền thống của dân tộc trong lịch sử",
                  "Nghiên cứu về thực trạng của triết lý kinh doanh trong các doanh nghiệp nước ta hiện nay"
                ],
                "ans": 1,
                "exp": "Người lãnh đạo đóng vai trò linh hồn; để triết lý phát huy sức mạnh thực tế, lãnh đạo phải là người tiên phong thực thi và tích cực truyền bá triết lý trong và ngoài doanh nghiệp."
              },
              {
                "q": "Triết lý kinh doanh là cơ sở để doanh nghiệp?",
                "opts": [
                  "Tạo ra giá trị cốt lõi",
                  "Giáo dục, phát triển nguồn nhân lực",
                  "Tạo ra phương thức phát triển bền vững",
                  "Quản lý chiến lược"
                ],
                "ans": 3,
                "exp": "Triết lý kinh doanh là kim chỉ nam, xác định mục tiêu và phương châm hành động, đóng vai trò là cơ sở cốt lõi cho quản trị chiến lược của doanh nghiệp."
              },
              {
                "q": "Là những niềm tin căn bản của những người làm việc trong doanh nghiệp, xác định thái độ của doanh nghiệp với những đối tượng hữu quan như: người sở hữu, những nhà quản trị, đội ngũ những người lao động, khách hàng và các đối tượng khác có liên quan đến hoạt động của doanh nghiệp. Được gọi là",
                "opts": [
                  "Sứ mệnh của doanh nghiệp",
                  "Phương thức hành động",
                  "Hệ thống mục tiêu của doanh nghiệp",
                  "Hệ thống giá trị của doanh nghiệp"
                ],
                "ans": 3,
                "exp": "Hệ thống giá trị của doanh nghiệp bao gồm các chuẩn mực, niềm tin căn bản định hướng thái độ và hành vi ứng xử đối với các bên hữu quan."
              },
              {
                "q": "Để tăng cường nghiên cứu, giảng dạy và quảng bá về triết lý kinh doanh cần tiến hành theo bước chính nào?",
                "opts": [
                  "Tìm hiểu triết lý kinh doanh của nước ngoài, nghiên cứu về thực trạng của triết lý kinh doanh trong các doanh nghiệp nước ta hiện nay",
                  "Tìm hiểu triết lý kinh doanh của nước ngoài, nghiên cứu triết lý kinh doanh truyền thống của dân tộc trong lịch sử, nghiên cứu về thực trạng của triết lý kinh doanh trong các doanh nghiệp nước ta hiện nay",
                  "Nghiên cứu triết lý kinh doanh truyền thống của dân tộc trong lịch sử, nghiên cứu về thực trạng của triết lý kinh doanh trong các doanh nghiệp nước ta hiện nay",
                  "Tìm hiểu triết lý kinh doanh của nước ngoài, nghiên cứu triết lý kinh doanh truyền thống của dân tộc trong lịch sử"
                ],
                "ans": 1,
                "exp": "Cần kết hợp đồng bộ 3 hướng: tiếp thu kinh nghiệm quốc tế, kế thừa truyền thống dân tộc trong lịch sử và bám sát thực trạng doanh nghiệp Việt Nam hiện nay."
              },
              {
                "q": "Vai trò của triết lý doanh nghiệp trong quản lý, phát triển doanh nghiệp là gì?",
                "opts": [
                  "Cốt lõi của văn hóa doanh nghiệp, công cụ định hướng và cơ sở quản lý chiến lược, phương tiện để giáo dục phát triển nguồn nhân lực",
                  "Cốt lõi của văn hóa doanh nghiệp, phương thức phát triển bền vững, công cụ định hướng chiến lược",
                  "Phương thức phát triển bền vững, phương tiện để giáo dục phát triển nguồn nhân lực, cốt lõi của văn hóa doanh nghiệp",
                  "Công cụ định hướng và cơ sở quản lý chiến lược, phương thức phát triển bền vững, phương tiện để giáo dục phát triển nguồn nhân lực"
                ],
                "ans": 0,
                "exp": "Ba vai trò cơ bản của triết lý doanh nghiệp: (1) Cốt lõi của VHDN, (2) Công cụ định hướng và cơ sở quản lý chiến lược, (3) Phương tiện giáo dục, phát triển nguồn nhân lực."
              },
              {
                "q": "Những tư tưởng triết học phản ánh thực tiễn kinh doanh thông qua con đường trải nghiệm, suy ngẫm, khái quát hóa của các chủ thể kinh doanh và chỉ dẫn cho hoạt động kinh doanh. Được gọi là",
                "opts": [
                  "Triết lý",
                  "Triết học",
                  "Triết lý doanh nghiệp",
                  "Triết lý kinh doanh"
                ],
                "ans": 3,
                "exp": "Đây là định nghĩa chuẩn của Triết lý kinh doanh: tư tưởng triết học đúc kết từ trải nghiệm thực tiễn nhằm định hướng cho toàn bộ hành vi kinh doanh."
              },
              {
                "q": "Điều kiện cơ bản cho sự ra đời của triết lý doanh nghiệp là gì?",
                "opts": [
                  "Cơ chế pháp luật, thời gian hoạt động, bản lĩnh và năng lực của người lãnh đạo",
                  "Cơ chế pháp luật; bản lĩnh và năng lực của người lãnh đạo, năng lực lập kế hoạch, năng lực tìm và sử dụng nhân tài",
                  "Thời gian hoạt động, sự chấp nhận tự giác của đội ngũ cán bộ, năng lực tiếp thụ và năng lực tiêu thụ, triết học và phong thái kinh doanh",
                  "Cơ chế pháp luật, thời gian hoạt động, bản lĩnh và năng lực của người lãnh đạo, sự chấp nhận tự giác của đội ngũ cán bộ"
                ],
                "ans": 3,
                "exp": "Bốn điều kiện cơ bản gồm: thời gian hoạt động đủ dài, bản lĩnh và năng lực của lãnh đạo, sự đồng thuận tự giác của nhân viên và hành lang pháp lý phù hợp."
              },
              {
                "q": "Là một bản tuyên bố lý do tồn tại của doanh nghiệp, còn gọi là quan điểm, tôn chỉ, nguyên tắc, mục đích kinh doanh của doanh nghiệp. Được gọi là",
                "opts": [
                  "Hệ thống mục tiêu của doanh nghiệp",
                  "Sứ mệnh của doanh nghiệp",
                  "Hệ thống giá trị",
                  "Phương thức hành động"
                ],
                "ans": 1,
                "exp": "Sứ mệnh (Mission) tuyên bố rõ lý do tồn tại, mục đích và tôn chỉ hoạt động cơ bản nhất của doanh nghiệp đối với xã hội."
              },
              {
                "q": "Khía cạnh nào là cơ sở cho các hoạt động của doanh nghiệp trong trách nhiệm xã hội?",
                "opts": [
                  "Khía cạnh pháp lý",
                  "Khía cạnh đạo đức",
                  "Khía cạnh kinh tế",
                  "Khía cạnh nhân văn"
                ],
                "ans": 2,
                "exp": "Theo mô hình kim tự tháp CSR của Carroll, trách nhiệm kinh tế (tạo ra lợi nhuận, cung cấp hàng hóa) là nền móng cơ sở cho mọi hoạt động trách nhiệm khác."
              },
              {
                "q": "Trong hoạt động tuyển dụng và bổ nhiệm nhân sự, sẽ xuất hiện một vấn đề đạo đức khá nan giải, đó là gì?",
                "opts": [
                  "Tôn trọng quyền riêng tư các nhân",
                  "Không đãi ngộ xứng đáng với công sức đóng góp của người lao động",
                  "Quyền lợi của người lao động",
                  "Tình trạng phân biệt đối xử"
                ],
                "ans": 3,
                "exp": "Vấn đề đạo đức nan giải và phổ biến nhất trong tuyển dụng và đề bạt là nạn phân biệt đối xử theo giới tính, vùng miền, độ tuổi hoặc các mối quan hệ thân quen."
              },
              {
                "q": "Khi xác định động cơ (trong phân tích vấn đề đạo đức), cần xác định các câu hỏi nào?",
                "opts": [
                  "Động cơ là gì? Vì sao động cơ là yếu tố khó lần ra manh mối nhất? Động cơ của doanh nghiệp mang tính vị kỷ hay tính vị tha?",
                  "Động cơ là gì? Động cơ của doanh nghiệp mang tính vị kỷ hay tính vị tha?",
                  "Doanh nghiệp che đậy hay tỏ lộ động cơ của mình? Động cơ của doanh nghiệp mang tính vị kỷ hay tính vị tha? Định hướng giá trị của doanh nghiệp là gì?",
                  "Động cơ là gì? Tại sao? Vì lý do gì?"
                ],
                "ans": 0,
                "exp": "Khi phân tích động cơ hành vi đạo đức, cần trả lời rõ: bản chất động cơ là gì, vì sao nó khó phát hiện và động cơ đó vì lợi ích riêng (vị kỷ) hay vì cộng đồng (vị tha)."
              },
              {
                "q": "Người chủ công ty và người lao động như thế nào về quyền sở hữu những bí mật thương mại",
                "opts": [
                  "Cả hai đồng sở hữu nhưng chủ công ty có quyền hạn gấp 10 lần",
                  "Người lao động có quyền sở hữu vì họ trực tiếp tạo ra nó",
                  "Chủ công ty là người có quyền sở hữu vì họ bỏ tiền thuê lao động",
                  "Cả hai đồng sở hữu"
                ],
                "ans": 2,
                "exp": "Về mặt pháp lý và quan hệ lao động, bí mật thương mại được tạo ra trong quá trình làm việc thuộc quyền sở hữu của doanh nghiệp/người chủ đã đầu tư chi phí và cơ sở vật chất."
              },
              {
                "q": "Đạo đức đang trở thành một bộ phận trong các kế hoạch chiến lược của các doanh nghiệp vì?",
                "opts": [
                  "Là chương trình do chính phủ yêu cầu",
                  "Là chương trình cổ đông bắt buộc",
                  "Là chương trình do nhân viên yêu cầu",
                  "Là chương trình do nhân dân bắt buộc"
                ],
                "ans": 2,
                "exp": "Đạo đức kinh doanh gắn liền với sự gắn bó và đòi hỏi của lực lượng lao động (nhân viên yêu cầu một môi trường làm việc công bằng, minh bạch, nhân văn)."
              },
              {
                "q": "Trong một môi trường làm việc, các nhân viên có thể mong muốn được các đồng nghiệp và cấp trên đối xử với mình ra sao?",
                "opts": [
                  "Sự cảm thông và dễ dãi",
                  "Sự tin cậy tuyệt đối",
                  "Sự quan tâm và tôn trọng",
                  "Sự thể hiện tình cảm thuần túy"
                ],
                "ans": 2,
                "exp": "Nhu cầu cơ bản nhất trong quan hệ lao động lành mạnh là sự quan tâm đúng mức và tôn trọng nhân phẩm, năng lực của người lao động."
              },
              {
                "q": "Đạo đức khác pháp luật là ở chỗ nào?",
                "opts": [
                  "Ảnh hưởng và phạm vi điều chỉnh hẹp hơn pháp luật",
                  "Chuẩn mực đạo đức được ghi thành văn bản",
                  "Mang tính tự nguyện.",
                  "Có sự can thiệp của nhà nước"
                ],
                "ans": 2,
                "exp": "Pháp luật mang tính cưỡng chế và bắt buộc bằng quyền lực nhà nước, trong khi đạo đức được thực hiện dựa trên sự tự nguyện, lương tâm và dư luận xã hội."
              },
              {
                "q": "Các hành vi, vi phạm đạo đức kinh doanh ảnh hưởng như thế nào đến khách hàng?",
                "opts": [
                  "Tăng sự trung thành của khách hàng",
                  "Giảm than phiền của khách hàng",
                  "Tăng sự tin cậy của khách hàng",
                  "Giảm sự trung thành của khách hàng"
                ],
                "ans": 3,
                "exp": "Vi phạm đạo đức (lừa dối, gian lận, hàng kém chất lượng) làm xói mòn lòng tin và giảm sút nghiêm trọng sự trung thành của khách hàng."
              },
              {
                "q": "Trong khía cạnh kinh tế, khi doanh nghiệp thực hiện trách nhiệm xã hội, cần quan tâm đến đối tượng nào?",
                "opts": [
                  "Chủ sở hữu, các bên liên đới khác",
                  "Người tiêu dùng, chủ sở hữu",
                  "Người lao động, người tiêu dùng, chủ sở hữu, các bên liên đới khác",
                  "Người lao động, người tiêu dùng, chủ sở hữu"
                ],
                "ans": 2,
                "exp": "Trách nhiệm kinh tế đòi hỏi doanh nghiệp phải tạo ra lợi ích cân bằng cho tất cả các bên: bảo toàn vốn cho chủ sở hữu, trả lương cho lao động, sản phẩm tốt cho người tiêu dùng và các đối tác liên quan."
              },
              {
                "q": "Hành vi nào sau đây là hành vi vi phạm đạo đức của doanh nghiệp?",
                "opts": [
                  "Trốn tránh nghĩa vụ đóng thuế",
                  "Kinh doanh không hợp pháp",
                  "Làm hàng nhái hàng giả, hàng kém chất lượng",
                  "Sa thải người sai pháp luật"
                ],
                "ans": 2,
                "exp": "Sản xuất hàng giả, nhái, kém chất lượng là biểu hiện điển hình của kinh doanh phi đạo đức, trực tiếp xâm hại quyền lợi và sức khỏe người tiêu dùng (các hành vi trốn thuế, sa thải sai luật nghiêng về vi phạm pháp luật hình sự/dân sự)."
              },
              {
                "q": "Phát biểu nào sau đây là đúng khi nói về tháp trách nhiệm xã hội, theo thứ tự từ thấp tới cao?",
                "opts": [
                  "Nghĩa vụ kinh tế, nghĩa vụ đạo đức, nghĩa vụ pháp lý, nghĩa vụ nhân văn.",
                  "Nghĩa vụ kinh tế, nghĩa vụ pháp lý, nghĩa vụ nhân văn, nghĩa vụ đaọ đức.",
                  "Nghĩa vụ pháp lý, nghĩa vụ kinh tế, nghĩa vụ nhân văn, nghĩa vụ đạo đức.",
                  "Nghĩa vụ kinh tế, nghĩa vụ pháp lý, nghĩa vụ đạo đức, nghĩa vụ nhân văn."
                ],
                "ans": 3,
                "exp": "Theo tháp Carroll, thứ tự từ nền tảng lên đỉnh tháp là: Kinh tế (phải làm) -> Pháp lý (bắt buộc làm) -> Đạo đức (nên làm) -> Nhân văn / Từ thiện (mong muốn làm)."
              }
            ]
          }
        }
      },
      "internet-elearning": {
        "name": "Nhập môn Internet và E-Learning",
        "lessons": {
          "chuong-1": {
            "title": "Chương 1: Tổng quan về Internet (15 câu)",
            "questions": [
              {
                "q": "Ký tự nào được sử dụng để ngăn cách các thành phần trong tên miền Internet?",
                "opts": [
                  "Ký tự chấm.",
                  "Ký tự tab.",
                  "Ký tự phẩy.",
                  "Ký tự chấm phẩy."
                ],
                "ans": 0,
                "exp": "Các thành phần trong tên miền (nhãn tên miền) được phân cách nhau bằng dấu chấm (.) (ví dụ: google.com, edu.vn)."
              },
              {
                "q": "Phương thức kết nối mạng Internet nào không cần sử dụng cáp mạng?",
                "opts": [
                  "Phương thức sử dụng modem qua đường truyền điện thoại.",
                  "Phương thức sử dụng kênh truyền qua sóng wifi.",
                  "Phương thức sử dụng kênh truyền ADSL.",
                  "Phương thức sử dụng kênh truyền Leased Line."
                ],
                "ans": 1,
                "exp": "Wifi là công nghệ truyền thông không dây sử dụng sóng vô tuyến, không dùng cáp mạng vật lý nối đến thiết bị người dùng."
              },
              {
                "q": "Phân loại theo khoảng cách địa lý thì mạng máy tính có bao nhiêu loại?",
                "opts": [
                  "5",
                  "4",
                  "3",
                  "2"
                ],
                "ans": 1,
                "exp": "Theo khoảng cách địa lý, mạng máy tính thường được phân thành 4 loại cơ bản: LAN (Cục bộ), MAN (Đô thị), WAN (Diện rộng) và GAN (Toàn cầu)."
              },
              {
                "q": "Tên miền nào dưới đây là không hợp lệ?",
                "opts": [
                  "hou.edu&vn",
                  "topica.edu.vn",
                  "microsoft.com",
                  "google.com"
                ],
                "ans": 0,
                "exp": "Tên miền Internet chỉ được chứa các ký tự chữ cái (a-z), chữ số (0-9) và dấu gạch nối (-); dấu '&' là ký tự không hợp lệ."
              },
              {
                "q": "Internet được hình thành từ năm 1969, từ một dự án nghiên cứu của Bộ quốc phòng Mỹ. Lúc đó Internet chỉ liên kết 4 địa điểm. Đó là 4 địa điểm nào?",
                "opts": [
                  "UC – Santa Barbara và TĐH Tổng hợp Utah.",
                  "Viện Nghiên cứu Standford, Trường Đại học tổng hợp Utah ở LosAngeles, UC – Santa Barbara và TĐH Cambrige.",
                  "Trường Đại học tổng hợp Standford ở LosAngeles.",
                  "Viện Nghiên cứu Standford, Trường Đại học tổng hợp California ở LosAngeles, UC – Santa Barbara và TĐH Tổng hợp Utah."
                ],
                "ans": 3,
                "exp": "Bốn nút mạng ARPANET đầu tiên (1969) gồm: Viện Nghiên cứu Stanford (SRI), Đại học California tại Los Angeles (UCLA), Đại học California tại Santa Barbara (UCSB) và Đại học Utah."
              },
              {
                "q": "ISP (Internet Service Provider) là gì?",
                "opts": [
                  "Hệ thống cung cấp dịch vụ mạng.",
                  "Hệ thống phân giải tên miền Internet.",
                  "Hệ thống cung cấp địa chỉ IP trên mạng Internet.",
                  "Nhà cung cấp dịch vụ Internet."
                ],
                "ans": 3,
                "exp": "ISP là viết tắt của Internet Service Provider - Tổ chức/Nhà cung cấp dịch vụ truy nhập mạng Internet cho người dùng."
              },
              {
                "q": "Mạng ARPANET dừng hoạt động vào năm nào?",
                "opts": [
                  "1990.",
                  "1993.",
                  "1991.",
                  "1992."
                ],
                "ans": 0,
                "exp": "Mạng ARPANET chính thức ngừng hoạt động và được dỡ bỏ vào năm 1990 khi các mạng thương mại và NSFNET tiếp quản."
              },
              {
                "q": "Cấu trúc của địa chỉ Ipv4 gồm 4 cặp số thập phân và ngăn cách với nhau bởi ký hiệu nào?",
                "opts": [
                  "Dấu phẩy (,).",
                  "Dấu chấm (.).",
                  "Dấu chấm phẩy (;).",
                  "Dấu cách (khoảng trắng)."
                ],
                "ans": 1,
                "exp": "Địa chỉ IPv4 được biểu diễn dưới dạng các số thập phân ngăn cách nhau bởi dấu chấm (.) (ví dụ: 192.168.1.1)."
              },
              {
                "q": "Trong cách biểu diễn địa chỉ Ipv4 được chia thành bao nhiêu nhóm?",
                "opts": [
                  "3",
                  "2",
                  "4",
                  "1"
                ],
                "ans": 2,
                "exp": "Địa chỉ IPv4 có tổng cộng 32 bit, được chia làm 4 nhóm (octet), mỗi nhóm gồm 8 bit (1 byte)."
              },
              {
                "q": "Có bao nhiêu phiên bản của địa chỉ IP?",
                "opts": [
                  "8.",
                  "2.",
                  "3.",
                  "4."
                ],
                "ans": 1,
                "exp": "Địa chỉ IP hiện đang được sử dụng chính thức có 2 phiên bản là IPv4 (32 bit) và IPv6 (128 bit)."
              },
              {
                "q": "Ipv6 được mã hóa bởi bao nhiêu bit?",
                "opts": [
                  "64.",
                  "48.",
                  "32.",
                  "128."
                ],
                "ans": 3,
                "exp": "Địa chỉ IPv6 sử dụng chiều dài 128 bit để khắc phục tình trạng cạn kiệt không gian địa chỉ của IPv4 (32 bit)."
              },
              {
                "q": "Mỗi số thập phân trong địa chỉ IPv4 có giá trị trong khoảng nào?",
                "opts": [
                  "Từ 0 đến 128",
                  "Từ 0 đến 32",
                  "Từ 0 đến 64",
                  "Từ 0 đến 255"
                ],
                "ans": 3,
                "exp": "Mỗi octet gồm 8 bit nhị phân, có thể biểu diễn các giá trị thập phân từ 0 (2^0 - 1) đến 255 (2^8 - 1)."
              },
              {
                "q": "TCP là viết tắt của cụm từ tiếng Anh nào?",
                "opts": [
                  "Transmission Control Protocol",
                  "Telecoms Control Protocol",
                  "Transport Control Protocol",
                  "Transmission Control Provider"
                ],
                "ans": 0,
                "exp": "TCP là viết tắt của Transmission Control Protocol (Giao thức điều khiển truyền vận)."
              },
              {
                "q": "Tiền thân của mạng Internet là mạng ARPANET liên kết 4 địa điểm đầu tiên vào năm nào?",
                "opts": [
                  "1969.",
                  "1970.",
                  "1972.",
                  "1971."
                ],
                "ans": 0,
                "exp": "Năm 1969, mạng ARPANET thử nghiệm kết nối thành công 4 máy tính đầu tiên, đặt nền móng cho Internet ngày nay."
              },
              {
                "q": "Số lượng địa chỉ IPv6 cung cấp gấp bao nhiêu lần số lượng địa chỉ mà IPv4 cung cấp?",
                "opts": [
                  "2^32",
                  "2^96",
                  "2^4",
                  "2^64"
                ],
                "ans": 1,
                "exp": "IPv6 có 2^{128} địa chỉ, IPv4 có 2^{32} địa chỉ. Tỷ lệ gấp: 2^{128} / 2^{32} = 2^{96} lần."
              }
            ]
          },
          "chuong-3": {
            "title": "Chương 3: E-Learning & Dịch vụ Internet (15 câu)",
            "questions": [
              {
                "q": "Để có thể trò chuyện trực tuyến với bạn bè trên Internet bạn sử dụng dịch vụ nào sau đây?",
                "opts": [
                  "Dịch vụ Web",
                  "Dịch vụ Chat",
                  "Dịch vụ diễn đàn",
                  "Dịch vụ thư điện tử"
                ],
                "ans": 1,
                "exp": "Dịch vụ Chat (tin nhắn tức thời) cho phép người dùng trao đổi thông điệp trực tuyến theo thời gian thực."
              },
              {
                "q": "Khẳng định nào đúng về dịch vụ FTP?",
                "opts": [
                  "FTP cho phép truyền tải duy nhất một tệp tin tại một thời điểm.",
                  "FTP Client sẽ quản lý các kết nối và cung cấp dịch vụ tập tin cho các máy trạm.",
                  "FTP Server sẽ quản lý các kết nối và cung cấp dịch vụ tập tin cho các máy trạm.",
                  "FTP là dịch vụ gửi thư điện tử qua mạng Internet."
                ],
                "ans": 2,
                "exp": "FTP hoạt động theo mô hình Client - Server; trong đó máy chủ FTP (FTP Server) quản lý kết nối và cung cấp tệp tin cho các trạm truy cập."
              },
              {
                "q": "Dịch vụ Telnet trên mạng Internet là gì?",
                "opts": [
                  "Là dịch vụ truyền các tệp từ máy tính này đến máy tính khác trên mạng Internet.",
                  "Là dịch vụ giúp người dùng tìm kiếm thông tin trên Internet bằng bảng chọn.",
                  "Là dịch vụ thiết lập sự liên hệ giữa MTĐT của ta với một máy chủ ở xa để người dùng có thể sử dụng khả năng xử lý của máy chủ đó.",
                  "Là dịch vụ Internet có khả năng duy trì hàng ngàn nhóm tin với sự tham gia của hàng triệu người."
                ],
                "ans": 2,
                "exp": "Telnet là giao thức đăng nhập từ xa, cho phép kết nối máy tính trạm với máy chủ để thực thi lệnh trực tiếp trên máy chủ."
              },
              {
                "q": "Nam đã xây dựng xong một website và đã thuê dịch vụ Hosting, để đưa các dữ liệu trang web lên máy chủ, Nam sử dụng dịch vụ nào?",
                "opts": [
                  "Chat.",
                  "Telnet.",
                  "E-mail.",
                  "FTP."
                ],
                "ans": 3,
                "exp": "FTP (File Transfer Protocol) là dịch vụ chuyên dụng phổ biến nhất để tải toàn bộ mã nguồn website lên máy chủ lưu trữ (hosting)."
              },
              {
                "q": "Khi sử dụng Google, trong mục tìm kiếm nâng cao, bạn không thể tìm kiếm theo tiêu chí nào dưới đây?",
                "opts": [
                  "Tìm kiếm theo tên miền.",
                  "Tìm kiếm theo ngữ nghĩa.",
                  "Tìm kiếm theo ngôn ngữ.",
                  "Tìm kiếm theo định dạng tệp."
                ],
                "ans": 1,
                "exp": "Tìm kiếm nâng cao hỗ trợ lọc theo ngôn ngữ, vùng, định dạng file, tên miền/trang web, nhưng không có bộ lọc cố định 'theo ngữ nghĩa'."
              },
              {
                "q": "Mục nào trong cấu trúc của một email mô tả ngắn gọn nội dung của email?",
                "opts": [
                  "Body",
                  "Subject",
                  "CC",
                  "BCC"
                ],
                "ans": 1,
                "exp": "Subject (Tiêu đề thư) dùng để tóm tắt ngắn gọn chủ đề hoặc nội dung chính của email gửi đi."
              },
              {
                "q": "Dịch vụ tải tệp tin được dùng để làm gì?",
                "opts": [
                  "Để thảo luận trực tuyến với bạn học thông qua Internet.",
                  "Để tham gia thảo luận về những nội dung mình quan tâm.",
                  "Để lấy dữ liệu từ trên mạng Internet xuống máy tính của bạn.",
                  "Để xem các trang tài liệu siêu văn bản (trang web) trên Internet."
                ],
                "ans": 2,
                "exp": "Tải tệp tin (download) là quá trình sao chép, lưu dữ liệu từ một máy chủ trên mạng về máy tính cá nhân."
              },
              {
                "q": "Trong quá trình duyệt Web, bạn không thể thực hiện thao tác nào dưới đây?",
                "opts": [
                  "Đưa trang Web vào danh mục các trang yêu thích.",
                  "In trang Web.",
                  "Chỉnh sửa nội dung trang Web.",
                  "Lưu trang Web"
                ],
                "ans": 2,
                "exp": "Trình duyệt của người dùng chỉ nhận và hiển thị mã HTML/CSS/JS, người duyệt web không có quyền chỉnh sửa nội dung gốc lưu trên máy chủ web."
              },
              {
                "q": "Anh Minh muốn gửi một bức thư điện tử tới chị Nga. Anh Minh sẽ điền địa chỉ email của chị Nga vào trong ô nào dưới đây?",
                "opts": [
                  "To",
                  "BCC",
                  "Subject",
                  "CC"
                ],
                "ans": 0,
                "exp": "Ô 'To' (Tới / Đến) là trường bắt buộc để nhập địa chỉ của người nhận thư chính thức."
              },
              {
                "q": "Khẳng định nào về dịch vụ E-mail là đúng?",
                "opts": [
                  "Một người chỉ gửi được thư cho một người duy nhất.",
                  "Một người không thể gửi thư cho nhiều người.",
                  "Một người có thể gửi thư cho nhiều người cùng một lúc.",
                  "Không thể gửi tệp tin kèm theo thư điện tử."
                ],
                "ans": 2,
                "exp": "Một bức thư điện tử có thể được gửi đồng thời cho nhiều địa chỉ cùng lúc thông qua các ô To, CC hoặc BCC."
              },
              {
                "q": "Khi sử dụng Google, nếu bạn muốn tìm kiếm các văn bản có đuôi .doc mà có chứa từ e-learning thì trong ô tìm kiếm bạn gõ vào từ khóa nào sau đây?",
                "opts": [
                  "e-learning filetype:doc",
                  "e-learning fileformat:doc",
                  "e-learning type:doc",
                  "e-learning file:doc"
                ],
                "ans": 0,
                "exp": "Cú pháp tìm kiếm theo định dạng tệp trên Google là `filetype:<đuôi_file>` (ví dụ: `e-learning filetype:doc`)."
              },
              {
                "q": "Khi sử dụng Internet Explorer, nút biểu tượng Ngôi sao vàng có chức năng gì?",
                "opts": [
                  "Chuyển tới trang khởi động mặc định (trang nhà).",
                  "In nội dung trang web đang hiển thị.",
                  "Mở cửa sổ mới chứa danh sách các trang web bạn đã từng truy nhập.",
                  "Mở một cửa sổ phía bên trái trình duyệt chứa danh sách tiêu đề các trang web mà bạn yêu thích."
                ],
                "ans": 3,
                "exp": "Biểu tượng ngôi sao vàng trên Internet Explorer là biểu tượng của Favorites Center, mở bảng danh sách các trang web đã đánh dấu yêu thích."
              },
              {
                "q": "Người dùng tự cấu hình dịch vụ theo yêu cầu là tính chất của loại dịch vụ nào?",
                "opts": [
                  "Web",
                  "Telnet",
                  "Hosting",
                  "Cloud"
                ],
                "ans": 3,
                "exp": "Đặc trưng cốt lõi của điện toán đám mây (Cloud Computing) theo chuẩn NIST là 'On-demand self-service' - người dùng có thể tự cấu hình và sử dụng tài nguyên theo nhu cầu."
              },
              {
                "q": "Dịch vụ tải tệp tin được dùng để làm gì? (câu hỏi củng cố)",
                "opts": [
                  "Để lấy dữ liệu từ trên mạng Internet xuống máy tính của bạn.",
                  "Để tham gia thảo luận về những nội dung mình quan tâm.",
                  "Để xem các trang tài liệu siêu văn bản (trang web) trên Internet.",
                  "Để thảo luận trực tuyến với bạn học thông qua Internet."
                ],
                "ans": 0,
                "exp": "Mục đích chính của tải tệp tin là truyền và lưu trữ bản sao dữ liệu từ máy chủ mạng xuống thiết bị của người dùng."
              },
              {
                "q": "Dịch vụ cho phép người sử dụng thuê các tài nguyên phần cứng, phần mềm qua mạng Internet và dễ dàng tăng/giảm tài nguyên mà không cần sự hỗ trợ của nhà cung cấp là dịch vụ nào?",
                "opts": [
                  "Hosting.",
                  "Email.",
                  "Telnet.",
                  "Cloud."
                ],
                "ans": 3,
                "exp": "Dịch vụ Cloud (Điện toán đám mây - IaaS/PaaS/SaaS) cung cấp tính năng co giãn linh hoạt (Rapid elasticity) cho phép người dùng tự động tăng/giảm tài nguyên nhanh chóng."
              }
            ]
          }
        }
      }
    }
  },
  "y-khoa": {
    "name": "Y Khoa",
    "subjects": {
      "nhi-khoa": {
        "name": "Khoa Nhi",
        "lessons": {
          "chan-doan-xu-tri-nang": {
            "title": "Bài 1: Chẩn đoán & xử trí trẻ bệnh nặng (3 câu)",
            "questions": [
              {
                "q": "Câu 1\nĐánh giá bệnh nhân cấp cứu theo trình tự ABCD cần thực hiện bước nào đầu tiên?",
                "opts": [
                  "Khai thông và kiểm soát đường thở",
                  "Đánh giá và hồi sức tuần hoàn",
                  "Hỗ trợ thông khí và cung cấp oxy",
                  "Khảo sát tri giác và thần kinh"
                ],
                "ans": 0,
                "exp": "Tiếp cận bệnh nhân nặng cấp cứu luôn bắt đầu bằng việc kiểm soát và làm thông thoáng đường thở (Airway) trước khi đánh giá các bước tiếp theo."
              },
              {
                "q": "Câu 2\nTrẻ đang truyền kháng sinh xuất hiện mày đay, ban đỏ, phù mi mắt. Triệu chứng nào sau đây xác định trẻ rơi vào sốc phản vệ (độ III)?",
                "opts": [
                  "Sốt cao rét run, da tái lạnh kèm nổi vân tím toàn thân",
                  "Khó thở thanh quản, tụt huyết áp hoặc rối loạn tri giác",
                  "Thở rít ngắt quãng, nhịp thở nhanh, giảm nhẹ SpO2",
                  "Đau quặn bụng dữ dội, nôn trớ thức ăn và tiêu chảy"
                ],
                "ans": 1,
                "exp": "Phản vệ độ III (nguy kịch) đặc trưng bởi tụt huyết áp, co thắt phế quản/thanh quản dữ dội, rối loạn cơ tròn hoặc ngất/hôn mê."
              },
              {
                "q": "Câu 3\nTrẻ 2 tuổi vào viện li bì, da tái, thời gian đổ đầy mao mạch (CRT) > 3 giây, thở co kéo mạnh. Trình tự xử trí ban đầu ưu tiên là",
                "opts": [
                  "Cho thở oxy dòng cao, đặt đường truyền tĩnh mạch và thử đường huyết mao mạch",
                  "Khai thông đường thở, hỗ trợ thông khí/oxy rồi mới thiết lập đường truyền tuần hoàn",
                  "Đặt ống thông dạ dày giảm áp, theo dõi sát nước tiểu và làm khí máu động mạch",
                  "Chụp X-quang phổi cấp cứu, lập hai đường truyền ngoại vi và bù dịch tức thì"
                ],
                "ans": 1,
                "exp": "Luôn tuân thủ nguyên tắc ABC: Khai thông đường thở (A)  Cung cấp oxy/hỗ trợ hô hấp (B)  Thiết lập đường truyền và hồi sức tuần hoàn (C)."
              }
            ]
          },
          "sang-loc-so-sinh-nguy-co": {
            "title": "Bài 2: Sàng lọc sơ sinh có nguy cơ (3 câu)",
            "questions": [
              {
                "q": "Câu 4\nBé gái sinh 36 tuần, nặng 3000g, sau đẻ khóc to. Siêu âm trước sinh ghi nhận đa ối và quai ruột giãn. Thái độ xử trí đúng đắn nhất là",
                "opts": [
                  "Cho trẻ về nằm với mẹ, sớm cho bú sữa non và theo dõi phân su",
                  "Cho nhịn ăn hoàn toàn rồi chuyển ngay đến chuyên khoa ngoại nhi",
                  "Giữ lại phòng sơ sinh theo dõi sát cho đến khi nôn dịch xanh rêu",
                  "Đặt ống thông dạ dày giải áp rồi chuyển đến chuyên khoa ngoại nhi"
                ],
                "ans": 3,
                "exp": "Siêu âm thai có đa ối và giãn quai ruột gợi ý tắc ruột bẩm sinh; cần cho nhịn ăn, đặt sonde dạ dày dẫn lưu dịch để tránh nguy cơ nôn trào ngược gây hít sặc trong khi chuyển viện."
              },
              {
                "q": "Câu 5\nSau sinh bao lâu không thấy trẻ bài xuất phân su thì được kết luận là chậm ỉa phân su?",
                "opts": [
                  "Sau 6 giờ",
                  "Sau 12 giờ",
                  "Sau 24 giờ",
                  "Sau 48 giờ"
                ],
                "ans": 2,
                "exp": "Trên 90% trẻ sơ sinh đủ tháng bài xuất phân su trong 24 giờ đầu. Mốc 24 giờ là giới hạn chuẩn để tầm soát các dị tật tắc nghẽn đường tiêu hóa."
              },
              {
                "q": "Câu 6\nBé trai 3 ngày tuổi chưa ỉa phân su, nôn trớ, bụng trướng. Thăm khám thấy dấu hiệu nào sau đây hướng tới dị tật teo trực tràng?",
                "opts": [
                  "Quan sát thấy lỗ hậu môn màng đáy bình thường",
                  "Đặt ống thông hậu môn chỉ vào được khoảng 2 cm và không có phân",
                  "Đặt ống thông hậu môn vào sâu dễ dàng nhưng không thấy phân su",
                  "Đặt ống thông hậu môn vào sâu và thấy dịch phân su tháo ra nhiều"
                ],
                "ans": 1,
                "exp": "Đặt sonde mềm bị chặn ở độ sâu khoảng 2 cm và không có phân chứng tỏ ống trực tràng bị teo hoặc bít tắc cơ học."
              }
            ]
          },
          "ngung-tuan-hoan-tre-em": {
            "title": "Bài 3: Cấp cứu ngừng tuần hoàn trẻ em (3 câu)",
            "questions": [
              {
                "q": "Câu 7\nTần số ép tim khuyến cáo ở trẻ sơ sinh và trẻ nhỏ trong cấp cứu ngừng tuần hoàn là",
                "opts": [
                  "100 - 120 lần/phút",
                  "80 - 100 lần/phút",
                  "60 - 80 lần/phút",
                  "120 - 140 lần/phút"
                ],
                "ans": 0,
                "exp": "Hướng dẫn hồi sinh tim phổi chuẩn khuyến cáo tần số ép tim từ 100 đến 120 lần/phút đối với mọi lứa tuổi."
              },
              {
                "q": "Câu 8\nThời gian gián đoạn ép tim để kiểm tra nhịp hoặc thông khí tối đa không được vượt quá",
                "opts": [
                  "5 giây",
                  "10 giây",
                  "15 giây",
                  "20 giây"
                ],
                "ans": 1,
                "exp": "Hạn chế tối đa ngắt quãng ép tim để duy trì áp lực tưới máu mạch vành và não; thời gian gián đoạn phải dưới 10 giây."
              },
              {
                "q": "bóp bóng ở trẻ em ngoài giai đoạn sơ sinh khi có HAI người cấp cứu là",
                "opts": [
                  "30 : 2",
                  "15 : 2",
                  "3 : 1",
                  "5 : 1"
                ],
                "ans": 1,
                "exp": "Đối với trẻ ngoài sơ sinh, khi có 1 người cấp cứu áp dụng tỷ lệ 30:2; khi có từ 2 nhân viên y tế trở lên áp dụng tỷ lệ 15:2."
              }
            ]
          },
          "hoi-suc-so-sinh-phong-sinh": {
            "title": "Bài 4: Hồi sức sơ sinh tại phòng sinh (3 câu)",
            "questions": [
              {
                "q": "bóp bóng chuẩn trong hồi sức sơ sinh ngừng tuần hoàn tại phòng sinh (theo NRP) là",
                "opts": [
                  "15 : 2",
                  "3 : 1",
                  "30 : 2",
                  "5 : 1"
                ],
                "ans": 1,
                "exp": "Ngừng tim ở trẻ sơ sinh chủ yếu do nguyên nhân ngạt, do đó phác đồ NRP quy định tỷ lệ là 3 ép tim : 1 bóp bóng (đảm bảo 90 ép tim và 30 nhịp thở mỗi phút)."
              },
              {
                "q": "Câu 11\nNồng độ oxy khởi đầu được khuyến cáo khi hồi sức cho trẻ sơ sinh đủ tháng là",
                "opts": [
                  "Khí phòng (21% oxy)",
                  "Oxy nguyên chất (100%)",
                  "Oxy nồng độ trung bình (40%)",
                  "Oxy nồng độ cao (60%)"
                ],
                "ans": 0,
                "exp": "Hồi sức trẻ đủ tháng bắt đầu bằng khí phòng (21%) để hạn chế các tổn thương mô do gốc tự do oxy hóa."
              },
              {
                "q": "Câu 12\nTình trạng suy hô hấp nào ở trẻ sơ sinh tại phòng sinh thường có chỉ định đặt ống nội khí quản sớm?",
                "opts": [
                  "Cơn thở nhanh thoáng qua sơ sinh",
                  "Chậm tiêu dịch phổi sau sinh mổ",
                  "Hội chứng hít phải phân su đặc",
                  "Viêm phổi bẩm sinh mức độ nhẹ"
                ],
                "ans": 2,
                "exp": "Trẻ hít phải phân su đặc quánh gây tắc nghẽn cơ học đường thở nặng nề cần đặt nội khí quản sớm để kiểm soát hô hấp và hút sạch dịch đờm dãi.\nBạn hãy kiểm tra phần trên. Khi sẵn sàng, hãy gõ \"tiếp tục\" để tôi gửi phần tiếp theo (từ Bài 5 Nhi khoa trở đi).\nDưới đây là Phần 2: Nhi khoa (Bài 5 đến Bài 11, gồm Câu 13 – Câu 33). Các đáp án gây nhiễu đã được cân bằng lại về độ dài, cấu trúc câu và mức độ chuyên môn tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "soc-o-tre-em": {
            "title": "Bài 5: Sốc ở trẻ em (3 câu)",
            "questions": [
              {
                "q": "Câu 13\nTrong hồi sức dịch ban đầu ở trẻ sốc nhiễm khuẩn, hành động nào sau đây KHÔNG được khuyến cáo?",
                "opts": [
                  "Truyền dung dịch keo cao phân tử làm dịch đầu tay",
                  "Thiết lập ngay đường truyền tĩnh mạch ngoại vi lớn",
                  "Cung cấp oxy lưu lượng cao qua mặt nạ có túi dự trữ",
                  "Khởi động sớm thuốc vận mạch Adrenaline khi có chỉ định"
                ],
                "ans": 0,
                "exp": "Hồi sức dịch ban đầu trong sốc nhiễm khuẩn ở trẻ em luôn ưu tiên dung dịch tinh thể đẳng trương; không dùng dịch keo/cao phân tử làm dịch đầu tay do làm tăng nguy cơ tổn thương thận cấp và rối loạn đông máu."
              },
              {
                "q": "Câu 14\nTrẻ vẫn còn dấu hiệu sốc sau khi đã được bù đủ dịch tinh thể (40 - 60 ml/kg), bước xử trí tiếp theo là",
                "opts": [
                  "Tiếp tục bù dịch tinh thể đẳng trương nhanh không hạn chế liều lượng",
                  "Dùng ngay thuốc vận mạch/tăng co bóp cơ tim và đánh giá chỉ định truyền máu",
                  "Đặt trẻ nằm đầu cao, thở oxy áp lực dương và hạn chế dịch tối đa",
                  "Tiêm tĩnh mạch thuốc lợi tiểu quai để phòng ngừa quá tải tuần hoàn"
                ],
                "ans": 1,
                "exp": "Khi trẻ rơi vào tình trạng sốc kháng dịch, cần dùng ngay thuốc vận mạch hoặc tăng co bóp cơ tim (Adrenaline/Noradrenaline) và cân nhắc truyền chế phẩm máu nếu có thiếu máu kèm theo."
              },
              {
                "q": "Câu 15\nDấu hiệu lâm sàng sớm và nhạy nhất báo hiệu tình trạng sốc còn bù ở trẻ em là",
                "opts": [
                  "Huyết áp tụt sâu so với bách phân vị theo tuổi",
                  "Nhịp tim nhanh theo tuổi kèm tưới máu ngoại vi giảm",
                  "Trẻ hôn mê sâu và mất hoàn toàn tri giác",
                  "Vô niệu hoàn toàn kéo dài trên 6 giờ"
                ],
                "ans": 1,
                "exp": "Ở trẻ em, tụt huyết áp là dấu hiệu muộn (sốc mất bù). Dấu hiệu sớm nhất của sốc còn bù là nhịp tim nhanh và thời gian đổ đầy mao mạch (CRT) kéo dài cùng đầu chi mát."
              }
            ]
          },
          "nhiem-khuan-so-sinh": {
            "title": "Bài 6: Nhiễm khuẩn sơ sinh (3 câu)",
            "questions": [
              {
                "q": "Câu 16\nPhác đồ kháng sinh kinh nghiệm đầu tay được khuyến cáo trong điều trị nhiễm khuẩn/viêm phổi sơ sinh sớm là",
                "opts": [
                  "Cephalosporin thế hệ 1 phối hợp với Macrolide",
                  "Amoxicillin liều cao dùng đường tĩnh mạch đơn thuần",
                  "Ampicillin phối hợp với một Aminoglycoside (Gentamicin)",
                  "Ciprofloxacin phối hợp kháng sinh nhóm Glycopeptide"
                ],
                "ans": 2,
                "exp": "Ampicillin kết hợp Gentamicin có phổ tác dụng bao phủ được cả Liên cầu nhóm B (GBS), Listeria monocytogenes và trực khuẩn Gram âm đường ruột E. coli."
              },
              {
                "q": "Câu 17\nXét nghiệm cận lâm sàng nào có giá trị cao nhất trong chẩn đoán sớm và theo dõi nhiễm khuẩn huyết ở trẻ sơ sinh?",
                "opts": [
                  "Định lượng nồng độ CRP huyết thanh",
                  "Định lượng nồng độ Procalcitonin (PCT) máu",
                  "Tổng số lượng và thể tích khối hồng cầu",
                  "Định lượng nồng độ Bilirubin máu toàn phần"
                ],
                "ans": 1,
                "exp": "Procalcitonin (PCT) tăng rất nhanh sau khi tiếp xúc với nội độc tố vi khuẩn (từ 2 - 4 giờ) nên có độ nhạy và giá trị chẩn đoán sớm nhiễm khuẩn huyết tốt hơn so với CRP."
              },
              {
                "q": "Câu 18\nXét nghiệm nào giúp phát hiện tổn thương phổi phối hợp trong bệnh cảnh nhiễm trùng sơ sinh?",
                "opts": [
                  "Định lượng Bilirubin máu toàn phần và trực tiếp",
                  "Chụp X-quang tim phổi thẳng tại giường",
                  "Điện giải đồ máu và dự trữ kiềm huyết tương",
                  "Đo nồng độ đường huyết mao mạch ngắt quãng"
                ],
                "ans": 1,
                "exp": "Chụp X-quang tim phổi giúp phát hiện tổn thương phổi phối hợp như thâm nhiễm phế nang, viêm phổi hít hoặc xẹp phổi trong hội chứng nhiễm trùng sơ sinh."
              }
            ]
          },
          "viem-phoi-tre-em": {
            "title": "Bài 7: Viêm phổi ở trẻ em (3 câu)",
            "questions": [
              {
                "q": "Câu 19\nBệnh lý đường hô hấp thường gặp nhất gây suy hô hấp tiến triển nặng ở trẻ sơ sinh non tháng là",
                "opts": [
                  "Chậm tiêu dịch phổi sau sinh mổ",
                  "Viêm đường hô hấp trên xuất tiết",
                  "Bệnh màng trong do thiếu Surfactant",
                  "Cơn ngừng thở sinh lý ở trẻ non tháng"
                ],
                "ans": 2,
                "exp": "Bệnh màng trong xảy ra chủ yếu ở trẻ đẻ non do tế bào phế nang type II chưa hoàn thiện dẫn đến thiếu hụt Surfactant gây xẹp phổi tiến triển lan tỏa."
              },
              {
                "q": "Câu 20\nTheo hướng dẫn của WHO, ngưỡng thở nhanh được xác định ở trẻ từ 2 tháng đến 11 tháng tuổi là",
                "opts": [
                  "Nhịp thở  60 lần/phút",
                  "Nhịp thở  50 lần/phút",
                  "Nhịp thở  40 lần/phút",
                  "Nhịp thở  30 lần/phút"
                ],
                "ans": 1,
                "exp": "Ngưỡng thở nhanh của WHO: trẻ < 2 tháng tuổi là  60 lần/phút; trẻ 2 - 11 tháng là  50 lần/phút; trẻ 1 - 5 tuổi là  40 lần/phút."
              },
              {
                "q": "Câu 21\nDấu hiệu lâm sàng có giá trị nhất để phân loại \"Viêm phổi NẶNG\" cần nhập viện ở trẻ dưới 5 tuổi là",
                "opts": [
                  "Sốt cao liên tục trên 39°C không hạ",
                  "Ho thành cơn kéo dài kèm theo nôn trớ",
                  "Rút lõm lồng ngực rõ rệt khi thở vào",
                  "Nghe phổi có tiếng ran ẩm nhỏ hạt rải rác"
                ],
                "ans": 2,
                "exp": "Ở trẻ dưới 5 tuổi mắc viêm phổi, sự xuất hiện của dấu hiệu rút lõm lồng ngực là tiêu chuẩn quan trọng để xếp vào phân loại viêm phổi nặng cần nhập viện điều trị."
              }
            ]
          },
          "viem-tieu-phe-quan-tre-em": {
            "title": "Bài 8: Viêm tiểu phế quản (3 câu)",
            "questions": [
              {
                "q": "Câu 22\nĐặc điểm dịch tễ và bệnh sinh nổi bật của khò khè ở trẻ nhỏ dưới 3 tuổi là",
                "opts": [
                  "Phần lớn có căn nguyên do nhiễm virus đường hô hấp",
                  "Hầu hết là biểu hiện của cơn hen phế quản ác tính",
                  "Bắt buộc phải điều trị bằng kháng sinh phổ rộng sớm",
                  "Luôn có đáp ứng cắt cơn tốt với thuốc giãn phế quản"
                ],
                "ans": 0,
                "exp": "Phần lớn các đợt khò khè đầu đời ở trẻ nhũ nhi do nhiễm virus gây viêm tiểu phế quản cấp, phổ biến nhất là virus hợp bào hô hấp (RSV)."
              },
              {
                "q": "Câu 23\nThời gian cài đặt dòng kích hoạt (flow trigger) nhịp thở máy ở trẻ trên 2 tuổi thông thường là",
                "opts": [
                  "1 - 2 lít/phút",
                  "0.8 - 2 lít/phút",
                  "0.5 - 1 lít/phút",
                  "2 - 3 lít/phút"
                ],
                "ans": 2,
                "exp": "Cài đặt trigger dòng nhạy từ 0.5 - 1 lít/phút giúp máy thở nhận biết nỗ lực tự thở của trẻ nhanh chóng, từ đó giảm công thở cho bệnh nhi."
              },
              {
                "q": "Câu 24\nBiện pháp điều trị nền tảng ở trẻ viêm tiểu phế quản cấp mức độ nhẹ và trung bình là",
                "opts": [
                  "Dùng kháng sinh nhóm Cephalosporin thế hệ 3 đường uống sớm",
                  "Khí dung dung dịch Corticosteroid liều cao kéo dài nhiều ngày",
                  "Khai thông đường thở, bù đủ dịch - dinh dưỡng và oxy khi cần",
                  "Dùng thuốc kháng histamin kết hợp giảm ho tác dụng trung ương"
                ],
                "ans": 2,
                "exp": "Viêm tiểu phế quản là bệnh tự giới hạn do virus; các can thiệp như kháng sinh, corticoid không được dùng thường quy. Trọng tâm là hút rửa thông thoáng mũi họng, đảm bảo dịch thể, dinh dưỡng và hỗ trợ oxy nếu SpO2 < 92%."
              }
            ]
          },
          "tieu-chay-cap-tre-em": {
            "title": "Bài 9: Tiêu chảy cấp ở trẻ em (3 câu)",
            "questions": [
              {
                "q": "Câu 25\nĐặc điểm phân điển hình ở bệnh nhân mắc tiêu chảy do lỵ trực khuẩn (Shigella) là",
                "opts": [
                  "Phân toàn nước đục trắng như nước vo gạo, mùi tanh nồng",
                  "Phân có nhầy lẫn máu, đi nhiều lần kèm mót rặn đau quặn",
                  "Phân sống, lỏng phân nát kéo dài kèm theo trướng bụng mạn",
                  "Phân sệt vàng nhạt, không có chất nhầy và không có máu mủ"
                ],
                "ans": 1,
                "exp": "Hội chứng lỵ do Shigella đặc trưng bởi phản ứng viêm loét đại tràng: sốt, đau quặn bụng, mót rặn và phân ít nhưng có nhiều chất nhầy lẫn máu."
              },
              {
                "q": "\"Mắt trũng\" và \"Uống nước háo hức/khát nước\". Trẻ được phân loại mất nước ở mức độ nào?",
                "opts": [
                  "Không mất nước (điều trị theo Phác đồ A tại nhà)",
                  "Có mất nước (bù dịch bằng Oresol theo Phác đồ B)",
                  "Mất nước nặng (bù dịch tĩnh mạch theo Phác đồ C)",
                  "Sốc giảm thể tích do mất nước điện giải nặng"
                ],
                "ans": 1,
                "exp": "Khi có từ 2 dấu hiệu trở lên trong nhóm: kích thích/vật vã, mắt trũng, uống nước háo hức, nếp véo da mất chậm thì trẻ được xếp vào mức độ \"Có mất nước\" (Phác đồ B)."
              },
              {
                "q": "Câu 27\nLiều lượng và thời gian bổ sung kẽm (Zinc) trong điều trị tiêu chảy cấp ở trẻ trên 6 tháng tuổi là",
                "opts": [
                  "5 mg/ngày liên tục trong 5 ngày",
                  "10 mg/ngày liên tục trong 7 ngày",
                  "20 mg/ngày liên tục trong 10 - 14 ngày",
                  "50 mg/ngày liên tục trong 30 ngày"
                ],
                "ans": 2,
                "exp": "Bổ sung kẽm 10 - 14 ngày giúp phục hồi niêm mạc ruột và tăng miễn dịch. Trẻ < 6 tháng dùng 10 mg/ngày; trẻ  6 tháng dùng 20 mg/ngày."
              }
            ]
          },
          "dau-bung-tre-em": {
            "title": "Bài 10: Đau bụng ở trẻ em (3 câu)",
            "questions": [
              {
                "q": "Câu 28\nChỉ định và chống chỉ định điều trị tháo lồng bằng hơi trong lồng ruột cấp ở trẻ nhũ nhi là",
                "opts": [
                  "Luôn bơm hơi tháo lồng bất kể thời gian đến viện và tình trạng ổ bụng",
                  "Chỉ định bơm hơi khi đến sớm; chống chỉ định khi có viêm phúc mạc",
                  "Luôn phẫu thuật mở bụng ngay từ đầu cho mọi lứa tuổi bị lồng ruột",
                  "Chỉ định dùng thuốc giảm đau giãn cơ theo dõi trước khi can thiệp hơi"
                ],
                "ans": 1,
                "exp": "Tháo lồng bằng hơi là lựa chọn hàng đầu nếu trẻ đến sớm. Khi trẻ đến muộn (> 48 giờ) hoặc đã có hoại tử ruột, thủng ruột, viêm phúc mạc thì tuyệt đối chống chỉ định bơm hơi vì nguy cơ vỡ ruột."
              },
              {
                "q": "Câu 29\nDấu hiệu lâm sàng quan trọng nhất khẳng định khối lồng ruột đã được tháo hoàn toàn sau khi bơm hơi là",
                "opts": [
                  "Bụng trẻ trướng hơi đều khắp các vùng",
                  "Nắn bụng không còn sờ thấy khối lồng ruột",
                  "Thân nhiệt của trẻ hạ về bình thường ngay",
                  "Áp lực đồng hồ máy bơm hơi tiếp tục tăng"
                ],
                "ans": 1,
                "exp": "Khi tháo lồng thành công, khám bụng không còn sờ thấy khối lồng, kèm theo áp lực đồng hồ tụt đột ngột và hơi tràn sang ruột non."
              },
              {
                "q": "Câu 30\nBé trai 12 tháng tuổi đến viện vì khóc thét từng cơn, nôn thức ăn và đi ngoài phân lẫn nhầy máu. Chẩn đoán lâm sàng đầu tiên nghĩ tới là",
                "opts": [
                  "Rối loạn tiêu hóa cấp do thức ăn lạ",
                  "Viêm ruột thừa cấp thể nhiễm độc",
                  "Viêm tụy cấp thể phù nề xuất huyết",
                  "Lồng ruột cấp tính ở trẻ nhũ nhi"
                ],
                "ans": 3,
                "exp": "Tam chứng kinh điển của lồng ruột ở trẻ nhũ nhi gồm: khóc thét từng cơn do đau bụng quặn, nôn mửa và đi ngoài phân nhầy máu."
              }
            ]
          },
          "tre-co-giat": {
            "title": "Bài 11: Tiếp cận trẻ co giật (3 câu)",
            "questions": [
              {
                "q": "Câu 31\nKhi tiếp nhận trẻ đang trong cơn co giật cấp tính, hành động nào sau đây là KHÔNG phù hợp?",
                "opts": [
                  "Đặt trẻ nằm nghiêng an toàn và khai thông đường thở",
                  "Đo nhanh nồng độ đường huyết mao mạch tại giường",
                  "Đưa trẻ đi ghi điện não đồ cấp cứu ngay lập tức",
                  "Dùng thuốc cắt cơn co giật theo đúng phác đồ cấp cứu"
                ],
                "ans": 2,
                "exp": "Khi trẻ đang co giật, ưu tiên cấp bách là kiểm soát đường thở, thở oxy, kiểm tra đường máu và dùng thuốc cắt cơn; điện não đồ không phải là thăm dò cấp cứu ngay trong cơn giật."
              },
              {
                "q": "Câu 32\nLiều Diazepam tiêm tĩnh mạch chậm thông thường trong cắt cơn co giật ở trẻ em là",
                "opts": [
                  "0.75 mg/kg",
                  "0.25 mg/kg",
                  "1.00 mg/kg",
                  "0.05 mg/kg"
                ],
                "ans": 1,
                "exp": "Liều chuẩn Diazepam tiêm tĩnh mạch chậm ở trẻ em là 0.2 - 0.3 mg/kg (trung bình khoảng 0.25 mg/kg, tối đa 10 mg/lần)."
              },
              {
                "q": "Câu 33\nThời gian tối đa tế bào não có thể chịu đựng được tình trạng thiếu oxy hoàn toàn trước khi tổn thương không hồi phục là",
                "opts": [
                  "Dưới 30 giây",
                  "Từ 1 – 3 phút",
                  "Từ 4 – 5 phút",
                  "Từ 5 – 8 phút"
                ],
                "ans": 2,
                "exp": "Tế bào não rất nhạy cảm với thiếu oxy; sau 4 - 5 phút thiếu oxy hoàn toàn, các tế bào thần kinh bắt đầu thoái hóa và chịu tổn thương không hồi phục.\nKhi bạn đã rà soát xong, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Nội khoa Tim mạch: Bài 1 đến Bài 4).\nDưới đây là Phần 3: Nội khoa Tim mạch (Bài 1 đến Bài 4, gồm Câu 1 – Câu 20). Các đáp án gây nhiễu đã được điều chỉnh lại độ dài, văn phong và mức độ chi tiết tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "tim-mach": {
        "name": "Khoa Tim mạch",
        "lessons": {
          "mach-vanh-cap": {
            "title": "Bài 1: Hội chứng động mạch vành cấp (5 câu)",
            "questions": [
              {
                "q": "Câu 1\nTriệu chứng lâm sàng điển hình nhất của hội chứng động mạch vành cấp là",
                "opts": [
                  "Đau ngực sau xương ức kiểu bóp nghẹt, lan cằm/tay trái, kéo dài > 20 phút không đỡ khi nghỉ",
                  "Đau nhói ngực như dao đâm, tăng lên rõ khi hít sâu, ho mạnh hoặc thay đổi tư thế đột ngột",
                  "Đau tức âm ỉ vùng hạ sườn phải, lan chéo ra sau lưng kèm theo sốt cao và vàng da niêm mạc",
                  "Đau rát bỏng rát sau xương ức xuất hiện ngay sau ăn no, tăng khi cúi người và kèm ợ chua"
                ],
                "ans": 0,
                "exp": "Cơn đau thắt ngực do thiếu máu cơ tim cấp điển hình có cảm giác đè nặng, siết nghẹt sau xương ức lan lên cằm hoặc tay trái, kéo dài trên 20 phút và không giảm khi nghỉ ngơi hay dùng nitrate ngậm."
              },
              {
                "q": "Câu 2\nXét nghiệm cận lâm sàng cần làm ngay trong vòng 10 phút đầu khi tiếp cận người bệnh nghi ngờ hội chứng vành cấp là",
                "opts": [
                  "Men tim Troponin I hoặc Troponin T siêu nhạy",
                  "Siêu âm Doppler tim cấp cứu qua thành ngực",
                  "Điện tâm đồ chuẩn 12 chuyển đạo tại giường",
                  "Chụp X-quang tim phổi thẳng cấp cứu tại chỗ"
                ],
                "ans": 2,
                "exp": "Điện tâm đồ 12 chuyển đạo phải được ghi và phân tích trong 10 phút đầu để phân loại ngay là STEMI hay NSTE-ACS, từ đó kích hoạt chiến lược tái tưới máu kịp thời."
              },
              {
                "q": "Câu 3\nChỉ dấu sinh học (biomarker) có độ nhạy và độ đặc hiệu cao nhất để chẩn đoán hoại tử tế bào cơ tim là",
                "opts": [
                  "Men CK-MB khối lượng hoặc hoạt độ",
                  "Troponin tim (cTnI hoặc cTnT, đặc biệt hs-cTn)",
                  "Myoglobin huyết thanh giai đoạn cấp",
                  "Phức hợp men gan mật LDH và AST"
                ],
                "ans": 1,
                "exp": "Troponin tim (đặc biệt hs-cTn) là tiêu chuẩn vàng chẩn đoán tổn thương/hoại tử cơ tim theo định nghĩa toàn cầu nhờ độ nhạy và tính đặc hiệu cơ tim vượt trội."
              },
              {
                "q": "Câu 4\nChiến lược tái thông mạch vành ưu tiên hàng đầu cho người bệnh Nhồi máu cơ tim có ST chênh lên (STEMI) đến viện trong vòng 12 giờ đầu là",
                "opts": [
                  "Điều trị tiêu sợi huyết đường tĩnh mạch sớm",
                  "Can thiệp động mạch vành qua da (PCI) thì đầu",
                  "Phẫu thuật bắc cầu nối chủ - vành (CABG) cấp cứu",
                  "Điều trị nội khoa bảo tồn bằng thuốc kháng đông"
                ],
                "ans": 1,
                "exp": "Can thiệp mạch vành qua da thì đầu (Primary PCI) là phương pháp tái tưới máu tối ưu số 1 nếu bệnh nhân được tiếp cận cơ sở can thiệp trong khung thời gian chuẩn (cửa - bóng < 90–120 phút)."
              },
              {
                "q": "Câu 5\nChống chỉ định tuyệt đối sử dụng Nitroglycerin ở người bệnh hội chứng động mạch vành cấp khi",
                "opts": [
                  "Nhịp tim xoang tăng trên 85 chu kỳ/phút kèm đau ngực",
                  "Tiền sử tăng huyết áp nguyên phát đang dùng thuốc ổn định",
                  "Huyết áp tâm thu < 90 mmHg hoặc có nhồi máu thất phải",
                  "Bệnh nhân có đái tháo đường kèm rối loạn lipid máu mạn"
                ],
                "ans": 2,
                "exp": "Nitroglycerin làm giãn tĩnh mạch giảm tiền gánh; khi có nhồi máu thất phải hoặc huyết áp < 90 mmHg, giảm tiền gánh sẽ gây tụt huyết áp nghiêm trọng và khởi phát sốc tim."
              }
            ]
          },
          "tang-huyet-ap": {
            "title": "Bài 2: Tăng huyết áp (5 câu)",
            "questions": [
              {
                "q": "Câu 6\nTheo hướng dẫn của Hội Tim mạch học Việt Nam (VNHA/VSH), tăng huyết áp tại phòng khám được xác định khi",
                "opts": [
                  "HATT  130 mmHg và/hoặc HATTr  80 mmHg",
                  "HATT  135 mmHg và/hoặc HATTr  85 mmHg",
                  "HATT  140 mmHg và/hoặc HATTr  90 mmHg",
                  "HATT  150 mmHg và/hoặc HATTr  90 mmHg"
                ],
                "ans": 2,
                "exp": "Chẩn đoán tăng huyết áp tại phòng khám khi huyết áp tâm thu  và/hoặc huyết áp tâm trương  qua ít nhất 2 lần đo ở 2 buổi khám khác nhau."
              },
              {
                "q": "Câu 7\nTăng huyết áp thứ phát cần được chủ động tầm soát ở nhóm đối tượng nào sau đây?",
                "opts": [
                  "Người cao tuổi (> 60 tuổi) có tiền sử gia đình tăng huyết áp rõ",
                  "Người trẻ tuổi (< 35 tuổi), THA kháng trị hoặc khởi phát kịch phát",
                  "Bệnh nhân thừa cân béo phì có kèm hội chứng chuyển hóa mạn tính",
                  "Tăng huyết áp độ 1 đáp ứng hạ áp tốt với điều chỉnh lối sống"
                ],
                "ans": 1,
                "exp": "Tăng huyết áp ở người trẻ (< 35 tuổi), THA tiến triển nhanh, kháng trị hoặc cơn kịch phát cần tầm soát căn nguyên thứ phát (hẹp ĐM thận, u tủy thượng thận, cường aldosteron...)."
              },
              {
                "q": "Câu 8\nMục tiêu kiểm soát huyết áp chung cho hầu hết bệnh nhân tăng huyết áp trưởng thành (< 65 - 70 tuổi) là",
                "opts": [
                  "Đưa huyết áp về dưới 150/90 mmHg cho mọi nhóm nguy cơ tim mạch",
                  "Đưa về < 140/90 mmHg, và nếu dung nạp tốt hướng tới < 130/80 mmHg",
                  "Hạ nhanh huyết áp xuống dưới 120/70 mmHg ngay trong tuần đầu tiên",
                  "Duy trì mức huyết áp dao động an toàn quanh ngưỡng 160/95 mmHg"
                ],
                "ans": 1,
                "exp": "Đích ban đầu là đưa huyết áp xuống dưới 140/90 mmHg; nếu người bệnh dung nạp tốt, đích tối ưu hướng tới là dưới 130/80 mmHg để giảm tối đa các biến cố tim mạch và đột quỵ."
              },
              {
                "q": "Câu 9\nThuốc hạ áp nhóm ức chế men chuyển (ACEi) hoặc chẹn thụ thể angiotensin II (ARB) chống chỉ định tuyệt đối khi",
                "opts": [
                  "Phụ nữ mang thai hoặc đang có kế hoạch mang thai",
                  "Bệnh nhân đái tháo đường typ 2 có microalbumin niệu",
                  "Bệnh nhân sau nhồi máu cơ tim có phân suất tống máu giảm",
                  "Bệnh nhân tăng huyết áp kèm theo rối loạn chuyển hóa lipid"
                ],
                "ans": 0,
                "exp": "ACEi và ARB gây độc thận cho thai nhi, thiểu ối, dị tật sọ mặt và tử vong thai nên tuyệt đối chống chỉ định cho thai phụ."
              },
              {
                "q": "Câu 10\nBệnh nhân tăng huyết áp có bệnh thận mạn với mức lọc cầu thận (eGFR) < 30 ml/phút/1.73m², loại thuốc lợi tiểu ưu tiên là",
                "opts": [
                  "Thuốc lợi tiểu nhóm Thiazide (Hydrochlorothiazide)",
                  "Thuốc lợi tiểu tác dụng tại quai Henle (Furosemide)",
                  "Thuốc lợi tiểu giữ kali tại ống lượn (Spironolactone)",
                  "Thuốc lợi tiểu thẩm thấu đường tĩnh mạch (Mannitol)"
                ],
                "ans": 1,
                "exp": "Khi eGFR giảm dưới 30 ml/phút, nhóm Thiazide mất dần hiệu lực bài niệu; lúc này lợi tiểu quai (như Furosemide) là lựa chọn hiệu quả nhất để thải dịch và hạ áp."
              }
            ]
          },
          "suy-tim": {
            "title": "Bài 3: Suy tim (5 câu)",
            "questions": [
              {
                "q": "Câu 11\nChỉ dấu sinh hóa có giá trị nhất giúp chẩn đoán xác định và loại trừ suy tim trên lâm sàng là",
                "opts": [
                  "Nồng độ men Troponin T siêu nhạy",
                  "Nồng độ peptide bài niệu BNP/NT-proBNP",
                  "Hoạt độ men tim CK-MB huyết thanh",
                  "Nồng độ sản phẩm thoái giáng D-dimer"
                ],
                "ans": 1,
                "exp": "Peptide bài niệu (BNP, NT-proBNP) được giải phóng khi tâm thất bị căng giãn; nồng độ bình thường có giá trị dự đoán âm tính rất cao để loại trừ suy tim."
              },
              {
                "q": "Câu 12\nBốn nhóm thuốc trụ cột nền tảng giúp cải thiện tiên lượng và giảm tử vong ở bệnh nhân suy tim phân suất tống máu giảm (HFrEF) là",
                "opts": [
                  "ACEi/ARNI, Chẹn beta giao cảm, Kháng thụ thể corticoid khoáng (MRA), Ức chế SGLT2",
                  "Lợi tiểu quai Furosemide, Trợ tim Digoxin, Giãn mạch Nitrate, Chẹn kênh calci DHP",
                  "Kháng kết tập Aspirin, Statin liều cao, Chẹn beta giao cảm, Kháng thụ thể Angiotensin",
                  "Thuốc vận mạch Noradrenaline, Kháng đông Warfarin, Trợ tim Digoxin, Lợi tiểu quai"
                ],
                "ans": 0,
                "exp": "\"Bộ tứ trụ cột\" điều trị HFrEF theo khuyến cáo quốc tế và Bộ Y tế gồm: ARNI/ACEi, Chẹn beta giao cảm, Kháng thụ thể corticoid khoáng (MRA) và Thuốc ức chế kênh đồng vận SGLT2."
              },
              {
                "q": "Câu 13\nNhóm thuốc điều trị suy tim nào có tác dụng giảm triệu chứng ứ huyết nhanh nhất nhưng KHÔNG làm giảm tỷ lệ tử vong?",
                "opts": [
                  "Thuốc kháng thụ thể aldosterone (MRA)",
                  "Thuốc lợi tiểu quai Henle (Furosemide)",
                  "Thuốc chẹn thụ thể beta giao cảm chọn lọc",
                  "Thuốc ức chế kênh đồng vận chuyển SGLT2"
                ],
                "ans": 1,
                "exp": "Lợi tiểu quai giải quyết nhanh tình trạng ứ dịch và giảm khó thở, nhưng các thử nghiệm lâm sàng chứng minh thuốc không làm giảm tỷ lệ tử vong dài hạn."
              },
              {
                "q": "Câu 14\nThuốc chống chỉ định sử dụng ở bệnh nhân suy tim có phân suất tống máu giảm (HFrEF) là",
                "opts": [
                  "Chẹn kênh calci nhóm Non-DHP (Verapamil, Diltiazem)",
                  "Ức chế chọn lọc dòng kênh If nút xoang (Ivabradine)",
                  "Lợi tiểu đào thải muối nước nhóm quai (Furosemide)",
                  "Glycoside trợ tim tăng co bóp cơ tim (Digoxin)"
                ],
                "ans": 0,
                "exp": "Thuốc chẹn kênh calci nhóm Non-DHP (Verapamil, Diltiazem) có tác dụng ức chế co bóp cơ tim mạnh (inotropic âm tính), làm xấu đi tình trạng suy tim và tăng tử vong ở bệnh nhân HFrEF."
              },
              {
                "q": "Câu 15\nTriệu chứng thực thể điển hình của suy tim trái ứ huyết khi khám phổi là",
                "opts": [
                  "Tiếng cọ màng phổi khô khu trú hai bên đáy ngực",
                  "Rì rào phế nang giảm đều toàn bộ hai phế trường",
                  "Ran ẩm nhỏ hạt hai đáy phổi, có thể dâng nhanh",
                  "Tiếng ran rít, ran ngáy chiếm ưu thế thì thở ra"
                ],
                "ans": 2,
                "exp": "Tăng áp lực mao mạch phổi bít do suy tim trái khiến dịch thoát vào mô kẽ và phế nang, gây ran ẩm ở đáy phổi và có thể dâng nhanh trong phù phổi cấp."
              }
            ]
          },
          "hep-van-hai-la": {
            "title": "Bài 4: Hẹp van hai lá (5 câu)",
            "questions": [
              {
                "q": "Câu 16\nCăn nguyên hàng đầu gây hẹp van hai lá mắc phải tại các nước đang phát triển là",
                "opts": [
                  "Thoái hóa và vôi hóa tổ chức van ở người cao tuổi",
                  "Thấp tim do nhiễm Liên cầu khuẩn tan huyết nhóm A",
                  "Bất thường giải phẫu bẩm sinh dạng van hình dù",
                  "Biến chứng viêm nội tâm mạc nhiễm khuẩn bán cấp"
                ],
                "ans": 1,
                "exp": "Di chứng sốt thấp khớp (thấp tim) sau nhiễm liên cầu khuẩn nhóm A là nguyên nhân phổ biến nhất gây tổn thương xơ hóa, dày dính mép van dẫn đến hẹp lỗ van hai lá."
              },
              {
                "q": "Câu 17\nTam chứng kinh điển khi nghe tim ở người bệnh hẹp van hai lá bao gồm",
                "opts": [
                  "Tiếng T1 mờ, tiếng T2 tách đôi rộng, tiếng thổi tâm thu ở mỏm",
                  "Tiếng T1 đanh, tiếng clắc mở van hai lá, tiếng rung tâm trương",
                  "Tiếng thổi tâm thu hình quả trám ở đáy tim lan lên động mạch cổ",
                  "Tiếng cọ màng ngoài tim, xuất hiện tiếng T3 và tiếng T4 bệnh lý"
                ],
                "ans": 1,
                "exp": "Tam chứng hẹp hai lá kinh điển gồm: T1 đanh (lá van xơ hóa đóng mạnh), clắc mở van hai lá ở đầu tâm trương và tiếng rung tâm trương âm sắc trầm ở mỏm tim."
              },
              {
                "q": "Câu 18\nBiến chứng loạn nhịp tim thường gặp nhất gây thuyên tắc mạch não ở bệnh nhân hẹp van hai lá là",
                "opts": [
                  "Cơn nhịp nhanh kịch phát trên thất",
                  "Cơn nhịp nhanh thất hoặc rung thất",
                  "Rung nhĩ cơn hoặc rung nhĩ mạn tính",
                  "Phân ly nhĩ thất hoàn toàn (độ III)"
                ],
                "ans": 2,
                "exp": "Giãn buồng nhĩ trái mạn tính do ứ máu kích hoạt rung nhĩ; mất co bóp nhĩ dẫn đến hình thành cục máu đông trong tiểu nhĩ trái và bắn đi gây tắc mạch não."
              },
              {
                "q": "Câu 19\nPhương pháp cận lâm sàng có giá trị quyết định để chẩn đoán xác định và đánh giá thang điểm Wilkins trong hẹp hai lá là",
                "opts": [
                  "Điện tâm đồ 12 chuyển đạo",
                  "Chụp X-quang tim phổi thẳng",
                  "Siêu âm tim Doppler qua thành ngực",
                  "Chụp cắt lớp vi tính lồng ngực"
                ],
                "ans": 2,
                "exp": "Siêu âm tim kết hợp Doppler là phương tiện tiêu chuẩn vàng không xâm lấn để tính diện tích lỗ van, đo chênh áp và tính điểm Wilkins đánh giá hình thái van."
              },
              {
                "q": "Câu 20\nBiện pháp can thiệp qua da ưu tiên số 1 cho bệnh nhân hẹp hai lá khít có triệu chứng khi thang điểm Wilkins  8 là",
                "opts": [
                  "Phẫu thuật tạo hình và sửa van hai lá trên tim hở",
                  "Nong van hai lá bằng bóng qua vách liên nhĩ (PMBC)",
                  "Phẫu thuật cắt bỏ thay thế bằng van tim cơ học",
                  "Kẹp sửa hở van hai lá qua đường ống thông mạch máu"
                ],
                "ans": 1,
                "exp": "Nong van hai lá bằng bóng qua vách liên nhĩ (PMBC) là thủ thuật can thiệp xâm lấn tối thiểu đầu tay khi hình thái van thuận lợi (Wilkins , không có huyết khối nhĩ trái, hở van kèm theo < 2/4).\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần tiếp theo (Nội tiết & Huyết học: Đái tháo đường, Basedow, Suy giáp, Thiếu máu).\nDưới đây là Phần 4: Nội tiết & Huyết học (Bài 1 đến Bài 4, gồm Câu 1 – Câu 35). Các phương án gây nhiễu đã được biên tập lại đồng đều về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "noi-tiet-huyet-hoc": {
        "name": "Khoa Nội tiết - Huyết học",
        "lessons": {
          "dai-thao-duong": {
            "title": "Bài 1: Đái tháo đường (13 câu)",
            "questions": [
              {
                "q": "Câu 1\nTiêu chuẩn chẩn đoán đái tháo đường dựa trên nghiệm pháp dung nạp glucose đường uống (OGTT với 75g glucose) là",
                "opts": [
                  "Nồng độ glucose huyết tương 2 giờ sau uống glucose",
                  "Nồng độ glucose huyết tương 2 giờ sau uống glucose",
                  "Nồng độ glucose huyết tương 2 giờ sau uống glucose",
                  "Nồng độ glucose huyết tương 1 giờ sau uống glucose"
                ],
                "ans": 2,
                "exp": "Tiêu chuẩn ADA và Bộ Y tế: OGTT 2h ; glucose đói ; ; hoặc triệu chứng lâm sàng kinh điển kèm glucose ngẫu nhiên ."
              },
              {
                "q": "Câu 2\nMục tiêu kiểm soát huyết áp ở bệnh nhân đái tháo đường có protein niệu (+) theo khuyến cáo là",
                "opts": [
                  "Huyết áp mục tiêu cần đạt",
                  "Huyết áp mục tiêu duy trì",
                  "Huyết áp mục tiêu đưa về quanh mức",
                  "Huyết áp mục tiêu duy trì ổn định"
                ],
                "ans": 0,
                "exp": "Ở bệnh nhân đái tháo đường có biến chứng thận (xuất hiện protein niệu/albumin niệu), đích kiểm soát huyết áp chặt chẽ  giúp làm chậm tốc độ thoái hóa chức năng thận và giảm biến cố tim mạch xơ vữa."
              },
              {
                "q": "Câu 3\nBệnh nhân nữ mắc đái tháo đường có kế hoạch chuẩn bị mang thai, mức HbA1c tối ưu cần đạt trước khi thụ thai là",
                "opts": [
                  "Kiểm soát đường huyết với chỉ số",
                  "Kiểm soát đường huyết với chỉ số",
                  "Kiểm soát đường huyết nghiêm ngặt",
                  "Kiểm soát đường huyết duy trì"
                ],
                "ans": 2,
                "exp": "Ở phụ nữ đái tháo đường chuẩn bị mang thai, mục tiêu lý tưởng là kiểm soát đường huyết nghiêm ngặt với  (nếu không xảy ra hạ đường huyết đáng kể) nhằm giảm thiểu tối đa nguy cơ sẩy thai, dị tật bẩm sinh và tiền sản giật."
              },
              {
                "q": "Câu 4\nTrong các thuốc nhóm Sulfonylurea, thuốc nào KHÔNG được khuyến cáo cho người cao tuổi do nguy cơ hạ đường huyết nặng, kéo dài?",
                "opts": [
                  "Gliclazide dạng giải phóng biến đổi",
                  "Glibenclamide tác dụng kéo dài",
                  "Glimepiride hấp thu nhanh",
                  "Tolbutamide thế hệ đầu tiên"
                ],
                "ans": 1,
                "exp": "Glibenclamide có thời gian bán thải kéo dài và các chất chuyển hóa còn hoạt tính thải trừ qua thận, dễ tích lũy gây hạ đường huyết nặng dai dẳng ở người cao tuổi hoặc suy giảm chức năng thận."
              },
              {
                "q": "Câu 5\nLoại insulin nền nào dưới đây có thời gian tác dụng siêu kéo dài (> 42 giờ) với đường cong dược động học phẳng?",
                "opts": [
                  "Insulin Degludec",
                  "Insulin Glargine U100",
                  "Insulin Glargine U300",
                  "Insulin Detemir"
                ],
                "ans": 0,
                "exp": "Insulin Degludec là insulin nền thế hệ mới có thời gian tác dụng siêu kéo dài trên 42 giờ, nồng độ thuốc dao động rất thấp và giảm thiểu nguy cơ hạ đường huyết ban đêm."
              },
              {
                "q": "Câu 6\nTình trạng nào sau đây KHÔNG phải là biến chứng của đái tháo đường thai kỳ đối với thai nhi và trẻ sơ sinh?",
                "opts": [
                  "Đa ối, vàng da sơ sinh, đa hồng cầu",
                  "Kẹt vai khi sinh, suy hô hấp sơ sinh",
                  "Hạ glucose máu, hạ nồng độ calci máu",
                  "Thiếu máu hồng cầu nhỏ nhược sắc"
                ],
                "ans": 3,
                "exp": "Tăng đường máu từ mẹ kích thích tụy thai nhi tăng tiết insulin, làm tăng chuyển hóa và tăng tiêu thụ oxy mô; đáp ứng này kích thích tăng sinh hồng cầu gây đa hồng cầu sơ sinh chứ không phải thiếu máu."
              },
              {
                "q": "Câu 7\nTổn thương cơ quan đích ở mắt do đái tháo đường KHÔNG bao gồm bệnh lý nào sau đây?",
                "opts": [
                  "Bệnh võng mạc đái tháo đường không tăng sinh",
                  "Bệnh võng mạc đái tháo đường giai đoạn tăng sinh",
                  "Thoái hóa hoàng điểm liên quan đến tuổi già",
                  "Phù hoàng điểm do biến chứng mạch máu đái tháo đường"
                ],
                "ans": 2,
                "exp": "Bệnh mắt đái tháo đường bao gồm bệnh võng mạc (không tăng sinh và tăng sinh) và phù hoàng điểm. Thoái hóa hoàng điểm tuổi già (AMD) là bệnh lý thoái hóa mắt độc lập theo tuổi tác."
              },
              {
                "q": ") khuyến cáo cần đạt ở bệnh nhân theo dõi CGM là",
                "opts": [
                  "Đạt tỷ lệ thời gian",
                  "Đạt tỷ lệ thời gian",
                  "Đạt tỷ lệ thời gian",
                  "Đạt tỷ lệ thời gian"
                ],
                "ans": 0,
                "exp": "Theo đồng thuận ADA và Bộ Y tế, đích theo dõi CGM ở hầu hết người lớn đái tháo đường là TIR () , kèm thời gian hạ đường huyết () ."
              },
              {
                "q": "Câu 9\nNguyên tắc theo dõi và xử trí sau cấp cứu hạ đường huyết nặng ở bệnh nhân đái tháo đường, điều nào sau đây là SAI?",
                "opts": [
                  "Cần theo dõi sát sinh hiệu ít nhất 48 – 72 giờ sau khi bị hạ đường huyết",
                  "Duy trì truyền dịch glucose và cho ăn các bữa phụ nhỏ trong 2 - 3 ngày",
                  "Đặc biệt cẩn trọng đối với người bệnh lớn tuổi hoặc có suy giảm chức năng thận",
                  "Có thể ngừng việc theo dõi ngay khi đường huyết bất kỳ tăng lên"
                ],
                "ans": 3,
                "exp": "Thuốc hạ đường huyết (đặc biệt là sulfonylurea giải phóng kéo dài hoặc insulin chậm) vẫn còn lưu hành trong máu nên nguy cơ tái phát rất cao; không được ngừng theo dõi sớm ngay khi đường huyết vừa trở về bình thường."
              },
              {
                "q": "Câu 10\nBệnh nhân đái tháo đường type 2 thất bại với 3 thuốc uống (), liều khởi đầu khuyến cáo khi bổ sung 1 mũi insulin nền là",
                "opts": [
                  "Liều  (hoặc 10 UI/ngày)",
                  "Liều  (hoặc 25 UI/ngày)",
                  "Liều cố định 4 UI/ngày tiêm trước khi ngủ",
                  "Liều khởi đầu cao  chia liều"
                ],
                "ans": 0,
                "exp": "Khởi đầu insulin nền một lần mỗi ngày thường dùng liều sinh lý an toàn là  hoặc , sau đó chỉnh liều tăng dần  mỗi 3 - 5 ngày dựa theo đường huyết lúc đói."
              },
              {
                "q": "Câu 11\nThời điểm tiêm insulin Glargine U300 hàng ngày có thể linh hoạt chênh lệch tối đa bao nhiêu giờ so với khung giờ cố định?",
                "opts": [
                  "Chênh lệch tối đa không quá 1 giờ",
                  "Chênh lệch tối đa không quá 2 giờ",
                  "Chênh lệch linh hoạt tối đa 3 giờ",
                  "Tiêm bất kỳ lúc nào rải rác trong ngày"
                ],
                "ans": 2,
                "exp": "Nhờ dược động học giải phóng ổn định và kéo dài trên 24 giờ, insulin Glargine U300 cho phép thời điểm tiêm dao động chênh lệch tối đa 3 giờ so với khung giờ thường lệ mà không ảnh hưởng hiệu quả kiểm soát đường máu."
              },
              {
                "q": "Câu 12\nVị trí tiêm dưới da giúp hấp thu thuốc insulin nhanh nhất và ít bị ảnh hưởng bởi hoạt động co cơ là",
                "opts": [
                  "Vùng mặt trước ngoài của hai bên đùi",
                  "Vùng mặt ngoài của phần trên cánh tay",
                  "Vùng mô mỡ dưới da thành bụng trước",
                  "Vùng góc trên ngoài của hai bên mông"
                ],
                "ans": 2,
                "exp": "Thành bụng có hệ thống mao mạch dưới da phong phú, diện tích tiêm rộng và ít bị ảnh hưởng bởi vận động cơ học so với các chi, giúp insulin hấp thu nhanh và đều đặn nhất."
              },
              {
                "q": "Câu 13\nNhóm thuốc hạ đường huyết đường uống nào sau đây có nguy cơ gây toan ceton với mức đường huyết bình thường hoặc tăng nhẹ?",
                "opts": [
                  "Nhóm ức chế men Dipeptidyl peptidase-4 (DPP-4)",
                  "Nhóm ức chế đồng vận Natri - Glucose 2 (SGLT2i)",
                  "Nhóm làm tăng nhạy cảm Thiazolidinedione (TZD)",
                  "Nhóm kích thích bài tiết insulin Sulfonylurea"
                ],
                "ans": 1,
                "exp": "Nhóm ức chế SGLT2 (Dapagliflozin, Empagliflozin...) gây thải glucose qua nước tiểu, kích thích tăng glucagon và ly giải mỡ; khi gặp stress bệnh tật, phẫu thuật có thể khởi phát toan ceton dù đường máu chỉ tăng nhẹ hoặc bình thường (Euglycemic DKA)."
              }
            ]
          },
          "basedow": {
            "title": "Bài 2: Basedow (7 câu)",
            "questions": [
              {
                "q": "Câu 14\nBiến chứng tim mạch thường gặp nhất trên lâm sàng ở người bệnh mắc bệnh Basedow tiến triển là",
                "opts": [
                  "Viêm cơ tim cấp do độc tố chuyển hóa",
                  "Tràn dịch màng ngoài tim lượng nhiều",
                  "Rối loạn nhịp tim và suy tim tăng cung lượng",
                  "Nhồi máu cơ tim cấp do co thắt mạch"
                ],
                "ans": 2,
                "exp": "Nồng độ hormone giáp tăng cao làm tăng nhạy cảm thụ thể catecholamine, gây nhịp tim nhanh xoang liên tục, rung nhĩ và lâu ngày dẫn tới suy tim tăng cung lượng tim."
              },
              {
                "q": "Câu 15\nĐặc điểm diễn tiến của bệnh mắt lồi (lồi mắt) trong bệnh Basedow là",
                "opts": [
                  "Luôn luôn khởi phát và biểu hiện đồng thời ở cả hai bên mắt",
                  "Chắc chắn sẽ thoái triển hoàn toàn khi hormone giáp về bình thường",
                  "Có thể xuất hiện trước, cùng lúc hoặc sau khi đã đạt bình giáp",
                  "Luôn luôn chỉ khu trú tổn thương cố định ở một bên mắt đơn độc"
                ],
                "ans": 2,
                "exp": "Bệnh mắt Basedow là tổn thương tự miễn độc lập do kích thích các nguyên bào sợi và mô mỡ hốc mắt; tiến trình của bệnh mắt không hoàn toàn song hành với nồng độ hormone giáp."
              },
              {
                "q": "Câu 16\nThuốc kháng giáp trạng tổng hợp Propylthiouracil (PTU) được chỉ định ưu tiên hơn Methimazole trong trường hợp",
                "opts": [
                  "Bệnh nhân nữ mang thai trong giai đoạn 3 tháng giữa thai kỳ",
                  "Bệnh nhân nữ mang thai trong giai đoạn 3 tháng cuối thai kỳ",
                  "Cơn bão giáp trạng cấp và phụ nữ mang thai 3 tháng đầu",
                  "Bệnh nhân Basedow có tiền sử tăng men gan mạn tính từ trước"
                ],
                "ans": 2,
                "exp": "PTU ít gây dị tật bẩm sinh hơn ở tam cá nguyệt thứ nhất; ngoài ra PTU còn ức chế enzym deiodinase ở ngoại vi chuyển T4 thành T3 nên được ưu tiên hàng đầu trong cấp cứu cơn bão giáp."
              },
              {
                "q": "Câu 17\nTác dụng phụ nguy hiểm nhất cần được dặn dò làm công thức máu cấp cứu khi dùng thuốc kháng giáp tổng hợp là",
                "opts": [
                  "Dị ứng ngứa da hoặc ban mày đay nhẹ rải rác",
                  "Tăng nồng độ enzym men gan nhẹ thoáng qua",
                  "Tình trạng mất hoặc giảm bạch cầu hạt nặng",
                  "Rối loạn tiêu hóa thoáng qua kèm theo buồn nôn"
                ],
                "ans": 2,
                "exp": "Mất bạch cầu hạt () là biến chứng dị ứng miễn dịch đe dọa tử vong. Bệnh nhân khi có sốt cao đột ngột, loét miệng, đau họng cần ngừng thuốc và xét nghiệm công thức máu ngay."
              },
              {
                "q": "Câu 18\nBệnh nhân Basedow đang điều trị bằng Methimazole xuất hiện mất bạch cầu hạt nặng, phương pháp kiểm soát triệt để tiếp theo là",
                "opts": [
                  "Đổi phác đồ sang dùng Propylthiouracil (PTU) liều cao",
                  "Hạ liều thuốc Methimazole và phối hợp kháng sinh phổ rộng",
                  "Phẫu thuật cắt giáp (khi đã bình giáp) hoặc điều trị bằng I-131",
                  "Tiếp tục theo dõi đơn thuần không can thiệp thêm biện pháp nào"
                ],
                "ans": 2,
                "exp": "Mất bạch cầu hạt do thuốc kháng giáp có phản ứng chéo, chống chỉ định chuyển sang thuốc kháng giáp khác; giải pháp triệt để là dùng I-131 hoặc phẫu thuật sau khi đã kiểm soát triệu chứng bằng Lugol/chẹn beta."
              },
              {
                "q": "Câu 19\nTrước khi tiến hành phẫu thuật cắt tuyến giáp điều trị Basedow, bệnh nhân cần được chuẩn bị như thế nào để tránh bão giáp?",
                "opts": [
                  "Đưa hormone giáp về trạng thái bình giáp lâm sàng và hóa sinh",
                  "Ngừng toàn bộ thuốc kháng giáp trạng trước phẫu thuật 1 tháng",
                  "Dùng thuốc an thần liều cao liên tục trước mổ khoảng 3 ngày",
                  "Tiến hành phẫu thuật ngay không cần điều trị nội khoa từ trước"
                ],
                "ans": 0,
                "exp": "Chuẩn bị trước mổ bắt buộc phải đưa bệnh nhân về trạng thái bình giáp để phòng ngừa phóng thích ồ ạt hormone giáp gây cơn bão giáp trong và sau mổ; có thể phối hợp Lugol 10 - 14 ngày trước mổ để giảm tưới máu tuyến giáp."
              },
              {
                "q": "Câu 20\nXét nghiệm tự kháng thể có giá trị đặc hiệu nhất giúp chẩn đoán xác định căn nguyên bệnh Basedow là",
                "opts": [
                  "Anti-TPO (Kháng thể kháng Thyroid Peroxidase)",
                  "Anti-Tg (Kháng thể kháng nồng độ Thyroglobulin)",
                  "TRAb (Kháng thể kháng thụ thể TSH tuyến giáp)",
                  "ANA (Kháng thể kháng nhân trong huyết thanh)"
                ],
                "ans": 2,
                "exp": "TRAb (TSH Receptor Antibody) kích thích trực tiếp thụ thể TSH trên màng tế bào nang giáp gây cường giáp và phì đại tuyến, là tự kháng thể có độ đặc hiệu cao nhất quyết định chẩn đoán Basedow."
              }
            ]
          },
          "suy-giap": {
            "title": "Bài 3: Suy giáp (7 câu)",
            "questions": [
              {
                "q": "Câu 21\nChẩn đoán xác định suy giáp tiên phát (tổn thương tại tuyến giáp) trên xét nghiệm hóa sinh máu đặc trưng bởi",
                "opts": [
                  "Nồng độ TSH tăng cao, nồng độ FT4 giảm",
                  "Nồng độ TSH giảm thấp, nồng độ FT4 giảm",
                  "Nồng độ TSH giảm thấp, nồng độ FT4 tăng",
                  "Nồng độ TSH tăng cao, nồng độ FT4 tăng"
                ],
                "ans": 0,
                "exp": "Khi tuyến giáp suy giảm bài tiết hormone (FT4 giảm), cơ chế feedback âm tính lên trục hạ đồi - tuyến yên bị suy giảm, dẫn đến thùy trước tuyến yên tăng tiết nồng độ TSH rất cao trong máu."
              },
              {
                "q": "Câu 22\nNguyên nhân thường gặp nhất gây suy giáp mắc phải ở người trưởng thành tại các vùng không thiếu iod là",
                "opts": [
                  "Bệnh viêm tuyến giáp bán cấp dạng u hạt De Quervain",
                  "Viêm tuyến giáp tự miễn mạn tính (Viêm tuyến giáp Hashimoto)",
                  "Sử dụng thuốc chống loạn nhịp tim Amiodarone kéo dài",
                  "Tổn thương suy thùy trước tuyến yên sau chấn thương sọ não"
                ],
                "ans": 1,
                "exp": "Viêm tuyến giáp Hashimoto (đặc trưng bởi nồng độ tự kháng thể Anti-TPO tăng cao) phá hủy dần dần các nang tuyến giáp, là nguyên nhân hàng đầu gây suy giáp vĩnh viễn ở vùng đủ iod."
              },
              {
                "q": "Câu 23\nHướng dẫn sử dụng thuốc Levothyroxine (L-T4) đúng chuẩn để đảm bảo hấp thu tối ưu là",
                "opts": [
                  "Uống ngay sau khi ăn xong các bữa ăn chính trong ngày",
                  "Uống cùng lúc với các viên thuốc bổ sung Canxi và Sắt",
                  "Uống vào buổi sáng khi đói, trước ăn sáng 30 – 60 phút",
                  "Uống ngay trước giờ đi ngủ ban đêm cùng với sữa tươi"
                ],
                "ans": 2,
                "exp": "Levothyroxine được hấp thu tối ưu ở môi trường acid dạ dày khi đói; thức ăn và các ion kim loại cản trở hấp thu thuốc, do đó bắt buộc uống lúc sáng sớm trước ăn sáng 30 - 60 phút."
              },
              {
                "q": "Câu 24\nCác thuốc nào sau đây làm GIẢM hấp thu của Levothyroxine tại đường tiêu hóa nếu dùng đồng thời?",
                "opts": [
                  "Chế phẩm Canxi carbonat",
                  "Chế phẩm muối Sắt sulfat",
                  "Thuốc ức chế bơm proton (PPI)",
                  "Tất cả các thuốc kể trên"
                ],
                "ans": 3,
                "exp": "Canxi và Sắt tạo phức chelat không tan với Levothyroxine; trong khi PPI làm giảm acid dịch vị cần thiết để hòa tan thuốc; do đó cần uống cách L-T4 ít nhất 4 giờ."
              },
              {
                "q": "Câu 25\nĐiều trị suy giáp trên bệnh nhân cao tuổi có kèm theo bệnh mạch vành cần tuân thủ nguyên tắc nào?",
                "opts": [
                  "Nhanh chóng dùng liều cao ngay từ đầu để ổn định hormone",
                  "Bắt đầu bằng liều thấp, tăng liều chậm và theo dõi sát tim mạch",
                  "Tuyệt đối không dùng hormone mà chỉ điều trị triệu chứng tim",
                  "Phối hợp ngay với liều cao Corticosteroid đường truyền tĩnh mạch"
                ],
                "ans": 1,
                "exp": "Hormone giáp làm tăng nhu cầu oxy cơ tim. Bắt đầu liều cao có thể gây thiếu máu cơ tim cấp hoặc loạn nhịp tim nguy hiểm. Cần khởi đầu liều thấp () và tăng liều thận trọng."
              },
              {
                "q": "Câu 26\nBệnh nhân suy tuyến yên toàn bộ gây suy giáp và suy thượng thận thứ phát, nguyên tắc bù hormone là",
                "opts": [
                  "Bù Levothyroxine trước 1 tuần rồi mới bắt đầu bù Corticoid",
                  "Bù Corticoid trước hoặc đồng thời với việc bù Levothyroxine",
                  "Chỉ cần bù nồng độ Levothyroxine mà không cần dùng Corticoid",
                  "Bắt buộc phải ưu tiên bù các hormone sinh dục trước tiên"
                ],
                "ans": 1,
                "exp": "Bù Levothyroxine trước sẽ làm tăng chuyển hóa cơ bản và tăng thoái giáng cortisol, đẩy người bệnh vào cơn suy thượng thận cấp tính đe dọa tử vong."
              },
              {
                "q": "Câu 27\nBiểu hiện lâm sàng điển hình của hội chứng suy giáp nặng ở người trưởng thành là",
                "opts": [
                  "Gầy sút cân nhanh chóng, da nóng ẩm, run tay và nhịp tim nhanh",
                  "Mệt mỏi, sợ lạnh, tăng cân, da khô, táo bón và nhịp tim chậm",
                  "Hồi hộp đánh trống ngực, lồi mắt và đi ngoài phân lỏng mạn",
                  "Đau đầu từng cơn kèm theo vã mồ hôi và cơn tăng huyết áp kịch phát"
                ],
                "ans": 1,
                "exp": "Suy giảm nồng độ hormone giáp dẫn tới giảm sút chuyển hóa cơ bản: giảm sinh nhiệt (sợ lạnh), thâm nhiễm mucopolysaccharide gây phù niêm da khô, giảm nhu động ruột và nhịp tim chậm."
              }
            ]
          },
          "thieu-mau": {
            "title": "Bài 4: Thiếu máu (8 câu)",
            "questions": [
              {
                "q": "Câu 28\nTiêu chuẩn chẩn đoán thiếu máu ở nam giới trưởng thành theo Tổ chức Y tế Thế giới (WHO) khi Hemoglobin (Hb) giảm dưới",
                "opts": [
                  "Nồng độ",
                  "Nồng độ",
                  "Nồng độ",
                  "Nồng độ"
                ],
                "ans": 2,
                "exp": "Tiêu chuẩn WHO: Nam trưởng thành ; Nữ không mang thai ; Phụ nữ mang thai ."
              },
              {
                "q": "Câu 29\nĐặc điểm hình thái của hồng cầu trên huyết đồ của bệnh nhân thiếu máu thiếu sắt là",
                "opts": [
                  "Thiếu máu hồng cầu kích thước to, ưu sắc",
                  "Thiếu máu hồng cầu kích thước bình thường, đẳng sắc",
                  "Thiếu máu hồng cầu kích thước nhỏ, nhược sắc",
                  "Thiếu máu đa hình thái có tăng thể tích khối hồng cầu"
                ],
                "ans": 2,
                "exp": "Thiếu sắt làm giảm tổng hợp hem, dẫn tới hồng cầu sinh ra có thể tích nhỏ () và giảm lượng sắc tố chứa bên trong ()."
              },
              {
                "q": "Câu 30\nChỉ số sinh hóa có giá trị tin cậy nhất phản ánh chính xác lượng sắt dự trữ của cơ thể là",
                "opts": [
                  "Nồng độ Sắt huyết thanh",
                  "Nồng độ Ferritin huyết thanh",
                  "Nồng độ Transferrin trong máu",
                  "Độ bão hòa Transferrin huyết thanh"
                ],
                "ans": 1,
                "exp": "Ferritin phản ánh trực tiếp lượng sắt dự trữ tại gan, lách và tủy xương; khi không có phản ứng viêm kèm theo,  khẳng định thiếu máu thiếu sắt."
              },
              {
                "q": "Câu 31\nXét nghiệm có giá trị cao nhất giúp phân biệt thiếu máu thiếu sắt với bệnh Thalassemia thể nhẹ là",
                "opts": [
                  "Định lượng nồng độ sắt huyết thanh toàn phần",
                  "Đếm tổng số lượng tế bào hồng cầu ngoại vi",
                  "Điện di huyết sắc tố và xét nghiệm đột biến gen globin",
                  "Chụp X-quang xương sọ và xương dài hai chi"
                ],
                "ans": 2,
                "exp": "Cả hai đều có hồng cầu nhỏ nhược sắc. Điện di huyết sắc tố phát hiện các bất thường thành phần hemoglobin ở Thalassemia (tăng HbA2, xuất hiện HbF/HbH), kết hợp phân tích gen giúp chẩn đoán phân biệt chính xác với thiếu máu thiếu sắt."
              },
              {
                "q": "Câu 32\nChẩn đoán xác định thiếu máu tan máu tự miễn (AIHA) dựa vào tổ hợp tiêu chuẩn nào?",
                "opts": [
                  "Hội chứng tan máu, test Coombs trực tiếp (+), Bilirubin gián tiếp tăng",
                  "Nghiệm pháp Coombs trực tiếp (-), nồng độ Bilirubin trực tiếp tăng cao",
                  "Nghiệm pháp Coombs gián tiếp (+), Haptoglobin tăng, hồng cầu lưới giảm",
                  "Tủy đồ nghèo tế bào tủy, nồng độ Ferritin huyết thanh giảm sâu"
                ],
                "ans": 0,
                "exp": "AIHA đặc trưng bởi thiếu máu, tăng hủy hồng cầu (Bilirubin gián tiếp tăng, LDH tăng), tủy xương tăng sinh bù trừ (hồng cầu lưới tăng) và nghiệm pháp Coombs trực tiếp dương tính xác nhận có kháng thể bám trên màng hồng cầu."
              },
              {
                "q": "Câu 33\nThuốc lựa chọn hàng đầu trong điều trị nội khoa thiếu máu tan máu tự miễn do kháng thể nóng (loại IgG) là",
                "opts": [
                  "Corticosteroid (Methylprednisolone hoặc Prednisolone)",
                  "Phẫu thuật cắt lách cấp cứu ngay từ thời điểm chẩn đoán",
                  "Thuốc ức chế miễn dịch nhóm Cyclophosphamide liều cao",
                  "Truyền khối hồng cầu rửa ngắt quãng theo chu kỳ hàng tuần"
                ],
                "ans": 0,
                "exp": "Glucocorticoid () là liệu pháp chuẩn đầu tay, giúp ức chế đại thực bào phá hủy hồng cầu tại lách và giảm sản xuất tự kháng thể."
              },
              {
                "q": "Câu 34\nChỉ định truyền khối hồng cầu trong điều trị thiếu máu cấp hoặc xuất huyết tiêu hóa theo khuyến cáo là",
                "opts": [
                  "Chỉ định truyền cho mọi trường hợp xuất hiện",
                  "Truyền khi  (hoặc  nếu có bệnh tim mạch)",
                  "Chỉ định truyền máu khi bệnh nhân có biểu hiện sốt cao đi kèm",
                  "Chỉ truyền máu toàn phần khi lượng máu mất dưới  thể tích tuần hoàn"
                ],
                "ans": 1,
                "exp": "Chiến lược truyền máu hạn chế an toàn và hiệu quả: Ngưỡng truyền là  (đích duy trì ); đối với bệnh nhân có hội chứng vành cấp hoặc bệnh lý tim mạch nền, ngưỡng chỉ định nới lỏng hơn khi ."
              },
              {
                "q": "Câu 35\nNguyên nhân chủ yếu gây tai biến truyền máu cấp mức độ nặng và nguy cơ tử vong cao nhất là",
                "opts": [
                  "Dịch máu truyền vào cơ thể bị bảo quản quá lạnh",
                  "Bất đồng kháng nguyên nhóm máu hệ ABO giữa người cho và nhận",
                  "Tốc độ truyền máu quá chậm làm lắng cặn hồng cầu",
                  "Phản ứng dị ứng mày đay do protein lạ trong huyết tương"
                ],
                "ans": 1,
                "exp": "Bất đồng nhóm máu hệ ABO kích hoạt bổ thể gây tan máu nội mạch cấp tính, sốc phản vệ, suy thận cấp do tắc ống thận và đông máu nội mạch rải rác (DIC).\nKhi bạn đã rà soát xong, hãy gõ \"tiếp tục\" để tôi gửi phần tiếp theo (Thận - Tiết niệu: Hội chứng thận hư, Bệnh thận mạn, Tổn thương thận cấp, Nhiễm khuẩn tiết niệu, Sỏi thận).\nDưới đây là Phần 5: Thận – Tiết niệu (Bài 1 đến Bài 5, gồm Câu 1 – Câu 25). Các phương án gây nhiễu đã được biên tập lại đồng đều về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "than-tiet-nieu": {
        "name": "Khoa Thận - Tiết niệu",
        "lessons": {
          "hoi-chung-than-hu": {
            "title": "Bài 1: Hội chứng thận hư (5 câu)",
            "questions": [
              {
                "q": "Câu 1\nTiêu chuẩn vàng bắt buộc để chẩn đoán xác định hội chứng thận hư theo Bộ Y tế là",
                "opts": [
                  "Phù to toàn thân tiến triển nhanh kèm theo tăng huyết áp kịch phát",
                  "Protein niệu  và Albumin máu  (Protein toàn phần )",
                  "Hồng cầu niệu vi thể kèm trụ hồng cầu xuất hiện liên tục trong nước tiểu",
                  "Nồng độ Creatinin huyết thanh tăng vọt kèm theo suy giảm mức lọc cầu thận cấp"
                ],
                "ans": 1,
                "exp": "Hai tiêu chuẩn bắt buộc phải có để xác định hội chứng thận hư là: (1) Protein niệu 24 giờ  (ở trẻ em ); (2) Albumin huyết tương giảm  (Protein toàn phần ). Phù nhiều và rối loạn lipid máu là các tiêu chuẩn phụ trợ thường gặp."
              },
              {
                "q": "Câu 2\nLiều thuốc ức chế miễn dịch Cyclosporin A (Neoral) được khuyến cáo trong điều trị hội chứng thận hư kháng hoặc phụ thuộc Corticoid là",
                "opts": [
                  "Liều  chia 2 lần uống",
                  "Liều  chia 2 lần uống",
                  "Liều  chia 2 lần uống",
                  "Liều  chia 2 lần uống"
                ],
                "ans": 2,
                "exp": "Cyclosporin A là thuốc ức chế Calcineurin được chỉ định trong hội chứng thận hư kháng steroid hoặc hay tái phát với liều khởi đầu thông thường từ  (chia 2 lần uống), cần theo dõi chặt chẽ nồng độ đáy của thuốc trong máu và chức năng thận."
              },
              {
                "q": "Câu 3\nCơ chế bệnh sinh chính dẫn đến tình trạng tăng đông và nguy cơ tắc mạch (đặc biệt là tắc tĩnh mạch thận) trong hội chứng thận hư là",
                "opts": [
                  "Tăng sinh quá mức dòng tiểu cầu nguyên phát tại tủy xương dưới tác dụng cytokine",
                  "Mất các yếu tố chống đông tự nhiên qua nước tiểu kèm gan tăng tổng hợp Fibrinogen",
                  "Tăng nồng độ Canxi ion hóa trong máu làm hoạt hóa dòng thác đông máu ngoại sinh",
                  "Giảm tổng hợp các yếu tố chống đông tại gan và suy giảm thanh thải thrombin máu"
                ],
                "ans": 1,
                "exp": "Màng đáy cầu thận bị tổn thương làm mất các protein chống đông có trọng lượng phân tử nhỏ như Antithrombin III qua nước tiểu; đồng thời gan phản ứng bù trừ hạ áp lực keo bằng cách tăng tổng hợp lipid và các yếu tố đông máu (Fibrinogen, V, VII, VIII, X) dẫn đến tình trạng tăng đông rõ rệt."
              },
              {
                "q": "Câu 4\nChỉ định sinh thiết thận được đặt ra ở người lớn mắc hội chứng thận hư trong trường hợp nào sau đây",
                "opts": [
                  "Chỉ định cho tất cả người lớn mắc hội chứng thận hư tiên phát trước khi điều trị",
                  "Chỉ sinh thiết khi hội chứng thận hư tái phát sau khi đã giảm liều corticoid",
                  "Chỉ định khi bệnh nhân đáp ứng hoàn toàn với liệu pháp Prednisolone sau 2 tuần",
                  "Chỉ thực hiện khi nghi ngờ hội chứng thận hư thứ phát do các bệnh lý ác tính"
                ],
                "ans": 0,
                "exp": "Khác với trẻ em (đa số là thể sang thương tối thiểu MCD đáp ứng tốt với Corticoid nên không cần sinh thiết ngay), ở người lớn hội chứng thận hư tiên phát do nhiều tổn thương mô bệnh học khác nhau (FSGS, MN, MPGN...), do đó sinh thiết thận là bắt buộc để xác định thể tổn thương và lựa chọn phác đồ điều trị đặc hiệu."
              },
              {
                "q": "Câu 5\nChế độ ăn cho bệnh nhân hội chứng thận hư khi chưa có suy thận",
                "opts": [
                  "Tăng cường thật nhiều đạm () để bù lượng protein thất thoát qua thận",
                  "Đảm bảo đủ đạm ( + lượng mất), ăn nhạt khi phù và giảm chất béo",
                  "Hạn chế tối đa lượng đạm ăn vào () và tăng cường ăn glucid tinh chế",
                  "Uống thật nhiều nước lọc () kết hợp ăn thức ăn nhiều muối khoáng"
                ],
                "ans": 1,
                "exp": "Quan điểm cũ bổ sung quá nhiều đạm làm tăng gánh nặng lọc qua cầu thận và thúc đẩy xơ hóa cầu thận nhanh hơn; chế độ ăn chuẩn là đủ đạm chất lượng cao, ăn nhạt khi có phù để kiểm soát ứ muối nước."
              }
            ]
          },
          "benh-than-man": {
            "title": "Bài 2: Bệnh thận mạn (5 câu)",
            "questions": [
              {
                "q": "Câu 6\nTheo khuyến cáo KDIGO 2012, một bệnh nhân có mức lọc cầu thận ước tính (eGFR) là  được phân loại bệnh thận mạn giai đoạn mấy",
                "opts": [
                  "Giai đoạn 2 (G2: )",
                  "Giai đoạn 3 (G3: cụ thể là ranh giới G3a/G3b)",
                  "Giai đoạn 4 (G4: )",
                  "Giai đoạn 5 (G5: )"
                ],
                "ans": 1,
                "exp": "Phân đoạn chức năng lọc cầu thận theo KDIGO: G1 (), G2 (), G3a (), G3b (), G4 (), G5 (); mức lọc cầu thận  nằm ở ranh giới phân loại giai đoạn 3."
              },
              {
                "q": "Câu 7\nNguyên nhân gây tử vong hàng đầu ở bệnh nhân mắc bệnh thận mạn tính và suy thận mạn giai đoạn cuối là",
                "opts": [
                  "Tình trạng toan chuyển hóa mất bù nặng kháng trị",
                  "Suy kiệt kiệt quệ do hội chứng urê máu cao kéo dài",
                  "Các biến cố tim mạch (nhồi máu cơ tim, suy tim, đột quỵ)",
                  "Xuất huyết tiêu hóa ồ ạt do rối loạn đông cầm máu"
                ],
                "ans": 2,
                "exp": "Hơn 50% người bệnh thận mạn tử vong do các biến cố tim mạch xơ vữa, vôi hóa hệ mạch và suy tim trước khi tiến triển đến giai đoạn cần lọc máu."
              },
              {
                "q": "Câu 8\nRối loạn khoáng chất và xương (CKD-MBD) ở bệnh nhân bệnh thận mạn thường biểu hiện trên xét nghiệm sinh hóa máu là",
                "opts": [
                  "Tăng Calci máu, giảm Phosphat máu kèm theo giảm nồng độ hormone PTH",
                  "Tăng Phosphat máu, giảm Calci máu kèm tăng nồng độ hormone tuyến cận giáp (PTH)",
                  "Giảm Calci máu, giảm Phosphat máu kèm giảm rõ rệt nồng độ hormone PTH",
                  "Tăng Calci máu, tăng Phosphat máu kèm nồng độ hormone PTH ở mức bình thường"
                ],
                "ans": 1,
                "exp": "Giảm mức lọc cầu thận làm ứ đọng phosphat; đồng thời thận giảm sản xuất Calcitriol () làm giảm hấp thu calci tại ruột dẫn đến hạ calci máu. Tình trạng này kích thích phì đại tuyến cận giáp gây cường cận giáp thứ phát (tăng PTH)."
              },
              {
                "q": "Câu 9\nNguyên tắc điều chỉnh rối loạn Calci - Phospho ở bệnh nhân suy thận mạn tính là",
                "opts": [
                  "Tăng cường bổ sung Phospho và kiêng hoàn toàn các thực phẩm chứa nhiều Calci",
                  "Bổ sung Calci và hạn chế Phospho trong khẩu phần kết hợp dùng thuốc gắn Phosphat",
                  "Bổ sung đồng thời Calci và Phospho liều cao để bù đắp lượng mất qua đường tiểu",
                  "Chỉ cần tiến hành lọc máu chu kỳ định kỳ mà không cần điều chỉnh chế độ ăn uống"
                ],
                "ans": 1,
                "exp": "Hạn chế các thực phẩm giàu phospho (lòng đỏ trứng, phủ tạng, hạt khô, đồ hộp), dùng thuốc gắn phospho (Calci acetat, Calci carbonat hoặc Sevelamer) uống cùng bữa ăn để giảm hấp thu phospho, và bổ sung dẫn xuất vitamin D hoạt tính."
              },
              {
                "q": "Câu 10\nCác phương pháp điều trị thay thế thận cho bệnh nhân suy thận mạn giai đoạn cuối bao gồm",
                "opts": [
                  "Thận nhân tạo chu kỳ ngắt quãng (HD)",
                  "Thẩm phân phúc mạc liên tục ngoại trú (PD)",
                  "Phẫu thuật ghép thận đồng loại",
                  "Cả 3 phương pháp điều trị kể trên"
                ],
                "ans": 3,
                "exp": "Ba phương pháp điều trị thay thế thận cơ bản hiện nay gồm: Lọc máu ngắt quãng (chạy thận nhân tạo), Thẩm phân phúc mạc (lọc màng bụng) và Ghép thận (phương pháp tối ưu phục hồi chất lượng sống)."
              }
            ]
          },
          "ton-thuong-than-cap": {
            "title": "Bài 3: Tổn thương thận cấp (AKI) (5 câu)",
            "questions": [
              {
                "q": "Câu 11\nNguyên nhân thường gặp nhất gây tổn thương thận cấp (AKI) trên lâm sàng là",
                "opts": [
                  "Giảm tưới máu thận thực sự hoặc hiệu dụng (tổn thương trước thận)",
                  "Hoại tử tế bào biểu mô ống thận cấp do thiếu máu hoặc độc chất tại thận",
                  "Viêm cầu thận cấp sau nhiễm liên cầu khuẩn tan huyết qua trung gian miễn dịch",
                  "Tắc nghẽn cơ học đường dẫn niệu cấp tính do sỏi niệu quản hai bên sau thận"
                ],
                "ans": 0,
                "exp": "Tổn thương trước thận chiếm 60 - 70% các ca suy thận cấp, phát sinh do giảm thể tích tuần hoàn thực sự (mất nước, xuất huyết, bỏng) hoặc giảm thể tích tuần hoàn hiệu dụng (suy tim cấp, sốc, xơ gan mất bù) làm giảm tưới máu qua thận nhưng cấu trúc nhu mô thận vẫn còn nguyên vẹn."
              },
              {
                "q": "Câu 12\nTheo tiêu chuẩn KDIGO 2012, chẩn đoán và phân độ tổn thương thận cấp dựa vào sự biến đổi của",
                "opts": [
                  "Mức lọc cầu thận eGFR và mức độ xuất hiện của protein niệu 24 giờ",
                  "Kích thước nhu mô thận trên siêu âm và tỷ lệ tế bào bạch cầu trong nước tiểu",
                  "Nồng độ Creatinin huyết thanh và thể tích nước tiểu bài xuất theo thời gian",
                  "Nồng độ Ure máu toàn phần và nồng độ Acid uric huyết thanh lúc đói"
                ],
                "ans": 2,
                "exp": "Tiêu chuẩn KDIGO 2012 định nghĩa AKI khi: Creatinin huyết thanh tăng  trong vòng 48 giờ, hoặc tăng  lần giá trị nền trong 7 ngày, hoặc nước tiểu  kéo dài trên 6 giờ."
              },
              {
                "q": "Câu 13\nChỉ số nào sau đây có giá trị cao nhất giúp phân biệt tổn thương trước thận với hoại tử ống thận cấp tại thận",
                "opts": [
                  "Phân suất thải Natri () và tỷ lệ  huyết tương",
                  "Xuất hiện trụ hồng cầu và tế bào bạch cầu đa nhân thoái hóa trong nước tiểu",
                  "Nồng độ Kali máu tăng nhanh kết hợp với biến đổi nhịp tim trên điện tâm đồ",
                  "Áp lực thẩm thấu niệu giảm sâu và phân suất thải Natri ()"
                ],
                "ans": 0,
                "exp": "Trong AKI trước thận, ống thận còn nguyên vẹn nên tăng tái hấp thu muối nước tối đa: , Natri niệu , áp lực thẩm thấu niệu cao () và tỷ lệ Ure/Creatinin máu . Trong hoại tử ống thận cấp, ống thận mất khả năng cô đặc nên , Natri niệu ."
              },
              {
                "q": "Câu 14\nThuốc nào sau đây KHÔNG làm hạ nồng độ Kali máu trong cấp cứu tăng Kali máu nặng ở bệnh nhân AKI",
                "opts": [
                  "Insulin tác dụng nhanh kết hợp dung dịch Glucose ưu trương",
                  "Canxi clorid hoặc Canxi gluconat tiêm tĩnh mạch trực tiếp",
                  "Khí dung thuốc kích thích thụ thể beta-2 giao cảm (Salbutamol)",
                  "Lọc máu cấp cứu ngắt quãng hoặc dung dịch kiềm hóa máu Bicarbonat"
                ],
                "ans": 1,
                "exp": "Canxi tiêm tĩnh mạch có tác dụng đối kháng màng tế bào cơ tim, ổn định điện thế màng để phòng ngừa rung thất và ngừng tim chứ hoàn toàn không làm giảm nồng độ Kali trong máu. Các thuốc đưa kali vào tế bào gồm Insulin + Glucose, Salbutamol, Bicarbonat."
              },
              {
                "q": "Câu 15\nBệnh nhân sau dùng kháng sinh hoặc NSAID xuất hiện sốt, phát ban, đau khớp, nước tiểu có bạch cầu ái toan và trụ bạch cầu, định hướng nguyên nhân AKI là",
                "opts": [
                  "Hoại tử ống thận cấp do thiếu máu cục bộ kéo dài",
                  "Viêm thận kẽ cấp tính do phản ứng dị ứng thuốc (AIN)",
                  "Tắc nghẽn sỏi niệu quản hai bên gây ứ nước thận cấp",
                  "Viêm cầu thận tiến triển nhanh có tổn thương hình liềm"
                ],
                "ans": 1,
                "exp": "Tam chứng kinh điển: sốt, phát ban, đau khớp kết hợp với suy giảm chức năng thận và có bạch cầu ái toan trong nước tiểu là dấu hiệu đặc trưng của viêm thận kẽ dị ứng cấp do thuốc (AIN)."
              }
            ]
          },
          "nhiem-khuan-tiet-nieu": {
            "title": "Bài 4: Nhiễm khuẩn đường tiết niệu (5 câu)",
            "questions": [
              {
                "q": "Câu 16\nCăn nguyên vi sinh vật thường gặp nhất gây nhiễm khuẩn tiết niệu cộng đồng và bệnh viện là",
                "opts": [
                  "Trực khuẩn mủ xanh Pseudomonas aeruginosa",
                  "Trực khuẩn biến hình Proteus mirabilis",
                  "Trực khuẩn Gram âm đường ruột Escherichia coli",
                  "Trực khuẩn bao màng Klebsiella pneumoniae"
                ],
                "ans": 2,
                "exp": "Trực khuẩn Gram âm đường ruột  chiếm  các trường hợp nhiễm khuẩn đường tiết niệu nhờ các yếu tố bám dính (fimbriae/pili) gắn chặt vào thụ thể biểu mô đường niệu."
              },
              {
                "q": "Câu 17\nTriệu chứng lâm sàng nào sau đây thường KHÔNG gặp trong viêm bàng quang cấp đơn thuần",
                "opts": [
                  "Cảm giác tiểu buốt, tiểu rắt nhiều lần trong ngày",
                  "Đau tức âm ỉ hoặc co thắt khó chịu tại vùng hạ vị",
                  "Sốt cao rét run kèm đau nhức nhối vùng hông lưng",
                  "Nước tiểu đục, có cặn lắng hoặc đái máu cuối bãi"
                ],
                "ans": 2,
                "exp": "Viêm bàng quang là nhiễm khuẩn đường tiết niệu dưới, tổn thương khu trú niêm mạc bàng quang nên không sốt hoặc sốt nhẹ. Khi có sốt cao rét run, đau vùng hông lưng, vỗ hông lưng dương tính là biểu hiện của viêm thận bể thận cấp (nhiễm khuẩn tiết niệu trên)."
              },
              {
                "q": "Câu 18\nTiêu chuẩn vàng để chẩn đoán xác định nhiễm khuẩn đường tiết niệu là",
                "opts": [
                  "Tổng phân tích nước tiểu có Esterase bạch cầu (+) và Nitrit (+)",
                  "Cấy nước tiểu giữa dòng dương tính với số lượng vi khuẩn",
                  "Soi tươi cặn lắng nước tiểu phát hiện nhiều hồng cầu và tế bào biểu mô",
                  "Siêu âm hệ tiết niệu thấy hình ảnh dày thành bàng quang lan tỏa"
                ],
                "ans": 1,
                "exp": "Cấy nước tiểu định lượng ( với mẫu giữa dòng hoặc  qua sonde bàng quang vô khuẩn) và làm kháng sinh đồ là tiêu chuẩn quyết định chẩn đoán và hướng dẫn dùng kháng sinh."
              },
              {
                "q": "Câu 19\nTrường hợp nào sau đây luôn được phân loại là \"Nhiễm khuẩn tiết niệu phức tạp\"",
                "opts": [
                  "Viêm bàng quang cấp ở phụ nữ trẻ tuổi, khỏe mạnh và không mang thai",
                  "Nhiễm khuẩn ở nam giới, phụ nữ có thai, người có sỏi hoặc đặt sonde tiểu",
                  "Viêm bàng quang tái phát sau giao hợp ở phụ nữ trong lứa tuổi sinh đẻ",
                  "Nhiễm khuẩn tiết niệu có cấy vi khuẩn ra số lượng dao động quanh"
                ],
                "ans": 1,
                "exp": "Nhiễm khuẩn tiết niệu phức tạp là các trường hợp xảy ra trên cơ địa có bất thường cấu trúc hoặc chức năng đường niệu, nam giới, phụ nữ có thai, người suy giảm miễn dịch hoặc có can thiệp thủ thuật xâm lấn (sonde tiểu, nội soi)."
              },
              {
                "q": "Câu 20\nBiện pháp quan trọng nhất giúp hạn chế tối đa nguy cơ nhiễm khuẩn tiết niệu liên quan ống thông (CAUTI) là",
                "opts": [
                  "Sử dụng kháng sinh phổ rộng dự phòng toàn thân trong suốt thời gian lưu sonde",
                  "Thao tác vô khuẩn tuyệt đối, duy trì hệ thống dẫn lưu kín và rút ống càng sớm càng tốt",
                  "Bơm rửa bàng quang định kỳ hàng ngày bằng các dung dịch sát khuẩn hoặc kháng sinh",
                  "Chủ động thay ống thông bàng quang và túi dẫn lưu mới định kỳ mỗi 3 ngày một lần"
                ],
                "ans": 1,
                "exp": "Đảm bảo vô trùng khi đặt sonde, giữ hệ thống túi chứa dịch kín đặt thấp hơn bàng quang, và rút ống sớm nhất có thể là biện pháp phòng ngừa nhiễm khuẩn hiệu quả nhất. Không dùng kháng sinh dự phòng thường quy vì gây tăng đề kháng thuốc."
              }
            ]
          },
          "soi-than-tiet-nieu": {
            "title": "Bài 5: Sỏi thận tiết niệu (5 câu)",
            "questions": [
              {
                "q": "Câu 21\nVị trí sỏi di chuyển gây ra cơn đau quặn thận cấp tính điển hình nhất trên lâm sàng là",
                "opts": [
                  "Sỏi nằm cố định ở đài thận dưới với kích thước nhỏ",
                  "Sỏi di chuyển và gây bít tắc cấp tính trong lòng niệu quản",
                  "Sỏi nằm tự do trong lòng bàng quang chưa gây kẹt cổ",
                  "Sỏi san hô đài bể thận kích thước lớn không gây tắc cơ học"
                ],
                "ans": 1,
                "exp": "Cơn đau quặn thận xuất hiện khi sỏi di chuyển làm tắc nghẽn cấp tính dòng nước tiểu tại niệu quản, gây tăng áp lực đột ngột trong lòng niệu quản và bể thận, làm căng trướng bao thận kích thích các thụ thể cảm giác đau nội tạng."
              },
              {
                "q": "Câu 22\nLoại sỏi tiết niệu nào sau đây KHÔNG cản quang trên phim chụp X-quang hệ tiết niệu không chuẩn bị (KUB)",
                "opts": [
                  "Sỏi Calci Oxalat đơn thuần",
                  "Sỏi Calci Phosphat thứ phát",
                  "Sỏi Magnesi Amoni Phosphat (Struvite)",
                  "Sỏi Acid Uric (Sỏi Urat)"
                ],
                "ans": 3,
                "exp": "Sỏi urat và sỏi cystin có độ cản quang kém hoặc hoàn toàn không cản quang trên phim X-quang thường quy; để chẩn đoán xác định cần dựa vào siêu âm hệ niệu hoặc chụp cắt lớp vi tính (CT scan) không tiêm thuốc cản quang."
              },
              {
                "q": "Câu 23\nHai phương tiện chẩn đoán hình ảnh đầu tay, phổ biến nhất để tầm soát và chẩn đoán sỏi hệ tiết niệu là",
                "opts": [
                  "Chụp niệu đồ tĩnh mạch (UIV) kết hợp chụp MRI hệ niệu chuyên sâu",
                  "Siêu âm hệ tiết niệu kết hợp chụp X-quang hệ tiết niệu không chuẩn bị (KUB)",
                  "Chụp cắt lớp vi tính đa dãy có tiêm thuốc cản quang kết hợp soi bàng quang",
                  "Chụp X-quang bụng nghiêng kết hợp xạ hình chức năng thận bằng đồng vị phóng xạ"
                ],
                "ans": 1,
                "exp": "Siêu âm phát hiện tốt sỏi thận, ứ nước đài bể thận và sỏi bàng quang; phối hợp với KUB để xác định số lượng, kích thước và tính chất cản quang của sỏi."
              },
              {
                "q": "Câu 24\nPhương pháp tán sỏi ngoài cơ thể (ESWL) được chỉ định thích hợp nhất trong trường hợp nào dưới đây",
                "opts": [
                  "Sỏi niệu quản 1/3 trên kích thước  (hoặc sỏi bể thận )",
                  "Sỏi đài dưới thận kích thước lớn  kèm theo cổ đài hẹp",
                  "Sỏi bàng quang kích thước  đang có đợt viêm bàng quang cấp",
                  "Sỏi niệu quản gây ứ nước thận ở phụ nữ đang trong thời kỳ mang thai"
                ],
                "ans": 0,
                "exp": "Tán sỏi ngoài cơ thể là can thiệp ít xâm lấn, có hiệu quả tốt đối với sỏi đài bể thận  hoặc sỏi niệu quản đoạn trên  khi đường niệu phía dưới thông thoáng. Chống chỉ định ở phụ nữ mang thai, rối loạn đông máu nặng hoặc nhiễm khuẩn tiết niệu đang hoạt động."
              },
              {
                "q": "Câu 25\nThái độ xử trí ưu tiên hàng đầu khi tiếp nhận người bệnh đang trong cơn đau quặn thận cấp tính là",
                "opts": [
                  "Khuyên uống thật nhiều nước () và vận động nhảy dây để tống sỏi",
                  "Dùng thuốc giảm đau chống viêm NSAID phối hợp thuốc giãn cơ trơn đường niệu",
                  "Chỉ định phẫu thuật mở lấy sỏi cấp cứu ngay lập tức trong đêm tiếp nhận",
                  "Dùng ngay kháng sinh phổ rộng liều cao đường tĩnh mạch đơn độc"
                ],
                "ans": 1,
                "exp": "NSAID (như Ketorolac, Diclofenac) là thuốc giảm đau hàng đầu cho cơn đau quặn thận vì vừa ức chế tổng hợp prostaglandin làm giảm dòng máu đến thận (giảm áp lực trong đài bể thận), vừa chống viêm phù nề niêm mạc niệu quản. Hạn chế uống quá nhiều nước trong lúc đau vì sẽ làm tăng căng trướng bể thận gây đau tăng.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần tiếp theo (Cơ Xương Khớp: Bệnh Gút, Viêm khớp dạng thấp, Thoái hóa đa khớp, Loãng xương).\nDưới đây là Phần 6: Cơ Xương Khớp (Bài 1 đến Bài 4, gồm Câu 1 – Câu 27). Các phương án gây nhiễu đã được biên tập lại tương đương về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan.\nĐỀ.docx+ 1"
              }
            ]
          }
        }
      },
      "co-xuong-khop": {
        "name": "Khoa Cơ xương khớp",
        "lessons": {
          "benh-gut": {
            "title": "Bài 1: Bệnh Gút (7 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Tăng nồng độ acid uric máu kèm sưng đau khớp bàn ngón chân cái cấp tính\nĐỀ.docx",
                  "Tìm thấy tinh thể urat natri trong dịch khớp hoặc trong chất lắng hạt tophi\nĐỀ.docx",
                  "Hình ảnh khuyết xương dạng hốc kèm viền xơ hóa trên phim chụp X-quang khớp\nĐỀ.docx",
                  "Cơn viêm khớp đáp ứng hoàn toàn với Colchicine liều chuẩn trong vòng 48 giờ\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Tiêu chuẩn Bennett và Wood 1968 quy định chẩn đoán xác định khi tìm thấy tinh thể urat trong dịch khớp hoặc trong hạt tophi qua kính hiển vi phân cực; nếu không có tiêu chuẩn này mới cần kết hợp các tiêu chuẩn lâm sàng và tiền sử.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Tiền sử hoặc hiện tại có ít nhất hai đợt sưng đau dữ dội khớp khỏi sau 1 - 2 tuần\nĐỀ.docx",
                  "Tiền sử hoặc hiện tại có một đợt viêm cấp khớp bàn ngón chân cái (ngón I)\nĐỀ.docx",
                  "Cứng khớp buổi sáng kéo dài trên 1 giờ và viêm đối xứng các khớp nhỏ bàn tay\nĐỀ.docx",
                  "Có hạt tophi ở vành tai/quanh khớp hoặc đáp ứng tốt với Colchicine sau 48 giờ\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Cứng khớp buổi sáng giờ và viêm đối xứng khớp bàn ngón tay là tiêu chuẩn đặc trưng của Viêm khớp dạng thấp (theo ACR 1987), không thuộc tiêu chuẩn chẩn đoán Gút của Bennett và Wood.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Bào mòn xương ở bờ khớp, hẹp khe khớp đối xứng hai bên và dính khớp\nĐỀ.docx",
                  "Cầu xương mảnh đối xứng nối liền các thân đốt sống dọc theo trục cột sống\nĐỀ.docx",
                  "Khuyết xương dạng hốc lớn, bờ tròn, nằm cạnh khớp kèm dấu hiệu móc xương\nĐỀ.docx",
                  "Mất chất khoáng đầu xương lan tỏa đồng đều nhưng không có hình ảnh khuyết xương\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Tổn thương X-quang điển hình của gút mạn là các khuyết xương hình hốc tròn hoặc bầu dục nằm ở đầu xương cạnh khớp, có bờ xơ hóa và dấu hiệu viền xương tân tạo nhô ra (\"móc xương\") do tinh thể urat lắng đọng bào mòn từ ngoài vào.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Dấu hiệu hình bóng Felson\nĐỀ.docx",
                  "Dấu hiệu đường đôi (Double contour sign)\nĐỀ.docx",
                  "Dấu hiệu gai xương rìa diện khớp\nĐỀ.docx",
                  "Dấu hiệu mỏng sụn khớp toàn bộ\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Dấu hiệu đường đôi trên siêu âm là dải tăng âm bất thường chạy song song với bề mặt xương dưới sụn, bản chất là lớp tinh thể urat lắng đọng phủ trên bề mặt sụn khớp.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Khớp sưng biến dạng do khối tophi chèn ép và phá hủy cấu trúc đầu xương\nĐỀ.docx",
                  "Thường tổn thương nhiều khớp ở chi dưới kèm theo tổn thương các khớp bàn ngón tay\nĐỀ.docx",
                  "Viêm nhiều khớp nhỏ có tính chất đối xứng hoàn toàn hai bên ngay từ đầu\nĐỀ.docx",
                  "Thường xuất hiện các đợt viêm cấp bùng phát trên nền các khớp đau biến dạng mạn\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Khác với Viêm khớp dạng thấp có tính chất viêm đối xứng điển hình, tổn thương khớp và hạt tophi trong bệnh Gút thường phân bố không đối xứng.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Allopurinol và Febuxostat\nĐỀ.docx",
                  "Colchicine và Probenecid\nĐỀ.docx",
                  "Meloxicam và Celecoxib\nĐỀ.docx",
                  "Methylprednisolone và Dexamethasone\nĐỀ.docx"
                ],
                "ans": 0,
                "exp": "Allopurinol và Febuxostat ức chế chọn lọc enzym Xanthine Oxidase, ngăn cản chuyển hóa hypoxanthine và xanthine thành acid uric trong máu.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Khống chế viêm và giảm đau trong cơn gút cấp bằng Colchicine, NSAIDs hoặc Corticoid\nĐỀ.docx",
                  "Hạ acid uric máu lâu dài nhằm mục tiêu hòa tan tinh thể urat và dự phòng tái phát\nĐỀ.docx",
                  "Dự phòng đợt cấp khi bắt đầu hạ acid uric bằng Colchicine liều thấp kéo dài 3 - 6 tháng\nĐỀ.docx",
                  "Khởi đầu thuốc hạ acid uric liều cao ngay trong ngày đầu tiên xuất hiện cơn gút cấp\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Khởi đầu thuốc hạ acid uric ngay trong cơn cấp làm biến thiên đột ngột nồng độ urat máu, khiến tinh thể bong tróc làm viêm khớp bùng phát nặng hơn; nên bắt đầu sau khi cơn cấp đã lui hoàn toàn (1 - 2 tuần sau).\nĐỀ.docx"
              }
            ]
          },
          "viem-khop-dang-thap": {
            "title": "Bài 2: Viêm khớp dạng thấp (7 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Gồm 11 tiêu chuẩn, yêu cầu cần thỏa mãn tối thiểu tiêu chuẩn\nĐỀ.docx",
                  "Gồm 7 tiêu chuẩn, cần thỏa mãn tiêu chuẩn (tiêu chuẩn 1 - 4 kéo dài tuần)\nĐỀ.docx",
                  "Gồm 6 tiêu chuẩn, yêu cầu cần thỏa mãn tối thiểu tiêu chuẩn\nĐỀ.docx",
                  "Gồm 8 tiêu chuẩn, yêu cầu cần thỏa mãn tối thiểu tiêu chuẩn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Tiêu chuẩn ACR 1987 gồm 7 tiêu chuẩn (cứng khớp buổi sáng, viêm vùng khớp, viêm khớp bàn tay, viêm đối xứng, hạt thấp, RF (+), X-quang điển hình); xác định bệnh khi thỏa mãn tiêu chuẩn, trong đó các biểu hiện lâm sàng 1 - 4 phải kéo dài ít nhất 6 tuần.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Bề mặt lớp sụn trong suốt của khớp\nĐỀ.docx",
                  "Vùng bè xương xốp ở đầu xương dưới sụn\nĐỀ.docx",
                  "Lớp màng hoạt dịch lót trong ổ khớp\nĐỀ.docx",
                  "Hệ thống dây chằng và bao khớp xơ hóa\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Viêm khớp dạng thấp khởi phát bằng tình trạng viêm tăng sinh màng hoạt dịch tạo thành mô pannus mạch máu, sau đó mô này mới xâm lấn phá hủy sụn khớp và đầu xương dưới sụn.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Viêm một khớp lớn đơn độc ở gốc chi (khớp háng, khớp vai) không có tính đối xứng\nĐỀ.docx",
                  "Viêm nhiều khớp nhỏ và vừa đối xứng, ưu thế khớp cổ tay, bàn ngón và ngón gần\nĐỀ.docx",
                  "Viêm các khớp ngón xa bàn tay đi kèm sự xuất hiện của các hạt Heberden\nĐỀ.docx",
                  "Viêm khớp có tính chất di chuyển từ khớp này sang khớp khác và tự khỏi hoàn toàn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Viêm khớp dạng thấp đặc trưng bởi viêm mạn tính nhiều khớp nhỏ và vừa ở ngọn chi (cổ tay, bàn ngón tay, ngón gần), phân bố đối xứng hai bên; rất hiếm khi tổn thương khớp ngón xa (DIP).\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Sụn vành tai hai bên, tính chất mềm nhũn và rất dễ vỡ chảy dịch màu trắng phấn\nĐỀ.docx",
                  "Mặt duỗi cẳng tay gần khuỷu hoặc trước xương chày gần gối, tính chất chắc, không đau\nĐỀ.docx",
                  "Dọc theo bao gân gót (gân Achille), sưng tấy nóng đỏ và đau nhức dữ dội trong đợt cấp\nĐỀ.docx",
                  "Mô mỡ dưới da vùng thành bụng và mặt trước đùi, ranh giới rõ và di động tự do\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Hạt thấp dưới da là biểu hiện ngoài khớp đặc hiệu, hay gặp ở mặt duỗi của các khớp chịu tì đè lực (trên xương trụ gần khuỷu, trước xương chày gần gối); hạt có mật độ chắc, dính màng xương, không đau và không tự vỡ.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Hẹp khe khớp lan tỏa nặng kèm dính cứng các xương cổ tay hoàn toàn\nĐỀ.docx",
                  "Mọc gai xương ở bờ diện khớp kèm đặc xương dưới sụn rõ rệt\nĐỀ.docx",
                  "Sưng nề mô mềm quanh khớp và mất chất khoáng đầu xương dưới sụn\nĐỀ.docx",
                  "Lệch trục bàn tay biến dạng hình gió thổi kèm bán trật khớp\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Ở giai đoạn sớm (giai đoạn I Steinbrocker), tổn thương X-quang chỉ biểu hiện bằng sưng nề mô mềm và loãng xương/mất chất khoáng ở đầu xương quanh khớp; giai đoạn muộn mới xuất hiện khuyết bào mòn bờ khớp, hẹp khe khớp và dính khớp.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Cột sống cổ (đặc biệt là khớp đội - trục C1 - C2)\nĐỀ.docx",
                  "Cột sống ngực (các khớp sườn sống và sườn mỏm ngang)\nĐỀ.docx",
                  "Cột sống thắt lưng (các diện khớp mấu sau)\nĐỀ.docx",
                  "Khớp cùng chậu hai bên đối xứng\nĐỀ.docx"
                ],
                "ans": 0,
                "exp": "Viêm khớp dạng thấp không tổn thương cột sống ngực, thắt lưng hay khớp cùng chậu. Vị trí trục xương duy nhất có màng hoạt dịch bị ảnh hưởng là cột sống cổ, đặc biệt là khớp đội - trục (C1 - C2), có thể gây biến chứng bán trật khớp chèn ép tủy cổ.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Sulfasalazine\nĐỀ.docx",
                  "Hydroxychloroquine\nĐỀ.docx",
                  "Methotrexate\nĐỀ.docx",
                  "Cyclophosphamide\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Methotrexate là \"thuốc mỏ neo\" (anchor drug) kinh điển, được chỉ định sớm ngay từ khi chẩn đoán để ngăn chặn quá trình hủy hoại sụn và biến dạng dính khớp.\nĐỀ.docx"
              }
            ]
          },
          "thoai-hoa-da-khop": {
            "title": "Bài 3: Thoái hóa đa khớp (6 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Đau nhiều về đêm gần sáng, kèm theo tình trạng sưng nóng đỏ khớp dữ dội\nĐỀ.docx",
                  "Đau kiểu cơ học: tăng khi vận động/tì đè, giảm rõ rệt khi được nghỉ ngơi\nĐỀ.docx",
                  "Đau buốt liên tục dữ dội cả khi nằm yên, không có tư thế giảm đau rõ rệt\nĐỀ.docx",
                  "Đau khớp có tính chất di chuyển liên tục từ khớp này chuyển sang khớp khác\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Thoái hóa khớp có tính chất đau cơ học do sụn mòn ma sát và quá tải cơ học: đau tăng khi đi lại, mang vác, lên xuống cầu thang và giảm đau nhanh khi nằm nghỉ ngơi.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Dấu hiệu lạo xạo hoặc lục cục trong khớp khi cử động gấp duỗi\nĐỀ.docx",
                  "Dấu hiệu \"phá rỉ khớp\" (cứng khớp thoáng qua vào buổi sáng phút)\nĐỀ.docx",
                  "Cứng khớp buổi sáng kéo dài trên 1 giờ và đau nhức tăng nhiều về đêm\nĐỀ.docx",
                  "Dấu hiệu bào gỗ dương tính khi di động xương bánh chè lên ròng rọc\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Cứng khớp buổi sáng giờ và đau tăng về đêm là triệu chứng của đau khớp kiểu viêm (gặp trong viêm khớp dạng thấp, viêm khớp tự miễn); thoái hóa khớp chỉ cứng khớp ngắn dưới 30 phút (dấu hiệu phá rỉ khớp).\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Bào mòn xương ở bờ khớp, mất chất khoáng đầu xương và dính khe khớp\nĐỀ.docx",
                  "Hẹp khe khớp không đồng đều, đặc xương dưới sụn và mọc gai xương rìa khớp\nĐỀ.docx",
                  "Mất chất khoáng đầu xương lan tỏa, hẹp khe khớp đối xứng và dính khớp\nĐỀ.docx",
                  "Hốc khuyết xương lớn ngoài bao hoạt dịch kèm theo viền xơ hóa bao quanh\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Ba dấu hiệu X-quang kinh điển của thoái hóa khớp gồm: hẹp khe khớp không đồng đều, đặc xương dưới sụn (tăng sinh bè xương do chịu lực) và tạo gai xương ở rìa sụn khớp.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Phân loại thoái hóa khớp gối Độ 1\nĐỀ.docx",
                  "Phân loại thoái hóa khớp gối Độ 2\nĐỀ.docx",
                  "Phân loại thoái hóa khớp gối Độ 3\nĐỀ.docx",
                  "Phân loại thoái hóa khớp gối Độ 4\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Phân loại Kellgren - Lawrence: Độ 1 (nghi ngờ hẹp khe khớp), Độ 2 (gai xương rõ, chưa hẹp rõ), Độ 3 (gai xương vừa, hẹp khe khớp vừa, đặc xương dưới sụn), Độ 4 (hẹp nặng dính sát, biến dạng đầu xương).\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Giảm cân, tập luyện phục hồi chức năng tăng cường cơ tứ đầu đùi\nĐỀ.docx",
                  "Tiêm huyết tương giàu tiểu cầu (PRP) hoặc Acid Hyaluronic nội khớp\nĐỀ.docx",
                  "Thuốc chống viêm không steroid (NSAIDs) bôi chỗ hoặc uống ngắn ngày\nĐỀ.docx",
                  "Dùng Corticosteroid đường toàn thân (uống hoặc tiêm mạch) kéo dài\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Thoái hóa khớp chống chỉ định dùng Corticoid toàn thân kéo dài vì không điều trị được căn nguyên mà gây tác dụng phụ nặng nề (loãng xương, hoại tử chỏm xương đùi, loét dạ dày, suy thượng thận). Corticoid chỉ dùng tiêm nội khớp ngắn hạn khi có tràn dịch viêm cấp sau khi loại trừ nhiễm khuẩn.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Methotrexate, Leflunomide, Sulfasalazine\nĐỀ.docx",
                  "Paracetamol, Ibuprofen, Celecoxib\nĐỀ.docx",
                  "Glucosamine sulfate, Diacerein, Cao bơ đậu nành không xà phòng hóa\nĐỀ.docx",
                  "Allopurinol, Colchicine, Febuxostat\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "SYSADOA (Symptomatic Slow Acting Drugs in Osteoarthritis) là nhóm thuốc cải thiện triệu chứng tác dụng chậm và hỗ trợ chuyển hóa sụn khớp gồm: Glucosamine sulfate tinh khiết, Diacerein và Piascledine.\nĐỀ.docx"
              }
            ]
          },
          "loang-xuong": {
            "title": "Bài 4: Loãng xương (7 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Mật độ xương T-score\nĐỀ.docx",
                  "Mật độ xương T-score từ đến\nĐỀ.docx",
                  "Mật độ xương T-score\nĐỀ.docx",
                  "Mật độ xương T-score\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Tiêu chuẩn WHO trên DEXA: Bình thường (); Thiếu xương (); Loãng xương ().\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Chỉ số T-score đo bằng DEXA đơn thuần tại một vị trí\nĐỀ.docx",
                  "Chỉ số T-score kèm tiền sử hoặc hiện tại có gãy xương bệnh lý\nĐỀ.docx",
                  "Chỉ số Z-score kèm theo giảm khối lượng cơ ở người già\nĐỀ.docx",
                  "Nguy cơ gãy xương trong vòng 10 năm tính theo mô hình FRAX\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Loãng xương nặng (loãng xương có biến chứng) được định nghĩa khi có tiêu chuẩn loãng xương () kèm theo có một hoặc nhiều vị trí gãy xương sau chấn thương nhẹ (lún xẹp đốt sống, gãy cổ xương đùi...).\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Gãy nhiều cung xương sườn bên\nĐỀ.docx",
                  "Lún xẹp thân đốt sống ngực và thắt lưng\nĐỀ.docx",
                  "Gãy thân xương trụ và xương mác\nĐỀ.docx",
                  "Gãy một phần ba ngoài xương đòn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Lún xẹp đốt sống là biến chứng gãy xương thường gặp nhất do loãng xương ở người cao tuổi, gây gù vẹo cột sống, đau lưng và giảm chiều cao; gãy cổ xương đùi đứng thứ hai nhưng có tỷ lệ tàn tật và tử vong cao nhất.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Chẩn đoán xác định loãng xương nặng và chỉ định truyền Bisphosphonate ngay\nĐỀ.docx",
                  "Tư vấn đo lại mật độ xương bằng phương pháp DEXA ở cột sống và cổ xương đùi\nĐỀ.docx",
                  "Khẳng định mật độ xương hoàn toàn bình thường và không cần can thiệp gì thêm\nĐỀ.docx",
                  "Chỉ định nhập viện phẫu thuật tạo hình thay khớp háng hai bên dự phòng gãy\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Siêu âm gót chân chỉ là phương tiện sàng lọc cộng đồng, không dùng để chẩn đoán xác định hay chỉ định điều trị thuốc đặc hiệu; bệnh nhân cần được đo chuẩn bằng DEXA tại cột sống thắt lưng và cổ xương đùi.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Alendronate (nhóm Bisphosphonate)\nĐỀ.docx",
                  "Denosumab (kháng thể kháng RANKL)\nĐỀ.docx",
                  "Zoledronic acid dạng truyền tĩnh mạch\nĐỀ.docx",
                  "Dẫn xuất hormone cận giáp PTH (Teriparatide)\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Bisphosphonate (Alendronate, Zoledronic acid) và Denosumab là thuốc ức chế hủy cốt bào (chống hủy xương); Teriparatide và Abaloparatide là các dẫn xuất PTH thuộc nhóm thuốc đồng hóa kích thích tạo cốt bào tăng tạo xương.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Phụ nữ sau mãn kinh hoặc nam giới tuổi có T-score\nĐỀ.docx",
                  "Người bệnh có tiền sử gãy đốt sống hoặc gãy cổ xương đùi do chấn thương nhẹ\nĐỀ.docx",
                  "Giảm mật độ xương kèm xác suất gãy xương cao theo mô hình FRAX\nĐỀ.docx",
                  "Tất cả các trường hợp bệnh nhân kể trên\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Phác đồ Bộ Y tế chỉ định điều trị thuốc chống loãng xương đặc hiệu cho cả 3 nhóm: có T-score ; hoặc đã có gãy xương bệnh lý (gãy đốt sống, cổ xương đùi); hoặc thiểu xương kèm FRAX nguy cơ cao.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Bổ sung Calci nguyên tố () và Vitamin D ()\nĐỀ.docx",
                  "Sử dụng kháng sinh phổ rộng đường uống dự phòng\nĐỀ.docx",
                  "Dùng thuốc chống viêm NSAIDs liều cao hàng ngày\nĐỀ.docx",
                  "Tiêm bắp Vitamin B12 liều cao theo chu kỳ tháng\nĐỀ.docx"
                ],
                "ans": 0,
                "exp": "Bổ sung đầy đủ calci nguyên tố và vitamin D là điều kiện tiên quyết bắt buộc để cung cấp đủ nguyên liệu khoáng hóa xương khi sử dụng bất kỳ thuốc chống loãng xương đặc hiệu nào.\nĐỀ.docx\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần tiếp theo (Nội Hô hấp: Viêm phế quản cấp, Viêm phổi cộng đồng, COPD, Hen phế quản, Thủ thuật chức năng hô hấp).\nDưới đây là Phần 7: Nội Hô hấp (Bài 1 đến Bài 5, gồm Câu 1 – Câu 25). Các phương án gây nhiễu đã được biên tập lại cân bằng về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "ho-hap": {
        "name": "Khoa Hô hấp",
        "lessons": {
          "viem-phe-quan-cap-noi": {
            "title": "Bài 1: Viêm phế quản cấp (4 câu)",
            "questions": [
              {
                "q": "Câu 1\nCăn nguyên vi sinh vật phổ biến nhất gây viêm phế quản cấp ở người trưởng thành khỏe mạnh là",
                "opts": [
                  "Các trực khuẩn gram âm đường ruột thường trú",
                  "Các loại virus đường hô hấp (Cúm, RSV, Adenovirus)",
                  "Phế cầu khuẩn gram dương (Streptococcus pneumoniae)",
                  "Nấm men cơ hội đường hô hấp (Candida albicans)"
                ],
                "ans": 1,
                "exp": "Hơn 90% các trường hợp viêm phế quản cấp ở người có chức năng miễn dịch bình thường là do virus đường hô hấp gây ra; vi khuẩn chỉ chiếm tỷ lệ nhỏ (< 10%)."
              },
              {
                "q": "Câu 2\nDấu hiệu lâm sàng và cận lâm sàng giúp phân biệt viêm phế quản cấp với viêm phổi mắc phải cộng đồng là",
                "opts": [
                  "Bệnh nhân có biểu hiện ho nhiều kèm theo sốt cao và đau rát họng",
                  "Khạc đờm đặc màu vàng đục hoặc xanh kèm theo mệt mỏi toàn thân",
                  "Khám không có hội chứng đông đặc và X-quang không có thâm nhiễm",
                  "Xét nghiệm công thức máu ngoại vi có hiện tượng tăng nhẹ bạch cầu"
                ],
                "ans": 2,
                "exp": "Viêm phế quản cấp tổn thương khu trú ở niêm mạc phế quản nên không có hội chứng đông đặc trên lâm sàng và X-quang ngực hoàn toàn không có hình mờ thâm nhiễm phế nang."
              },
              {
                "q": "Câu 3\nThái độ xử trí bằng thuốc kháng sinh đúng đắn trong viêm phế quản cấp ở người khỏe mạnh, không bệnh nền là",
                "opts": [
                  "Chỉ định kháng sinh nhóm Cephalosporin thế hệ 3 ngay từ ngày đầu có ho",
                  "Dùng ngay phác đồ phối hợp một Macrolide với một Quinolone hô hấp",
                  "Không khuyến cáo dùng kháng sinh thường quy, chỉ điều trị triệu chứng",
                  "Bắt buộc dùng kháng sinh ngay khi người bệnh bắt đầu khạc đờm màu đục"
                ],
                "ans": 2,
                "exp": "Viêm phế quản cấp chủ yếu do virus và tự giới hạn; lạm dụng kháng sinh không rút ngắn bệnh mà làm tăng đề kháng thuốc; chỉ định kháng sinh khi nghi ngờ ho gà, suy giảm miễn dịch hoặc có bệnh tim phổi mạn kèm theo."
              },
              {
                "q": "Câu 4\nThuốc nào sau đây KHÔNG ĐƯỢC khuyến cáo sử dụng thường quy trong điều trị viêm phế quản cấp không có co thắt phế quản",
                "opts": [
                  "Thuốc hạ sốt giảm đau Paracetamol",
                  "Bù nước điện giải và nghỉ ngơi hợp lý",
                  "Thuốc giảm ho thảo dược hoặc làm loãng đờm",
                  "Thuốc Corticosteroid đường uống hoặc tiêm"
                ],
                "ans": 3,
                "exp": "Corticoid toàn thân không mang lại lợi ích trong viêm phế quản cấp thông thường không có co thắt cơ trơn phế quản, đồng thời tiềm ẩn nhiều tác dụng phụ bất lợi."
              }
            ]
          },
          "viem-phoi-cong-dong-noi": {
            "title": "Bài 2: Viêm phổi mắc phải cộng đồng (6 câu)",
            "questions": [
              {
                "q": "Câu 5\nViêm phổi mắc phải cộng đồng (CAP) được định nghĩa là tình trạng nhiễm trùng cấp tính của nhu mô phổi",
                "opts": [
                  "Xuất hiện sau khi người bệnh nhập viện điều trị nội trú trên 48 giờ",
                  "Xuất hiện ngoài bệnh viện hoặc trong vòng 48 giờ kể từ khi nhập viện",
                  "Xảy ra ở người bệnh đang thở máy xâm nhập qua ống nội khí quản",
                  "Khởi phát ở các bệnh nhân điều trị nội trú dài ngày chuẩn bị xuất viện"
                ],
                "ans": 1,
                "exp": "Viêm phổi cộng đồng là nhiễm khuẩn cấp tính của nhu mô phổi (phế nang, mô kẽ) mắc phải ngoài môi trường bệnh viện, xuất hiện ngoài cộng đồng hoặc trong vòng 48 giờ đầu sau khi nhập viện."
              },
              {
                "q": "Câu 6\nCăn nguyên vi khuẩn kinh điển thường gặp nhất gây viêm phổi mắc phải cộng đồng ở mọi lứa tuổi là",
                "opts": [
                  "Phế cầu khuẩn Gram dương (Streptococcus pneumoniae)",
                  "Trực khuẩn mủ xanh kháng thuốc (Pseudomonas aeruginosa)",
                  "Trực khuẩn Gram âm đường ruột (Klebsiella pneumoniae)",
                  "Tụ cầu vàng đa kháng kháng sinh (MRSA) mắc phải bệnh viện"
                ],
                "ans": 0,
                "exp": "Phế cầu khuẩn (Streptococcus pneumoniae) chiếm từ 30 - 50% các trường hợp viêm phổi cộng đồng xác định được căn nguyên vi sinh."
              },
              {
                "q": "Câu 7\nHội chứng thực thể điển hình khi khám phổi ở bệnh nhân viêm phổi thùy điển hình là",
                "opts": [
                  "Tam chứng Galliard (gõ vang, rung thanh giảm, rì rào phế nang mất)",
                  "Hội chứng ba giảm (gõ đục, rung thanh giảm, rì rào phế nang giảm)",
                  "Hội chứng đông đặc (rung thanh tăng, gõ đục, phế nang giảm) kèm ran nổ",
                  "Lồng ngực hình thùng, rì rào phế nang giảm đều cả hai bên phế trường"
                ],
                "ans": 2,
                "exp": "Nhu mô phổi đông đặc dẫn truyền âm tốt hơn làm rung thanh tăng, ngăn cản thông khí làm gõ đục, rì rào phế nang giảm và xuất hiện tiếng thổi ống kèm ran nổ bóc tách phế nang ở cuối thì hít vào."
              },
              {
                "q": "Câu 8\nThang điểm CURB-65 dùng để phân tầng mức độ nặng và định hướng nơi điều trị cho bệnh nhân viêm phổi cộng đồng bao gồm các yếu tố sau, TRỪ",
                "opts": [
                  "Rối loạn ý thức hoặc lú lẫn cấp tính (Confusion)",
                  "Nồng độ Urê máu toàn phần vượt quá 7 mmol/l (Urea)",
                  "Nhịp thở  30 lần/phút hoặc huyết áp tụt kẹt (RR & BP)",
                  "Số lượng bạch cầu trong máu ngoại vi tăng trên 20 G/l"
                ],
                "ans": 3,
                "exp": "CURB-65 gồm 5 thông số: C (Confusion), U (Urea > 7 mmol/l), R (Respiratory rate  30), B (HATT < 90 hoặc HATTr  60 mmHg), 65 (Tuổi  65); số lượng bạch cầu không nằm trong thang điểm này."
              },
              {
                "q": "Câu 9\nNguyên tắc điều trị kháng sinh trong viêm phổi mắc phải cộng đồng là",
                "opts": [
                  "Phải đợi kết quả nuôi cấy đờm và kháng sinh đồ mới bắt đầu điều trị",
                  "Dùng kháng sinh kinh nghiệm sớm nhất có thể trong vòng 4 giờ đầu",
                  "Luôn ưu tiên sử dụng kháng sinh đường uống cho mọi người bệnh nội trú",
                  "Bắt buộc duy trì kháng sinh tối thiểu 21 ngày cho mọi mức độ lâm sàng"
                ],
                "ans": 1,
                "exp": "Khởi đầu kháng sinh sớm theo kinh nghiệm trong 4 giờ đầu giúp giảm rõ rệt tỷ lệ tử vong và biến chứng; thời gian điều trị thông thường kéo dài 5 - 7 ngày khi bệnh nhân đã đáp ứng lâm sàng tốt."
              },
              {
                "q": "Câu 10\nLựa chọn kháng sinh theo kinh nghiệm ban đầu điều trị ngoại trú cho người bệnh viêm phổi cộng đồng mức độ nhẹ, không bệnh nền là",
                "opts": [
                  "Kháng sinh đường uống nhóm Quinolone (như Ciprofloxacin)",
                  "Amoxicillin liều cao hoặc thay bằng Macrolide/Doxycycline",
                  "Phối hợp Carbapenem tiêm tĩnh mạch với Glycopeptide liều cao",
                  "Sử dụng kháng sinh nhóm Aminoglycosid tiêm bắp ngắt quãng"
                ],
                "ans": 1,
                "exp": "Hướng dẫn của Bộ Y tế và ATS/IDSA khuyến cáo: Amoxicillin liều cao (1g x 3 lần/ngày) diệt phế cầu rất tốt; nhóm Macrolide (Azithromycin/Clarithromycin) hoặc Doxycycline được ưu tiên khi nghi ngờ vi khuẩn không điển hình hoặc bệnh nhân dị ứng beta-lactam."
              }
            ]
          },
          "copd-noi": {
            "title": "Bài 3: Bệnh phổi tắc nghẽn mạn tính (COPD) (6 câu)",
            "questions": [
              {
                "q": "Câu 11\nTiêu chuẩn vàng để chẩn đoán xác định tắc nghẽn thông khí cố định trong COPD trên kết quả đo chức năng hô hấp là",
                "opts": [
                  "Chỉ số Tiffeneau ()  sau test hồi phục phế quản",
                  "Chỉ số Gaensler ()  sau test hồi phục phế quản",
                  "Dung tích sống gắng sức () giảm  so với giá trị dự đoán",
                  "tăng  và  sau khi dùng thuốc giãn phế quản"
                ],
                "ans": 1,
                "exp": "Tiêu chuẩn xác định COPD theo GOLD là tỷ lệ  đo được sau khi làm test hồi phục phế quản, chứng minh có sự giới hạn luồng khí thở ra không hồi phục hoàn toàn."
              },
              {
                "q": "Câu 12\nTheo phân loại mức độ tắc nghẽn đường thở của GOLD dựa vào  sau test hồi phục, mức độ GOLD 3 (nặng) là",
                "opts": [
                  "giá trị lý thuyết dự đoán",
                  "giá trị lý thuyết dự đoán",
                  "giá trị lý thuyết dự đoán",
                  "giá trị lý thuyết dự đoán"
                ],
                "ans": 2,
                "exp": "Phân loại mức độ tắc nghẽn theo GOLD: GOLD 1 (), GOLD 2 (), GOLD 3 (), GOLD 4 ()."
              },
              {
                "q": "Câu 13\nTheo chiến lược toàn cầu về COPD (GOLD 2023/2024), bệnh nhân được xếp vào nhóm E (nguy cơ cao xuất hiện đợt cấp) khi",
                "opts": [
                  "Điểm khó thở mMRC  và không có đợt cấp nào trong 12 tháng qua",
                  "Điểm đánh giá CAT  và có 1 đợt cấp nhẹ điều trị tại nhà",
                  "Có  đợt cấp trung bình hoặc  đợt cấp nhập viện trong 12 tháng",
                  "Chỉ số  đo được bất kể tiền sử xuất hiện đợt cấp"
                ],
                "ans": 2,
                "exp": "Phân nhóm ABE của GOLD quy tụ toàn bộ bệnh nhân có nguy cơ đợt cấp vào nhóm E: bất kỳ ai có  đợt cấp trung bình hoặc  đợt cấp phải nhập viện trong năm qua đều thuộc nhóm E, không phụ thuộc điểm triệu chứng."
              },
              {
                "q": "Câu 14\nPhác đồ điều trị duy trì khởi đầu được khuyến cáo ưu tiên cho bệnh nhân COPD thuộc nhóm E là",
                "opts": [
                  "Đơn trị liệu bằng thuốc giãn phế quản tác dụng ngắn khi có khó thở",
                  "Đơn trị liệu bằng thuốc kháng cholinergic tác dụng kéo dài LAMA",
                  "Phối hợp LABA + LAMA (cân nhắc thêm ICS nếu bạch cầu ái toan cao)",
                  "Sử dụng Corticosteroid đường uống liều thấp duy trì liên tục kéo dài"
                ],
                "ans": 2,
                "exp": "Nhóm E ưu tiên khởi đầu bộ đôi giãn phế quản LABA + LAMA; nếu bạch cầu ái toan máu , phác đồ bộ ba (LABA + LAMA + ICS) được chỉ định ưu tiên để giảm nguy cơ đợt cấp."
              },
              {
                "q": "Câu 15\nTam chứng Anthonisen xác định đợt cấp COPD bao gồm",
                "opts": [
                  "Tăng mức độ khó thở, tăng thể tích đờm và đờm chuyển thành đờm mủ",
                  "Xuất hiện ho ra máu, đau ngực kiểu màng phổi và sốt cao liên tục",
                  "Khó thở thì hít vào, nghe tiếng rít thanh quản và tím tái ngoại vi",
                  "Bụng trướng căng phù, xuất hiện phù mềm hai chi dưới và gan to"
                ],
                "ans": 0,
                "exp": "Ba triệu chứng chính của đợt cấp COPD theo tiêu chuẩn Anthonisen gồm: khó thở tăng, lượng đờm tăng và đờm đổi màu/chuyển mủ; có đủ cả 3 triệu chứng là đợt cấp mức độ nặng có chỉ định bắt buộc dùng kháng sinh."
              },
              {
                "q": "Câu 16\nBiện pháp điều trị duy nhất được chứng minh giúp cải thiện tỷ lệ sống còn ở bệnh nhân COPD có suy hô hấp mạn tính là",
                "opts": [
                  "Khí dung thuốc kích thích beta-2 liều cao ngắt quãng liên tục",
                  "Uống thuốc giãn phế quản nhóm Xanthine tác dụng kéo dài hàng ngày",
                  "Liệu pháp oxy dài hạn tại nhà ( 15h/ngày) kết hợp cai thuốc lá",
                  "Sử dụng phác đồ kháng sinh phổ rộng dự phòng định kỳ hàng tuần"
                ],
                "ans": 2,
                "exp": "Cai thuốc lá làm chậm suy giảm chức năng phổi; thở oxy dài hạn tại nhà (LTOT ) khi có giảm oxy máu mạn () là biện pháp duy nhất giúp cải thiện huyết động phổi và kéo dài đời sống cho bệnh nhân."
              }
            ]
          },
          "hen-phe-quan-noi": {
            "title": "Bài 4: Hen phế quản (6 câu)",
            "questions": [
              {
                "q": "Câu 17\nHen phế quản là bệnh lý viêm mạn tính đường thở đặc trưng bởi",
                "opts": [
                  "Sự tắc nghẽn luồng khí thở ra cố định không thể hồi phục hoàn toàn",
                  "Tăng phản ứng phế quản và tắc nghẽn luồng khí có tính hồi phục",
                  "Sự phá hủy vách phế nang gây giãn rộng vĩnh viễn các túi khí phổi",
                  "Quá trình viêm hoại tử mủ thành phế quản gây giãn phế quản thứ phát"
                ],
                "ans": 1,
                "exp": "Định nghĩa GINA nêu rõ bản chất hen là phản ứng viêm mạn tính đường hô hấp, đặc trưng bởi tăng tính đáp ứng đường thở và giới hạn luồng khí thở ra có thể thay đổi, hồi phục tự nhiên hoặc sau khi dùng thuốc giãn phế quản."
              },
              {
                "q": "Câu 18\nTiêu chuẩn xác định test hồi phục phế quản dương tính hỗ trợ chẩn đoán hen phế quản khi đo hô hấp ký là",
                "opts": [
                  "tăng thêm  và tăng  sau khi hít thuốc giãn phế quản",
                  "Chỉ số Tiffeneau () tăng thêm  so với giá trị đo trước",
                  "tăng  VÀ  so với giá trị trước test (với Salbutamol)",
                  "Dung tích sống gắng sức () tăng thêm  so với mức ban đầu"
                ],
                "ans": 2,
                "exp": "Test hồi phục phế quản dương tính ở người lớn khi sau khí dung 400 mcg Salbutamol, chỉ số  tăng đồng thời cả hai điều kiện:  và ."
              },
              {
                "q": "Câu 19\nTriệu chứng lâm sàng cơn khó thở điển hình của bệnh hen phế quản là",
                "opts": [
                  "Khó thở liên tục cả ngày lẫn đêm và không thay đổi theo mùa hay dị nguyên",
                  "Khó thở kịch phát thì thở ra, về đêm gần sáng, nghe có tiếng cò cử ran rít",
                  "Khó thở xuất hiện đột ngột ở thì hít vào kèm theo tiếng thở rít thanh quản",
                  "Khó thở xuất hiện khi nằm đầu thấp, kèm theo ho khạc đờm bọt màu hồng"
                ],
                "ans": 1,
                "exp": "Co thắt cơ trơn phế quản trong hen gây hẹp lòng dẫn khí chủ yếu ở thì thở ra, hay xuất hiện về đêm hoặc sau tiếp xúc dị nguyên, tạo tiếng cò cử và ran rít ran ngáy lan tỏa khắp phổi."
              },
              {
                "q": "Câu 20\nDấu hiệu lâm sàng nào sau đây cảnh báo cơn hen phế quản mức độ NGUY KỊCH đe dọa ngừng thở",
                "opts": [
                  "Tần số nhịp tim tăng nhanh khoảng 110 chu kỳ/phút",
                  "Co kéo cơ liên sườn và cơ ức đòn chũm mức độ vừa",
                  "\"Lồng ngực im lặng\" (phổi câm, rì rào phế nang mất)",
                  "Người bệnh chỉ có thể nói từng câu ngắn ngắt quãng"
                ],
                "ans": 2,
                "exp": "Hiện tượng \"phổi câm\" (silent chest) xảy ra khi tắc nghẽn phế quản quá khốc liệt hoặc cơ hô hấp kiệt sức hoàn toàn, lượng khí lưu thông gần như bằng không khiến lồng ngực giãn căng bất động và mất hoàn toàn tiếng ran/rì rào phế nang; đây là dấu hiệu báo trước ngừng thở."
              },
              {
                "q": "Câu 21\nThuốc điều trị nền tảng quan trọng nhất để kiểm soát viêm và dự phòng cơn hen phế quản theo GINA là",
                "opts": [
                  "Thuốc kích thích beta-2 tác dụng ngắn (SABA) dạng xịt dùng đơn độc",
                  "Thuốc giãn phế quản nhóm dẫn xuất Xanthine đường uống dài hạn",
                  "Corticosteroid dạng phun hít tại chỗ (ICS)",
                  "Kháng sinh phổ rộng đường uống dùng theo đợt dự phòng kéo dài"
                ],
                "ans": 2,
                "exp": "Bản chất của hen là phản ứng viêm đường thở; ICS là thuốc chống viêm cốt lõi bắt buộc phải có để kiểm soát bệnh và giảm thiểu tử vong do cơn hen phế quản."
              },
              {
                "q": "Câu 22\nNgười phụ nữ đang điều trị duy trì hen phế quản ổn định phát hiện có thai, thái độ xử trí đúng đắn nhất là",
                "opts": [
                  "Ngừng ngay lập tức toàn bộ các thuốc hít do lo ngại dị tật cho thai nhi",
                  "Chuyển sang sử dụng các bài thuốc đông y cổ truyền để an thai",
                  "Tiếp tục duy trì phác đồ thuốc hít (ICS hoặc ICS/LABA) đều đặn",
                  "Dừng thuốc kiểm soát và chỉ dùng thuốc cắt cơn khi có khó thở dữ dội"
                ],
                "ans": 2,
                "exp": "Cơn hen cấp gây thiếu oxy máu cho thai nhi nguy hiểm hơn nhiều so với tác dụng phụ của thuốc hít; các thuốc ICS (như Budesonide) đã được chứng minh an toàn và cần duy trì liên tục trong suốt thai kỳ."
              }
            ]
          },
          "tham-do-chuc-nang-ho-hap": {
            "title": "Bài 5: Thủ thuật & thăm dò chức năng hô hấp (3 câu)",
            "questions": [
              {
                "q": "Câu 23\nVị trí chọc hút khí màng phổi cấp cứu bằng kim trong tràn khí màng phổi áp lực là",
                "opts": [
                  "Khoang liên sườn 8 - 9 trên đường nách sau",
                  "Khoang liên sườn 2 đường giữa đòn (hoặc KLS 4 - 5 đường nách giữa)",
                  "Khoang liên sườn 5 sát bờ xương ức hai bên",
                  "Khoang liên sườn 7 trên đường nách trước"
                ],
                "ans": 1,
                "exp": "Tràn khí màng phổi áp lực gây sốc trụy mạch cần giải áp tối khẩn cấp bằng chọc kim lớn vào KLS 2 đường giữa đòn (bờ trên xương sườn dưới) hoặc KLS 4 - 5 đường nách giữa bên tràn khí để giải phóng áp lực khí trước khi đặt dẫn lưu."
              },
              {
                "q": "Câu 24\nVị trí chọc dò dịch màng phổi thông thường để chẩn đoán và tháo dịch điều trị là",
                "opts": [
                  "Khoang liên sườn 2 trên đường giữa đòn bên tổn thương",
                  "Khoang liên sườn 4 trên đường nách trước bên tổn thương",
                  "Khoang liên sườn 8 - 9 đường nách sau hoặc dưới góc vai",
                  "Bất kỳ vị trí nào nghe thấy tiếng gõ vang của khoang ngực"
                ],
                "ans": 2,
                "exp": "Bệnh nhân ngồi cúi ra trước; chọc dịch tại vị trí thấp nhất có đọng dịch (thường ở KLS 8 - 9 đường nách sau hoặc dưới vai), kim đi sát bờ trên xương sườn dưới để tránh tổn thương bó mạch thần kinh liên sườn."
              },
              {
                "q": "Câu 25\nChống chỉ định tuyệt đối của thủ thuật nội soi phế quản ống mềm là",
                "opts": [
                  "Bệnh nhân có biểu hiện ho ra máu tái diễn chưa xác định vị trí tổn thương",
                  "Tràn dịch màng phổi dịch tiết chưa rõ căn nguyên vi sinh hay tế bào",
                  "Suy hô hấp nặng không kiểm soát, loạn nhịp tim ác tính, rối loạn đông máu",
                  "Xuất hiện nốt mờ đơn độc ở nhu mô phổi trên phim chụp cắt lớp vi tính ngực"
                ],
                "ans": 2,
                "exp": "Nội soi phế quản làm giảm oxy máu và kích thích phản xạ tim mạch; chống chỉ định tuyệt đối khi thiếu oxy máu trơ không thể duy trì oxy an toàn, rối loạn nhịp tim nguy hiểm hoặc rối loạn đông máu nặng chưa điều chỉnh vì nguy cơ chảy máu ồ ạt.\nKhi bạn đã xem xét xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Thần kinh học: Đột quỵ não, Đau đầu, Khám 12 đôi dây thần kinh sọ).\nDưới đây là Phần 8: Thần kinh học (Bài 1 đến Bài 3, gồm Câu 1 – Câu 25). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật tương đương với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "hen-phe-quan": {
            "title": "Hen phế quản (Asthma) - 35 câu",
            "questions": [
              {
                "q": "Theo GINA, SABA đơn trị liệu là phương pháp được ưu tiên cho bệnh nhân hen nhẹ để giảm chi phí và tác dụng phụ của corticosteroid.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "GINA không còn khuyến cáo SABA đơn trị liệu cho bất kỳ bậc điều trị nào do làm tăng nguy cơ đợt cấp nặng và tử vong. Lựa chọn ưu tiên (Track 1) là ICS-formoterol liều thấp khi cần."
              },
              {
                "q": "Chẩn đoán hen ở trẻ em từ 5 tuổi trở xuống chủ yếu dựa vào các tiêu chuẩn lâm sàng thay vì đo chức năng hô hấp.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Trẻ ≤ 5 tuổi khó thực hiện đúng kỹ thuật đo hô hấp ký; chẩn đoán chủ yếu dựa vào kiểu hình lâm sàng khò khè tái diễn và đáp ứng thử nghiệm điều trị kiểm soát bằng ICS."
              },
              {
                "q": "Việc sử dụng Fenoterol hiện nay được GINA khuyến cáo rộng rãi như một thuốc cắt cơn an toàn.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Fenoterol là SABA đồng vận beta-2 chọn lọc kém hơn, có nguy cơ tim mạch cao và từng liên quan đến dịch tễ tử vong do hen; hiện không còn được ưu tiên."
              },
              {
                "q": "Ở người lớn, chỉ số \text{FeNO} ≥ 50\text{ ppb} có thể hỗ trợ chẩn đoán kiểu hình hen viêm đường thở Type 2.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "FeNO > 50\text{ ppb} ở người lớn phản ánh tình trạng viêm đường thở do bạch cầu ái toan (Type 2 inflammation)."
              },
              {
                "q": "Liệu pháp MART (duy trì và cắt cơn bằng ICS-formoterol) có thể áp dụng cho trẻ em từ 6 đến 11 tuổi ở các Bước 3 và 4.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "GINA khuyến cáo MART với Budesonide/Formoterol liều rất thấp/thấp cho trẻ 6–11 tuổi từ Bậc 3 trở lên."
              },
              {
                "q": "Phụ nữ mang thai mắc hen nên được khuyến khích giảm liều ICS ngay khi có thể để tránh ảnh hưởng đến thai nhi.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Cần duy trì kiểm soát hen tích cực; nguy cơ do cơn hen nặng gây thiếu oxy cho thai nhi lớn hơn rất nhiều so với nguy cơ từ ICS."
              },
              {
                "q": "Magnesi sulfat dạng phun khí dung hiện nay được khuyến cáo thường quy để điều trị đợt cấp hen nặng tại khoa cấp cứu.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Khuyến cáo ưu tiên là Magnesi sulfat truyền tĩnh mạch (MgSO₄ IV liều 2g truyền 20 phút), khí dung không được dùng thường quy."
              },
              {
                "q": "Theo GINA, mục tiêu bão hòa oxy (SpO₂) cho trẻ em 6–11 tuổi trong đợt cấp hen là 94 - 98%.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Mục tiêu oxy ở trẻ em là 94 - 98%, trong khi ở người lớn là 93 - 95%."
              },
              {
                "q": "Việc sử dụng thuốc chẹn beta (beta-blockers) đường uống là chống chỉ định tuyệt đối cho tất cả bệnh nhân hen.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chẹn beta không chọn lọc bị chống chỉ định, nhưng chẹn chọn lọc tim (\beta_1) có thể cân nhắc cẩn thận trong các chỉ định tim mạch bắt buộc (sau nhồi máu cơ tim, suy tim)."
              },
              {
                "q": "Đo nồng độ eosinophil trong đờm là một xét nghiệm phổ biến và dễ thực hiện tại mọi cơ sở y tế tuyến cơ sở.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Xét nghiệm tế bào đờm đòi hỏi kỹ thuật ly giải và chuyên gia tế bào học lành nghề, chỉ thực hiện ở các trung tâm chuyên sâu."
              },
              {
                "q": "Một bệnh nhân nam 25 tuổi, triệu chứng hen xuất hiện ít (dưới 2 ngày/tuần), chức năng phổi bình thường. Theo GINA Track 1 (lựa chọn ưu tiên), bước điều trị ban đầu nào là phù hợp nhất?",
                "opts": [
                  "ICS-formoterol liều thấp khi cần thiết",
                  "ICS liều thấp hàng ngày cộng với SABA khi cần",
                  "SABA đơn thuần khi cần thiết",
                  "ICS-formoterol liều trung bình hàng ngày"
                ],
                "ans": 0,
                "exp": "Track 1 Bậc 1–2 chỉ định dùng ICS-formoterol liều thấp khi có triệu chứng."
              },
              {
                "q": "Trẻ 4 tuổi có tiền sử khò khè tái phát 3 lần trong năm qua, thường xuất hiện khi nhiễm virus. Trẻ đáp ứng tốt với thuốc giãn phế quản khí dung. Chẩn đoán nào nên được ghi nhận?",
                "opts": [
                  "Viêm phế quan co thắt",
                  "Viêm tiểu phế quản",
                  "Nghi ngờ hen phế quản / Hen trẻ em",
                  "Viêm phổi hít"
                ],
                "ans": 2,
                "exp": "Khò khè tái phát ≥ 3 lần/năm kèm đáp ứng tốt với thuốc dãn phế quản gợi ý mạnh mẽ hen phế quản ở trẻ nhỏ."
              },
              {
                "q": "Một bệnh nhân đang sử dụng liệu pháp MART với ICS-formoterol liều thấp. Khi cơn hen bắt đầu xấu đi, bệnh nhân nên làm gì theo kế hoạch hành động?",
                "opts": [
                  "Uống ngay kháng sinh liều cao",
                  "Tiếp tục liều duy trì và dùng thêm các nhát hít ICS-formoterol khi cần để cắt cơn",
                  "Ngừng thuốc duy trì và chuyển sang chỉ dùng SABA",
                  "Chỉ tăng gấp đôi liều duy trì buổi sáng"
                ],
                "ans": 1,
                "exp": "Nguyên lý của MART là dùng chính bình xịt ICS-formoterol làm thuốc cắt cơn, giúp bổ sung cả thuốc giãn phế quản và liều chống viêm ICS ngay thời điểm nguy cơ."
              },
              {
                "q": "Bệnh nhân nam 60 tuổi, tiền sử hút thuốc lá 30 bao-năm, có triệu chứng khó thở khi gắng sức và khò khè biến đổi. Chỉ số FEV₁/FVC sau test giãn phế quản là < 0.70, nhưng FEV₁ tăng > 12% và > 200\text{ ml}. Chẩn đoán nghi ngờ nhất là?",
                "opts": [
                  "Hen phế quản đơn thuần",
                  "Chồng lấp các đặc điểm hen và COPD (Asthma-COPD overlap)",
                  "Suy tim sung huyết",
                  "COPD đơn thuần"
                ],
                "ans": 1,
                "exp": "Tắc nghẽn không hồi phục hoàn toàn (FEV₁/FVC < 0.7) trên người hút thuốc kèm tính hồi phục phế quản đáng kể và khò khè biến đổi gợi ý hội chứng chồng lấp."
              },
              {
                "q": "Bệnh nhân mắc hen nặng, đã dùng ICS-LABA liều cao tối ưu nhưng vẫn không kiểm soát được triệu chứng. Xét nghiệm thấy Eosinophil máu là 450\text{ tế bào}/\\mu\text{L}. Bước tiếp theo nên là?",
                "opts": [
                  "Tiếp tục tăng liều ICS vượt mức tối đa",
                  "Ngừng tất cả thuốc xịt và chỉ dùng liệu pháp tâm lý",
                  "Chuyển tuyến chuyên khoa để đánh giá kiểu hình và cân nhắc liệu pháp sinh học (Biologics)",
                  "Bắt đầu duy trì Prednisolone đường uống vĩnh viễn"
                ],
                "ans": 2,
                "exp": "Hen nặng không kiểm soát có Eosinophil máu ≥ 300/\\mu\text{L} là ứng viên cho liệu pháp sinh học nhắm vào IL-5/IL-5R hoặc IL-4R."
              },
              {
                "q": "Bệnh nhân nữ 30 tuổi, sau khi uống Aspirin để giảm đau đầu thì xuất hiện cơn co thắt phế quản nặng kèm polyp mũi tái phát. Bệnh nhân này có khả năng mắc hội chứng gì?",
                "opts": [
                  "Hen do gắng sức (EIB)",
                  "Dị ứng thực phẩm cấp tính",
                  "Bệnh hô hấp trầm trọng hơn do Aspirin (AERD / Tam chứng Samter)",
                  "Hen nghề nghiệp"
                ],
                "ans": 2,
                "exp": "Tam chứng Samter/AERD gồm: Hen, polyp mũi xoang tái diễn và nhạy cảm với thuốc ức chế COX-1 (Aspirin/NSAIDs)."
              },
              {
                "q": "Tại khoa cấp cứu, người lớn nhập viện vì đợt cấp hen nặng (SpO₂ < 90%, nhịp thở > 30\text{ lần/phút}, co kéo cơ hô hấp phụ). Điều trị nào nên được bắt đầu ngay lập tức cùng với oxy liệu pháp?",
                "opts": [
                  "ICS liều thấp 1 lần duy nhất",
                  "Khí dung SABA kết hợp SAMA (Ipratropium) lặp lại và dùng Corticosteroid toàn thân sớm",
                  "Chỉ dùng kháng sinh tĩnh mạch liều cao",
                  "Tiêm tĩnh mạch Aminophylline nhanh"
                ],
                "ans": 1,
                "exp": "Phác đồ chuẩn đợt cấp nặng: Oxy duy trì SpO₂ 93–95%, SABA + SAMA khí dung lặp lại mỗi 20 phút trong giờ đầu kèm Corticosteroid toàn thân sớm."
              },
              {
                "q": "Bệnh nhân hen phàn nàn về việc thường xuyên bị khàn tiếng và nấm miệng sau khi dùng bình xịt định liều (pMDI) chứa ICS. Lời khuyên nào là đúng nhất?",
                "opts": [
                  "Chuyển sang dùng corticoid đường uống kéo dài",
                  "Ngừng dùng thuốc hít ngay lập tức",
                  "Sử dụng thêm buồng đệm (spacer) và súc miệng nhổ ra sau khi hít thuốc",
                  "Hít thuốc dồn dập hơn để thuốc trôi nhanh xuống phổi"
                ],
                "ans": 2,
                "exp": "Buồng đệm giúp giữ các hạt thuốc lớn không lắng đọng tại hầu họng, kết hợp súc miệng bằng nước sạch sẽ loại bỏ phần lớn nguy cơ nấm họng và khàn tiếng."
              },
              {
                "q": "Sau khi xử trí đợt cấp hen tại phòng khám và bệnh nhân đã ổn định xuất viện, thời điểm hẹn tái khám tối ưu là:",
                "opts": [
                  "Trong vòng 2 đến 7 ngày",
                  "Chỉ khi nào xuất hiện triệu chứng khó thở nặng",
                  "Sau 3 đến 6 tháng",
                  "Sau 24 giờ kể từ khi ra viện"
                ],
                "ans": 0,
                "exp": "GINA khuyến cáo bệnh nhân sau đợt cấp cần tái khám sớm trong vòng 2–7 ngày để rà soát kỹ thuật xịt thuốc, sự tuân thủ và kế hoạch hành động."
              },
              {
                "q": "Vận động viên điền kinh thường xuyên bị ho và tức ngực sau khi chạy gắng sức được 10 phút. Thử nghiệm nào nên được chỉ định để xác nhận chẩn đoán co thắt phế quản do gắng sức?",
                "opts": [
                  "Đo điện tâm đồ gắng sức đơn thuần",
                  "Chụp cắt lớp vi tính ngực độ phân giải cao",
                  "Nội soi phế quản sinh thiết",
                  "Đo chức năng hô hấp trước và sau nghiệm pháp gắng sức (hoặc test kích thích phế quản)"
                ],
                "ans": 3,
                "exp": "Đo FEV₁ trước và sau bài test gắng sức chuẩn (chẩn đoán xác định nếu FEV₁ giảm ≥ 10% và > 200\text{ ml})."
              },
              {
                "q": "Hen phế quản là bệnh lý viêm mạn tính đường thở đặc trưng bởi sự biến đổi của triệu chứng hô hấp và giới hạn luồng khí thở ra có thể hồi phục tự nhiên hoặc sau dùng thuốc.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Trong đo chức năng hô hấp, kết quả nào sau đây thể hiện đáp ứng hồi phục phế quản dương tính ở người lớn?",
                "opts": [
                  "FEV₁ tăng > 8% và > 150\text{ ml} sau hít 400\\mu\text{g} Salbutamol",
                  "FEV₁ tăng > 12% và > 200\text{ ml} sau hít 400\\mu\text{g} Salbutamol",
                  "Tỷ lệ FEV₁/FVC giữ nguyên ở mức < 0.70",
                  "FVC giảm > 10%"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Khuyến cáo hiện nay cho phép sử dụng SABA đơn thuần không cần kèm ICS làm lựa chọn ưu tiên ở Bậc 1.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Luôn cần có ICS để khống chế tình trạng viêm nền."
              },
              {
                "q": "Phụ nữ mang thai mắc hen nên ngừng thuốc kiểm soát để tránh dị tật thai nhi.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Nồng độ FeNO ≥ 50\text{ ppb} là dấu ấn sinh học hỗ trợ xác định viêm đường thở Type 2.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Hen nặng (Severe Asthma) là tình trạng hen không kiểm soát dù đã tuân thủ điều trị tối ưu ở Bậc 4–5 và kiểm soát tốt các yếu tố nguy cơ/đồng mắc.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Trong đợt cấp hen tại cấp cứu, Magnesi sulfat tiêm tĩnh mạch được chỉ định thường quy cho mọi mức độ đợt cấp.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ dùng cho đợt cấp nặng hoặc không đáp ứng với điều trị giãn phế quản ban đầu."
              },
              {
                "q": "Kháng thể đơn dòng Anti-IgE (Omalizumab) chỉ định cho hen dị ứng nặng có test lẩy da hoặc IgE huyết thanh đặc hiệu dương tính với dị nguyên quanh năm.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân sử dụng từ ≥ 3 bình SABA (loại 200 liều) mỗi năm có nguy cơ đợt cấp hen nặng tăng cao rõ rệt.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Dùng ≥ 3 bình/năm làm tăng nguy cơ nhập viện cấp cứu; ≥ 12 bình/năm làm tăng nguy cơ tử vong."
              },
              {
                "q": "Nghiệm pháp kích thích phế quản (Methacholine challenge test) là chỉ định đầu tay cho mọi bệnh nhân nghi ngờ hen kể cả khi có tắc nghẽn nặng trên hô hấp ký.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chống chỉ định làm test kích thích phế quản khi FEV₁ < 60% hoặc có tắc nghẽn luồng khí nặng."
              },
              {
                "q": "Theo kế hoạch hành động hen dạng phác đồ ICS cố định, việc tự tăng liều ICS tạm thời lên gấp 4 lần có thể được áp dụng khi triệu chứng bắt đầu trở nặng.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Nghiên cứu cho thấy tăng gấp 4 lần liều ICS giúp giảm nguy cơ phải dùng steroid đường uống."
              },
              {
                "q": "Thuốc an thần (Sedatives) được khuyến khích sử dụng cho bệnh nhân trong đợt cấp hen nặng để giảm lo âu và kích động.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chống chỉ định tuyệt đối vì làm ức chế trung tâm hô hấp và làm nặng thêm suy hô hấp tăng CO₂."
              },
              {
                "q": "Theo phân loại mức độ nặng, hen được coi là mức độ nhẹ khi được kiểm soát tốt chỉ với phác đồ điều trị ở Bậc 1 hoặc Bậc 2.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân hen thể ho (Cough-variant asthma) luôn có biểu hiện tắc nghẽn cố định rõ rệt trên hô hấp ký thường quy.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Phần lớn hô hấp ký ban đầu ở bệnh nhân hen thể ho là bình thường; chẩn đoán dựa vào test tăng đáp ứng phế quản và đáp ứng với thuốc điều trị hen."
              },
              {
                "q": "Liều Budesonide dạng hít hàng ngày ở người lớn được phân loại ở mức trung bình (Medium dose) là bao nhiêu?",
                "opts": [
                  "200 - 400\\mu\text{g}",
                  "> 400 - 800\\mu\text{g}",
                  "> 1600\\mu\text{g}",
                  "100 - 200\\mu\text{g}"
                ],
                "ans": 1,
                "exp": "Liều thấp: 200 - 400\\mu\text{g}; Liều trung bình: > 400 - 800\\mu\text{g}; Liều cao: > 800\\mu\text{g}/ngày."
              }
            ]
          },
          "viem-phe-quan-cap": {
            "title": "Viêm phế quản cấp (Acute Bronchitis) - 30 câu",
            "questions": [
              {
                "q": "Sự hiện diện của đờm mủ (có màu xanh/vàng) là bằng chứng tin cậy cho thấy nguyên nhân do vi khuẩn và bắt buộc dùng kháng sinh.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Màu đờm chủ yếu do enzyme myeloperoxidase từ bạch cầu đa nhân phóng thích trong phản ứng viêm chống lại virus, không đồng nghĩa với nhiễm khuẩn."
              },
              {
                "q": "Virus là nguyên nhân gây ra 90% đến 95% các trường hợp viêm phế quản cấp ở người lớn khỏe mạnh.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Theo hướng dẫn của ACCP, chụp X-quang ngực thẳng thường quy là cần thiết cho tất cả bệnh nhân viêm phế quản cấp.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ chụp khi nghi ngờ viêm phổi (sinh hiệu bất thường: mạch >100, thở >24, sốt >38^\\circ\text{C}, ran khu trú, hoặc người cao tuổi lú lẫn)."
              },
              {
                "q": "Xét nghiệm nồng độ Procalcitonin có thể giúp hướng dẫn giảm chỉ định kháng sinh không cần thiết trong các nhiễm trùng đường hô hấp dưới.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Thời gian ho trung bình của viêm phế quản cấp thường kéo dài khoảng bao lâu?",
                "opts": [
                  "Dưới 3 ngày",
                  "Khoảng 10 đến 21 ngày (có thể tới 3–4 tuần)",
                  "Luôn luôn trên 8 tuần",
                  "Đúng 24 giờ"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Có thể sử dụng Aspirin cho trẻ em và thanh thiếu niên bị viêm phế quản cấp để hạ sốt.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Nguy cơ mắc Hội chứng Reye nguy hiểm tính mạng."
              },
              {
                "q": "Mật ong được khuyến cáo để giảm triệu chứng ho an toàn cho trẻ em từ bao nhiêu tháng tuổi trở lên?",
                "opts": [
                  "Trẻ sơ sinh từ 1 tháng tuổi",
                  "Từ 6 tháng tuổi",
                  "Từ 12 tháng tuổi trở lên",
                  "Mọi lứa tuổi đều cấm"
                ],
                "ans": 2,
                "exp": "Dưới 12 tháng tuổi có nguy cơ ngộ độc độc tố Clostridium botulinum."
              },
              {
                "q": "Corticosteroid đường uống là phác đồ điều trị tiêu chuẩn và bắt buộc cho mọi bệnh nhân viêm phế quản cấp thông thường.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Không có khuyến cáo dùng steroid toàn thân thường quy cho viêm phế quản cấp đơn thuần trên người không có bệnh nền."
              },
              {
                "q": "Thuốc giãn phế quản \beta_2-agonist (như Salbutamol) mang lại lợi ích rõ rệt cho tất cả bệnh nhân viêm phế quản cấp, ngay cả khi không có co thắt phế quản hay khò khè.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ có ích ở nhóm bệnh nhân có biểu hiện co thắt phế quản kèm khò khè."
              },
              {
                "q": "Hút thuốc lá và phơi nhiễm ô nhiễm không khí làm tăng tính mẫn cảm và kéo dài triệu chứng của viêm phế quản cấp.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Tiêm vắc-xin cúm hàng năm có thể tạo miễn dịch chéo phòng ngừa viêm phế quản do Rhinovirus.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Vắc-xin cúm chỉ đặc hiệu cho các chủng virus cúm mùa."
              },
              {
                "q": "Kỹ thuật xét nghiệm Multiplex PCR có thể phát hiện đồng thời nhiều tác nhân virus và vi khuẩn không điển hình trong cùng một que quẹt tỵ hầu.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Đo chức năng hô hấp trong đợt viêm phế quản cấp có thể cho thấy tình trạng tăng đáp ứng đường thở thoáng qua ở khoảng bao nhiêu % bệnh nhân?",
                "opts": [
                  "Gần như 0%",
                  "Khoảng 40% – 50%",
                  "100% vĩnh viễn",
                  "Dưới 1%"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Viêm phổi là một biến chứng thứ phát tiềm tàng cần cảnh giác ở người cao tuổi bị viêm phế quản cấp.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Thuốc giảm ho chứa dẫn xuất Opioid/Codeine được khuyến cáo ưu tiên dùng cho trẻ nhỏ để ức chế ho ban đêm.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chống chỉ định cho trẻ em vì nguy cơ suy hô hấp do ức chế thần kinh trung ương."
              },
              {
                "q": "Bệnh nhân nam 35 tuổi đến khám vì ho khan kéo dài 7 ngày. Khám: Mạch 78 lần/phút, Nhịp thở 16 lần/phút, Nhiệt độ 37^\\circ\text{C}. Phổi rì rào phế nang rõ, không ran. Xử trí thích hợp nhất là:",
                "opts": [
                  "Chỉ định chụp X-quang ngực thẳng",
                  "Kê đơn kháng sinh nhóm Macrolide",
                  "Giải thích diễn tiến lành tính, điều trị triệu chứng hỗ trợ và hẹn theo dõi",
                  "Nhập viện theo dõi"
                ],
                "ans": 2,
                "exp": "Sinh hiệu hoàn toàn bình thường, khám phổi sạch, không có chỉ định chụp X-quang hay kháng sinh."
              },
              {
                "q": "Trẻ 8 tháng tuổi bị viêm phế quản cấp, sốt 38.5^\\circ\text{C}. Lựa chọn thuốc hạ sốt an toàn và phù hợp nhất là:",
                "opts": [
                  "Acetaminophen hoặc Ibuprofen (với liều phù hợp cân nặng)",
                  "Aspirin liều thấp",
                  "Phối hợp đồng thời Aspirin và Paracetamol",
                  "Không dùng thuốc hạ sốt"
                ],
                "ans": 0,
                "exp": "Trẻ ≥ 6 tháng tuổi có thể dùng an toàn Acetaminophen hoặc Ibuprofen."
              },
              {
                "q": "Ở bệnh nhân có tiền sử COPD bị viêm phế quản cấp có kèm biểu hiện đợt cấp (tăng khó thở, tăng thể tích đờm), mục đích chính của việc kê một đợt ngắn Corticosteroid là gì?",
                "opts": [
                  "Giảm viêm phế quản, cải thiện thông khí và phục hồi chức năng phổi nền",
                  "Diệt sạch virus gây bệnh",
                  "Thay thế hoàn toàn thuốc giãn phế quản",
                  "Hạ thân nhiệt nhanh"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân có cơn ho rũ rượi từng cơn, kèm tiếng thở rít hít vào (\"whoop\") và nôn sau cơn ho. Cần nghi ngờ nhiều nhất đến vi khuẩn nào?",
                "opts": [
                  "Streptococcus pneumoniae",
                  "Bordetella pertussis (vi khuẩn Ho gà)",
                  "Mycoplasma pneumoniae",
                  "Legionella pneumophila"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nam 22 tuổi, đang bị viêm phế quản cấp, sau một cơn ho dữ dội đột ngột đau ngực chói một bên và khó thở tiến triển nhanh. Biến chứng nào cần nghi ngờ hàng đầu?",
                "opts": [
                  "Tràn khí màng phổi tự phát do vỡ kén khí dưới màng phổi",
                  "Viêm cơ tim cấp",
                  "Trào ngược dạ dày",
                  "Tắc ruột do tăng áp lực ổ bụng"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Một cụ ông 78 tuổi được đưa đến cấp cứu vì ho, sốt nhẹ và lú lẫn mới xuất hiện. Mạch 105 lần/phút, Nhịp thở 26 lần/phút. Bước xử trí đúng đắn nhất là:",
                "opts": [
                  "Chẩn đoán viêm phế quản cấp và cho về theo dõi tại nhà",
                  "Kê đơn thuốc an thần",
                  "Chỉ định chụp X-quang ngực thẳng và làm các xét nghiệm loại trừ viêm phổi/nhiễm trùng huyết",
                  "Khuyên tập thể dục nhẹ"
                ],
                "ans": 2,
                "exp": "Người cao tuổi có triệu chứng không điển hình kèm sinh hiệu bất thường và lú lẫn có nguy cơ rất cao bị viêm phổi nặng."
              },
              {
                "q": "Xét nghiệm chẩn đoán nhanh virus Cúm mùa trong đợt khởi phát có giá trị lâm sàng lớn nhất ở điểm nào?",
                "opts": [
                  "Hướng dẫn chỉ định điều trị thuốc kháng virus sớm (trong vòng 48h) và cách ly kiểm soát lây nhiễm",
                  "Để tìm cớ dùng thêm kháng sinh",
                  "Để thay thế cho vắc-xin cúm",
                  "Dự đoán chính xác số ngày bệnh nhân ho"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Một bệnh nhân ho kéo dài hơn 4 tuần sau khi các triệu chứng viêm phế quản cấp ban đầu đã hết sốt. Bước xử trí tiếp theo là:",
                "opts": [
                  "Tự động kê thêm đợt kháng sinh phổ rộng thứ hai",
                  "Đánh giá lại toàn diện để tìm các nguyên nhân ho bán cấp/mạn tính (hen phế quản, UACS, GERD, thuốc ƯCMC)",
                  "Nhập khoa điều trị tích cực",
                  "Khuyên bệnh nhân không cần đi khám lại"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Một người khỏe mạnh phàn nàn đờm chuyển từ trắng sang xanh đục sau 4 ngày và nhất quyết đòi kháng sinh. Lời giải thích khoa học nhất là gì?",
                "opts": [
                  "Màu đờm xanh là do bạch cầu giải phóng sắc tố kháng viêm, không phải bằng chứng nhiễm khuẩn",
                  "Đờm xanh đồng nghĩa 100% có vi khuẩn nguy hiểm",
                  "Uống kháng sinh liều cao 3 ngày là khỏi ngay",
                  "Virus chuyển thành đờm xanh trước khi chết"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Tác nhân virus nào sau đây có thể gây viêm phế quản - phổi tiến triển thành suy hô hấp cấp nặng (ARDS) ở người trẻ tuổi có cơ địa nhạy cảm?",
                "opts": [
                  "Adenovirus chủng độc lực cao hoặc Cúm (Influenza A/H1N1, H5N1)",
                  "Rhinovirus thể nhẹ",
                  "Rotavirus",
                  "Norovirus"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nữ đau nhức cơ thành ngực dọc xương ức sau 5 ngày ho dữ dội. Ấn các kẽ sườn đau tăng, không khó thở, X-quang tim phổi bình thường. Chẩn đoán hợp lý nhất là:",
                "opts": [
                  "Nhồi máu cơ tim cấp",
                  "Đau cơ xương thành ngực do ho gắng sức liên tục",
                  "Tràn mủ màng phổi",
                  "Thuyên tắc phổi diện rộng"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Khuyến cáo của FDA và CDC đối với thuốc ho và cảm lạnh không kê đơn (OTC) chứa chất chống nghẹt mũi hoặc kháng histamin cho trẻ dưới 4 tuổi là gì?",
                "opts": [
                  "Không nên sử dụng do nguy cơ tác dụng phụ nghiêm trọng và thiếu bằng chứng hiệu quả",
                  "Có thể dùng thuốc người lớn giảm liều 1/4",
                  "Dùng liều gấp đôi nếu chưa đỡ",
                  "Dùng kèm thuốc an thần"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Vì sao người đã tiêm phòng vắc-xin cúm hàng năm vẫn có thể mắc viêm phế quản cấp do Rhinovirus?",
                "opts": [
                  "Do vắc-xin cúm tạo kháng thể đặc hiệu với virus Cúm, không tạo miễn dịch chống lại Rhinovirus",
                  "Do vắc-xin cúm bị hỏng",
                  "Do Rhinovirus tiêu diệt kháng thể cúm",
                  "Do cơ thể kháng vắc-xin hoàn toàn"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Biện pháp không dùng thuốc quan trọng nhất để phòng ngừa tái phát viêm phế quản cấp ở người hút thuốc lá là:",
                "opts": [
                  "Uống kháng sinh định kỳ hàng tháng",
                  "Cai thuốc lá hoàn toàn và hạn chế tiếp xúc khói bụi ô nhiễm",
                  "Uống vitamin C liều cực cao",
                  "Chỉ đeo khẩu trang giấy mỏng"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Phương pháp chẩn đoán xác định nhanh và có độ nhạy cao nhất hiện nay đối với tác nhân Ho gà (Bordetella pertussis) là gì?",
                "opts": [
                  "Chụp X-quang phổi thẳng",
                  "Real-time PCR quẹt dịch tỵ hầu",
                  "Soi tươi đờm dưới kính hiển vi",
                  "Nuôi cấy nước tiểu"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              }
            ]
          },
          "viem-phoi-cong-dong": {
            "title": "Viêm phổi mắc phải cộng đồng (CAP) - 30 câu",
            "questions": [
              {
                "q": "Theo ATS/IDSA, siêu âm phổi (LUS) có thể là giải pháp thay thế X-quang ngực trong điều kiện nào?",
                "opts": [
                  "Chỉ khi kết quả X-quang ngực nghi ngờ",
                  "Tại các cơ sở y tế có bác sĩ được đào tạo chuyên môn lâm sàng phù hợp"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Ở bệnh nhân ngoại trú khỏe mạnh, có tổn thương đông đặc trên X-quang nhưng xét nghiệm dương tính với virus đường hô hấp (không có biểu hiện nhiễm khuẩn kèm theo), ATS khuyến nghị:",
                "opts": [
                  "Không kê đơn kháng sinh theo kinh nghiệm thường quy",
                  "Kê đơn kháng sinh ngay để dự phòng"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Nhuộm Gram và cấy đờm có bắt buộc thực hiện thường quy cho tất cả bệnh nhân viêm phổi mắc phải cộng đồng điều trị ngoại trú không?",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ khuyến cáo ở bệnh nhân nội trú nặng, hoặc bệnh nhân có nguy cơ nhiễm MRSA / Pseudomonas aeruginosa."
              },
              {
                "q": "Đối với bệnh nhân nội trú viêm phổi không nặng, khi đã đạt tiêu chuẩn ổn định lâm sàng, thời gian điều trị kháng sinh tối thiểu được khuyến cáo là:",
                "opts": [
                  "Tối thiểu 3 đến 5 ngày",
                  "Bắt buộc từ 14 đến 21 ngày"
                ],
                "ans": 0,
                "exp": "ATS khuyến cáo điều trị đủ ít nhất 5 ngày hoặc dừng sau khi đạt tiêu chuẩn ổn định lâm sàng tối thiểu 48 giờ."
              },
              {
                "q": "Corticosteroid toàn thân được khuyến cáo sử dụng thường quy cho tất cả bệnh nhân viêm phổi cộng đồng nội trú mức độ nhẹ/không nặng.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Không khuyến cáo thường quy trừ khi có sốc nhiễm khuẩn hoặc đợt cấp COPD/hen đi kèm."
              },
              {
                "q": "Trong viêm phổi cộng đồng nặng (không do virus cúm), một số thử nghiệm lâm sàng gần đây (như CAPE-COD) cho thấy Corticosteroid toàn thân có thể giúp giảm tỷ lệ tử vong.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Chỉ số PaO₂/FiO₂ ≤ 250 là một tiêu chuẩn chính (Major criterion) để quyết định nhập ICU theo IDSA/ATS.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Đây là tiêu chuẩn PHỤ (Minor). Hai tiêu chuẩn CHÍNH là: Suy hô hấp cần thở máy xâm nhập và Sốc nhiễm khuẩn cần thuốc vận mạch."
              },
              {
                "q": "Thang điểm PES được sử dụng để làm gì trong quản lý viêm phổi cộng đồng?",
                "opts": [
                  "Đánh giá mức độ khó thở",
                  "Phân tầng nguy cơ nhiễm vi khuẩn đa kháng thuốc (Pseudomonas, Enterobacteriaceae ESBL, MRSA)"
                ],
                "ans": 1,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Xét nghiệm kháng nguyên nước tiểu được khuyến cáo ở bệnh nhân viêm phổi nặng đối với hai tác nhân nào?",
                "opts": [
                  "Streptococcus pneumoniae và Legionella pneumophila",
                  "Mycoplasma và Chlamydia"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Nhờ đặc tính dược động học có thời gian bán thải kéo dài trong mô, liệu trình 3 ngày Azithromycin (500\text{ mg}/ngày) có hiệu lực lâm sàng tương đương phác đồ kháng sinh 5–7 ngày khác.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Xét nghiệm Procalcitonin âm tính cho phép bác sĩ loại trừ 100% tình trạng đồng nhiễm vi khuẩn trên bệnh nhân viêm phổi do virus.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Procalcitonin có độ âm tính giả nhất định ở giai đoạn sớm, không dùng đơn độc để phủ nhận hoàn toàn lâm sàng."
              },
              {
                "q": "Tác nhân vi khuẩn nào là nguyên nhân hàng đầu gây bội nhiễm viêm phổi hoại tử nặng sau khi mắc Cúm?",
                "opts": [
                  "Staphylococcus aureus (bao gồm cả MRSA)",
                  "Mycoplasma pneumoniae"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Vi khuẩn điển hình gây viêm phổi cộng đồng nhập viện thường gặp nhất tại Việt Nam và trên thế giới là Streptococcus pneumoniae (Phế cầu).",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Kháng sinh nhóm Fluoroquinolone hô hấp (như Levofloxacin) không cần hiệu chỉnh liều theo mức lọc cầu thận ở bệnh nhân suy thận.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Levofloxacin thải trừ chủ yếu qua thận, bắt buộc phải chỉnh liều theo độ thanh thải creatinine (Moxifloxacin thải trừ qua gan thì không cần chỉnh)."
              },
              {
                "q": "Ở bệnh nhân viêm phổi nặng có sốc nhiễm khuẩn, kháng sinh tĩnh mạch thích hợp nên được dùng trong vòng:",
                "opts": [
                  "Càng sớm càng tốt, lý tưởng trong vòng 1 giờ đầu",
                  "Chờ sau 24 giờ để có kết quả kháng sinh đồ"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân 45 tuổi, khỏe mạnh, sốt, đau ngực. PCR dương tính Cúm A, X-quang có tổn thương phổi kẽ nhẹ, SpO₂\\ 96%, tri giác tỉnh táo, mạch và huyết áp bình thường. Xử trí phù hợp nhất theo hướng dẫn:",
                "opts": [
                  "Kê đơn thuốc kháng virus Oseltamivir và theo dõi ngoại trú, không dùng kháng sinh thường quy",
                  "Nhập viện ICU dùng kháng sinh phổ rộng",
                  "Không điều trị gì",
                  "Cho uống Corticoid liều cao"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nữ 72 tuổi, tiền sử đái tháo đường, điều trị VPMPCĐ ngày thứ 3 bằng Ceftriaxone + Azithromycin. Bệnh nhân hết sốt 24 giờ, nhịp thở 18 lần/phút, ăn uống tốt. Hướng xử trí tiếp theo:",
                "opts": [
                  "Chuyển sang kháng sinh uống thích hợp và chuẩn bị kế hoạch xuất viện (tổng liệu trình 5 ngày)",
                  "Tiếp tục tiêm tĩnh mạch đủ 14 ngày",
                  "Thêm thuốc kháng nấm",
                  "Đổi sang Carbapenem"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nam sốc nhiễm khuẩn do viêm phổi nặng, đang dùng Noradrenaline liều cao, xét nghiệm Cúm âm tính. Lựa chọn điều trị bổ trợ có bằng chứng:",
                "opts": [
                  "Corticosteroid toàn thân (Hydrocortisone truyền tĩnh mạch 200\text{ mg}/ngày)",
                  "Dùng Methylprednisolone xung liều 1\text{g}/ngày",
                  "Truyền Albumin liều cực cao",
                  "Không dùng bất kỳ thuốc vận mạch nào"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân 68 tuổi: lú lẫn mới xuất hiện (1đ), Urea 8\text{ mmol/L} (1đ), Nhịp thở 32 lần/phút (1đ), Huyết áp 85/50 mmHg (1đ), Tuổi ≥ 65 (1đ). Điểm CURB-65 của bệnh nhân là bao nhiêu và hướng xử trí?",
                "opts": [
                  "2 điểm; điều trị ngoại trú",
                  "5 điểm; nguy cơ tử vong rất cao, chỉ định nhập ICU ngay",
                  "1 điểm; cho về nhà",
                  "3 điểm; nằm viện thông thường"
                ],
                "ans": 1,
                "exp": "Thỏa mãn cả 5 tiêu chí CURB-65 = 5 điểm."
              },
              {
                "q": "Bệnh nhân có chỉ số PSI (Pneumonia Severity Index) là 140 điểm. Bệnh nhân thuộc nhóm nguy cơ nào?",
                "opts": [
                  "Nhóm V; Nguy cơ tử vong rất cao, cần nhập viện điều trị tích cực",
                  "Nhóm I; Điều trị ngoại trú",
                  "Nhóm II; Nguy cơ thấp",
                  "Nhóm III; Quan sát tại cấp cứu"
                ],
                "ans": 0,
                "exp": "PSI > 130 điểm thuộc Nhóm V (tỷ lệ tử vong lên tới 27–30%)."
              },
              {
                "q": "Bệnh nhân tiền sử giãn phế quản, suy thận mạn, vừa nằm viện dùng kháng sinh 2 tuần trước. Đây là các yếu tố thuộc thang điểm PES gợi ý nguy cơ gì?",
                "opts": [
                  "Nguy cơ cao nhiễm vi khuẩn đa kháng (Pseudomonas aeruginosa)",
                  "Nguy cơ nhiễm virus thông thường",
                  "Nguy cơ dị ứng thuốc",
                  "Nguy cơ tắc nghẽn đường thở do dị vật"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nam 55 tuổi, nông dân tiếp xúc bùn đất, đái tháo đường kiểm soát kém, sốt cao, đờm mủ, hoại tử tạo hang trên X-quang phổi. Tác nhân đặc hữu tại Việt Nam cần lưu ý là:",
                "opts": [
                  "Burkholderia pseudomallei (Bệnh Melioidosis)",
                  "Virus hợp bào hô hấp (RSV)",
                  "Mycoplasma pneumoniae",
                  "Bordetella pertussis"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Nguyên tắc an toàn nhất khi chuyển đổi kháng sinh từ đường tiêm sang đường uống (Switch therapy) là:",
                "opts": [
                  "Bệnh nhân hết sốt ≥ 24\text{ giờ}, huyết động ổn định, hấp thu đường tiêu hóa tốt",
                  "Đủ 14 ngày tiêm tĩnh mạch",
                  "Ngay khi có kết quả X-quang phổi hết sạch tổn thương",
                  "Khi bạch cầu giảm về 0"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân có nguy cơ cao nhất nhiễm trực khuẩn mủ xanh (Pseudomonas aeruginosa) khi có đặc điểm nào?",
                "opts": [
                  "Giãn phế quản nặng hoặc COPD giai đoạn rất nặng kèm tiền sử phân lập vi khuẩn này trước đó",
                  "Người trẻ tuổi không bệnh nền",
                  "Nuôi chim cảnh trong nhà",
                  "Chỉ bị sốt nhẹ không ho"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Triệu chứng nào gợi ý thuyên tắc động mạch phổi cấp hơn là viêm phổi điển hình?",
                "opts": [
                  "Khó thở và đau ngực kiểu màng phổi khởi phát đột ngột dữ dội, không có sốt cao hay đờm mủ trước đó",
                  "Sốt rét run kèm ho khạc đờm rỉ sắt từ từ 5 ngày",
                  "Đáp ứng với Amoxicillin sau 48 giờ",
                  "Hình ảnh đông đặc có phế quản hơi trên phim chụp"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Vì sao hướng dẫn lâm sàng vẫn gợi ý phối hợp kháng sinh ở bệnh nhân nội trú có test virus dương tính khi chưa thể loại trừ nhiễm trùng?",
                "opts": [
                  "Tỷ lệ đồng nhiễm vi khuẩn ở bệnh nhân nội trú nặng là đáng kể và khó phân định dứt khoát ban đầu",
                  "Kháng sinh có thể tiêu diệt virus",
                  "Kháng sinh làm tăng thể lực cho bệnh nhân",
                  "Do quy định hành chính"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Kháng sinh nào là lựa chọn ưu tiên hàng đầu để điều trị viêm phổi do trực khuẩn Gram âm đường ruột sinh men ESBL (Extended-Spectrum Beta-Lactamase)?",
                "opts": [
                  "Carbapenem (Meropenem, Imipenem hoặc Ertapenem)",
                  "Ceftriaxone",
                  "Amoxicillin",
                  "Clarithromycin"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân trẻ tuổi, ho khan dai dẳng, đau mỏi cơ, tổn thương mô kẽ lan tỏa hai phế trường trên X-quang. Tác nhân không điển hình phổ biến nhất là:",
                "opts": [
                  "Mycoplasma pneumoniae",
                  "Pseudomonas aeruginosa",
                  "Klebsiella pneumoniae",
                  "Tụ cầu vàng"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Tiêu chuẩn ổn định lâm sàng để chuẩn bị cho bệnh nhân viêm phổi xuất viện bao gồm:",
                "opts": [
                  "Nhiệt độ ≤ 37.8^\\circ\text{C}, Mạch < 100, Thở < 24, Huyết áp tâm thu ≥ 90\text{ mmHg}, SpO₂ ≥ 92% khí phòng",
                  "X-quang phổi hoàn toàn biến mất mọi tổn thương",
                  "Bệnh nhân muốn về nhà dù vẫn đang sốt 39^\\circ\text{C}",
                  "Cấy đờm ra vi khuẩn"
                ],
                "ans": 0,
                "exp": "Tổn thương X-quang phổi thường mờ chậm hơn rất nhiều (từ 4–8 tuần) so với sự hồi phục lâm sàng."
              },
              {
                "q": "Khuyến nghị về vắc-xin phòng ngừa viêm phổi phế cầu cho bệnh nhân có bệnh phổi phế quản mạn tính:",
                "opts": [
                  "Khuyến cáo tiêm đầy đủ vắc-xin phế cầu cộng hợp (như PCV15/PCV20) để giảm nguy cơ viêm phổi xâm lấn",
                  "Không có giá trị phòng bệnh",
                  "Chỉ tiêm một lần lúc mới sinh",
                  "Chống chỉ định cho người bị hen/COPD"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              }
            ]
          },
          "copd": {
            "title": "Bệnh phổi tắc nghẽn mạn tính (COPD) - 30 câu",
            "questions": [
              {
                "q": "Theo báo cáo GOLD, liệu pháp bộ ba (LABA + LAMA + ICS) đã được chứng minh làm giảm tỷ lệ tử vong do mọi nguyên nhân so với liệu pháp giãn phế quản kép (LABA + LAMA) ở bệnh nhân COPD có triệu chứng và tiền sử đợt cấp thường xuyên.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Thử nghiệm IMPACT và ETHOS chứng minh giảm tử vong do mọi nguyên nhân ở nhóm bệnh nhân này."
              },
              {
                "q": "Chỉ số FEV₁/FVC < 0.70 đo được sau khi dùng thuốc giãn phế quản (Post-bronchodilator) là tiêu chuẩn bắt buộc để xác nhận giới hạn luồng khí cố định trong COPD.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Phải là chỉ số SAU nghiệm pháp dãn phế quản (post-BD)."
              },
              {
                "q": "Thời gian điều trị Corticosteroid toàn thân đường uống (như Prednisone 40\text{ mg}/ngày) trong đợt kịch phát COPD thông thường được khuyến cáo kéo dài bao lâu?",
                "opts": [
                  "Không quá 5 ngày",
                  "Tối thiểu 1 tháng"
                ],
                "ans": 0,
                "exp": "Thử nghiệm REDUCE khẳng định 5 ngày có hiệu quả tương đương 14 ngày và giảm biến chứng tác dụng phụ."
              },
              {
                "q": "Xét nghiệm Procalcitonin hiện nay được khuyến cáo là công cụ duy nhất quyết định việc dùng kháng sinh trong mọi đợt cấp COPD.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Lâm sàng vẫn dựa chính vào 3 tiêu chuẩn Anthonisen (tăng khó thở, tăng thể tích đờm, đờm chuyển mủ)."
              },
              {
                "q": "Ở các nước đang phát triển, phơi nhiễm khói sinh khối (đun nấu than củi) và ô nhiễm không khí là nguyên nhân hàng đầu gây COPD ở người không hút thuốc lá.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bổ sung Vitamin D được khuyến cáo cho tất cả bệnh nhân COPD bất kể nồng độ trong máu có bị thiếu hụt hay không.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ bổ sung khi xét nghiệm thấy thiếu hụt nghiêm trọng Vitamin D (< 25\text{ nmol/L} hoặc 10\text{ ng/ml})."
              },
              {
                "q": "Ensifentrine là thuốc mới hoạt động theo cơ chế ức chế kép chọn lọc đồng thời hai enzym nào?",
                "opts": [
                  "PDE3 và PDE4",
                  "COX-1 và COX-2"
                ],
                "ans": 0,
                "exp": "Ức chế PDE3 giúp giãn cơ trơn phế quản và PDE4 giúp kháng viêm."
              },
              {
                "q": "Liệu pháp oxy dài hạn tại nhà (LTOT) được khuyến cáo thường quy cho mọi bệnh nhân COPD ổn định chỉ có giảm oxy máu nhẹ hoặc trung bình khi gắng sức.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ chỉ định khi có giảm oxy máu nặng lúc nghỉ ngơi (PaO₂ ≤ 55\text{ mmHg} hoặc SpO₂ ≤ 88%)."
              },
              {
                "q": "Chụp cắt lớp vi tính lồng ngực liều thấp (LDCT) hàng năm được khuyến cáo tầm soát ung thư phổi cho mọi bệnh nhân COPD kể cả người chưa từng hút thuốc lá.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "Chỉ tầm soát cho đối tượng có tiền sử hút thuốc nặng (theo tiêu chuẩn tuổi 50–80 và tiền sử ≥ 20 bao-năm)."
              },
              {
                "q": "Theo phân loại GOLD ABE, bệnh nhân thuộc Nhóm E (tiền sử ≥ 2 đợt cấp trung bình hoặc ≥ 1 đợt cấp nhập viện) nên khởi đầu điều trị bằng phác đồ nào?",
                "opts": [
                  "LABA + LAMA",
                  "LAMA đơn trị liệu"
                ],
                "ans": 0,
                "exp": "Lựa chọn ưu tiên ban đầu cho nhóm E là LABA + LAMA (cân nhắc thêm ICS ngay từ đầu nếu Eosinophil máu ≥ 300\text{ tế bào}/\\mu\text{L})."
              },
              {
                "q": "Thuật ngữ 'Chồng lấp Hen - COPD' (ACO) hiện nay vẫn được xem là một thực thể bệnh lý học độc lập riêng biệt trong phân loại chính thức của GOLD.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 1,
                "exp": "GOLD và GINA nhấn mạnh đây không phải là một bệnh riêng lẻ, mà khuyến cáo nhận diện các đặc điểm hen và COPD trên từng cá thể để điều trị trúng đích."
              },
              {
                "q": "Tình trạng rối loạn hệ vi sinh đường thở (Lung Microbiome Dysbiosis) là một cơ chế được đưa vào cập nhật bệnh sinh của COPD.",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Ngưỡng bạch cầu ái toan (Eosinophil) trong máu nào dự đoán khả năng đáp ứng điều trị tốt nhất khi thêm ICS vào phác đồ COPD?",
                "opts": [
                  "≥ 300\text{ tế bào}/\\mu\text{L}",
                  "Dưới 50\text{ tế bào}/\\mu\text{L}"
                ],
                "ans": 0,
                "exp": "Eos máu ≥ 300 gợi ý lợi ích lâm sàng cao từ ICS; ngược lại Eos < 100 ít đáp ứng và tăng nguy cơ viêm phổi."
              },
              {
                "q": "Bệnh nhân trẻ tuổi mắc COPD hoặc có khí phế thũng đáy phổi nên được làm xét nghiệm định lượng yếu tố nào?",
                "opts": [
                  "Nồng độ Alpha-1 Antitrypsin (AAT) huyết thanh",
                  "Acid Uric máu"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Vắc-xin ngừa virus hợp bào hô hấp (RSV) hiện được khuyến cáo cho bệnh nhân COPD lớn tuổi (≥ 60 tuổi).",
                "opts": [
                  "Đúng",
                  "Sai"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân nam 62 tuổi, tiền sử hút thuốc 40 bao-năm. Hô hấp ký sau test giãn phế quản: FEV₁/FVC = 0.58, FEV₁ = 52% dự đoán. Trong năm qua có 2 đợt cấp phải dùng kháng sinh và steroid ngoại trú. Điểm CAT 18 điểm. Phân nhóm GOLD và điều trị khởi đầu thích hợp nhất là:",
                "opts": [
                  "Nhóm E; Điều trị khởi đầu bằng LABA + LAMA",
                  "Nhóm B; Điều trị khởi đầu bằng LAMA đơn trị liệu",
                  "Nhóm A; Dùng SABA khi cần",
                  "Nhóm B; Phẫu thuật cắt phổi"
                ],
                "ans": 0,
                "exp": "Bệnh nhân có 2 đợt cấp trung bình \rightarrow Nhóm E. Khởi đầu chuẩn là phối hợp LABA + LAMA."
              },
              {
                "q": "Bệnh nhân COPD Nhóm B đang dùng LAMA đơn trị liệu nhưng vẫn còn khó thở nhiều (mMRC = 2). Bệnh nhân không có đợt cấp trong năm qua. Bước tối ưu hóa thuốc tiếp theo là gì?",
                "opts": [
                  "Thêm ICS (chuyển sang LAMA + ICS)",
                  "Nâng bậc lên phối hợp giãn phế quản kép LABA + LAMA",
                  "Bổ sung Theophylline uống",
                  "Dừng hết thuốc hít"
                ],
                "ans": 1,
                "exp": "Khi bệnh nhân còn khó thở dai dẳng trên đơn trị liệu, khuyến cáo là nâng lên LABA + LAMA."
              },
              {
                "q": "Bệnh nhân COPD đợt cấp nặng nhập viện: khí máu động mạch có pH = 7.28, PaCO₂ = 60\text{ mmHg}, PaO₂ = 55\text{ mmHg}. Bệnh nhân tỉnh táo, tiếp xúc tốt. Biện pháp hỗ trợ hô hấp ưu tiên hàng đầu là:",
                "opts": [
                  "Đặt ống nội khí quản và thở máy xâm lấn ngay",
                  "Thông khí nhân tạo không xâm lấn (NIV / BiPAP)",
                  "Thở oxy lưu lượng cao qua cannula mũi không kiểm soát (15\text{ L/phút})",
                  "Tiêm thuốc ức chế hô hấp"
                ],
                "ans": 1,
                "exp": "NIV là lựa chọn đầu tay cho suy hô hấp tăng CO₂ toan máu cấp (7.25 ≤ pH ≤ 7.35), giúp giảm tỷ lệ đặt nội khí quản và tử vong."
              },
              {
                "q": "Bệnh nhân COPD nặng vẫn bị đợt cấp tái diễn dù đã dùng liệu pháp bộ ba (LABA + LAMA + ICS) tối ưu, có bạch cầu ái toan máu ≥ 300\text{ tế bào}/\\mu\text{L}. Kháng thể đơn dòng nào gần đây được cấp phép bổ sung điều trị?",
                "opts": [
                  "Dupilumab (Anti IL-4Rα)",
                  "Rituximab",
                  "Infliximab",
                  "Trastuzumab"
                ],
                "ans": 0,
                "exp": "Thử nghiệm BOREAS và NOTUS cho thấy Dupilumab giảm rõ rệt đợt cấp ở bệnh nhân COPD có viêm Type 2."
              },
              {
                "q": "Ở bệnh nhân COPD đang duy trì thuốc đầy đủ mà chức năng phổi sụt giảm nhanh bất thường, bước rà soát quan trọng nhất ngoài kỹ thuật dùng thuốc là:",
                "opts": [
                  "Đánh giá lại tiền sử phơi nhiễm khói thuốc, khói bụi ô nhiễm và môi trường làm việc",
                  "Yêu cầu bệnh nhân nằm bất động",
                  "Kê đơn kháng sinh uống suốt đời",
                  "Cắt amidan"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân COPD nhập viện vì nhồi máu cơ tim cấp có chỉ định dùng thuốc chẹn beta giao cảm. Quan điểm y khoa chuẩn xác là:",
                "opts": [
                  "Không nên từ chối chỉ định thuốc chẹn chọn lọc trên tim (\beta_1-selective) vì lợi ích tim mạch vượt trội và an toàn",
                  "Chống chỉ định tuyệt đối tất cả các loại chẹn beta",
                  "Chỉ dùng khi bệnh nhân đã thở máy",
                  "Dùng thuốc chẹn beta không chọn lọc liều cao"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Bệnh nhân có triệu chứng khó thở, lồng ngực hình thùng, nhưng hô hấp ký sau nghiệm pháp giãn phế quản có FEV₁/FVC = 0.74 (> 0.70). Khái niệm nào mô tả đúng trường hợp này?",
                "opts": [
                  "Bệnh nhân có thể thuộc nhóm \"Pre-COPD\" hoặc PRISm và cần được theo dõi định kỳ",
                  "Chắc chắn đã bị xơ phổi",
                  "Hoàn toàn loại trừ mọi bệnh lý đường dẫn khí",
                  "Hen cấp tính"
                ],
                "ans": 0,
                "exp": "Pre-COPD chỉ các cá nhân có triệu chứng hô hấp hoặc tổn thương cấu trúc phổi nhưng chưa có tắc nghẽn luồng khí cố định."
              },
              {
                "q": "Một bệnh nhân COPD đang dùng LABA + ICS từ trước, hiện ổn định không có đợt cấp, xét nghiệm Eosinophil máu là 70\text{ tế bào}/\\mu\text{L}. Hướng xử trí hợp lý là:",
                "opts": [
                  "Cân nhắc ngừng ICS và chuyển sang phác đồ LABA + LAMA",
                  "Tăng gấp đôi liều ICS",
                  "Giữ nguyên suốt đời",
                  "Dừng toàn bộ các thuốc"
                ],
                "ans": 0,
                "exp": "Eos máu < 100 kèm không có đợt cấp cho thấy nguy cơ viêm phổi do ICS cao hơn lợi ích; nên chuyển về LABA + LAMA."
              },
              {
                "q": "Bệnh nhân COPD đến khám vì đờm tăng thể tích và chuyển sang dạng đờm mủ xanh (đủ 2 trong 3 tiêu chuẩn Anthonisen). Kháng sinh đường uống nên được:",
                "opts": [
                  "Chỉ định điều trị (đợt cấp mức độ trung bình)",
                  "Tuyệt đối không dùng",
                  "Trì hoãn 1 tháng",
                  "Chuyển cấp cứu thở máy"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Mục đích chính của việc chỉ định thông tim phải ở bệnh nhân COPD có nghi ngờ tăng áp lực động mạch phổi nặng trên siêu âm tim là:",
                "opts": [
                  "Đo chính xác áp lực động mạch phổi và kháng lực mạch phổi để phân tầng kiểu hình tăng áp động mạch phổi (PH nhóm 3)",
                  "Phát hiện dị nguyên gây dị ứng",
                  "Đo dung tích sống toàn phổi",
                  "Đo thể tích khí cặn"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Nam giới 48 tuổi, không bao giờ hút thuốc, làm việc văn phòng, được chẩn đoán COPD khí phế thũng nặng vùng đáy phổi. Xét nghiệm đầu tiên cần chỉ định là:",
                "opts": [
                  "Định lượng nồng độ Alpha-1 Antitrypsin huyết thanh",
                  "Test lẩy da với lông thú",
                  "Cấy máu tìm vi khuẩn",
                  "Đo nồng độ Cortisol máu"
                ],
                "ans": 0,
                "exp": "Khí phế thũng ở người trẻ không hút thuốc, ưu thế ở đáy phổi là chỉ dấu kinh điển của thiếu hụt di truyền Alpha-1 Antitrypsin."
              },
              {
                "q": "Bệnh nhân COPD đợt cấp điều trị ngoại trú bằng kháng sinh và Corticoid uống, sau 3 ngày thấy triệu chứng đỡ nhiều. Khuyến nghị liệu trình chuẩn là:",
                "opts": [
                  "Tiếp tục dùng đủ tổng số 5 ngày thuốc theo phác đồ rồi dừng",
                  "Kéo dài liên tục 30 ngày",
                  "Dừng ngay lập tức sau 3 ngày",
                  "Uống tăng liều gấp đôi"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Trong danh mục vắc-xin cho bệnh nhân COPD lớn tuổi theo khuyến cáo quốc tế, loại vắc-xin nào sau đây KHÔNG thuộc chỉ định ưu tiên thường quy liên quan trực tiếp đến đợt cấp hô hấp:",
                "opts": [
                  "Vắc-xin Thủy đậu (Varicella) cho trẻ em",
                  "Vắc-xin Cúm hàng năm",
                  "Vắc-xin Phế cầu",
                  "Vắc-xin Ho gà (Tdap)"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              },
              {
                "q": "Tiêu chuẩn nào ở bệnh nhân COPD khí phế thũng giai đoạn nặng giúp dự đoán kết quả tốt khi thực hiện Phẫu thuật giảm thể tích phổi (LVRS)?",
                "opts": [
                  "Khí phế thũng không đồng nhất ưu thế thùy trên kèm dung lượng gắng sức thấp sau phục hồi chức năng",
                  "Khí phế thũng lan tỏa đồng đều hai đáy phổi",
                  "Đang nghiện thuốc lá nặng chưa cai",
                  "FEV₁ > 80%"
                ],
                "ans": 0,
                "exp": "Thử nghiệm NETT chỉ ra nhóm hưởng lợi sống còn rõ nhất từ LVRS là khí phế thũng ưu thế thùy trên và khả năng gắng sức cơ bản thấp."
              },
              {
                "q": "Cơ chế tác dụng chính của hoạt chất Ensifentrine trong điều trị duy trì COPD là gì?",
                "opts": [
                  "Ức chế đồng thời enzyme PDE3 (giãn cơ trơn đường thở) và PDE4 (giảm giải phóng các chất trung gian gây viêm)",
                  "Chẹn thụ thể Leukotriene",
                  "Bổ sung trực tiếp enzym alpha-1 antitrypsin",
                  "Tác dụng kháng sinh diệt khuẩn phế cầu"
                ],
                "ans": 0,
                "exp": "Đáp án đúng theo hướng dẫn lâm sàng chuẩn."
              }
            ]
          }
        }
      },
      "than-kinh": {
        "name": "Khoa Thần kinh",
        "lessons": {
          "dot-quy-nao": {
            "title": "Bài 1: Đột quỵ não (5 câu)",
            "questions": [
              {
                "q": "Bệnh nhân nhồi máu não cấp có hình ảnh tổn thương dưới vỏ dạng ổ khuyết với đường kính < 15 mm trên phim chụp cộng hưởng từ. Hai yếu tố nguy cơ chính gây ra thể bệnh này theo cơ chế bệnh lý mạch máu nhỏ là",
                "opts": [
                  "Tăng huyết áp và đái tháo đường",
                  "Hút thuốc lá và rối loạn lipid máu",
                  "Rung nhĩ và hẹp van hai lá hậu thấp",
                  "Thoái hóa dạng tinh bột và béo phì."
                ],
                "ans": 0,
                "exp": "Bệnh lý mạch máu nhỏ gây nhồi máu ổ khuyết (< 15 mm) chiếm 20 - 30% các trường hợp đột quỵ thiếu máu cục bộ, có hai yếu tố nguy cơ nền tảng chính là tăng huyết áp và đái tháo đường."
              },
              {
                "q": "Hình ảnh điển hình của tổn thương nhồi máu não ở giai đoạn rất sớm trên các chuỗi xung cộng hưởng từ não là",
                "opts": [
                  "Tăng tín hiệu trên xung ADC, giảm tín hiệu trên xung DWI, tăng tín hiệu trên xung FLAIR",
                  "Giảm tín hiệu trên xung ADC, hạn chế khuếch tán (tăng tín hiệu) trên xung DWI, FLAIR giai đoạn sớm có thể chưa có tổn thương",
                  "Tăng tín hiệu trên xung T2*, tăng tín hiệu trên xung FLAIR, giảm tín hiệu trên xung TOF",
                  "Giảm tín hiệu trên xung DWI, tăng tín hiệu trên xung ADC, giảm tín hiệu trên xung T2*."
                ],
                "ans": 1,
                "exp": "Ở giai đoạn cấp tính rất sớm, hiện tượng phù độc tế bào gây hạn chế khuếch tán nước biểu hiện bằng giảm tín hiệu trên ADC và tăng tín hiệu trên DWI; tổn thương trên FLAIR thường xuất hiện muộn hơn."
              },
              {
                "q": "Một bệnh nhân nam 62 tuổi vào viện giờ thứ 2 của nhồi máu não cấp, có chỉ định dùng thuốc tiêu huyết khối đường tĩnh mạch (r-tPA). Huyết áp đo được lúc vào viện là 195/115 mmHg. Chiến lược kiểm soát huyết áp đúng theo hướng dẫn là",
                "opts": [
                  "Giảm ngay huyết áp tâm thu xuống khoảng 130 - 140 mmHg trong vòng 72 giờ đầu",
                  "Không dùng thuốc hạ áp trong 24 giờ đầu vì huyết áp chưa vượt quá 220/120 mmHg",
                  "Hạ huyết áp xuống < 185/110 mmHg trước khi tiêm r-tPA và duy trì < 180/105 mmHg trong 24 giờ đầu",
                  "Dùng Nifedipine ngậm dưới lưỡi để hạ áp nhanh chóng xuống dưới 140/90 mmHg."
                ],
                "ans": 2,
                "exp": "Trước khi dùng r-tPA đường tĩnh mạch, huyết áp phải được hạ xuống < 185/110 mmHg để tránh nguy cơ xuất huyết não chuyển dạng, và sau đó duy trì < 180/105 mmHg trong suốt 24 giờ đầu. Không khuyến cáo hạ HATT xuống 130 - 140 mmHg trong 72 giờ đầu."
              },
              {
                "q": "Trường hợp nào dưới đây là CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI của điều trị tiêu huyết khối đường tĩnh mạch bằng alteplase ở người bệnh nhồi máu não cấp",
                "opts": [
                  "Người bệnh có tiền sử nhồi máu cơ tim cách đây 6 tháng",
                  "Người bệnh xuất hiện triệu chứng đột quỵ khi ngủ dậy (đột quỵ thức giấc)",
                  "Người bệnh có tiền sử phẫu thuật nội sọ hoặc tủy sống trong vòng 3 tháng gần đây",
                  "Người bệnh có điểm NIHSS = 4 điểm nhưng có khiếm khuyết thần kinh gây tàn tật."
                ],
                "ans": 2,
                "exp": "Phẫu thuật nội sọ hoặc tủy sống trong vòng 3 tháng là chống chỉ định tuyệt đối vì nguy cơ xuất huyết tái phát nghiêm trọng. Các trường hợp như đột quỵ thức giấc (nếu thỏa mãn mismatch hình ảnh học), đột quỵ nhẹ tàn tật, hoặc tiền sử NMCT cũ > 3 tháng là những trường hợp đặc biệt có thể xem xét cân nhắc."
              },
              {
                "q": "Bệnh nhân nữ 70 tuổi, tiền sử rung nhĩ đang điều trị bằng Warfarin. Bệnh nhân vào viện vì đột ngột hôn mê, liệt nửa người phải. CLVT sọ não có hình ảnh ổ tăng tỷ trọng kích thước 40 x 30 mm vùng đồi thị trái. Xét nghiệm đông máu có INR = 2.8. Biện pháp xử trí đông máu khẩn cấp theo hướng dẫn là",
                "opts": [
                  "Tiếp tục dùng liều Warfarin thấp hơn và truyền hồng cầu khối",
                  "Dùng thuốc đối kháng đặc hiệu Idarucizumab đường tĩnh mạch",
                  "Ngừng Warfarin, truyền Vitamin K tĩnh mạch và truyền huyết tương tươi đông lạnh (FFP) hoặc phức hợp prothrombin cô đặc (PCC)",
                  "Tiêm tĩnh mạch chậm Protamine sulfat để trung hòa tác dụng kháng đông."
                ],
                "ans": 2,
                "exp": "Bệnh nhân xuất huyết não do kháng vitamin K (Warfarin) có INR tăng cần ngừng thuốc ngay, dùng Vitamin K tĩnh mạch (mục tiêu INR < 1.3) phối hợp ngay với FFP hoặc PCC để đảo ngược tình trạng đông máu cấp tốc. Protamine sulfat dùng trung hòa Heparin, Idarucizumab dùng trung hòa Dabigatran."
              }
            ]
          },
          "dau-dau": {
            "title": "Bài 2: Đau đầu (5 câu)",
            "questions": [
              {
                "q": "Tổn thương các cấu trúc nhạy cảm với cảm giác đau ở vùng dưới lều (hố sau) của não bộ thường gây ra cảm giác đau quy chiếu về vùng",
                "opts": [
                  "Trán, ổ mắt và thái dương cùng bên",
                  "Vùng chẩm, gáy và sau tai",
                  "Toàn bộ đỉnh đầu và xương gò má",
                  "Cung răng trên và niêm mạc vòm miệng."
                ],
                "ans": 1,
                "exp": "Cấu trúc vùng trên lều được chi phối cảm giác bởi dây thần kinh V (gây đau vùng trán, mắt, thái dương, đỉnh); trong khi vùng dưới lều (hố sau) do dây IX, X và các rễ thần kinh cổ trên (C2, C3) chi phối, do đó gây đau vùng chẩm, gáy và sau tai."
              },
              {
                "q": "Đặc điểm nào dưới đây KHÔNG PHẢI là dấu hiệu cảnh báo (\"Cờ đỏ\" - Red flags) gợi ý đau đầu thứ phát nguy hiểm cần chỉ định cận lâm sàng khẩn cấp",
                "opts": [
                  "Đau đầu khởi phát đột ngột đạt đỉnh dữ dội trong vòng < 1 phút (\"đau đầu sét đánh\")",
                  "Đau đầu mới khởi phát ở người trên 50 tuổi hoặc bệnh nhân có tiền sử ung thư",
                  "Đau đầu tăng lên khi ho, hắt hơi, rặn hoặc đau nhiều về đêm gần sáng",
                  "Đau nửa đầu kiểu mạch đập, kéo dài 6 - 8 giờ, tái phát nhiều năm và đáp ứng với Paracetamol."
                ],
                "ans": 3,
                "exp": "Đau đầu tái diễn có tính chất quen thuộc nhiều năm, không thay đổi kiểu hình và khám thần kinh bình thường là đặc trưng của đau đầu nguyên phát lành tính (như Migraine). Các ý A, B, C đều là dấu hiệu cờ đỏ chỉ điểm tổn thương thứ phát (xuất huyết dưới nhện, u não, tăng áp lực nội sọ...)."
              },
              {
                "q": "Bệnh nhân nam 35 tuổi đến khám vì các cơn đau nhức quanh hốc mắt phải dữ dội như khoan xé. Cơn đau xuất hiện định kỳ vào ban đêm, kéo dài khoảng 45 - 60 phút. Trong cơn, mắt phải đỏ, chảy nước mắt, ngạt mũi và bệnh nhân bồn chồn đi lại liên tục. Chẩn đoán phù hợp nhất theo ICHD-3 là",
                "opts": [
                  "Đau đầu Migraine không có tiền triệu",
                  "Đau đầu dạng căng thẳng mạn tính",
                  "Đau đầu từng cụm (Cluster headache)",
                  "Đau dây thần kinh tam thoa (dây V) nhánh V1."
                ],
                "ans": 2,
                "exp": "Cơn đau quanh hốc mắt 1 bên rất dữ dội, kéo dài 15 - 180 phút, kèm triệu chứng thần kinh tự chủ cùng bên (đỏ mắt, chảy nước mắt/mũi) và trạng thái kích thích/bồn chồn đi lại là hình ảnh kinh điển của Đau đầu từng cụm."
              },
              {
                "q": "Đối với bệnh nhân nữ 28 tuổi mang thai ở tuần thứ 32 xuất hiện cơn Migraine mức độ trung bình, lựa chọn thuốc cắt cơn an toàn và phù hợp nhất là",
                "opts": [
                  "Paracetamol (Acetaminophen)",
                  "Ibuprofen liều cao 600 mg",
                  "Ergotamine tartrate",
                  "Sumatriptan đường uống."
                ],
                "ans": 0,
                "exp": "Paracetamol là lựa chọn đầu tay an toàn nhất cho phụ nữ có thai. NSAIDs (như Ibuprofen) chống chỉ định sau tuần thứ 30 vì nguy cơ đóng sớm ống động mạch của thai nhi. Ergotamine chống chỉ định trong thai kỳ do co thắt tử cung và mạch máu."
              },
              {
                "q": "Bệnh nhân được chẩn đoán Xuất huyết dưới nhện do vỡ túi phình động mạch não. Để dự phòng biến chứng co thắt mạch não gây đau đầu tăng và thiếu máu não thứ phát, phác đồ dùng thuốc Nimodipine theo hướng dẫn là",
                "opts": [
                  "Truyền tĩnh mạch liên tục 2 mg/giờ trong 7 ngày đầu",
                  "Uống 60 mg mỗi 4 giờ, bắt đầu trong vòng 4 ngày đầu và duy trì liên tục trong 21 ngày",
                  "Tiêm bắp 30 mg mỗi 6 giờ khi bệnh nhân có biểu hiện đau đầu dữ dội",
                  "Uống 30 mg mỗi 12 giờ kết hợp với thuốc lợi tiểu thẩm thấu Mannitol."
                ],
                "ans": 1,
                "exp": "Nimodipine dùng đường uống hoặc qua sonde dạ dày 60 mg mỗi 4 giờ, dùng sớm trong 4 ngày đầu và kéo dài 21 ngày nhằm giảm thiểu nguy cơ thiếu máu não do co thắt mạch. Chống chỉ định dùng đường truyền tĩnh mạch do nguy cơ hạ huyết áp nghiêm trọng."
              }
            ]
          },
          "12-day-than-kinh-so": {
            "title": "Bài 3: Khám 12 đôi dây thần kinh sọ (5 câu)",
            "questions": [
              {
                "q": "Nhóm các dây thần kinh sọ nào dưới đây thuộc nhóm dây hỗn hợp (đảm nhiệm cả chức năng cảm giác và vận động)",
                "opts": [
                  "Dây I, Dây II, Dây VIII",
                  "Dây III, Dây IV, Dây VI, Dây XI, Dây XII",
                  "Dây V, Dây VII, Dây IX, Dây X",
                  "Dây V, Dây VII, Dây VIII, Dây XI."
                ],
                "ans": 2,
                "exp": "12 đôi dây thần kinh sọ được chia làm 3 nhóm: Cảm giác (I, II, VIII); Vận động (III, IV, VI, XI, XII); Hỗn hợp gồm cả cảm giác và vận động (V, VII, IX, X)."
              },
              {
                "q": "Khi thăm khám hệ thống vận động nhãn cầu ngoài, tổn thương dây thần kinh vận nhãn ngoài (dây VI) bên phải sẽ dẫn đến biểu hiện lâm sàng nào",
                "opts": [
                  "Mắt phải sụp mi, nhãn cầu lác ra ngoài kèm theo giãn đồng tử",
                  "Nhãn cầu mắt phải lác vào trong phía gốc mũi, không thể liếc mắt ra phía ngoài",
                  "Mất khả năng liếc dọc hai mắt lên trên và xuống dưới (hội chứng Parinaud)",
                  "Nhãn cầu mắt phải lác lên trên và ra ngoài, nhìn đôi tăng khi nhìn xuống dưới."
                ],
                "ans": 1,
                "exp": "Dây VI chi phối cơ thẳng ngoài (đưa nhãn cầu ra ngoài). Khi bị liệt, cơ thẳng trong chiếm ưu thế kéo nhãn cầu lác vào trong phía gốc mũi và mắt không liếc ra ngoài được."
              },
              {
                "q": "Khám một bệnh nhân liệt mặt thấy: nếp nhăn trán bên trái mờ, mắt trái nhắm không kín để lộ nhãn cầu nhìn lên trên và ra ngoài (dấu hiệu Charles Bell dương tính), rãnh mũi má trái mờ, miệng méo sang phải. Kết luận định khu tổn thương là",
                "opts": [
                  "Liệt dây thần kinh VII trung ương bên phải",
                  "Liệt dây thần kinh VII trung ương bên trái",
                  "Liệt dây thần kinh VII ngoại biên bên trái",
                  "Tổn thương nhánh vận động của dây thần kinh V bên trái."
                ],
                "ans": 2,
                "exp": "Liệt dây VII ngoại biên gây yếu liệt toàn bộ nửa mặt cùng bên (cả cơ nửa trên và nửa dưới mặt), biểu hiện bằng mất nếp nhăn trán và dấu hiệu Charles Bell (+). Liệt VII trung ương chỉ gây liệt 1/4 dưới mặt đối bên (vẫn nhăn trán và nhắm mắt kín)."
              },
              {
                "q": "Một bệnh nhân than phiền nghe kém tai phải. Thầy thuốc dùng âm thoa khám thấy: Nghiệm pháp Rinne tai phải cho kết quả âm tính (thời gian nghe đường xương dài hơn đường khí); Nghiệm pháp Weber thấy âm thanh nghe rõ hơn (lệch) về phía tai phải. Tình trạng thính lực của bệnh nhân là",
                "opts": [
                  "Điếc dẫn truyền tai phải",
                  "Điếc tiếp nhận (thần kinh) tai phải",
                  "Điếc tiếp nhận tai trái",
                  "Thính lực đường xương bình thường cả hai bên."
                ],
                "ans": 0,
                "exp": "Nghiệm pháp Rinne âm tính (xương > khí) chứng tỏ tổn thương bộ phận dẫn truyền. Ở người điếc dẫn truyền, nghiệm pháp Weber sẽ tập trung (lệch) về phía bên tai bệnh."
              },
              {
                "q": "Bệnh nhân sau phẫu thuật chấn thương vùng cổ xuất hiện triệu chứng: nuốt nghẹn, sặc chất lỏng; khi há miệng phát âm \"A\", thấy lưỡi gà bị kéo lệch sang bên phải, thành sau họng bên trái không co (dấu hiệu vén màn); đồng thời vai trái xệ xuống, bờ cơ thang trái mờ và không quay cằm sang phải đối kháng được. Bệnh nhân có tổn thương kết hợp các dây thần kinh sọ nào sau đây",
                "opts": [
                  "Liệt dây VII, dây IX và dây XII bên trái",
                  "Liệt dây IX, dây X và dây XI bên trái (hội chứng lỗ rách sau)",
                  "Liệt dây X, dây XI và dây XII bên phải",
                  "Liệt dây V, dây VII và dây IX bên phải."
                ],
                "ans": 1,
                "exp": "Nuốt nghẹn, sặc lỏng, dấu hiệu vén màn hầu (lưỡi gà lệch về bên lành - bên phải) chỉ điểm liệt dây IX và X bên trái. Liệt cơ thang, cơ ức đòn chũm trái (không quay cằm sang phải) là tổn thương dây XI bên trái. Bộ ba dây IX, X, XI cùng chui qua lỗ rách sau nên khi tổn thương tại đây tạo nên hội chứng lỗ rách sau bên trái.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Nội Tiêu hóa: Viêm loét dạ dày tá tràng, Viêm loét đại trực tràng chảy máu, GERD, Xuất huyết tiêu hóa).\nDưới đây là Phần 9: Nội Tiêu hóa (Bài 1 đến Bài 4, gồm Câu 1 – Câu 22). Các phương án gây nhiễu đã được biên tập lại cân bằng về độ dài, cấu trúc ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "tieu-hoa-gan-mat": {
        "name": "Khoa Tiêu hóa - Gan mật",
        "lessons": {
          "viem-loet-da-day-ta-trang": {
            "title": "Bài 1: Viêm loét dạ dày - tá tràng (5 câu)",
            "questions": [
              {
                "q": "Câu 1\nPhương pháp cận lâm sàng có giá trị tiêu chuẩn vàng để chẩn đoán xác định bệnh loét dạ dày - tá tràng là",
                "opts": [
                  "Chụp X-quang dạ dày - tá tràng có thuốc cản quang uống",
                  "Nội soi thực quản - dạ dày - tá tràng qua đường tiêu hóa trên",
                  "Chụp cắt lớp vi tính (CT scanner) hệ thống ổ bụng",
                  "Siêu âm ổ bụng tổng quát bằng đầu dò tần số cao"
                ],
                "ans": 1,
                "exp": "Nội soi tiêu hóa trên là phương tiện chẩn đoán chính xác nhất, cho phép quan sát trực tiếp vị trí, kích thước, hình thái và bờ ổ loét, đồng thời hỗ trợ sinh thiết loại trừ ung thư dạ dày và làm các xét nghiệm tìm vi khuẩn Helicobacter pylori."
              },
              {
                "q": "Câu 2\nHai nguyên nhân kinh điển và phổ biến hàng đầu gây viêm loét dạ dày - tá tràng là",
                "opts": [
                  "Căng thẳng tâm lý (Stress) và chế độ ăn uống nhiều gia vị chua cay",
                  "Nhiễm khuẩn Helicobacter pylori và sử dụng thuốc giảm đau NSAIDs",
                  "Trào ngược dịch mật mạn tính và nhiễm nấm cơ hội Candida",
                  "Nghiện rượu mạn tính kết hợp với thói quen hút thuốc lá kéo dài"
                ],
                "ans": 1,
                "exp": "Nhiễm H. pylori và lạm dụng thuốc chống viêm không steroid (NSAIDs/Aspirin) chiếm trên 90% nguyên nhân gây mất cân bằng giữa yếu tố bảo vệ niêm mạc và yếu tố tấn công dẫn đến hình thành ổ loét."
              },
              {
                "q": "Câu 3\nCác phương pháp không xâm lấn thường được áp dụng để chẩn đoán nhiễm vi khuẩn Helicobacter pylori bao gồm",
                "opts": [
                  "Test urease nhanh qua mảnh sinh thiết nội soi (RUT)",
                  "Test thở Ure, tìm kháng nguyên trong phân và kháng thể huyết thanh",
                  "Chụp X-quang dạ dày có thuốc cản quang theo tư thế nằm",
                  "Nuôi cấy vi khuẩn từ dịch dạ dày hút qua ống thông mềm"
                ],
                "ans": 1,
                "exp": "Test thở Ure ( hoặc ) và xét nghiệm kháng nguyên trong phân là hai phương pháp không xâm lấn có độ nhạy và độ đặc hiệu cao nhất, thường được chỉ định để chẩn đoán ban đầu cũng như đánh giá kết quả tiệt trừ sau điều trị. Test urease nhanh qua nội soi là phương pháp xâm lấn."
              },
              {
                "q": "Câu 4\nTại các khu vực có tỷ lệ vi khuẩn H. pylori kháng Clarithromycin cao (> 15%), phác đồ tiệt trừ ưu tiên hàng đầu là",
                "opts": [
                  "Phác đồ 3 thuốc: PPI + Amoxicillin + Clarithromycin trong 10 ngày",
                  "Phác đồ 4 thuốc có Bismuth: PPI + Bismuth + Tetra + Metro trong 14 ngày",
                  "Phác đồ phối hợp kháng sinh kép: PPI + Ciprofloxacin trong 7 ngày",
                  "Đơn trị liệu liên tục bằng thuốc ức chế bơm proton (PPI) liều cao"
                ],
                "ans": 1,
                "exp": "Do tỷ lệ kháng Clarithromycin ban đầu tại Việt Nam hiện nay rất cao (> 30 - 40%), phác đồ 3 thuốc cổ điển đã mất hiệu lực; phác đồ 4 thuốc có Bismuth dùng liên tục 14 ngày đạt tỷ lệ tiệt trừ thành công > 85 - 90% và là lựa chọn đầu tay."
              },
              {
                "q": "Câu 5\nCác biến chứng ngoại khoa cấp tính và mạn tính thường gặp của bệnh loét dạ dày - tá tràng bao gồm",
                "opts": [
                  "Thủng ổ loét gây hội chứng viêm phúc mạc cấp",
                  "Xuất huyết tiêu hóa do ổ loét ăn mòn mạch máu",
                  "Hẹp môn vị do phù nề và xơ sẹo co kéo môn vị",
                  "Tất cả các biến chứng ngoại khoa kể trên"
                ],
                "ans": 3,
                "exp": "Bệnh loét dạ dày - tá tràng nếu không được điều trị triệt để có thể dẫn đến ba biến chứng chính: Xuất huyết tiêu hóa cao (thường gặp nhất), thủng ổ loét tạo liềm hơi dưới cơ hoành gây viêm phúc mạc cấp, và hẹp môn vị gây nôn thức ăn cũ ứ đọng."
              }
            ]
          },
          "viem-loet-dai-truc-trang": {
            "title": "Bài 2: Viêm loét đại trực tràng chảy máu (5 câu)",
            "questions": [
              {
                "q": "Câu 6\nĐặc điểm tổn thương giải phẫu bệnh và nội soi điển hình của bệnh Viêm loét đại trực tràng chảy máu (UC) là",
                "opts": [
                  "Tổn thương dạng từng đoạn ngắt quãng, xen kẽ giữa các vùng niêm mạc lành",
                  "Tổn thương liên tục từ trực tràng lan lên, khu trú niêm mạc và dưới niêm",
                  "Tổn thương viêm xuyên thành toàn bộ các lớp của thành ruột kèm đường rò",
                  "Thường chỉ khu trú tổn thương đơn độc tại đoạn cuối hồi tràng và manh tràng"
                ],
                "ans": 1,
                "exp": "Viêm loét đại trực tràng chảy máu (UC) luôn khởi phát từ trực tràng rồi lan liên tục lên trên không có vùng niêm mạc lành xen kẽ (khác với bệnh Crohn có tổn thương nhảy cóc và viêm xuyên thành), đồng thời mức độ tổn thương chỉ nông ở lớp niêm mạc và dưới niêm mạc."
              },
              {
                "q": "Câu 7\nTriệu chứng lâm sàng thường gặp nhất khiến bệnh nhân viêm loét đại trực tràng chảy máu đi khám bệnh là",
                "opts": [
                  "Táo bón cơ năng mạn tính kéo dài kèm theo cảm giác đầy trướng bụng",
                  "Đi ngoài nhiều lần phân lỏng lẫn nhầy máu kèm đau quặn bụng, mót rặn",
                  "Nôn ra máu đỏ tươi hoặc nôn dịch đen kèm đau tức vùng thượng vị",
                  "Đau quặn bụng dữ dội từng cơn vùng hạ sườn phải lan chéo lên vai"
                ],
                "ans": 1,
                "exp": "Niêm mạc trực tràng và đại tràng bị xung huyết, trợt loét liên tục dẫn đến xuất huyết và tăng tiết chất nhầy, kích thích co bóp cơ trơn trực tràng gây hội chứng lỵ mạn tính: đại tiện nhiều lần phân nhầy máu, đau quặn dọc khung đại tràng và cảm giác mót rặn liên tục."
              },
              {
                "q": "Câu 8\nThang điểm lâm sàng kinh điển được sử dụng phổ biến nhất để phân độ mức độ nặng của đợt bùng phát viêm loét đại trực tràng chảy máu là",
                "opts": [
                  "Thang điểm Child-Pugh đánh giá chức năng gan",
                  "Thang điểm Rockall tiên lượng xuất huyết tiêu hóa",
                  "Thang điểm Truelove và Witts phân loại đợt cấp",
                  "Thang điểm hôn mê Glasgow đánh giá tri giác"
                ],
                "ans": 2,
                "exp": "Tiêu chuẩn Truelove và Witts phân chia đợt cấp thành nhẹ, trung bình và nặng dựa vào 6 thông số: số lần đi ngoài phân máu trong ngày ( lần/ngày là nhẹ,  lần/ngày là nặng), nhiệt độ cơ thể, nhịp tim, nồng độ Hemoglobin máu, tốc độ máu lắng (ESR) và chỉ số CRP."
              },
              {
                "q": "Câu 9\nThuốc chống viêm được lựa chọn hàng đầu để điều trị tấn công và duy trì lui bệnh cho viêm loét đại trực tràng chảy máu mức độ nhẹ đến trung bình là",
                "opts": [
                  "Nhóm 5-ASA (Mesalamine/Sulfasalazine) dùng đường uống hoặc tại chỗ",
                  "Kháng sinh nhóm Aminoglycoside phổ rộng dùng đường tiêm truyền tĩnh mạch",
                  "Thuốc ức chế bơm proton (PPI) liều cao kết hợp thuốc bao phủ niêm mạc",
                  "Thuốc làm giảm nhu động ruột Loperamide dùng theo đường uống ngắt quãng"
                ],
                "ans": 0,
                "exp": "Các hợp chất chứa 5-ASA (như Mesalamine) có tác dụng chống viêm tại chỗ trên bề mặt niêm mạc đại tràng, là lựa chọn nền tảng hàng đầu để đạt được lui bệnh và duy trì lâu dài ở bệnh nhân thể nhẹ và trung bình. Tuyệt đối tránh dùng thuốc làm liệt ruột/giảm nhu động (như Loperamide) trong đợt cấp vì nguy cơ gây phình giãn đại tràng nhiễm độc."
              },
              {
                "q": "Câu 10\nBiến chứng cấp tính đe dọa tính mạng người bệnh trong đợt tiến triển nặng của viêm loét đại trực tràng chảy máu là",
                "opts": [
                  "Hội chứng rách tâm vị chảy máu Mallory-Weiss",
                  "Phình giãn đại tràng nhiễm độc và thủng đại tràng",
                  "Hẹp thực quản co rút do co thắt cơ trơn lan tỏa",
                  "Trĩ nội tắc mạch gây hoại tử nghẹt búi trĩ"
                ],
                "ans": 1,
                "exp": "Viêm loét sâu lan tỏa làm tổn thương lớp cơ và đám rối thần kinh cơ ruột, khiến đại tràng mất trương lực và giãn to trên 6 cm kèm theo hội chứng nhiễm độc toàn thân (sốt cao, nhịp nhanh, tụt huyết áp, viêm phúc mạc do hoại tử thủng), đòi hỏi phải hồi sức tích cực và phẫu thuật cấp cứu cắt toàn bộ đại tràng."
              }
            ]
          },
          "gerd-trao-nguoc": {
            "title": "Bài 3: Trào ngược dạ dày thực quản (GERD) (5 câu)",
            "questions": [
              {
                "q": "Câu 11\nHai triệu chứng lâm sàng điển hình và có giá trị nhất để định hướng chẩn đoán bệnh trào ngược dạ dày thực quản là",
                "opts": [
                  "Đau quặn bụng âm ỉ quanh rốn kèm theo ỉa chảy nhiều lần",
                  "Ợ nóng (nóng rát sau xương ức) và Ợ chua (trớ dịch acid)",
                  "Khó thở thì thở ra kịch phát kèm theo nghe phổi có ran rít",
                  "Cảm giác nuốt nghẹn với thức ăn đặc tăng dần theo thời gian"
                ],
                "ans": 1,
                "exp": "Ợ nóng (Heartburn) và trớ dịch acid/thức ăn (Regurgitation) là hai triệu chứng đặc hiệu nhất của GERD. Khi bệnh nhân có các triệu chứng này xuất hiện  lần/tuần gây ảnh hưởng chất lượng cuộc sống thì có thể chẩn đoán xác định và tiến hành điều trị thử bằng PPI."
              },
              {
                "q": "Câu 12\nBệnh trào ngược dạ dày thực quản được xác định là gây ảnh hưởng đáng kể trên lâm sàng khi triệu chứng ợ nóng/ợ trớ xuất hiện với tần suất",
                "opts": [
                  "Tần suất xuất hiện thưa thớt khoảng 1 lần trong một tháng",
                  "Tần suất xuất hiện ổn định khoảng 1 lần trong một tuần",
                  "Tần suất xuất hiện từ 2 lần trở lên trong một tuần",
                  "Tần suất xuất hiện dồn dập 3 lần/ngày kéo dài trong 3 ngày"
                ],
                "ans": 2,
                "exp": "Theo định nghĩa Montreal, trào ngược dạ dày thực quản được xem là bệnh lý (GERD) khi các triệu chứng trào ngược gây phiền toái cho người bệnh, thường là xuất hiện  ngày trong một tuần đối với mức độ nhẹ hoặc  ngày trong tuần đối với mức độ trung bình đến nặng."
              },
              {
                "q": "Câu 13\nNhóm thuốc được khuyến cáo ưu tiên lựa chọn hàng đầu để điều trị kiểm soát triệu chứng và làm lành tổn thương viêm thực quản do trào ngược là",
                "opts": [
                  "Thuốc ức chế bài tiết acid nhóm bơm proton (PPI)",
                  "Thuốc kháng thụ thể Histamin H2 đơn chất liều cao",
                  "Thuốc trung hòa acid dạ dày (Antacid) dạng sữa",
                  "Thuốc bảo vệ và bao phủ niêm mạc dạ dày Sucralfate"
                ],
                "ans": 0,
                "exp": "Thuốc ức chế bơm proton (Omeprazole, Esomeprazole, Rabeprazole, Pantoprazole...) ức chế bài tiết acid dịch vị mạnh và kéo dài nhất, giúp nâng cao pH dạ dày, làm giảm triệu chứng nhanh chóng và liền sẹo trợt loét niêm mạc thực quản với tỷ lệ cao nhất."
              },
              {
                "q": "Câu 14\nThời gian của một liệu trình điều trị chuẩn ban đầu bằng thuốc ức chế bơm proton (PPI) đường uống cho bệnh trào ngược dạ dày thực quản là",
                "opts": [
                  "Liệu trình duy trì trong thời gian 2 tuần",
                  "Liệu trình duy trì trong thời gian 4 tuần",
                  "Liệu trình chuẩn kéo dài liên tục trong 8 tuần",
                  "Liệu trình kéo dài tối thiểu trong 6 tháng"
                ],
                "ans": 2,
                "exp": "Hướng dẫn của Bộ Y tế và Hiệp hội Tiêu hóa khuyến cáo liệu trình khởi đầu chuẩn của PPI là 8 tuần với liều tiêu chuẩn 1 lần mỗi ngày trước ăn sáng 30 - 60 phút nhằm đảm bảo ức chế tối đa các bơm proton mới tổng hợp."
              },
              {
                "q": "Câu 15\nTrường hợp trào ngược dạ dày thực quản được định nghĩa là \"GERD kháng trị\" khi",
                "opts": [
                  "Bệnh nhân không đỡ triệu chứng sau 2 tuần dùng thuốc trung hòa acid",
                  "Bệnh nhân vẫn còn ợ nóng sau 4 tuần dùng PPI liều chuẩn 1 lần/ngày",
                  "Không đáp ứng sau khi đã dùng PPI liều gấp đôi liên tục trên 8 tuần",
                  "Bệnh nhân xuất hiện biến chứng dị sản ruột niêm mạc Barrett thực quản"
                ],
                "ans": 2,
                "exp": "GERD kháng trị được chẩn đoán khi triệu chứng vẫn dai dẳng hoặc tổn thương viêm loét thực quản không liền dù đã tuân thủ điều trị PPI liều gấp đôi (chia 2 lần uống trước ăn sáng và trước ăn tối) kéo dài tối thiểu 8 tuần liên tục. Trường hợp này cần tiến hành đo pH - trở kháng thực quản 24 giờ và nội soi lại."
              }
            ]
          },
          "xuat-huyet-tieu-hoa": {
            "title": "Bài 4: Xuất huyết tiêu hóa (7 câu)",
            "questions": [
              {
                "q": "Câu 16\nNguyên nhân thường gặp nhất gây xuất huyết tiêu hóa cao ở người bệnh không có hội chứng tăng áp lực tĩnh mạch cửa là",
                "opts": [
                  "Tổn thương loét dạ dày - tá tràng",
                  "Rách rách tâm vị hội chứng Mallory-Weiss",
                  "Ung thư dạ dày thể thâm nhiễm tiến triển",
                  "Dị dạng mạch máu dưới niêm mạc Dieulafoy"
                ],
                "ans": 0,
                "exp": "Loét dạ dày - tá tràng chiếm khoảng 50 - 60% tổng số các trường hợp xuất huyết tiêu hóa trên nhập viện cấp cứu, phổ biến hơn nhiều so với rách tâm vị hay dị dạng mạch máu."
              },
              {
                "q": "Câu 17\nTheo phân loại Forrest trên hình ảnh nội soi dạ dày tá tràng, tổn thương được xếp vào mức độ \"Forrest IIa\" là",
                "opts": [
                  "Máu đang phun thành tia áp lực cao từ đáy ổ loét",
                  "Máu đang rỉ ối liên tục nhưng không phun thành tia",
                  "Có điểm mạch nổi rõ ở đáy loét nhưng không chảy máu",
                  "Đáy ổ loét có cục máu đông bám chắc chắn tại chỗ"
                ],
                "ans": 2,
                "exp": "Phân loại Forrest trong loét dạ dày - tá tràng: Forrest Ia (phun tia), Forrest Ib (rỉ ối), Forrest IIa (có điểm mạch nổi rõ, không chảy máu), Forrest IIb (cục máu đông bám), Forrest IIc (cặn sắc tố đen), Forrest III (đáy ổ loét sạch)."
              },
              {
                "q": "Câu 18\nChỉ định dùng PPI tĩnh mạch liều cao (bolus 80 mg, truyền 8 mg/h trong 72h) bắt buộc áp dụng sau can thiệp nội soi cho các phân độ Forrest nào",
                "opts": [
                  "Chỉ áp dụng cho các tổn thương thuộc phân loại Forrest III",
                  "Chỉ định cho các tổn thương thuộc phân loại Forrest IIc và III",
                  "Áp dụng cho các phân nhóm nguy cơ cao Forrest Ia, Ib, IIa và IIb",
                  "Áp dụng thường quy cho mọi trường hợp viêm dạ dày trợt nông"
                ],
                "ans": 2,
                "exp": "Các tổn thương thuộc nhóm nguy cơ cao (Forrest Ia, Ib, IIa, IIb) sau khi can thiệp cầm máu qua nội soi cần được duy trì pH dạ dày  liên tục trong 72 giờ đầu bằng phác đồ PPI liều cao truyền tĩnh mạch nhằm ngăn cản quá trình tiêu cục máu đông và phòng ngừa tái xuất huyết."
              },
              {
                "q": "Câu 19\nThang điểm lâm sàng được sử dụng phổ biến nhất để phân tầng nguy cơ xuất huyết tiêu hóa cao, dự đoán tái phát và tử vong là",
                "opts": [
                  "Thang điểm Child-Pugh đánh giá suy gan",
                  "Thang điểm CURB-65 phân tầng viêm phổi",
                  "Thang điểm Rockall (lâm sàng và nội soi)",
                  "Thang điểm Wells dự đoán thuyên tắc mạch"
                ],
                "ans": 2,
                "exp": "Thang điểm Rockall kết hợp tuổi, tình trạng huyết động (mạch, huyết áp), bệnh phối hợp kèm theo cùng với hình ảnh tổn thương và dấu hiệu chảy máu qua nội soi để phân loại bệnh nhân thành các nhóm nguy cơ thấp, trung bình và cao về khả năng tái xuất huyết và tử vong."
              },
              {
                "q": "Câu 20\nThuốc điều trị đặc hiệu có tác dụng co mạch tạng chọn lọc giúp hạ áp lực tĩnh mạch cửa trong vỡ giãn tĩnh mạch thực quản là",
                "opts": [
                  "Thuốc ức chế tiết acid Omeprazole truyền tĩnh mạch",
                  "Thuốc co mạch hệ tạng Octreotide (hoặc Terlipressin)",
                  "Kháng sinh diệt khuẩn kỵ khí ruột Metronidazole",
                  "Thuốc chống tiêu sợi huyết Tranexamic acid tiêm bắp"
                ],
                "ans": 1,
                "exp": "Octreotide (chất đồng vận somatostatin) hoặc Terlipressin gây co mạch hệ tạng, làm giảm lưu lượng máu vào hệ thống tĩnh mạch cửa, do đó làm giảm áp lực bên trong các búi giãn tĩnh mạch thực quản - dạ dày và hỗ trợ cầm máu nhanh chóng."
              },
              {
                "q": "Câu 21\nMục tiêu nồng độ Hemoglobin cần đạt khi truyền khối hồng cầu theo chiến lược hạn chế ở bệnh nhân xuất huyết tiêu hóa không có bệnh tim mạch là",
                "opts": [
                  "Bắt buộc phải đưa nồng độ Hb đạt mức bình thường",
                  "Nâng và duy trì ổn định nồng độ Hb trong khoảng",
                  "Duy trì nồng độ Hb an toàn trong khoảng mục tiêu",
                  "Chỉ truyền máu cấp cứu khi người bệnh có biểu hiện ngừng thở"
                ],
                "ans": 2,
                "exp": "Các nghiên cứu đa trung tâm chứng minh chiến lược truyền máu hạn chế (bắt đầu truyền khi , duy trì mục tiêu  ở người trẻ tuổi hoặc  ở người có bệnh tim mạch) làm giảm áp lực nội mạch, giảm tỷ lệ chảy máu tái phát và giảm tỷ lệ tử vong rõ rệt so với truyền máu ồ ạt đưa Hb lên cao."
              },
              {
                "q": "Câu 22\nTrình tự các bước xử trí ban đầu đúng đắn khi tiếp nhận một bệnh nhân xuất huyết tiêu hóa trên nặng có tụt huyết áp là",
                "opts": [
                  "Đưa ngay tới phòng nội soi để can thiệp cầm máu rồi mới đặt đường truyền",
                  "Hồi sức tuần hoàn đường thở, lập đường truyền bù dịch/máu rồi mới nội soi",
                  "Cho bệnh nhân uống sữa lạnh hoặc nước đá để làm co thắt mạch máu dạ dày",
                  "Đặt ống thông ba nòng Blakemore chèn ép ngay trước khi thăm khám toàn diện"
                ],
                "ans": 1,
                "exp": "Nguyên tắc hồi sức cấp cứu: Hồi sức huyết động (bảo vệ đường thở, bù thể tích tuần hoàn bằng NaCl 0.9% hoặc Ringer Lactate qua kim luồn lớn) luôn luôn là ưu tiên số 1 trước khi đưa bệnh nhân đi can thiệp nội soi. Nội soi trên nền bệnh nhân đang sốc tụt huyết áp chưa được bù dịch sẽ làm tăng vọt nguy cơ ngừng tim và tai biến do thủ thuật.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Cấp cứu & Hồi sức tích cực - Phần 1: Bài 1 đến Bài 8, gồm Phân loại cấp cứu, Ngừng tuần hoàn, Sốc phản vệ, v.v.).\nDưới đây là Phần 10: Cấp cứu & Hồi sức tích cực (Nửa đầu: Bài 1 đến Bài 8, gồm Câu 1 – Câu 21). Các phương án gây nhiễu đã được biên tập lại cân bằng về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "viem-gan-virus": {
            "title": "Bài 5: Viêm gan virus (10 câu)",
            "questions": [
              {
                "q": "Câu 1\nDấu ấn huyết thanh đặc hiệu đầu tiên xuất hiện trong máu và dùng để chẩn đoán xác định tình trạng nhiễm virus viêm gan B (HBV) là",
                "opts": [
                  "Kháng thể kháng kháng nguyên bề mặt (Anti-HBs)",
                  "Kháng nguyên bề mặt của virus viêm gan B (HBsAg)",
                  "Kháng nguyên hòa tan của lõi virus viêm gan B (HBeAg)",
                  "Kháng thể kháng kháng nguyên lõi đặc hiệu (Anti-HBc IgG)"
                ],
                "ans": 1,
                "exp": "HBsAg là dấu ấn xuất hiện sớm nhất trong huyết thanh sau khi phơi nhiễm (2 - 4 tuần trước khi men gan tăng và có triệu chứng lâm sàng). Sự tồn tại của HBsAg trên 6 tháng là tiêu chuẩn xác định nhiễm virus viêm gan B mạn tính."
              },
              {
                "q": "Câu 2\nDấu ấn huyết thanh chỉ điểm sự phục hồi lâm sàng và cơ thể đã có kháng thể bảo vệ miễn dịch chống lại virus viêm gan B là",
                "opts": [
                  "Kháng nguyên vỏ hòa tan của virus (HBeAg)",
                  "Kháng thể kháng kháng nguyên hòa tan (Anti-HBe)",
                  "Kháng thể kháng kháng nguyên bề mặt (Anti-HBs)",
                  "Kháng thể kháng kháng nguyên lõi cấp (Anti-HBc IgM)"
                ],
                "ans": 2,
                "exp": "Kháng thể Anti-HBs xuất hiện sau khi HBsAg biến mất trong giai đoạn lui bệnh của viêm gan B cấp (hoặc sau khi tiêm phòng vắc-xin thành công), là bằng chứng khẳng định cơ thể đã có miễn dịch bảo vệ lâu dài."
              },
              {
                "q": "Câu 3\nDấu ấn nào sau đây phản ánh tình trạng virus viêm gan B đang nhân lên mạnh mẽ trong tế bào gan và người bệnh có nguy cơ lây nhiễm rất cao",
                "opts": [
                  "HBeAg dương tính kèm theo nồng độ HBV DNA cao trong huyết thanh",
                  "Anti-HBs nồng độ cao kèm theo men gan AST/ALT ổn định lâu dài",
                  "Anti-HBe dương tính kèm theo nồng độ Bilirubin huyết thanh giảm",
                  "Nồng độ Bilirubin máu toàn phần và men gan AST/ALT tăng cao"
                ],
                "ans": 0,
                "exp": "HBeAg là kháng nguyên hòa tan tiết ra trong quá trình nhân đôi của virus; sự hiện diện của HBeAg cùng với tải lượng HBV DNA cao phản ánh tình trạng virus đang nhân lên mạnh và nguy cơ lây truyền rất lớn."
              },
              {
                "q": "Câu 4\nThuốc kháng virus đường uống (NUCs) được Bộ Y tế khuyến cáo lựa chọn an toàn hàng đầu để điều trị viêm gan B mạn tính cho phụ nữ đang mang thai là",
                "opts": [
                  "Entecavir (ETV)",
                  "Lamivudine (LAM)",
                  "Tenofovir disoproxil fumarate (TDF)",
                  "Tenofovir alafenamide (TAF)"
                ],
                "ans": 2,
                "exp": "TDF có hàng rào kháng thuốc cao, hiệu quả ức chế virus mạnh và có dữ liệu an toàn đầy đủ nhất trong thai kỳ (nhóm B theo FDA), không gây dị tật bẩm sinh và giúp dự phòng lây truyền HBV từ mẹ sang con."
              },
              {
                "q": "Câu 5\nĐặc điểm dịch tễ học và tiến triển tự nhiên điển hình của bệnh Viêm gan virus C (HCV) là",
                "opts": [
                  "Khoảng 90% trường hợp nhiễm cấp tính tự khỏi hoàn toàn không di chứng",
                  "Bệnh lây truyền chủ yếu qua nguồn nước và thực phẩm theo đường phân - miệng",
                  "Khoảng 75 - 85% trường hợp nhiễm cấp tính sẽ tiến triển thành viêm gan mạn",
                  "Hiện nay đã có vắc-xin phòng bệnh đặc hiệu đưa vào tiêm chủng mở rộng"
                ],
                "ans": 2,
                "exp": "Khác với viêm gan B ở người lớn (hơn 90% tự khỏi), viêm gan C cấp tính thường diễn tiến âm thầm và có tới 75 - 85% trường hợp chuyển thành mạn tính, là nguyên nhân hàng đầu dẫn đến xơ gan và ung thư gan. Hiện chưa có vắc-xin phòng bệnh viêm gan C."
              },
              {
                "q": "Câu 6\nPhác đồ thuốc kháng virus tác dụng trực tiếp (DAAs) Sofosbuvir/Velpatasvir (SOF/VEL) cho bệnh nhân viêm gan C mạn chưa xơ gan hoặc xơ gan còn bù có thời gian điều trị chuẩn theo Bộ Y tế là",
                "opts": [
                  "Liệu trình điều trị uống liên tục trong 8 tuần",
                  "Liệu trình điều trị uống liên tục trong 10 tuần",
                  "Liệu trình điều trị chuẩn uống liên tục 12 tuần",
                  "Liệu trình điều trị kéo dài liên tục trong 24 tuần"
                ],
                "ans": 2,
                "exp": "Phác đồ tác dụng trên tất cả các genotype Sofosbuvir 400mg + Velpatasvir 100mg phối hợp cố định trong 1 viên/ngày uống liên tục 12 tuần đạt tỷ lệ đáp ứng virus bền vững (SVR 12) trên 95% ở bệnh nhân chưa xơ gan hoặc xơ gan Child-Pugh A."
              },
              {
                "q": "Câu 7\nChống chỉ định tuyệt đối sử dụng các thuốc kháng virus tác dụng trực tiếp (DAAs) trong điều trị viêm gan C là",
                "opts": [
                  "Phụ nữ đang mang thai hoặc có kế hoạch mang thai",
                  "Bệnh nhân cao tuổi từ 65 tuổi trở lên có bệnh tim",
                  "Bệnh nhân có tiền sử mắc đái tháo đường typ 2",
                  "Bệnh nhân đồng nhiễm HIV đang điều trị thuốc ARV"
                ],
                "ans": 0,
                "exp": "Hiện chưa có đủ dữ liệu an toàn về nguy cơ quái thai của các phác đồ DAAs trên người mang thai; do đó chống chỉ định sử dụng DAAs trong thai kỳ và phụ nữ độ tuổi sinh đẻ cần tránh thai hiệu quả trong suốt đợt dùng thuốc."
              },
              {
                "q": "Câu 8\nĐường lây truyền chủ yếu của virus viêm gan A (HAV) và virus viêm gan E (HEV) là",
                "opts": [
                  "Đường tiêu hóa (phân - miệng qua nguồn nước và thực phẩm ô nhiễm)",
                  "Đường máu qua tiêm chích ma túy hoặc truyền máu không an toàn",
                  "Đường quan hệ tình dục không áp dụng các biện pháp bảo vệ",
                  "Đường hô hấp qua tiếp xúc gần với các giọt bắn của người bệnh"
                ],
                "ans": 0,
                "exp": "HAV và HEV không có vỏ bọc lipid, đào thải qua phân và lây nhiễm qua đường tiêu hóa do ăn uống thực phẩm, nguồn nước bị nhiễm mầm bệnh. Bệnh tiến triển cấp tính, thường không chuyển sang mạn tính."
              },
              {
                "q": "Câu 9\nTam chứng lâm sàng thường gặp trong giai đoạn khởi phát của viêm gan virus cấp điển hình gồm",
                "opts": [
                  "Cổ trướng lượng nhiều, phù mềm hai chi dưới và xuất huyết tiêu hóa",
                  "Sốt nhẹ, chán ăn, sợ mỡ, tức hạ sườn phải, sau đó tiểu sẫm và vàng da",
                  "Đau bụng dữ dội từng cơn lan ra sau lưng kèm theo nôn vọt liên tục",
                  "Tiêu chảy phân lỏng nhiều lần lẫn nhầy máu kèm theo cảm giác mót rặn"
                ],
                "ans": 1,
                "exp": "Viêm gan virus cấp thường khởi phát bằng giai đoạn tiền hoàng đản kéo dài vài ngày đến một tuần với sốt nhẹ, chán ăn, đầy bụng, sợ mỡ; tiếp theo là giai đoạn hoàng đản với nước tiểu vàng sẫm, vàng củng mạc mắt và vàng da (khi vàng da xuất hiện thì sốt thường giảm đi)."
              },
              {
                "q": "Câu 10\nBệnh nhân được chẩn đoán ung thư biểu mô tế bào gan (HCC) trên nền viêm gan virus B mạn tính, chỉ định điều trị thuốc kháng virus (TDF hoặc ETV) được đặt ra khi",
                "opts": [
                  "Bất kỳ khi nào HBsAg (+), không phụ thuộc tải lượng HBV DNA và ALT",
                  "Chỉ điều trị khi nồng độ men gan ALT tăng  2 lần giới hạn bình thường",
                  "Chỉ điều trị khi định lượng tải lượng virus",
                  "Chỉ điều trị khi khối u gan có kích thước nhỏ dưới 3 cm và chưa xâm lấn"
                ],
                "ans": 0,
                "exp": "Hướng dẫn của Bộ Y tế và AASLD/EASL quy định: Người bệnh ung thư gan có nhiễm HBV (HBsAg dương tính) bắt buộc phải điều trị thuốc kháng virus NUCs ngay lập tức và kéo dài suốt đời nhằm ức chế sự nhân lên của virus, bảo tồn chức năng gan và giảm nguy cơ tái phát u."
              }
            ]
          },
          "xo-gan": {
            "title": "Bài 6: Xơ gan (10 câu)",
            "questions": [
              {
                "q": "Câu 11\nĐặc điểm tổn thương mô bệnh học kinh điển xác định bản chất của xơ gan là",
                "opts": [
                  "Gan to ứ máu kèm giãn rộng mạng lưới các tĩnh mạch trên gan",
                  "Hoại tử gan, tăng sinh dải xơ và tạo nốt tân sinh đảo lộn cấu trúc",
                  "Thoái hóa mỡ đơn thuần của các tế bào gan quanh tĩnh mạch trung tâm",
                  "Tích tụ bất thường của các sắc tố đồng hoặc sắt trong nhu mô gan"
                ],
                "ans": 1,
                "exp": "Xơ gan là hậu quả cuối cùng của viêm mạn tính: các tế bào hình sao tăng tổng hợp collagen tạo dải xơ bao quanh các cụm tế bào gan tái tạo (tạo thành nốt giả/nodule), làm biến dạng hoàn toàn mạng lưới mạch máu và cấu trúc tiểu thùy gan."
              },
              {
                "q": "Câu 12\nHai hội chứng lâm sàng lớn phản ánh đầy đủ các triệu chứng và biến chứng của bệnh xơ gan mất bù là",
                "opts": [
                  "Hội chứng nhiễm khuẩn toàn thân và hội chứng thiếu máu mạn tính",
                  "Hội chứng suy chức năng gan và Hội chứng tăng áp lực tĩnh mạch cửa",
                  "Hội chứng đông đặc nhu mô phổi và hội chứng tràn dịch đa màng",
                  "Hội chứng cường vỏ thượng thận Cushing và hội chứng chuyển hóa"
                ],
                "ans": 1,
                "exp": "Xơ gan mất bù biểu hiện qua 2 hội chứng lớn: Hội chứng suy chức năng tế bào gan (vàng da, sao mạch, lòng bàn tay son, phù, xuất huyết, giảm albumin) và Hội chứng tăng áp lực tĩnh mạch cửa (cổ trướng, tuần hoàn bàng hệ cửa - chủ, lách to, giãn tĩnh mạch thực quản)."
              },
              {
                "q": "Câu 13\nThang điểm Child-Pugh dùng để đánh giá mức độ suy giảm chức năng gan và tiên lượng bệnh nhân xơ gan bao gồm 5 tiêu chuẩn nào sau đây",
                "opts": [
                  "Tuổi bệnh nhân, Tần số tim, Huyết áp động mạch, Men gan AST, Men ALT",
                  "Bilirubin toàn phần, Albumin máu, Chỉ số INR, Mức cổ trướng, Bệnh não gan",
                  "Nồng độ Ure máu, Nồng độ Creatinin, Nồng độ Natri máu, Thể tích gan, Tiểu cầu",
                  "Chiều cao lách, Nồng độ dấu ấn AFP, Glucose máu, Số lượng hồng cầu, Bạch cầu"
                ],
                "ans": 1,
                "exp": "Thang điểm Child-Pugh đánh giá 5 thông số (mỗi thông số 1 - 3 điểm): Bilirubin, Albumin, INR (hoặc tỷ lệ Prothrombin), mức độ Cổ trướng và mức độ Bệnh não gan; phân thành Child-Pugh A (5 - 6 điểm), B (7 - 9 điểm) và C (10 - 15 điểm)."
              },
              {
                "q": "Câu 14\nPhác đồ dùng thuốc lợi tiểu khởi đầu được Bộ Y tế khuyến cáo trong điều trị cổ trướng do xơ gan là",
                "opts": [
                  "Furosemide liều đơn độc  uống một lần vào buổi sáng",
                  "Phối hợp Spironolactone  và Furosemide",
                  "Truyền tĩnh mạch liên tục dung dịch Mannitol 20% kết hợp bổ sung kali",
                  "Phối hợp thuốc ức chế carbonic anhydrase với nhóm lợi tiểu thiazid"
                ],
                "ans": 1,
                "exp": "Xơ gan có cường aldosteron thứ phát; việc phối hợp kháng aldosterone (Spironolactone) và lợi tiểu quai (Furosemide) theo tỷ lệ chuẩn  vừa đảm bảo hiệu quả bài niệu vừa giữ thăng bằng nồng độ Kali máu."
              },
              {
                "q": "Câu 15\nMục tiêu giảm cân nặng an toàn mỗi ngày khi điều trị lợi tiểu ở bệnh nhân xơ gan có cổ trướng là",
                "opts": [
                  "Giảm tối đa 0,5 kg/ngày khi không phù (hoặc 1,0 kg/ngày nếu có phù chân)",
                  "Giảm nhanh từ 2 - 3 kg/ngày nhằm giải áp nhanh khoang màng bụng",
                  "Đưa cân nặng sụt giảm cố định 5 kg ngay trong tuần điều trị đầu tiên",
                  "Giảm cân không giới hạn tốc độ miễn là hết triệu chứng trướng bụng"
                ],
                "ans": 0,
                "exp": "Dịch cổ trướng chỉ có thể tái hấp thu vào lòng mạch tối đa khoảng . Dùng lợi tiểu quá liều làm giảm cân quá nhanh ( khi không phù) sẽ gây giảm thể tích tuần hoàn hiệu dụng, dẫn đến suy thận cấp trước thận, hạ natri máu và khởi phát hội chứng gan thận hoặc hôn mê gan."
              },
              {
                "q": "Câu 16\nTiêu chuẩn chẩn đoán xác định Viêm phúc mạc nhiễm khuẩn nguyên phát (SBP) khi chọc dò dịch màng bụng là",
                "opts": [
                  "Nồng độ protein toàn phần trong dịch màng bụng đạt mức",
                  "Số lượng bạch cầu đa nhân trung tính trong dịch",
                  "Nồng độ glucose trong dịch cổ trướng giảm sâu về mức bằng",
                  "Nuôi cấy dịch màng bụng phân lập được nhiều loại vi khuẩn kỵ khí phối hợp"
                ],
                "ans": 1,
                "exp": "Số lượng bạch cầu đa nhân trung tính (PMN)  là tiêu chuẩn vàng trên lâm sàng để quyết định điều trị kháng sinh ngay lập tức mà không cần chờ kết quả nuôi cấy vi khuẩn."
              },
              {
                "q": "Câu 17\nKháng sinh đường tĩnh mạch được lựa chọn hàng đầu theo kinh nghiệm để điều trị viêm phúc mạc nhiễm khuẩn nguyên phát ở bệnh nhân xơ gan là",
                "opts": [
                  "Kháng sinh nhóm Aminoglycoside (Gentamicin) tiêm bắp đơn độc",
                  "Phối hợp kháng sinh Metronidazole kết hợp với Ciprofloxacin truyền TM",
                  "Nhóm Cephalosporin thế hệ 3 (như Ceftriaxone hoặc Cefotaxime TM)",
                  "Phối hợp kháng sinh nhóm Glycopeptide với Colistin truyền tĩnh mạch"
                ],
                "ans": 2,
                "exp": "Căn nguyên gây SBP chủ yếu là trực khuẩn Gram âm đường ruột (, Klebsiella). Cephalosporin thế hệ 3 ngấm tốt vào dịch cổ trướng, hiệu quả diệt khuẩn cao và không gây độc cho thận như Aminoglycoside."
              },
              {
                "q": "Câu 18\nBiện pháp phòng ngừa tiên phát xuất huyết tiêu hóa ở bệnh nhân xơ gan có các búi giãn tĩnh mạch thực quản độ II - III hoặc có dấu hiệu đỏ là",
                "opts": [
                  "Dùng thuốc chẹn beta không chọn lọc hoặc Thắt búi giãn qua nội soi",
                  "Uống duy trì thuốc ức chế bơm proton (PPI) liều tiêu chuẩn mỗi ngày",
                  "Tiêm xơ định kỳ các búi tĩnh mạch thực quản bằng cồn tuyệt đối qua nội soi",
                  "Phẫu thuật tạo thông cửa - chủ bên hoặc cắt lách giảm áp khẩn cấp"
                ],
                "ans": 0,
                "exp": "Chẹn beta không chọn lọc (Propranolol, Nadolol, Carvedilol) làm giảm nhịp tim và co mạch mạc treo giúp hạ áp lực tĩnh mạch cửa. Thắt búi giãn bằng vòng cao su qua nội soi (EVL) là biện pháp cơ học loại bỏ trực tiếp búi giãn có nguy cơ vỡ cao."
              },
              {
                "q": "Câu 19\nThuốc điều trị nền tảng bắt buộc giúp làm giảm nồng độ Amoniac () trong máu ở bệnh nhân có biểu hiện bệnh não gan là",
                "opts": [
                  "Kháng sinh phổ hẹp nhóm Penicillin G tinh thể liều cao truyền TM",
                  "Bổ sung dung dịch acid amin chuỗi phân nhánh (BCAA) đường uống đơn thuần",
                  "Đường đôi không hấp thu (Lactulose/Lactitol) đường uống hoặc thụt tháo",
                  "Thuốc lợi tiểu quai Furosemide đường tiêm tĩnh mạch để tăng đào thải"
                ],
                "ans": 2,
                "exp": "Lactulose bị vi khuẩn đại tràng lên men thành acid lactic làm toan hóa lòng ruột, chuyển  thành ion  không ngấm qua niêm mạc vào máu, đồng thời có tác dụng nhuận tràng thẩm thấu tống sạch chất chứa nitơ ra ngoài."
              },
              {
                "q": "Câu 20\nBiến chứng Hội chứng gan thận (Hepatorenal Syndrome - HRS) ở bệnh nhân xơ gan mất bù đặc trưng bởi tình trạng",
                "opts": [
                  "Hoại tử tế bào biểu mô ống thận cấp sau khi dùng thuốc cản quang",
                  "Suy thận chức năng do co mạch thận dữ dội trên nền giãn mạch tạng nặng",
                  "Viêm cầu thận màng tăng sinh do lắng đọng phức hợp kháng nguyên - kháng thể",
                  "Tắc nghẽn cơ học đường tiết niệu cấp tính do sỏi niệu quản hai bên"
                ],
                "ans": 1,
                "exp": "Hội chứng gan thận là suy thận cấp chức năng xảy ra trên nền xơ gan giai đoạn cuối: tình trạng giãn mạch tạng quá mức làm giảm thể tích máu hiệu dụng, kích hoạt hệ giao cảm và hệ RAA gây co thắt mạch thận làm giảm nghiêm trọng mức lọc cầu thận trong khi cấu trúc thận hoàn toàn bình thường.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Ngoại Tiêu hóa & Bụng cấp: Viêm ruột thừa, Chấn thương bụng, Viêm túi mật cấp, Tắc ruột).\nDưới đây là Phần 13: Ngoại Tiêu hóa & Bụng cấp (Bài 1 đến Bài 4, gồm Câu 1 – Câu 21). Các phương án gây nhiễu đã được biên tập lại tương đồng về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan.\nĐỀ.docx+ 1"
              }
            ]
          }
        }
      },
      "cap-cuu-hoi-suc": {
        "name": "Khoa Cấp cứu & Hồi sức",
        "lessons": {
          "kiem-soat-ban-dau-cap-cuu": {
            "title": "Bài 1: Nhận định & kiểm soát ban đầu (3 câu)",
            "questions": [
              {
                "q": "Câu 1\nTrong hệ thống phân loại bệnh nhân cấp cứu (Triage) theo 4 mức độ màu sắc, bệnh nhân được phân loại mức độ CAM thuộc nhóm",
                "opts": [
                  "Nguy kịch đe dọa tính mạng ngay tức thì, cần hồi sức tức thì (0 phút)",
                  "Cấp cứu khẩn không thể trì hoãn, thời gian tiếp cận xử trí dưới 10 phút",
                  "Cấp cứu khẩn cấp mức độ vừa phải, thời gian chờ tối đa 30 - 60 phút",
                  "Bệnh nhân không cấp cứu, có thể ngồi chờ khám theo thứ tự tiếp đón"
                ],
                "ans": 1,
                "exp": "Hệ thống phân loại Triage chuẩn: Màu Đỏ (Hồi sức ngay/nguy kịch, 0 phút); Màu Cam (Cấp cứu khẩn, thời gian can thiệp < 10 phút); Màu Vàng (Cấp cứu vừa, trong vòng 30 - 60 phút); Màu Xanh (Không cấp cứu, có thể trì hoãn)."
              },
              {
                "q": "Câu 2\nKhi tiếp cận đánh giá ban đầu bệnh nhân cấp cứu nặng theo trình tự ABCDE, thao tác thực hiện đầu tiên là",
                "opts": [
                  "Khai thông đường thở và kiểm soát cột sống cổ nếu nghi ngờ chấn thương",
                  "Bắt mạch ngoại vi lớn và đo huyết áp động mạch tứ chi (Circulation)",
                  "Đánh giá thang điểm hôn mê Glasgow và phản xạ đồng tử (Disability)",
                  "Bộc lộ toàn thân để tìm kiếm các tổn thương phối hợp (Exposure)"
                ],
                "ans": 0,
                "exp": "Nguyên tắc cấp cứu luôn tuân thủ tuần tự ABCDE: Airway (đường thở kèm cố định cột sống cổ nếu nghi ngờ chấn thương) là ưu tiên số 1, tiếp đến Breathing (hô hấp), Circulation (tuần hoàn), Disability (thần kinh) và Exposure (bộc lộ toàn thân)."
              },
              {
                "q": "Câu 3\nThao tác nào sau đây KHÔNG thuộc các bước khai thông và kiểm soát đường thở cơ bản (Airway)",
                "opts": [
                  "Nghiệm pháp ngửa đầu - nâng cằm ở bệnh nhân không chấn thương cổ",
                  "Đẩy góc hàm (Jaw-thrust) khi có nghi ngờ chấn thương cột sống cổ",
                  "Hút sạch dịch đờm dãi, máu tụ hoặc các dị vật trong khoang miệng",
                  "Mở màng phổi tối thiểu đặt ống dẫn lưu giải áp khí và dịch đọng"
                ],
                "ans": 3,
                "exp": "Dẫn lưu màng phổi thuộc bước can thiệp hô hấp (Breathing) để xử trí tràn khí/tràn máu màng phổi, không thuộc bước khai thông đường thở cơ bản (Airway)."
              }
            ]
          },
          "suy-ho-hap-cap": {
            "title": "Bài 2: Suy hô hấp cấp (3 câu)",
            "questions": [
              {
                "q": "Câu 4\nChỉ số khí máu động mạch nào sau đây xác định chắc chắn người bệnh có tình trạng suy hô hấp cấp nặng",
                "opts": [
                  "Phân áp oxy động mạch  khi người bệnh thở khí phòng",
                  "Phân áp  đi kèm theo mức pH máu động mạch là 7,38",
                  "Phân áp  ở khí phòng hoặc tỷ lệ",
                  "Độ bão hòa oxy động mạch  dao động ổn định trong khoảng"
                ],
                "ans": 2,
                "exp": "Suy hô hấp cấp giảm oxy máu được định nghĩa xác định khi  (kèm ) đo ở khí phòng. Tỷ lệ  phản ánh tình trạng giảm oxy máu từ nhẹ đến nặng (như trong tiêu chuẩn Berlin của ARDS)."
              },
              {
                "q": "Câu 5\nCơ chế bệnh sinh chính dẫn đến suy hô hấp cấp vừa giảm oxy máu vừa tăng  máu () là",
                "opts": [
                  "Rối loạn khuếch tán khí qua màng phế nang mao mạch mức độ đơn thuần",
                  "Tình trạng giảm thông khí phế nang do suy bơm hô hấp hoặc mệt cơ thở",
                  "Tăng áp lực mao mạch phổi bít trong phù phổi cấp tổn thương huyết động",
                  "Tắc nghẽn các nhánh động mạch phổi nhỏ do thuyên tắc huyết khối cấp"
                ],
                "ans": 1,
                "exp": "khuếch tán qua màng phế nang mao mạch nhanh gấp 20 lần . Hiện tượng tăng  máu chỉ xảy ra khi có tình trạng giảm thông khí phút/thông khí phế nang thực sự do suy bơm cơ hô hấp hoặc kiệt sức cơ thở."
              },
              {
                "q": "Câu 6\nMục tiêu duy trì độ bão hòa oxy mao mạch () khi thở oxy ở bệnh nhân suy hô hấp không có nguy cơ ứ  là",
                "opts": [
                  "Cung cấp oxy tối đa để đạt tuyệt đối  liên tục trong ngày",
                  "Điều chỉnh lưu lượng oxy để duy trì  trong khoảng",
                  "Duy trì kiểm soát chặt chẽ  trong khoảng đích từ",
                  "Chỉ cần duy trì mức bão hòa oxy trên ngưỡng  là đạt yêu cầu"
                ],
                "ans": 1,
                "exp": "Theo khuyến cáo hồi sức cấp cứu hô hấp, đích  tối ưu ở bệnh nhân không có nguy cơ tăng  là . Đối với bệnh nhân có nguy cơ suy hô hấp tăng  mạn tính (COPD, béo phì giảm thông khí), đích  được kiểm soát chặt chẽ ở mức  để tránh ức chế trung tâm hô hấp."
              }
            ]
          },
          "cap-cuu-ngung-tuan-hoan-aha": {
            "title": "Bài 3 & 4: Cấp cứu ngừng tuần hoàn AHA (5 câu)",
            "questions": [
              {
                "q": "Câu 7\nPhát hiện người đột ngột ngã gục, mất ý thức, ngừng thở hoặc thở ngáp cá, bước hành động đầu tiên theo AHA là",
                "opts": [
                  "Tiến hành thủ thuật đặt ống nội khí quản và bóp bóng thông khí ngay",
                  "Đánh giá hiện trường, kiểm tra đáp ứng, gọi hỗ trợ và lấy máy AED",
                  "Lập ngay đường truyền tĩnh mạch ngoại vi lớn để tiêm thuốc hồi sức",
                  "Ép chặt vùng thượng vị để kích thích cơ hoành và kiểm tra dị vật họng"
                ],
                "ans": 1,
                "exp": "Chuỗi sinh tồn AHA: Đảm bảo an toàn cho nhân viên cấp cứu  kiểm tra tri giác  gọi to hỗ trợ và kích hoạt hệ thống báo động cấp cứu/lấy máy AED trước khi bắt đầu các thao tác hồi sinh tim phổi."
              },
              {
                "q": "Câu 8\nKỹ thuật ép tim ngoài lồng ngực chất lượng cao ở người trưởng thành đòi hỏi tiêu chuẩn",
                "opts": [
                  "Tần số ép tim , độ sâu ép lồng ngực từ",
                  "Tần số , độ sâu , ngực nở hoàn toàn, ít gián đoạn",
                  "Tần số ép tim , ép liên tục không cần thổi ngạt ngắt quãng",
                  "Ép ngực thật sâu  và tì đè tay liên tục để duy trì áp lực trong ngực"
                ],
                "ans": 1,
                "exp": "Tiêu chuẩn ép tim chất lượng cao của AHA: Ép nhanh (), ép mạnh (độ sâu  ở người lớn), để lồng ngực tái dãn nở hoàn toàn, tránh đè lên ngực giữa các nhát ép và giảm thiểu thời gian gián đoạn dưới 10 giây."
              },
              {
                "q": "Câu 9\nHai dạng rối loạn nhịp tim trong ngừng tuần hoàn CÓ CHỈ ĐỊNH sốc điện phá rung ngay là",
                "opts": [
                  "Hoạt động điện vô mạch (PEA) và đường đẳng điện vô tâm thu (Asystole)",
                  "Rung thất (VF) và Cơn nhịp nhanh thất vô mạch (Pulseless VT)",
                  "Rung nhĩ đáp ứng tần số thất nhanh và Cơn cuồng động nhĩ dẫn truyền",
                  "Nhịp tim chậm xoang nặng kèm theo tụt huyết áp và tưới máu kém"
                ],
                "ans": 1,
                "exp": "Rối loạn nhịp có chỉ định sốc điện (Shockable rhythms) gồm Rung thất và Nhịp nhanh thất mất mạch. Vô tâm thu và Phân ly điện cơ (PEA) là các nhịp không có chỉ định sốc điện (Non-shockable), xử trí chủ yếu là ép tim liên tục và tiêm Adrenalin sớm."
              },
              {
                "q": "Câu 10\nNgay sau khi tiến hành phóng một cú sốc điện phá rung, hành động tiếp theo của đội cấp cứu là",
                "opts": [
                  "Tạm dừng thao tác để bắt kiểm tra mạch cảnh trong vòng 30 giây",
                  "Quan sát màn hình monitor theo dõi để đánh giá lại dạng nhịp tim",
                  "Ép tim ngoài lồng ngực lại ngay lập tức trong 2 phút trước khi đánh giá",
                  "Tiêm ngay một ống Atropine sulfate đường truyền tĩnh mạch trực tiếp"
                ],
                "ans": 2,
                "exp": "Khuyến cáo ACLS nhấn mạnh: Sau khi sốc điện, cơ tim thường bị choáng và chưa tạo được cung lượng tim hiệu quả ngay; do đó phải bắt đầu lại ngay lập tức việc ép tim trong vòng 2 phút, không được dừng lại bắt mạch hay nhìn điện tim."
              },
              {
                "q": "Câu 11\nLiều thuốc Amiodarone đường tĩnh mạch chỉ định cho Rung thất hoặc Nhịp nhanh thất vô mạch dai dẳng sau cú sốc điện thứ 3 là",
                "opts": [
                  "Tiêm bolus tĩnh mạch liều đầu tiên  nhanh trong 1 phút",
                  "Tiêm bolus tĩnh mạch , nếu tái phát nhắc lại liều",
                  "Pha truyền tĩnh mạch liên tục với tổng liều  trong 24 giờ",
                  "Tiêm tĩnh mạch thật chậm liều  trong thời gian 10 phút"
                ],
                "ans": 1,
                "exp": "Liều Amiodarone đầu tiên trong ngừng tuần hoàn có sốc điện (sau nhát sốc thứ 3) là  tiêm tĩnh mạch nhanh; liều bổ sung thứ hai sau nhát sốc thứ 4 hoặc 5 là ."
              }
            ]
          },
          "nhoi-mau-co-tim-cap-cuu": {
            "title": "Bài 5: Nhồi máu cơ tim cấp (2 câu)",
            "questions": [
              {
                "q": "Câu 12\nHình ảnh điện tâm đồ điển hình xác định Nhồi máu cơ tim cấp có ST chênh lên (STEMI) tại các chuyển đạo trước tim là",
                "opts": [
                  "Sóng T âm nhọn đối xứng sâu trên 5 mm ở tất cả các chuyển đạo",
                  "ST chênh lên dạng vòm  ở ít nhất 2 chuyển đạo liên tiếp kèm sóng Q hoại tử",
                  "Đoạn ST chênh xuống dạng đi ngang sâu  dưới đường đẳng điện",
                  "Khoảng PR kéo dài cố định  kèm theo biến dạng phức bộ QRS"
                ],
                "ans": 1,
                "exp": "Tiêu chuẩn chẩn đoán STEMI trên điện tâm đồ là ST chênh lên mới tại điểm J ở ít nhất hai chuyển đạo liên tiếp ( ở nam  tuổi tại V2-V3,  ở nam  tuổi,  ở nữ; và  ở các chuyển đạo khác) kèm theo diễn tiến hình thành sóng Q hoại tử."
              },
              {
                "q": "Câu 13\nGói điều trị ban đầu cấp cứu tại chỗ cho bệnh nhân nhồi máu cơ tim cấp trong lúc chờ can thiệp mạch vành bao gồm các biện pháp sau, TRỪ",
                "opts": [
                  "Kháng kết tập tiểu cầu kép (DAPT liều nạp Aspirin + Ticagrelor/Clopidogrel)",
                  "Thuốc chống đông (Heparin trọng lượng phân tử thấp hoặc Heparin tiêu chuẩn)",
                  "Giảm đau ngực bằng Morphine tiêm tĩnh mạch ngắt quãng nếu đau dữ dội",
                  "Truyền dịch đẳng trương số lượng lớn () nhanh trong 1 giờ"
                ],
                "ans": 3,
                "exp": "Bệnh nhân nhồi máu cơ tim cấp có nguy cơ suy thất trái và phù phổi cấp rất cao. Việc truyền dịch ồ ạt là tối kỵ (chỉ bù dịch thận trọng khi có bằng chứng nhồi máu thất phải kèm tụt huyết áp và không có ứ trệ phổi)."
              }
            ]
          },
          "dong-mach-chu-cap": {
            "title": "Bài 6: Hội chứng động mạch chủ cấp (3 câu)",
            "questions": [
              {
                "q": "Câu 14\nTính chất đau ngực đặc trưng nhất cảnh báo Phình bóc tách động mạch chủ ngực cấp tính (Aortic Dissection) là",
                "opts": [
                  "Đau tức âm ỉ tăng dần trong nhiều ngày, khu trú sau xương ức",
                  "Đau ngực dữ dội đột ngột như xé rách ngay từ đầu, lan xuyên sau lưng hai bả vai",
                  "Đau ngực tăng lên khi nằm nghiêng sang trái, đỡ đau khi cúi gập người ra trước",
                  "Đau nhói thành ngực tăng lên rõ rệt khi ấn ngón tay vào các khớp ức sườn"
                ],
                "ans": 1,
                "exp": "Cơn đau do bóc tách động mạch chủ khởi phát đột ngột ở cường độ đỉnh ngay lập tức (khác với nhồi máu cơ tim đau tăng dần), cảm giác như xé, rách hoặc đâm xuyên từ trước ngực lan ra sau lưng giữa hai bả vai dọc theo đường đi của lớp nội mạc bị bóc tách."
              },
              {
                "q": "Câu 15\nTiêu chuẩn vàng trong chẩn đoán hình ảnh để xác định vị trí rách nội mạc và phân loại bóc tách động mạch chủ tại khoa cấp cứu là",
                "opts": [
                  "Siêu âm tim Doppler qua thành ngực thông thường tại giường",
                  "Chụp X-quang tim phổi thẳng đánh giá độ rộng trung thất",
                  "Chụp cắt lớp vi tính đa dãy (CTA) có tiêm thuốc cản quang ngực - bụng",
                  "Chụp cộng hưởng từ hạt nhân (MRI) mạch máu không tiêm thuốc"
                ],
                "ans": 2,
                "exp": "Chụp cắt lớp vi tính đa dãy có cản quang (CTA) ngực - bụng là phương tiện đầu tay tiêu chuẩn với độ nhạy và độ đặc hiệu , giúp định hình lòng thật/lòng giả, xác định tổn thương các nhánh động mạch tạng và phân loại Stanford để quyết định phẫu thuật cấp cứu (typ A) hay can thiệp nội mạch/điều trị nội khoa (typ B)."
              },
              {
                "q": "Câu 16\nMục tiêu kiểm soát huyết động ban đầu ở bệnh nhân bóc tách động mạch chủ cấp tính khi huyết áp tăng cao là",
                "opts": [
                  "Hạ từ từ huyết áp tâm thu xuống dưới mức  trong vòng 24 giờ",
                  "Giảm nhịp tim  bằng chẹn beta, rồi hạ HATT về  trong 20 phút",
                  "Truyền ngay thuốc giãn mạch hạ áp đơn thuần mà không cần hạ tần số nhịp tim",
                  "Truyền dịch nâng huyết áp lên  để đảm bảo tưới máu các tạng"
                ],
                "ans": 1,
                "exp": "Mục tiêu điều trị nội khoa cấp cứu là giảm lực xé thành mạch (). Bắt buộc phải dùng chẹn beta giao cảm đường tĩnh mạch (như Esmolol, Labetalol) trước để đưa nhịp tim xuống , tránh phản xạ nhịp nhanh khi hạ áp, sau đó mới phối hợp thuốc hạ áp giãn mạch (như Nicardipine) để đưa huyết áp tâm thu về mức ."
              }
            ]
          },
          "soc-soc-phan-ve": {
            "title": "Bài 7: Sốc và sốc phản vệ (3 câu)",
            "questions": [
              {
                "q": "Câu 17\nDấu hiệu lâm sàng của tam chứng Beck giúp nhận biết tình trạng Sốc tim do Ép tim cấp (Cardiac Tamponade) gồm",
                "opts": [
                  "Tụt huyết áp động mạch, tĩnh mạch cổ nổi căng to và tiếng tim đập mờ xa xăm",
                  "Tụt huyết áp động mạch, nhịp tim chậm nghịch thường và mất phản xạ gân xương",
                  "Sốt cao rét run, gan to đau tức hạ sườn phải và xuất hiện vàng củng mạc mắt",
                  "Khó thở dữ dội, ran ẩm dâng nhanh hai đáy phổi và tăng huyết áp kịch phát"
                ],
                "ans": 0,
                "exp": "Tam chứng Beck kinh điển của chèn ép tim cấp: (1) Huyết áp tụt kẹt; (2) Tĩnh mạch cổ nổi căng do máu ứ trệ không về được tim phải; (3) Tiếng tim mờ nhỏ do lớp dịch màng tim dày ngăn cản truyền âm thanh."
              },
              {
                "q": "Câu 18\nTheo Thông tư 51/2017/TT-BYT, thuốc thiết yếu và quan trọng nhất bắt buộc phải tiêm bắp ngay lập tức khi phát hiện phản vệ từ độ II trở lên là",
                "opts": [
                  "Methylprednisolone đường tiêm tĩnh mạch",
                  "Diphenhydramine (Kháng Histamin H1) tiêm bắp",
                  "Adrenaline dung dịch  tiêm bắp đùi",
                  "Thuốc giãn phế quản Salbutamol dạng khí dung"
                ],
                "ans": 2,
                "exp": "Adrenaline là thuốc duy nhất cứu sống người bệnh phản vệ nhờ tác dụng kích thích đồng thời thụ thể alpha-1 (co mạch, nâng huyết áp, giảm phù nề thanh môn), beta-1 (tăng co bóp cơ tim) và beta-2 (giãn phế quản, ức chế giải phóng tiếp hóa chất trung gian). Corticoid và kháng Histamin chỉ là thuốc hàng hai, tác dụng chậm và không ngăn được tụt huyết áp cấp thì."
              },
              {
                "q": "Câu 19\nLiều lượng Adrenaline tiêm bắp khởi đầu trong xử trí phản vệ độ II - III ở người lớn là",
                "opts": [
                  "Tiêm trực tiếp 1 ống nguyên vẹn () vào đường tĩnh mạch nhanh",
                  "Tiêm bắp  (), nhắc lại mỗi 3 - 5 phút nếu chưa đỡ",
                  "Cho người bệnh uống trực tiếp 1 ống pha loãng với nước cất vô trùng",
                  "Pha loãng vào chai dung dịch truyền tĩnh mạch chậm ngay từ phút đầu tiên"
                ],
                "ans": 1,
                "exp": "Liều dùng theo Bộ Y tế: Người lớn tiêm bắp  đến  ống ( dung dịch ); trẻ em  (tối đa không quá ). Tiêm bắp sâu ở mặt trước ngoài đùi giúp hấp thu thuốc vào máu nhanh gấp nhiều lần so với tiêm ở cơ delta cánh tay."
              }
            ]
          },
          "dot-quy-nao-cap-cuu": {
            "title": "Bài 8: Đột quỵ não tại cấp cứu (2 câu)",
            "questions": [
              {
                "q": "Câu 20\nHệ thống thang điểm nhanh được khuyến cáo sử dụng tại hiện trường và phòng cấp cứu để sàng lọc đột quỵ não theo dấu hiệu FAST bao gồm",
                "opts": [
                  "Face (méo miệng), Arm (yếu liệt tay), Speech (nói khó), Time (thời gian cấp cứu)",
                  "Fever (sốt cao), Abdomen (đau bụng), Sight (mờ mắt), Touch (mất cảm giác da)",
                  "Fall (ngã quỵ), Attack (đau ngực), Stupor (li bì), Trauma (chấn thương phối hợp)",
                  "Foot (yếu chân), Airway (đường thở), Swallow (nuốt khó), Temperature (nhiệt độ)"
                ],
                "ans": 0,
                "exp": "Thang điểm FAST là công cụ nhận diện đột quỵ kinh điển: F (Face - méo mặt khi cười), A (Arm - yếu một bên tay khi giơ cao), S (Speech - nói ngọng hoặc không hiểu lời), T (Time - thời gian là não, gọi cấp cứu chuyển viện ngay)."
              },
              {
                "q": "Câu 21\nChống chỉ định tuyệt đối sử dụng thuốc tiêu sợi huyết đường tĩnh mạch Alteplase ở bệnh nhân nhồi máu não cấp là",
                "opts": [
                  "Bệnh nhân cao tuổi có độ tuổi sinh lý  tuổi",
                  "Có hình ảnh xuất huyết nội sọ trên CT hoặc tiền sử xuất huyết não",
                  "Nồng độ đường huyết đo được vào viện là",
                  "Bệnh nhân có tiền sử bệnh lý đái tháo đường typ 2 từ trước"
                ],
                "ans": 1,
                "exp": "Bất kỳ hình ảnh nào gợi ý chảy máu nội sọ (dù nhỏ) trên CT sọ não đều là chống chỉ định tuyệt đối của tiêu sợi huyết vì thuốc sẽ gây chảy máu ồ ạt dẫn đến tử vong.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Cấp cứu & Hồi sức tích cực - Phần 2: Bài 9 đến Bài 19, gồm Hen cấp, Ngộ độc, Chấn thương, Máy thở).\nDưới đây là Phần 11: Cấp cứu & Hồi sức tích cực (Nửa sau: Bài 9 đến Bài 19, gồm Câu 22 – Câu 47). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "hen-phe-quan-cap-cuu": {
            "title": "Bài 9: Cơn hen phế quản cấp (2 câu)",
            "questions": [
              {
                "q": "Câu 22\nDấu hiệu lâm sàng phân loại cơn hen phế quản mức độ NẶNG bao gồm",
                "opts": [
                  "Khó thở khi vận động gắng sức, nói được câu dài, nhịp tim 90 ck/p",
                  "Nghe phổi có tiếng ran rít nhẹ rải rác, nhịp thở 22 l/p, SpO2 95%",
                  "Co kéo mạnh cơ hô hấp phụ, ngồi cúi ra trước, nói từng từ, SpO2 < 90%",
                  "Khó thở xuất hiện khi nằm phòng máy lạnh, đáp ứng ngay với xịt SABA"
                ],
                "ans": 2,
                "exp": "Cơn hen nặng đặc trưng bởi khó thở liên tục khiến bệnh nhân phải ngồi cúi người, nói từng từ ngắt quãng, co kéo cơ liên sườn và hõm ức rõ, nhịp thở , nhịp tim  và ."
              },
              {
                "q": "Câu 23\nXử trí dùng thuốc ban đầu cho một cơn hen phế quản cấp tính nặng tại khoa cấp cứu là",
                "opts": [
                  "Cho uống thuốc giãn phế quản Salbutamol dạng viên kết hợp kháng sinh",
                  "Cung cấp oxy, khí dung phối hợp SABA với SAMA và dùng sớm Corticosteroid toàn thân",
                  "Tiêm tĩnh mạch trực tiếp ngay Aminophylline liều cao và thở oxy qua kính",
                  "Dùng thuốc an thần Diazepam tiêm bắp để bệnh nhân đỡ lo lắng kích thích"
                ],
                "ans": 1,
                "exp": "Phác đồ cấp cứu cơn hen nặng: Cung cấp đủ oxy + Khí dung kết hợp SABA (Salbutamol 5mg) và SAMA (Ipratropium 0,5mg) lặp lại mỗi 20 phút trong giờ đầu + Corticoid toàn thân (Methylprednisolone  TM) để ngăn ngừa tái phát co thắt. Tuyệt đối cấm dùng thuốc an thần vì ức chế hô hấp dẫn tới ngừng thở."
              }
            ]
          },
          "ngo-doc-cap": {
            "title": "Bài 10: Ngộ độc cấp (4 câu)",
            "questions": [
              {
                "q": "Câu 24\nThời điểm rửa dạ dày đem lại hiệu quả loại bỏ chất độc cao nhất và ít tai biến là",
                "opts": [
                  "Trong vòng 1 - 2 giờ đầu sau khi uống chất độc",
                  "Khoảng từ 4 - 6 giờ kể từ thời điểm uống chất độc",
                  "Khoảng từ 8 - 12 giờ sau khi uống chất độc vào",
                  "Bất kỳ lúc nào miễn là người bệnh còn nhận thức tỉnh táo"
                ],
                "ans": 0,
                "exp": "Rửa dạ dày chỉ có hiệu quả loại bỏ lượng chất độc đáng kể khi được thực hiện trong vòng 1 giờ (tối đa 2 giờ) sau uống chất độc dạng rắn hoặc độc tính cao. Sau 2 giờ, phần lớn chất độc đã di chuyển qua môn vị xuống ruột non."
              },
              {
                "q": "Câu 25\nChống chỉ định TUYỆT ĐỐI của thủ thuật rửa dạ dày và dùng than hoạt là",
                "opts": [
                  "Ngộ độc cấp tính các thuốc an thần ngủ nhóm Barbituric",
                  "Ngộ độc cấp tính các loại thuốc trừ sâu phospho hữu cơ",
                  "Uống các chất ăn mòn mạnh (Axit/Kiềm) hoặc xăng dầu/hydrocarbon",
                  "Ngộ độc cấp tính thuốc giảm đau hạ sốt Paracetamol liều cao"
                ],
                "ans": 2,
                "exp": "Rửa dạ dày khi uống chất ăn mòn có nguy cơ gây thủng thực quản và dạ dày hoại tử, làm chất độc tràn vào trung thất; uống xăng dầu rửa dạ dày dễ gây hít sặc vào đường thở dẫn đến viêm phổi hoại tử suy hô hấp cấp."
              },
              {
                "q": "Câu 26\nThuốc giải độc đặc hiệu (Antidote) của ngộ độc cấp Paracetamol là",
                "opts": [
                  "Naloxone hydrochlorid",
                  "N-Acetylcysteine (NAC)",
                  "Pralidoxime phối hợp Atropine",
                  "Vitamin K1 đường tĩnh mạch"
                ],
                "ans": 1,
                "exp": "Ngộ độc Paracetamol do chất chuyển hóa độc NAPQI làm cạn kiệt Glutathione ở gan. NAC cung cấp nhóm sulfhydryl để tái tạo Glutathione và trung hòa trực tiếp NAPQI, bảo vệ tế bào gan khỏi hoại tử cấp nếu dùng sớm trong 8 - 10 giờ đầu."
              },
              {
                "q": "Câu 27\nBệnh nhân vào viện vì co đồng tử nhỏ như đầu đinh ghim, tăng tiết đờm dãi, sùi bọt mép, tụt huyết áp và mạch chậm. Đây là biểu hiện của hội chứng ngộ độc nào",
                "opts": [
                  "Hội chứng Anticholinergic (do ngộ độc Atropine hoặc thuốc kháng histamin)",
                  "Hội chứng Cholinergic (do ngộ độc thuốc trừ sâu Phospho hữu cơ/Carbamate)",
                  "Hội chứng Sympathomimetic (do ngộ độc chất kích thích giao cảm Amphetamine)",
                  "Hội chứng cai rượu cấp tính trên bệnh nhân nghiện rượu mạn tính"
                ],
                "ans": 1,
                "exp": "Thuốc trừ sâu phospho hữu cơ ức chế enzym Acetylcholinesterase làm ứ đọng Acetylcholine tại synap thần kinh, gây hội chứng Muscarinic rầm rộ: co đồng tử tối đa, tăng tiết đờm dãi, co thắt phế quản, nhịp tim chậm, nôn mửa, đại tiểu tiện không tự chủ. Thuốc giải độc đặc hiệu là Atropine đối kháng thụ thể kết hợp PAM để phục hồi enzym."
              }
            ]
          },
          "cap-cuu-chan-thuong-itls": {
            "title": "Bài 11: Cấp cứu chấn thương ITLS (1 câu)",
            "questions": [
              {
                "q": "Câu 28\nTrong cấp cứu đa chấn thương theo ITLS/ATLS, bước đánh giá ban đầu (Primary Survey) nhằm mục tiêu chính là",
                "opts": [
                  "Khai thác tỉ mỉ hoàn cảnh xảy ra tai nạn và tiền sử bệnh lý gia đình",
                  "Nẹp bất động và bó bột cố định toàn bộ các tổn thương gãy xương",
                  "Phát hiện và xử trí tức thì tổn thương đe dọa mạng sống theo ABCDE",
                  "Chuyển ngay bệnh nhân đi chụp cắt lớp vi tính toàn thân có cản quang"
                ],
                "ans": 2,
                "exp": "Khảo sát ban đầu (Primary survey) luôn tập trung giải quyết các nguyên nhân gây tử vong nhanh nhất: Tắc đường thở, chấn thương ngực ngạt thở, sốc mất máu cấp và tổn thương não cấp; chỉ khi các chức năng sống cơ bản ổn định mới thực hiện thăm khám thứ cấp toàn diện từ đầu đến chân."
              }
            ]
          },
          "chan-thuong-so-nao-cap-cuu": {
            "title": "Bài 12: Cấp cứu chấn thương sọ não (2 câu)",
            "questions": [
              {
                "q": "Câu 29\nKhoảng tỉnh (Lucid interval) là dấu hiệu lâm sàng kinh điển và đặc trưng nhất của tổn thương",
                "opts": [
                  "Dập nhu mô não thùy trán",
                  "Xuất huyết dưới nhện do vỡ túi phình",
                  "Tụ máu ngoài màng cứng cấp tính",
                  "Chấn động não nhẹ đơn thuần"
                ],
                "ans": 2,
                "exp": "Bệnh nhân sau chấn thương bất tỉnh thoáng qua, sau đó tỉnh táo hoàn toàn trong vài chục phút đến vài giờ (\"khoảng tỉnh\"), rồi đột ngột hôn mê sâu trở lại kèm đồng tử một bên giãn to do khối máu tụ ngoài màng cứng tăng dần thể tích chèn ép bán cầu đại não và tụt kẹt não."
              },
              {
                "q": "Câu 30\nTam chứng Cushing cảnh báo hội chứng Tăng áp lực nội sọ nặng đe dọa tụt kẹt não bao gồm",
                "opts": [
                  "Nhịp tim nhanh, hạ huyết áp động mạch và nhịp thở nhanh nông liên tục",
                  "Tăng huyết áp (tăng HATT rộng khoảng HA), Nhịp tim chậm và Rối loạn thở",
                  "Sốt cao liên tục, co giật toàn thể và gáy cứng kháng cự rõ rệt",
                  "Hai bên đồng tử co nhỏ như đinh ghim kèm theo dấu hiệu liệt mềm tứ chi"
                ],
                "ans": 1,
                "exp": "Khi áp lực nội sọ tăng quá cao đe dọa tưới máu não, trung tâm vận mạch kích hoạt tăng huyết áp toàn thân để duy trì áp lực tưới máu não (CPP), dòng máu áp lực cao kích thích xoang cảnh gây chậm nhịp tim phản xạ, và thân não bị chèn ép gây ức chế hô hấp (thở chậm hoặc Cheyne-Stokes)."
              }
            ]
          },
          "chan-thuong-nguc": {
            "title": "Bài 13: Cấp cứu chấn thương ngực (2 câu)",
            "questions": [
              {
                "q": "Câu 31\nXử trí cấp cứu đầu tiên tại hiện trường hoặc phòng tiếp đón đối với một Vết thương ngực hở phì phò khí là",
                "opts": [
                  "Khâu kín miệng vết thương ngay bằng chỉ khâu vô khuẩn để cầm máu",
                  "Băng kín vết thương bằng gạc vô khuẩn theo nguyên tắc van một chiều 3 góc",
                  "Nhét thật chặt gạc sâu vào bên trong khoang màng phổi để bịt lỗ rò",
                  "Đặt ống nội khí quản và cho thở máy áp lực dương cao ngay tại chỗ"
                ],
                "ans": 1,
                "exp": "Băng ép kín 3 góc tạo thành cơ chế van một chiều: Khi thở ra, mép hở mở ra cho máu và khí áp lực thoát ra ngoài; khi hít vào, miếng băng áp chặt vào thành ngực ngăn không khí ngoài trời tràn vào phổi, phòng ngừa biến chuyển thành tràn khí màng phổi áp lực."
              },
              {
                "q": "Câu 32\nĐặc điểm tổn thương của \"Mảng sườn di động\" trong chấn thương ngực kín là",
                "opts": [
                  "Gãy  xương sườn liên tiếp, mỗi xương gãy  vị trí, gây hô hấp đảo chiều",
                  "Gãy rạn một xương sườn đơn thuần gây đau nhói tăng khi hít thở sâu",
                  "Tràn máu màng phổi số lượng lớn kết hợp đụng dập nhu mô phổi diện rộng",
                  "Vỡ rách cơ hoành hai bên kèm theo thoát vị tạng bụng lên khoang lồng ngực"
                ],
                "ans": 0,
                "exp": "Mảng sườn di động làm một vùng thành ngực bị tách rời khỏi khung xương lồng ngực, dẫn đến hô hấp đảo chiều: Hít vào mảng sườn bị hút lõm vào trong; thở ra mảng sườn bị đẩy phồng ra ngoài, làm suy hô hấp nặng và cản trở tuần hoàn về tim."
              }
            ]
          },
          "chan-thuong-bung-cap-cuu": {
            "title": "Bài 14: Cấp cứu chấn thương bụng (2 câu)",
            "questions": [
              {
                "q": "Câu 33\nPhương pháp chẩn đoán hình ảnh tại giường nhanh, không xâm lấn, được lựa chọn hàng đầu để tầm soát dịch tự do ổ bụng trong sốc đa chấn thương là",
                "opts": [
                  "Chụp X-quang bụng không chuẩn bị tư thế đứng",
                  "Siêu âm FAST (Focused Assessment with Sonography for Trauma)",
                  "Chọc rửa ổ bụng chẩn đoán (thủ thuật DPL)",
                  "Chụp cộng hưởng từ hạt nhân (MRI) hệ thống bụng"
                ],
                "ans": 1,
                "exp": "Siêu âm FAST chỉ mất  phút tại giường cấp cứu để khảo sát 4 khoang trọng điểm: Khoang Morison (gan - thận), khoang lách - thận, túi cùng Douglas tiểu khung và màng ngoài tim, phát hiện dịch máu tự do để quyết định chỉ định mổ cấp cứu."
              },
              {
                "q": "Câu 34\nTạng đặc dễ bị tổn thương vỡ chảy máu nhiều nhất trong chấn thương bụng kín là",
                "opts": [
                  "Nhu mô thận hai bên",
                  "Bàng quang vùng tiểu khung",
                  "Lách (tiếp sau đó là Gan)",
                  "Thân và đuôi tuyến tụy"
                ],
                "ans": 2,
                "exp": "Lách có nhu mô xốp giòn, màng bao mỏng và nằm sát lồng ngực trái, là tạng đặc dễ bị vỡ nhất trong các tai nạn giao thông đụng dập mạn sườn trái, gây tràn máu ổ bụng lượng lớn và sốc mất máu nhanh chóng."
              }
            ]
          },
          "chan-thuong-cot-song-cap-cuu": {
            "title": "Bài 15: Cấp cứu chấn thương cột sống (2 câu)",
            "questions": [
              {
                "q": "Câu 35\nNguyên tắc bất động bắt buộc khi vận chuyển nạn nhân nghi ngờ chấn thương cột sống là",
                "opts": [
                  "Để người bệnh tự đi lại nhẹ nhàng nếu còn cử động được các đầu ngón chân",
                  "Cố định thẳng trục đầu - cổ - thân trên ván cứng kết hợp nẹp cổ và chèn đầu",
                  "Cho người bệnh nằm khiêng trên võng mềm để giảm cảm giác đau buốt lưng",
                  "Đặt người bệnh nằm tư thế ngửa đầu cao và kê gối gập khớp háng hai bên"
                ],
                "ans": 1,
                "exp": "Cố định toàn thân trên ván cứng cùng nẹp cổ đảm bảo toàn bộ trục cột sống không bị xoay, gấp hoặc ưỡn trong quá trình di chuyển, ngăn ngừa mảnh xương vỡ chèn ép cắt đứt tủy sống gây liệt vĩnh viễn hoặc suy hô hấp ngừng thở."
              },
              {
                "q": "Câu 36\nĐặc điểm huyết động phân biệt Sốc tủy (do tổn thương tủy cổ hoặc ngực cao) với Sốc giảm thể tích do mất máu là",
                "opts": [
                  "Tụt huyết áp kèm theo mạch nhanh nhỏ khó bắt và co mạch đầu chi lạnh",
                  "Tụt huyết áp nhưng đi kèm Nhịp tim chậm và Giãn mạch ngoại vi (da ấm hồng)",
                  "Huyết áp tăng vọt kịch phát kèm theo tím tái đầu chi và vã mồ hôi đầm đìa",
                  "Huyết áp kẹt kèm theo tình trạng phù toàn thân và tĩnh mạch cổ nổi to"
                ],
                "ans": 1,
                "exp": "Tổn thương tủy cổ hoặc ngực cao làm cắt đứt hệ thần kinh giao cảm chi phối mạch máu và tim, dẫn đến mất trương lực co mạch (gây giãn mạch hệ thống, da ấm) và mất dẫn truyền kích thích tim (gây nhịp tim chậm nghịch thường kèm tụt huyết áp)."
              }
            ]
          },
          "chan-thuong-chi-the-dut-roi": {
            "title": "Bài 16: Chấn thương chi thể đứt rời (2 câu)",
            "questions": [
              {
                "q": "Câu 37\nDấu hiệu sớm và có giá trị nhất cảnh báo Hội chứng chèn ép khoang cấp tính ở chi bị chấn thương/gãy xương là",
                "opts": [
                  "Mất hoàn toàn mạch đập của các động mạch ngoại vi ở ngọn chi",
                  "Chi thể chuyển sang màu tím đen kèm theo bóng nước và hoại tử da",
                  "Đau dữ dội quá mức tổn thương và Đau tăng vọt khi kéo giãn cơ thụ động",
                  "Đầu chi thể hoàn toàn mất cảm giác nông sâu và liệt cơ hoàn toàn"
                ],
                "ans": 2,
                "exp": "Đau khi kéo giãn cơ thụ động là dấu hiệu thiếu máu cơ sớm và nhạy nhất của chèn ép khoang. Dấu hiệu mất mạch ngoại vi hoặc tê liệt hoàn toàn là biểu hiện muộn, khi các tế bào thần kinh và cơ đã hoại tử không thể hồi phục."
              },
              {
                "q": "Câu 38\nQuy trình bảo quản chi thể bị đứt rời đúng kỹ thuật trong lúc vận chuyển cấp cứu là",
                "opts": [
                  "Thả trực tiếp phần chi thể ngập trong xô nước chứa đầy đá lạnh",
                  "Rửa sạch bằng xà phòng sát trùng và bọc kín trong lớp bông gòn khô",
                  "Rửa nước muối, bọc gạc sạch cho vào túi nilon kín, rồi đặt túi vào thùng đá",
                  "Ngâm ngập phần chi thể bị đứt vào dung dịch cồn y tế 70 độ để sát khuẩn"
                ],
                "ans": 2,
                "exp": "Chi thể đứt rời cần được bảo quản lạnh gián tiếp () để làm chậm quá trình hoại tử mô. Tuyệt đối không để mô tiếp xúc trực tiếp với đá lạnh vì sẽ gây bỏng lạnh và đông cứng tế bào, khiến miệng mạch máu bị đông vón và không thể vi phẫu nối lại."
              }
            ]
          },
          "tai-nan-sinh-hoat-bong-dien": {
            "title": "Bài 17: Đuối nước, điện giật, bỏng (3 câu)",
            "questions": [
              {
                "q": "Câu 39\nHành động ưu tiên số 1 khi sơ cứu nạn nhân bị ĐUỐI NƯỚC vớt lên bờ trong tình trạng bất tỉnh, ngừng thở là",
                "opts": [
                  "Dốc ngược đầu nạn nhân chạy vòng quanh để tống nước trong phổi ra",
                  "Hơ lửa hoặc đốt rơm sưởi ấm toàn thân cho nạn nhân ngay lập tức",
                  "Đặt ngửa nền cứng, thông đường thở, thổi ngạt ngay 5 nhịp, rồi ép tim phối hợp",
                  "Dùng hai tay đè thật mạnh lên vùng thượng vị để ép dạ dày nôn tháo nước"
                ],
                "ans": 2,
                "exp": "Ngừng tuần hoàn do đuối nước bắt nguồn từ ngạt thiếu oxy. Dốc nước làm mất thời gian vàng và tăng nguy cơ sặc phổi. Cung cấp oxy khẩn cấp qua 5 nhịp thổi ngạt đầu tiên kết hợp ép tim là mấu chốt hồi sinh sự sống."
              },
              {
                "q": "Câu 40\nCông thức Parkland dùng để tính lượng dịch Ringer Lactate cần bù trong 24 giờ đầu cho bệnh nhân bỏng nặng người lớn là",
                "opts": [
                  "B.  (1/2 truyền 8h đầu, 1/2 truyền 16h tiếp theo)",
                  "Truyền cố định  dung dịch Glucose 5% mỗi giờ liên tục trong ngày",
                  "Bù dịch theo tỷ lệ  chia đều cho 3 buổi"
                ],
                "ans": 1,
                "exp": "Phác đồ Parkland: Tổng dịch Ringer Lactate 24 giờ đầu = ; truyền  tổng lượng dịch trong 8 giờ đầu tiên kể từ thời điểm bị bỏng và  còn lại chia đều trong 16 giờ tiếp theo."
              },
              {
                "q": "Câu 41\nNguyên tắc xử trí đầu tiên khi tiếp cận nạn nhân bị TAI NẠN ĐIỆN GIẬT là",
                "opts": [
                  "Lao vào ôm kéo nạn nhân ra khỏi vùng nhiễm điện ngay tức khắc",
                  "Ngắt nguồn điện hoặc dùng vật cách điện khô gạt dây điện trước khi chạm vào",
                  "Đổ xô nước lạnh lên người nạn nhân để làm mát vết bỏng do luồng điện",
                  "Bắt mạch kiểm tra dấu hiệu sinh tồn ngay trong khi dây điện còn tiếp xúc"
                ],
                "ans": 1,
                "exp": "An toàn hiện trường là nguyên tắc sống còn; không được chạm vào nạn nhân khi chưa cắt nguồn điện hoặc chưa cách ly nạn nhân khỏi dòng điện vì người sơ cứu sẽ bị truyền điện và trở thành nạn nhân tiếp theo."
              }
            ]
          },
          "van-chuyen-nguoi-benh": {
            "title": "Bài 18: Vận chuyển người bệnh cấp cứu (2 câu)",
            "questions": [
              {
                "q": "Câu 42\nTư thế vận chuyển bệnh nhân an toàn nhất đối với thai phụ có tuổi thai  tuần bị tụt huyết áp do chấn thương (chưa phát hiện tổn thương cột sống) là",
                "opts": [
                  "Nằm tư thế ngửa đầu cao khoảng",
                  "Nằm nghiêng sang bên trái (hoặc nghiêng nẹp )",
                  "Nằm tư thế ngửa thẳng chân và kê gác hai chân lên cao",
                  "Nằm tư thế sấp hoàn toàn và có kê đệm mềm dưới ngực"
                ],
                "ans": 1,
                "exp": "Tử cung lớn ở nửa sau thai kỳ sẽ đè bẹp tĩnh mạch chủ dưới và động mạch chủ bụng khi thai phụ nằm ngửa, làm giảm mạnh lượng máu tĩnh mạch trở về tim gây hội chứng tụt huyết áp tư thế nằm ngửa; tư thế nghiêng trái giúp giải phóng chèn ép này."
              },
              {
                "q": "Câu 43\nYêu cầu bắt buộc phải hoàn thành trước khi chuyển một bệnh nhân nặng lên tuyến trên là",
                "opts": [
                  "Chờ đợi bệnh nhân hoàn toàn tỉnh táo và có thể tự thở khí trời tốt",
                  "Ổn định vững A-B-C, lập đường truyền tĩnh mạch và liên hệ trước tuyến trên",
                  "Cho người bệnh ăn uống no đủ để có nguồn năng lượng duy trì trên đường đi",
                  "Ngừng toàn bộ các thuốc vận mạch truyền tĩnh mạch để tránh tai biến dọc đường"
                ],
                "ans": 1,
                "exp": "Nguyên tắc chuyển viện an toàn: \"Chỉ chuyển khi đã hồi sức ổn định sơ bộ\"; các chức năng sống (A, B, C) phải được cố định vững (đặt NKQ nếu nguy cơ suy hô hấp/hôn mê, dùng vận mạch kiểm soát huyết áp) và có sự chuẩn bị tiếp nhận của bệnh viện tuyến trên."
              }
            ]
          },
          "may-tho-co-ban": {
            "title": "Bài 19: Tổng quan máy thở & phương thức thở (4 câu)",
            "questions": [
              {
                "q": "Volume Control) có đặc điểm vận hành là",
                "opts": [
                  "Thể tích khí lưu thông () tự do thay đổi phụ thuộc sức cản đường thở",
                  "Cung cấp thể tích  cố định; áp lực đường thở thay đổi theo độ giãn của phổi",
                  "Người bệnh tự chủ quyết định hoàn toàn thể tích khí hít vào ở mỗi chu kỳ",
                  "Áp lực đỉnh đường thở luôn luôn được giữ cố định ở mọi nhịp thở vào"
                ],
                "ans": 1,
                "exp": "Trong mode VCV, bác sĩ cài đặt cố định  và tần số thở tối thiểu; máy sẽ đẩy đủ lượng khí đó vào phổi bệnh nhân bất kể áp lực đường thở tăng hay giảm. Nguy cơ lớn nhất của mode này là chấn thương áp lực (Barotrauma) khi phổi bị xơ cứng hoặc tăng sức cản."
              },
              {
                "q": "Câu 45\nChiến lược thông khí bảo vệ phổi ở bệnh nhân mắc hội chứng suy hô hấp tiến triển cấp tính (ARDS) khuyến cáo cài đặt thể tích khí lưu thông () ở mức",
                "opts": [
                  "Cài đặt  cao từ  tính theo cân nặng thực tế",
                  "Cài đặt  trung bình  tính theo cân nặng lý tưởng",
                  "Cài đặt  thấp  trọng lượng lý tưởng và duy trì",
                  "Cài đặt  rất cao  để huy động tối đa phế nang xẹp"
                ],
                "ans": 2,
                "exp": "ARDS gây đông đặc phổi không đồng đều (\"phổi trẻ em - baby lung\"). Thở máy  thấp ( cân nặng lý tưởng tính theo chiều cao) kết hợp PEEP thích hợp và giới hạn áp lực cao nguyên  giúp ngăn ngừa biến chứng căng giãn phế nang quá mức (Volutrauma) và chấn thương áp lực."
              },
              {
                "q": "Câu 46\nTác dụng sinh lý chính của việc cài đặt áp lực dương cuối kỳ thở ra (PEEP) trong thông khí nhân tạo là",
                "opts": [
                  "Làm giảm thể tích khí cặn chức năng (FRC) trong lòng các phế nang",
                  "Chống xẹp phế nang cuối thì thở ra, huy động phế nang và tăng oxy hóa máu",
                  "Làm tăng lượng máu hồi lưu từ hệ thống tĩnh mạch trở về tâm nhĩ phải",
                  "Làm giảm chỉ số áp lực đường thở trung bình trong suốt chu kỳ hô hấp"
                ],
                "ans": 1,
                "exp": "PEEP duy trì một mức áp lực dương trong lòng phế nang ở cuối thì thở ra, ngăn không cho các phế nang mất surfactant bị xẹp hoàn toàn, từ đó giảm shunt trong phổi và cải thiện tình trạng thiếu oxy máu."
              },
              {
                "q": "Câu 47\nChỉ số áp lực cao nguyên ( - Plateau Pressure) trên máy thở phản ánh",
                "opts": [
                  "Áp lực cản trở dòng khí lưu thông trong các ống dẫn khí lớn",
                  "Áp lực tác động lên phế nang ở cuối thì hít vào khi dòng khí ngừng chảy",
                  "Áp lực căng phồng thực tế của bóng chèn bên ngoài ống nội khí quản",
                  "Áp lực âm biến thiên liên tục trong khoang màng phổi của người bệnh"
                ],
                "ans": 1,
                "exp": "Khi thực hiện thao tác giữ thì thở vào (End-inspiratory pause), dòng khí ngừng lưu thông (bằng 0), sức cản đường thở bị triệt tiêu; áp lực đo được lúc này chính là , phản ánh trực tiếp sức căng nở của nhu mô phổi và thành ngực. Để bảo vệ phổi, bắt buộc phải duy trì .\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Bệnh lý Gan - Mật: Viêm gan virus và Xơ gan).\nDưới đây là Phần 12: Bệnh lý Gan – Mật (Bài 1: Viêm gan, Bài 2: Xơ gan, gồm Câu 1 – Câu 20). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "ngoai-khoa": {
        "name": "Khoa Ngoại tổng hợp & Chấn thương",
        "lessons": {
          "viem-ruot-thua-ngoai": {
            "title": "Bài 1: Viêm ruột thừa (6 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Đau nhói liên tục tại vùng hố chậu trái kèm theo mót rặn đại tiện\nĐỀ.docx",
                  "Đau âm ỉ thượng vị hoặc quanh rốn, sau 4 - 6 giờ chuyển về hố chậu phải\nĐỀ.docx",
                  "Đau quặn dữ dội từng cơn vùng hạ sườn phải lan chéo lên vùng bả vai\nĐỀ.docx",
                  "Đau tức âm ỉ vùng hạ vị kèm theo cảm giác tiểu buốt và tiểu rắt nhiều lần\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Khởi đầu của viêm ruột thừa cấp là cơn đau do tắc lòng ruột thừa, được dẫn truyền theo sợi giao cảm nội tạng (T10) gây đau mơ hồ ở thượng vị hoặc quanh rốn. Khi phản ứng viêm lan đến lá phúc mạc thành hố chậu phải, các sợi thần kinh thể thể dẫn truyền cảm giác đau định khu chính xác tại hố chậu phải.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Dấu hiệu Murphy dương tính khi ấn sâu vào vùng đáy túi mật\nĐỀ.docx",
                  "Đau chói điểm McBurney kèm phản ứng thành bụng ở hố chậu phải\nĐỀ.docx",
                  "Bụng trướng căng đều toàn bộ và gõ vang trống khắp các vùng\nĐỀ.docx",
                  "Tiếng óc ách khi lắc bụng vào buổi sáng lúc người bệnh chưa ăn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Điểm đau McBurney (nối 1/3 ngoài và 2/3 trong đường nối gai chậu trước trên phải với rốn) ấn đau chói kèm phản ứng thành bụng là dấu hiệu kinh điển phản ánh tình trạng viêm lá phúc mạc thành tương ứng vị trí ruột thừa tổn thương.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Số lượng tiểu cầu giảm sâu dưới ngưỡng an toàn\nĐỀ.docx",
                  "Số lượng hồng cầu tăng cao phản ánh tình trạng cô đặc máu cấp\nĐỀ.docx",
                  "Tăng bạch cầu với tỷ lệ trung tính chiếm ưu thế ()\nĐỀ.docx",
                  "Giảm số lượng bạch cầu dòng lympho đơn thuần trong máu ngoại vi\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Viêm ruột thừa cấp là một nhiễm khuẩn ngoại khoa cấp tính; xét nghiệm công thức máu thường cho thấy tăng bạch cầu đa nhân trung tính rõ rệt, kết hợp với chỉ số viêm CRP tăng cao.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Tuyệt đối không dùng kháng sinh trước mổ vì sợ làm lu mờ triệu chứng bụng\nĐỀ.docx",
                  "Dùng kháng sinh dự phòng trước mổ; dùng kéo dài nếu ruột thừa hoại tử, vỡ\nĐỀ.docx",
                  "Chỉ bắt đầu dùng thuốc kháng sinh sau khi mổ phát hiện ruột thừa đã vỡ mủ\nĐỀ.docx",
                  "Chỉ cần rửa sạch khoang ổ bụng trong mổ mà không cần dùng bất kỳ loại kháng sinh nào\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Kháng sinh tĩnh mạch (bao phủ vi khuẩn Gram âm và kỵ khí) được chỉ định trước mổ cho mọi ca cắt ruột thừa nhằm giảm nhiễm trùng vết mổ và áp xe tồn dư. Nếu viêm chưa vỡ chỉ cần 1 liều dự phòng; nếu đã hoại tử vỡ mủ hoặc có viêm phúc mạc thì phải tiếp tục dùng kháng sinh điều trị sau mổ.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Viêm phúc mạc toàn thể do vỡ mủ ruột thừa\nĐỀ.docx",
                  "Đám quánh ruột thừa khu trú ở hố chậu phải\nĐỀ.docx",
                  "Thủng ổ loét dạ dày tá tràng đến giai đoạn muộn\nĐỀ.docx",
                  "Lồng ruột hồi manh tràng cấp tính ở người lớn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Đám quánh ruột thừa hình thành khi ruột thừa viêm tiến triển chậm và được mạc nối lớn cùng các quai ruột xung quanh bao bọc khu trú lại. Hướng xử trí chuẩn là điều trị nội khoa bằng kháng sinh, theo dõi sát; không mổ cấp cứu trong giai đoạn này vì nguy cơ làm rách thủng các quai ruột đang dính chặt.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Chảy máu trong ổ bụng từ mạch máu mạc treo\nĐỀ.docx",
                  "Rò mỏm cắt ruột thừa do bục chỉ buộc hoặc clip\nĐỀ.docx",
                  "Áp xe tồn dư trong ổ bụng (hố chậu/Douglas)\nĐỀ.docx",
                  "Tất cả các biến chứng ngoại khoa kể trên\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Sau mổ cắt ruột thừa, bệnh nhân cần được theo dõi sát các dấu hiệu sinh tồn, tình trạng bụng và dẫn lưu để phát hiện sớm các biến chứng: chảy máu ổ bụng do tuột clip mạch máu, bục mỏm cắt gây rò tiêu hóa, hoặc áp xe tồn dư ổ bụng (sốt dao động, đau bụng tăng, ỉa lỏng mót rặn).\nĐỀ.docx"
              }
            ]
          },
          "chan-thuong-vet-thuong-bung": {
            "title": "Bài 2: Chấn thương bụng - Vết thương bụng (5 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Thăm khám tỉ mỉ chi tiết từng vùng bụng trước khi kiểm tra các hệ cơ quan khác\nĐỀ.docx",
                  "Khám toàn diện theo ABCDE để tìm dấu hiệu sốc và tránh bỏ sót tổn thương nặng\nĐỀ.docx",
                  "Chuyển ngay bệnh nhân đi chụp cắt lớp vi tính bụng có tiêm cản quang tĩnh mạch\nĐỀ.docx",
                  "Đặt ống thông rửa dạ dày ngay để đánh giá nguy cơ xuất huyết tiêu hóa kèm theo\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Chấn thương bụng thường nằm trong bệnh cảnh đa chấn thương. Bác sĩ cấp cứu phải khám toàn thân theo thứ tự ABCDE, phát hiện ngay tình trạng sốc mất máu do vỡ tạng đặc hoặc tổn thương mạch máu lớn trước khi tập trung vào các triệu chứng khu trú tại bụng.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Chụp X-quang bụng không chuẩn bị tư thế đứng\nĐỀ.docx",
                  "Phẫu thuật nội soi ổ bụng chẩn đoán tổn thương\nĐỀ.docx",
                  "Siêu âm ổ bụng tại giường theo quy trình FAST\nĐỀ.docx",
                  "Chụp cộng hưởng từ hạt nhân (MRI) hệ thống bụng\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Siêu âm FAST (Focused Assessment with Sonography for Trauma) tại giường giúp phát hiện dịch tự do ở khoang bao gan, bao lách, túi cùng Douglas và màng ngoài tim trong vòng 2 - 3 phút mà không làm gián đoạn quá trình hồi sức bệnh nhân.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Sốc mất máu huyết động không ổn định kèm siêu âm FAST có dịch tự do ổ bụng\nĐỀ.docx",
                  "Rách bao gan độ I trên phim CT nhưng huyết động của người bệnh hoàn toàn ổn định\nĐỀ.docx",
                  "Nồng độ men Amylase máu tăng nhẹ sau chấn thương đụng dập cơ thành bụng trước\nĐỀ.docx",
                  "Đau tức bụng vừa phải nhưng thăm khám không thấy có phản ứng thành bụng rõ rệt\nĐỀ.docx"
                ],
                "ans": 0,
                "exp": "Bệnh nhân có sốc mất máu (mạch nhanh, huyết áp tụt) kết hợp bằng chứng có dịch máu tự do trong ổ bụng qua siêu âm FAST phải chuyển thẳng phòng mổ để phẫu thuật mở bụng cầm máu cấp cứu; không chuyển đi chụp CT vì nguy cơ ngừng tim trên đường di chuyển.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Khâu kín miệng vết thương thành bụng ngoài và cho người bệnh theo dõi tại nhà\nĐỀ.docx",
                  "Nhét gạc vô khuẩn sâu vào vết thương và chờ đợi khi có biểu hiện sốt mới mổ\nĐỀ.docx",
                  "Phẫu thuật mổ cấp cứu để thăm dò toàn diện ổ bụng, cầm máu và xử trí tạng thủng\nĐỀ.docx",
                  "Cắt bỏ đoạn ruột lòi ra ngoài ngay tại phòng khám cấp cứu rồi khâu phục hồi da\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Vết thương thấu bụng (đã thủng qua phúc mạc thành) có nguy cơ tổn thương tạng rỗng và mạch máu rất cao. Chỉ định mở bụng hoặc nội soi thăm dò toàn bộ ổ bụng là bắt buộc nhằm tránh bỏ sót tổn thương thủng ruột hay chảy máu đang tiếp diễn.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Hình ảnh các quai ruột non giãn to chứa đầy hơi\nĐỀ.docx",
                  "Hình ảnh liềm hơi tự do nằm dưới cơ hoành\nĐỀ.docx",
                  "Hình ảnh mức nước - mức hơi chân rộng vòm thấp\nĐỀ.docx",
                  "Bóng thận hai bên to và mờ hơn so với bình thường\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Khí tự do thoát ra từ ống tiêu hóa bị thủng sẽ di chuyển lên vị trí cao nhất của ổ bụng dưới vòm hoành khi bệnh nhân ở tư thế đứng, tạo nên hình ảnh liềm hơi sáng ngăn cách giữa cơ hoành và bóng gan/dạ dày.\nĐỀ.docx"
              }
            ]
          },
          "viem-tui-mat-cap-soi": {
            "title": "Bài 3: Viêm túi mật cấp do sỏi (5 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Vi khuẩn từ đường ruột xâm nhập ngược dòng vào đường mật và gây viêm nhiễm\nĐỀ.docx",
                  "Sỏi kẹt cổ/ống túi mật gây ứ trệ, tăng áp lực lòng túi mật và thiếu máu thành\nĐỀ.docx",
                  "Trào ngược dịch tụy chứa nhiều men tiêu protein hoạt hóa vào lòng túi mật\nĐỀ.docx",
                  "Phản ứng dị ứng miễn dịch do các thuốc kháng sinh bài tiết qua đường mật gan\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Trên 90% các ca viêm túi mật cấp bắt đầu do sỏi kẹt tại phễu hoặc ống túi mật. Dịch mật ứ đọng làm tăng áp lực thành túi mật, gây phù nề, thiếu máu nuôi dưỡng niêm mạc túi mật, sau đó mới xảy ra tình trạng bội nhiễm vi khuẩn thứ phát.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Dấu hiệu Blumberg (phản ứng dội) dương tính rõ rệt tại vùng hố chậu phải\nĐỀ.docx",
                  "Dấu hiệu Murphy dương tính (ngừng thở do đau chói khi ấn đáy túi mật lúc hít vào)\nĐỀ.docx",
                  "Dấu hiệu Rovsing dương tính khi dồn hơi từ bên hố chậu trái sang hố chậu phải\nĐỀ.docx",
                  "Dấu hiệu Kehr dương tính gây đau nhói chói vùng khớp vai bên trái\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Điểm Murphy là giao điểm bờ sườn phải và bờ ngoài cơ thẳng bụng phải. Khi bệnh nhân hít sâu vào, cơ hoành đẩy đáy túi mật đang viêm chạm vào tay người khám gây đau chói dữ dội khiến bệnh nhân phải ngừng thở đột ngột (dấu hiệu Murphy dương tính).\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Sỏi kẹt ở vùng cổ túi mật hoặc phát hiện có sỏi trong lòng túi mật\nĐỀ.docx",
                  "Thành túi mật dày , có hình hai lớp hoặc dịch quanh túi mật\nĐỀ.docx",
                  "Kích thước túi mật căng to bất thường (đường kính ngang )\nĐỀ.docx",
                  "Tất cả các tiêu chuẩn siêu âm kể trên\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Siêu âm bụng là phương pháp chẩn đoán hình ảnh đầu tay có độ chính xác đối với viêm túi mật cấp; hội đủ các tiêu chuẩn: phát hiện sỏi mật, thành túi mật dày trên 4mm phù nề, dấu hiệu Murphy siêu âm dương tính và lớp dịch viêm bao quanh túi mật.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Tán sỏi túi mật bằng sóng xung kích ngoài cơ thể kết hợp kháng sinh phổ rộng\nĐỀ.docx",
                  "Điều trị nội khoa kéo dài bằng thuốc làm tan sỏi Acid Ursodeoxycholic\nĐỀ.docx",
                  "Phẫu thuật nội soi cắt túi mật sớm (tốt nhất trong vòng 72 giờ đầu khởi phát)\nĐỀ.docx",
                  "Phẫu thuật mổ mở nối thông túi mật - quai hỗng tràng cấp cứu giải áp\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Phẫu thuật nội soi cắt túi mật sớm trong 72 giờ đầu kể từ khi khởi phát là tiêu chuẩn điều trị vàng theo Hướng dẫn Tokyo (Tokyo Guidelines), giúp giảm thời gian nằm viện, giảm chi phí và hạn chế các biến chứng hoại tử thủng túi mật so với mổ trì hoãn.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Hoại tử thủng túi mật gây viêm phúc mạc mật\nĐỀ.docx",
                  "Áp xe quanh túi mật hoặc hình thành ổ áp xe dưới hoành\nĐỀ.docx",
                  "Rò túi mật vào ống tiêu hóa gây tắc ruột do sỏi\nĐỀ.docx",
                  "Tất cả các biến chứng ngoại khoa kể trên\nĐỀ.docx"
                ],
                "ans": 3,
                "exp": "Thiếu máu thành túi mật kéo dài sẽ dẫn tới hoại tử thủng túi mật gây viêm phúc mạc mật hoặc áp xe khu trú; trường hợp sỏi lớn ăn mòn thành túi mật tạo lỗ rò thông vào tá tràng có thể rơi xuống ruột non và kẹt tại van hồi manh tràng gây tắc ruột cơ học do sỏi mật (Gallstone ileus).\nĐỀ.docx"
              }
            ]
          },
          "tac-ruot-co-hoc": {
            "title": "Bài 4: Tắc ruột cơ học (5 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Đau bụng từng cơn, Nôn mửa, Bí trung đại tiện và Bụng trướng căng\nĐỀ.docx",
                  "Sốt cao rét run, Vàng da niêm mạc, Đau hạ sườn phải và Nôn ra dịch mật\nĐỀ.docx",
                  "Đau tức vùng thượng vị, Ợ hơi chua, Đi ngoài phân đen và Sút cân nhanh\nĐỀ.docx",
                  "Đau quặn bụng dưới, Đi ngoài phân có nhầy máu và Cảm giác mót rặn liên tục\nĐỀ.docx"
                ],
                "ans": 0,
                "exp": "Tứ chứng tắc ruột kinh điển bao gồm: Đau (đau quặn từng cơn theo sóng nhu động), Nôn (nôn thức ăn/dịch tiêu hóa), Bí (bí trung đại tiện - dấu hiệu khẳng định tắc lưu thông), Trướng (trướng hơi và dịch ứ đọng phía trên chỗ tắc).\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Hình ảnh liềm hơi tự do nằm dưới vòm hoành ở cả hai bên\nĐỀ.docx",
                  "Mức nước - hơi ở giữa bụng, chân rộng vòm thấp, xếp hình bậc thang\nĐỀ.docx",
                  "Khung đại tràng giãn to chứa đầy hơi và phân dọc theo hai bên hố chậu\nĐỀ.docx",
                  "Bóng hơi dạ dày dãn khổng lồ chiếm toàn bộ khoang nửa trên ổ bụng\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Tắc ruột non cơ học biểu hiện bằng các mức nước - mức hơi nằm ở giữa bụng, vòm thấp chân rộng (do nếp gấp niêm mạc ruột non chạy suốt chu vi quai ruột), sắp xếp theo chiều đi của mạc treo từ hố chậu phải lên hạ sườn trái. Tắc đại tràng thì mức nước - hơi nằm ở ngoại vi, vòm cao chân hẹp.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Tình trạng nôn nhiều ra dịch mật xanh rêu xuất hiện sớm\nĐỀ.docx",
                  "Đau dữ dội liên tục, sốc nhiễm độc nhanh và có phản ứng phúc mạc\nĐỀ.docx",
                  "Bệnh nhân có dấu hiệu bí đại tiện nhưng vẫn còn trung tiện được\nĐỀ.docx",
                  "Số lượng bạch cầu trong công thức máu hoàn toàn trong giới hạn\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Tắc ruột bít tắc đơn thuần đau theo từng cơn nhu động ruột, giữa các cơn người bệnh đỡ đau; trong khi tắc ruột thắt nghẹt có thiếu máu hoại tử mạc treo nên đau dữ dội liên tục không dứt, xuất hiện sớm các triệu chứng viêm phúc mạc và sốc nhiễm trùng - nhiễm độc, cần mổ cấp cứu tối khẩn.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Cho bệnh nhân uống các thuốc nhuận tràng mạnh để kích thích tống phân qua chỗ tắc\nĐỀ.docx",
                  "Đặt sonde dạ dày hút giảm áp, nhịn ăn uống hoàn toàn và bồi phụ dịch - điện giải\nĐỀ.docx",
                  "Tiến hành thụt tháo đại tràng nhiều lần bằng nước ấm số lượng lớn liên tục\nĐỀ.docx",
                  "Cho sử dụng ngay các thuốc chống co thắt cơ trơn liều cao để giảm đau bụng\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Đặt ống thông dạ dày giúp hút giải phóng dịch hơi ứ đọng, làm xẹp các quai ruột, chống trào ngược sặc phổi và cải thiện tưới máu thành ruột. Đồng thời, bù đủ dịch đẳng trương và cân bằng điện giải (đặc biệt là bù Kali) là bước hồi sức sống còn trước mổ.\nĐỀ.docx+ 1"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Khối u ác tính đại tràng sigma di căn xâm lấn vào thành ruột\nĐỀ.docx",
                  "Dây chằng hoặc dính các quai ruột sau phẫu thuật ổ bụng\nĐỀ.docx",
                  "Búi giun đũa số lượng lớn gây bít tắc hoàn toàn lòng ruột\nĐỀ.docx",
                  "Khối dị vật bã thức ăn to không tiêu hóa được gây nghẽn ruột\nĐỀ.docx"
                ],
                "ans": 1,
                "exp": "Dính ruột và dây chằng sau mổ chiếm khoảng 60 - 70% các nguyên nhân gây tắc ruột non cơ học ở người lớn có tiền sử phẫu thuật ổ bụng (mổ viêm ruột thừa, mổ phụ khoa, mổ viêm phúc mạc). Các quai ruột bị gập góc hoặc chui qua các lỗ khuyết tạo bởi dải dính gây nghẽn lòng ruột.\nĐỀ.docx+ 1\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Ngoại Chấn thương Chỉnh hình: Bất động gãy xương, Gãy cẳng chân, Gãy xương hở, Vết thương phần mềm, Cấp cứu chấn thương).\nDưới đây là Phần 14: Ngoại Chấn thương Chỉnh hình (Bài 1 đến Bài 5, gồm Câu 1 – Câu 25). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "chan-thuong-phan-mem-chi": {
            "title": "Bài 5: Chấn thương xương, mô mềm, chi đứt rời (5 câu)",
            "questions": [
              {
                "q": "Câu 1\nNguyên tắc bất động cố định tạm thời khi bị gãy xương chi là",
                "opts": [
                  "Chỉ cần đặt nẹp cố định chắc chắn và khu trú ngay tại vị trí ổ gãy",
                  "Bất động chắc chắn ổ gãy và cố định qua ít nhất hai khớp trên và dưới",
                  "Kéo nắn thật thẳng trục chi về tư thế giải phẫu rồi mới nẹp bất động",
                  "Treo chi tổn thương lên cao bằng dây đỡ mềm mà không cần nẹp cứng"
                ],
                "ans": 1,
                "exp": "Bất động cố định chi gãy bắt buộc phải giữ bất động được khớp phía trên và khớp phía dưới ổ gãy nhằm triệt tiêu các cử động xoay và giằng xé của khối cơ bám qua hai khớp, giúp giảm đau, phòng ngừa sốc chấn thương, tránh di lệch thứ phát đâm rách mạch máu, thần kinh và màng xương."
              },
              {
                "q": "Câu 2\nBiến chứng cấp tính nguy hiểm nhất thường gặp trong điều trị gãy xương kín bằng phương pháp bảo tồn (bó bột hoặc nẹp bột) là",
                "opts": [
                  "Hội chứng chèn ép khoang cấp tính",
                  "Chảy máu thứ phát không thể cầm",
                  "Nhiễm khuẩn huyết do tụ máu dập",
                  "Can xương lệch trục gây tàn phế"
                ],
                "ans": 0,
                "exp": "Sau gãy xương, phản ứng phù nề mô mềm và chảy máu trong khoang cân mạc kín làm áp lực mô kẽ tăng nhanh. Nếu băng bó hoặc bó bột quá chặt, áp lực trong khoang vượt quá áp lực mao mạch sẽ gây tắc nghẽn tuần hoàn mao mạch, dẫn đến hoại tử thần kinh và cơ không thể hồi phục."
              },
              {
                "q": "Câu 3\nChỉ định tháo rạch dọc bột khẩn cấp được đặt ra khi người bệnh có biểu hiện",
                "opts": [
                  "Cảm thấy vướng víu khó chịu và ngứa ngáy nhiều ở vùng mang bột",
                  "Có nguyện vọng muốn được tháo bột sớm để tập vận động khớp chi",
                  "Nghi ngờ hoặc bắt đầu xuất hiện dấu hiệu của hội chứng chèn ép khoang",
                  "Cảm giác đau buốt thuyên giảm hoàn toàn sau khi uống thuốc giảm đau"
                ],
                "ans": 2,
                "exp": "Bất kỳ khi nào người bệnh có dấu hiệu nghi ngờ chèn ép khoang (đau tăng dữ dội không đáp ứng giảm đau, tê bì, phù nề tím tái các ngón chi), phải rạch dọc bột giải áp ngay qua toàn bộ các lớp bột và lớp bông lót để hạ áp lực khoang."
              },
              {
                "q": "Câu 4\nQuy trình sơ cứu và bảo quản một phần chi thể bị đứt rời hoàn toàn đúng kỹ thuật để phục vụ phẫu thuật vi phẫu nối lại là",
                "opts": [
                  "Rửa sạch bằng dung dịch cồn y tế rồi thả trực tiếp vào xô đá lạnh",
                  "Rửa nước muối, bọc gạc sạch cho vào túi nilon, rồi đặt túi vào thùng đá",
                  "Ngâm ngập phần chi thể đứt trong dung dịch kháng sinh pha loãng đá",
                  "Bọc chi thể trong túi nilon và vận chuyển ở nhiệt độ phòng bình thường"
                ],
                "ans": 1,
                "exp": "Chi thể đứt rời cần được bảo quản lạnh gián tiếp từ 2 đến 4°C để làm chậm quá trình thoái hóa và thiếu máu hoại tử mô. Không được ngâm trực tiếp chi thể vào nước đá vì sẽ gây bỏng lạnh mô, phù nề tế bào và phá hủy lớp nội mạc mạch máu, khiến miệng nối vi phẫu bị huyết khối tắc mạch."
              },
              {
                "q": "Câu 5\nThời gian thiếu máu lạnh tối đa cho phép để có thể phẫu thuật nối lại thành công đối với chi thể lớn có chứa nhiều cơ (như cẳng tay, cẳng chân) là",
                "opts": [
                  "Dưới 6 giờ (tối đa trong khoảng 6 - 8 giờ)",
                  "Khoảng thời gian kéo dài từ 12 - 24 giờ",
                  "Cho phép kéo dài an toàn từ 24 - 48 giờ",
                  "Chỉ giới hạn nghiêm ngặt trong vòng 30 phút"
                ],
                "ans": 0,
                "exp": "Tế bào cơ vân rất nhạy cảm với tình trạng thiếu oxy, sau 6 giờ thiếu máu mô cơ bắt đầu hoại tử không hồi phục và giải phóng độc tố (myoglobin, kali, acid lactic) vào tuần hoàn khi tái tưới máu. Ngón tay (chủ yếu là gân, xương, da) có thể chịu đựng thiếu máu lạnh kéo dài hơn (lên tới 12 - 24 giờ)."
              }
            ]
          },
          "gay-xuong-cang-chan": {
            "title": "Bài 6: Gãy xương cẳng chân (5 câu)",
            "questions": [
              {
                "q": "Câu 6\nĐặc điểm giải phẫu quan trọng của xương cẳng chân giải thích vì sao gãy thân xương cẳng chân rất dễ trở thành gãy hở và chậm liền xương là",
                "opts": [
                  "Ống tủy xương chày rất hẹp và khả năng chịu lực nén cơ học kém",
                  "Mặt trước trong xương chày sát da không cơ che phủ, mạch 1/3 dưới nghèo nàn",
                  "Xương mác gánh chịu phần lớn tải trọng cơ thể khi vận động đi lại",
                  "Khối cơ cẳng chân có màng liên cốt quá dày cản trở tuần hoàn xương"
                ],
                "ans": 1,
                "exp": "Toàn bộ mặt trước trong và bờ trước (mào chày) của xương chày nằm sát ngay dưới da, không có lớp cơ đệm bảo vệ nên khi có lực chấn thương đụng dập hoặc đầu xương gãy chọc thủng da rất dễ tạo thành gãy hở. Đoạn 1/3 dưới xương chày có nguồn mạch máu nuôi dưỡng kém, diện bám cơ ít nên tỷ lệ khớp giả và chậm liền xương rất cao."
              },
              {
                "q": "Câu 7\nCẳng chân được giải phẫu phân chia thành bao nhiêu khoang cân mạc kín có nguy cơ bị chèn ép khoang khi gãy xương",
                "opts": [
                  "Gồm 2 khoang cân mạc riêng biệt",
                  "Gồm 3 khoang cân mạc riêng biệt",
                  "Gồm 4 khoang (trước, ngoài, sau nông và sau sâu)",
                  "Gồm 5 khoang cân mạc riêng biệt"
                ],
                "ans": 2,
                "exp": "Cẳng chân có 4 khoang cân riêng biệt được giới hạn bởi xương chày, xương mác, màng liên cốt và các vách gian cơ: (1) Khoang trước (chứa cơ chày trước, các cơ duỗi ngón, mạch chày trước và thần kinh mác sâu - khoang hay bị chèn ép nhất); (2) Khoang ngoài; (3) Khoang sau nông; (4) Khoang sau sâu."
              },
              {
                "q": "Câu 8\nDấu hiệu lâm sàng gợi ý sớm tình trạng chèn ép khoang trước cẳng chân ở bệnh nhân gãy xương cẳng chân là",
                "opts": [
                  "Mất hoàn toàn mạch đập của động mạch chày sau ở phía sau mắt cá trong",
                  "Cẳng chân căng cứng, đau chói khi gấp thụ động bàn chân, tê kẽ ngón I - II",
                  "Toàn bộ các ngón chân và mu bàn chân bị tím đen hoại tử da lan rộng",
                  "Liệt hoàn toàn động tác gấp lòng bàn chân và mất phản xạ gân gót chân"
                ],
                "ans": 1,
                "exp": "Khoang trước chứa thần kinh mác sâu (chi phối cảm giác khoang kẽ ngón chân I - II) và nhóm cơ duỗi cổ chân, ngón chân. Khi chèn ép khoang trước, nghiệm pháp gấp thụ động bàn chân về phía lòng sẽ làm căng giãn các cơ bị thiếu máu gây đau buốt dữ dội; đây là dấu hiệu lâm sàng sớm và có độ nhạy cao nhất."
              },
              {
                "q": "Câu 9\nChỉ định mở cân giải áp khẩn cấp ở bệnh nhân chèn ép khoang cẳng chân dựa trên đo áp lực khoang khi",
                "opts": [
                  "Áp lực khoang đo được vượt quá ngưỡng giới hạn",
                  "Áp lực khoang  hoặc hiệu số HATTr - P(khoang)",
                  "Áp lực tuyệt đối trong khoang tăng cao bằng mức huyết áp tâm thu",
                  "Áp lực khoang có xu hướng hạ xuống dưới ngưỡng an toàn"
                ],
                "ans": 1,
                "exp": "Áp lực khoang bình thường . Khi áp lực tăng  hoặc hiệu số áp lực tưới máu  là chỉ định tuyệt đối phải rạch mở rộng bao cân cẳng chân giải áp để cứu vãn cơ và thần kinh."
              },
              {
                "q": "Câu 10\nPhương pháp phẫu thuật kết hợp xương được ưu tiên lựa chọn hàng đầu cho gãy kín vững thân hai xương cẳng chân ở người lớn hiện nay là",
                "opts": [
                  "Mổ mở ổ gãy đặt nẹp vít nén ép động (phương pháp DCP)",
                  "Đóng đinh nội tủy có chốt kín dưới màn tăng sáng (C-arm)",
                  "Bó bột đùi cẳng bàn chân kéo dài cố định trong 6 tháng",
                  "Đặt hệ thống khung cố định ngoài vĩnh viễn qua da ổ gãy"
                ],
                "ans": 1,
                "exp": "Đóng đinh nội tủy có chốt kín là phương pháp phẫu thuật xâm lấn tối thiểu tiêu chuẩn: giữ vững trục chi và chiều dài giải phẫu, không mở ổ gãy nên bảo tồn tối đa khối máu tụ và màng xương nuôi dưỡng, giúp liền xương sinh học nhanh và cho phép bệnh nhân tì đè tập phục hồi chức năng sớm."
              }
            ]
          },
          "gay-xuong-ho": {
            "title": "Bài 7: Gãy xương hở (6 câu)",
            "questions": [
              {
                "q": "Câu 11\nThời gian xử trí phẫu thuật cắt lọc rửa sạch ổ gãy tối ưu để phòng ngừa nhiễm khuẩn trong gãy xương hở (kể từ khi bị thương) là",
                "opts": [
                  "Trong vòng dưới 6 giờ đầu (\"thời gian vàng\" xử trí)",
                  "Khoảng thời gian từ 12 đến 24 giờ sau tai nạn",
                  "Sau 24 giờ khi đã có triệu chứng nhiễm trùng rõ",
                  "Sau 48 giờ để mô mềm tự tạo hàng rào khu trú"
                ],
                "ans": 0,
                "exp": "Trong vòng 6 giờ đầu sau chấn thương, vi khuẩn bám dính vào mô dập nát chỉ mới ở giai đoạn sinh sôi cục bộ tại bề mặt, chưa kịp xâm nhập sâu vào hệ thống tuần hoàn và cấu trúc xương; phẫu thuật cắt lọc sớm trong thời gian này giúp biến vết thương bẩn thành vết thương sạch, giảm thiểu tỷ lệ viêm xương tủy xương."
              },
              {
                "q": "Câu 12\nƯu tiên hàng đầu trong các bước tiếp cận và xử trí ban đầu một bệnh nhân bị gãy xương hở tại phòng cấp cứu là",
                "opts": [
                  "Dùng ngay thuốc an thần liều cao để giảm đau và chống kích thích",
                  "Hồi sức tích cực: Cầm máu vết thương và hồi sức chống sốc ban đầu",
                  "Nắn chỉnh và tiến hành bó bột cố định ổ gãy xương ngay lập tức",
                  "Kéo tạ liên tục để chỉnh các di lệch xương gãy về đúng trục thẳng"
                ],
                "ans": 1,
                "exp": "Gãy xương hở (đặc biệt các xương lớn như xương đùi, xương chày) gây mất máu nhiều và đau đớn dữ dội; hồi sức tính mạng bằng cầm máu tại chỗ (băng ép có trọng điểm), bù dịch thể tích chống sốc là ưu tiên số 1 trước khi thực hiện các can thiệp chỉnh hình chuyên sâu."
              },
              {
                "q": "Câu 13\nTheo bảng phân độ gãy xương hở của Gustilo - Anderson (1984), tổn thương được xếp vào \"Gãy hở Độ I\" khi",
                "opts": [
                  "Rách da , vết thương sạch, cơ dập nát tối thiểu, gãy xương đơn giản",
                  "Vết rách da kích thước , không có tổn thương dập nát phần mềm rộng",
                  "Vết rách da , dập nát cơ nặng nề và lộ diện rộng bề mặt màng xương",
                  "Vết thương do tai nạn nông nghiệp nhiễm bẩn bùn đất nặng bất kể kích thước"
                ],
                "ans": 0,
                "exp": "Phân loại Gustilo: Độ I (vết thương , sạch, tổn thương phần mềm tối thiểu, gãy xương đơn giản); Độ II (rách da , tổn thương phần mềm vừa, không lóc da rộng); Độ III (rách da  hoặc dập nát mô mềm nặng, gãy phức tạp hoặc vết thương bẩn)."
              },
              {
                "q": "Câu 14\nĐặc điểm phân biệt giữa gãy xương hở Độ IIIA, IIIB và IIIC theo phân loại Gustilo là",
                "opts": [
                  "Độ IIIA có mức độ tổn thương dập nát cơ và mô mềm nhỏ hơn phân độ II",
                  "IIIA đủ mô che phủ; IIIB lộ trơ xương cần chuyển vạt; IIIC có tổn thương mạch chính",
                  "Độ IIIC là tổn thương gãy xương có biến chứng nhiễm trùng hoại tử mủ",
                  "Độ IIIB là gãy xương hở chi phối hợp với tổn thương gãy cột sống mất vững"
                ],
                "ans": 1,
                "exp": "Trong nhóm Độ III: IIIA (mô mềm dập rộng nhưng sau cắt lọc vẫn đủ che phủ kín xương); IIIB (mất phần mềm rộng lộ xương trơ, màng xương bị lột, cần xoay vạt/ghép vạt tạo hình); IIIC (kèm đứt/tổn thương động mạch chính cần mổ cấp cứu phục hồi lưu thông mạch)."
              },
              {
                "q": "Câu 15\nChỉ định phối hợp kháng sinh nhóm Aminoglycosid (như Gentamicin, Amikacin) được khuyến cáo cho gãy xương hở ở phân độ nào",
                "opts": [
                  "Chỉ áp dụng điều trị thường quy cho gãy xương hở phân độ I",
                  "Chỉ áp dụng điều trị thường quy cho gãy xương hở phân độ II",
                  "Phối hợp bắt buộc từ gãy hở Độ III trở lên hoặc vết thương bẩn",
                  "Tuyệt đối không dùng Aminoglycosid trong chấn thương chỉnh hình"
                ],
                "ans": 2,
                "exp": "Gãy hở Độ I và II thường chỉ cần kháng sinh phổ tác dụng trên vi khuẩn Gram dương (Cephalosporin thế hệ 1 hoặc 2). Từ Độ III trở lên hoặc vết thương bẩn nguy cơ cao nhiễm khuẩn Gram âm đường ruột và trực khuẩn mủ xanh, bắt buộc phải phối hợp thêm Aminoglycosid (như Gentamicin) và Metronidazole (để chống vi khuẩn kỵ khí)."
              },
              {
                "q": "Câu 16\nPhương pháp cố định xương được lựa chọn ưu tiên hàng đầu trong xử trí phẫu thuật cấp cứu gãy xương hở nặng Độ IIIB, IIIC hoặc vết thương ô nhiễm nặng là",
                "opts": [
                  "Đặt nẹp nén ép khóa (LCP) với đường mổ mở rộng ổ gãy",
                  "Đóng đinh nội tủy có chốt ngang chịu lực ngay thì đầu",
                  "Đặt khung cố định ngoài (External fixator) qua da",
                  "Tiến hành bó bột kín toàn bộ chi ngay sau khi cắt lọc"
                ],
                "ans": 2,
                "exp": "Khung cố định ngoài giúp giữ vững chắc trục xương ở vị trí cách xa ổ gãy, không để lại dị vật kim loại lớn trong ổ gãy đang có nguy cơ nhiễm trùng cao, đồng thời để lộ toàn bộ phần mềm giúp bác sĩ dễ dàng chăm sóc, thay băng, cắt lọc lại và tạo hình chuyển vạt che phủ xương."
              }
            ]
          },
          "vet-thuong-phan-mem": {
            "title": "Bài 8: Vết thương phần mềm (4 câu)",
            "questions": [
              {
                "q": "Câu 17\nNguyên tắc vàng trong phẫu thuật xử trí vết thương phần mềm là",
                "opts": [
                  "Khâu thật kín mép vết thương ngay từ đầu bất kể thời gian đến viện",
                  "Cắt lọc sạch mô hoại tử, lấy dị vật, rửa áp lực thích hợp và dẫn lưu tốt",
                  "Rắc trực tiếp các loại bột kháng sinh phổ rộng vào đáy ổ tổn thương",
                  "Cắt bỏ rộng rãi toàn bộ vùng da lành xung quanh mép bờ tổn thương"
                ],
                "ans": 1,
                "exp": "Tổn thương mô dập nát, máu tụ và dị vật là môi trường lý tưởng cho vi khuẩn yếm khí (như Clostridium tetani, Clostridium perfringens) phát triển. Phẫu thuật cắt lọc sạch mô chết, tưới rửa rửa trôi vi khuẩn và dẫn lưu thông thoáng là yếu tố quyết định giúp vết thương liền sẹo an toàn."
              },
              {
                "q": "Câu 18\nVết thương phần mềm đến muộn sau 24 giờ, mép bẩn và có dấu hiệu viêm đỏ phù nề, phương pháp xử trí đúng đắn là",
                "opts": [
                  "Cắt lọc mép vết thương và khâu phục hồi kín toàn bộ da ngay thì đầu",
                  "Cắt lọc sạch, để hở vết thương, chăm sóc thay băng và khâu thì hai",
                  "Băng ép thật chặt vết thương bằng băng thun mà không can thiệp phẫu thuật",
                  "Đắp các loại thảo dược hoặc lá thuốc nam tại chỗ để kích thích mô hạt"
                ],
                "ans": 1,
                "exp": "Vết thương đến muộn sau 24 giờ hoặc có dấu hiệu nhiễm trùng tuyệt đối không được khâu kín thì đầu vì sẽ tạo khoang kín kỵ khí gây hoại thư sinh hơi và nhiễm trùng lan tỏa. Bắt buộc cắt lọc để hở, chăm sóc thay băng sạch sẽ rồi mới khâu da thì hai (khâu thì hai sớm sau  ngày hoặc khâu thì hai muộn sau  ngày)."
              },
              {
                "q": "Câu 19\nXử trí dự phòng uốn ván cho một bệnh nhân có vết thương bẩn, sâu, chưa từng tiêm phòng uốn ván (hoặc không nhớ tiền sử) là",
                "opts": [
                  "Chỉ cần tiêm 1 mũi vắc-xin giải độc tố uốn ván (VAT) duy nhất",
                  "Chỉ cần tiêm huyết thanh kháng độc tố uốn ván (SAT) liều đơn",
                  "Tiêm ngay huyết thanh SAT và vắc-xin VAT ở hai vị trí tiêm khác nhau",
                  "Không cần tiêm phòng uốn ván nếu bệnh nhân đã uống kháng sinh"
                ],
                "ans": 2,
                "exp": "Kháng thể thụ động từ huyết thanh SAT/TIG bảo vệ tức thì trung hòa ngoại độc tố uốn ván tự do trong máu trong khi hệ miễn dịch chưa kịp sản xuất kháng thể; đồng thời tiêm vắc-xin VAT để kích thích cơ thể sinh miễn dịch chủ động lâu dài. Hai thuốc bắt buộc tiêm ở hai vị trí khác nhau để tránh kháng thể trung hòa mất kháng nguyên vắc-xin."
              },
              {
                "q": "Câu 20\nBiến chứng ngoại khoa cấp tính nguy hiểm nhất của vết thương dập nát cơ sâu do trực khuẩn kỵ khí sinh hơi gây ra là",
                "opts": [
                  "Viêm mô tế bào lan tỏa cấp tính do liên cầu khuẩn tan huyết",
                  "Hoại thư sinh hơi (Gas Gangrene do Clostridium perfringens)",
                  "Uốn ván thể co cứng toàn thân do Clostridium tetani phát triển",
                  "Phản ứng dị ứng phản vệ chậm đối với các kháng sinh điều trị"
                ],
                "ans": 1,
                "exp": "Clostridium perfringens và các vi khuẩn kỵ khí sinh hơi phát triển mạnh trong các vết thương dập nát cơ sâu bị thiếu máu, tạo bọt khí lan tỏa trong mô liên kết và hoại tử cơ ồ ạt, sinh độc tố gây tan máu, sốc nhiễm độc toàn thân đe dọa tử vong trong vài giờ nếu không được cắt lọc mở rộng rạch cân hoặc cắt cụt chi cấp cứu."
              }
            ]
          },
          "chan-thuong-itls-ngoai": {
            "title": "Bài 9: Cấp cứu chấn thương ITLS (5 câu)",
            "questions": [
              {
                "q": "Câu 21\nTrình tự các bước đánh giá và xử trí nhanh các dấu hiệu đe dọa tính mạng trong Khảo sát ban đầu (Primary Survey) theo ITLS là",
                "opts": [
                  "C - A - B - C - D - E (Kiểm soát chảy máu thảm họa  Đường thở & Cổ  Hô hấp...)",
                  "A - B - C - D - E thông thường bỏ qua bước đánh giá chảy máu lớn bên ngoài",
                  "Khám chi tiết toàn diện từ đầu đến chân rồi mới tiến hành các bước hồi sức",
                  "Đưa người bệnh đi chụp X-quang và CT toàn thân trước khi làm các thủ thuật"
                ],
                "ans": 0,
                "exp": "Hướng dẫn cập nhật mới nhất của ITLS/ATLS đưa chữ C lớn lên đầu tiên: Catastrophic Hemorrhage (Chảy máu thảm họa đe dọa tính mạng ngay tức khắc như đứt động mạch lớn chi) phải được đặt garô hoặc băng ép chèn cầm máu ngay trước hoặc song song với bước bảo vệ đường thở (Airway & C-spine), tiếp tục đến Breathing, Circulation, Disability và Exposure."
              },
              {
                "q": "Câu 22\nBệnh nhân tai nạn giao thông ngã văng ra đường, tỉnh táo nhưng kêu đau vùng cổ nhiều, dấu hiệu sinh tồn ổn định. Hành động đầu tiên quan trọng nhất là",
                "opts": [
                  "Tiến hành đặt ống nội khí quản có bóng chèn để bảo vệ đường thở ngay",
                  "Đặt ống canun hầu họng Guedel qua đường miệng để tránh tụt lưỡi",
                  "Cố định trục cột sống cổ ngay bằng nẹp cổ cứng hoặc giữ thẳng bằng tay",
                  "Thiết lập ngay 2 đường truyền tĩnh mạch ngoại vi kim lớn ở hai tay"
                ],
                "ans": 2,
                "exp": "Bất kỳ nạn nhân đa chấn thương hoặc chấn thương từ tầng sinh môn trở lên có cơ chế va đập mạnh đều phải được coi là có chấn thương cột sống cổ cho đến khi có bằng chứng hình ảnh học loại trừ. Cố định cổ ngay lập tức giúp ngăn ngừa di lệch đốt sống làm tổn thương tủy cổ gây liệt tứ chi hoặc ngừng thở."
              },
              {
                "q": "Câu 23\nDụng cụ nẹp cố định nhanh và an toàn nhất được lựa chọn để vận chuyển khẩn cấp một bệnh nhân đa chấn thương nghi gãy nhiều xương là",
                "opts": [
                  "Sử dụng các thanh nẹp gỗ thông thường để nẹp cố định từng chi riêng rẽ",
                  "Bất động toàn thân trên Ván cứng (Long Spine Board) có đai và chèn đầu",
                  "Buộc cố định chặt chi bị tổn thương gãy xương vào chi lành bên đối diện",
                  "Buộc ép nẹp chi bị tổn thương vào sát trục thân mình của người bệnh"
                ],
                "ans": 1,
                "exp": "Cố định toàn thân trên ván cứng là phương pháp nẹp nhanh nhất, đồng bộ nhất, vừa bất động vững chắc toàn bộ trục cột sống vừa cố định các xương gãy ở chi và khung chậu, giúp vận chuyển bệnh nhân an toàn lên cáng xe cấp cứu mà không làm tổn thương tiến triển."
              },
              {
                "q": "Câu 24\nThang điểm hôn mê Glasgow (GCS) đánh giá tri giác người bệnh chấn thương dựa trên 3 đáp ứng",
                "opts": [
                  "Huyết áp tâm thu, Tần số nhịp tim và Tần số nhịp thở tự nhiên",
                  "Mở mắt (Eye - tối đa 4đ), Lời nói (Verbal - tối đa 5đ), Vận động (Motor - tối đa 6đ)",
                  "Kích thước đồng tử, Phản xạ gân xương bánh chè và Cơ lực tứ chi",
                  "Cảm giác đau nông sâu, Cảm giác nhiệt độ và Trương lực cơ toàn thân"
                ],
                "ans": 1,
                "exp": "Thang điểm Glasgow dao động từ 3 đến 15 điểm: Mở mắt (E: 1 - 4 điểm), Lời nói (V: 1 - 5 điểm), Vận động (M: 1 - 6 điểm). Điểm GCS  điểm được định nghĩa là chấn thương sọ não nặng / hôn mê, có chỉ định đặt nội khí quản bảo vệ đường thở."
              },
              {
                "q": "Câu 25\nDấu hiệu vỡ khung chậu mất vững trong đa chấn thương có nguy cơ gây sốc mất máu sau phúc mạc dữ dội, biện pháp sơ cứu cố định tạm thời cấp bách tại chỗ là",
                "opts": [
                  "Kéo liên tục qua lồi củ trước xương chày bằng hệ thống tạ kéo",
                  "Dùng đai cố định chuyên dụng hoặc quấn chặt ga giường quanh hai mấu chuyển lớn",
                  "Tiến hành bó bột chậu lưng chân hai bên cố định ngay tại phòng khám",
                  "Đặt người bệnh nằm nghiêng nhẹ nhàng sang phía bên chậu không đau"
                ],
                "ans": 1,
                "exp": "Buộc đai khung chậu ngang mức hai mấu chuyển lớn giúp khép các cánh chậu bị toác (gãy khung chậu kiểu mở cuốn sách), làm giảm thể tích khoang tiểu khung và ép các diện xương vỡ cùng đám rối tĩnh mạch sau phúc mạc đang chảy máu, tạo hiệu ứng chèn ép tự nhiên (tamponade) để cầm máu cứu sống bệnh nhân.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Ngoại Tiết niệu: Sỏi hệ tiết niệu và U phì đại lành tính tuyến tiền liệt).\nDưới đây là Phần 15: Ngoại Tiết niệu (Bài 11: Sỏi hệ tiết niệu, Bài 12: U phì đại tuyến tiền liệt, gồm Câu 1 – Câu 18). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          },
          "soi-he-tiet-nieu-ngoai": {
            "title": "Bài 10: Sỏi hệ tiết niệu (8 câu)",
            "questions": [
              {
                "q": "Câu 1\nTriệu chứng lâm sàng khởi phát điển hình của cơn đau quặn thận do sỏi niệu quản là",
                "opts": [
                  "Đau âm ỉ liên tục vùng hạ vị kèm theo tiểu buốt, tiểu rắt nhiều lần",
                  "Đau đột ngột dữ dội hông lưng, lan dọc niệu quản xuống bẹn sinh dục",
                  "Đau tức vùng hạ sườn phải lan ra sau lưng kèm theo sốt cao và vàng da",
                  "Đau rát bỏng vùng tầng sinh môn khi ngồi lâu kèm dòng tiểu yếu"
                ],
                "ans": 1,
                "exp": "Cơn đau quặn thận xuất hiện khi sỏi di chuyển gây bít tắc đột ngột đường dẫn nước tiểu tại niệu quản. Nước tiểu ứ trệ phía trên làm tăng áp lực đột ngột trong đài bể thận và căng giãn bao thận cấp tính, kích hoạt các sợi thần kinh cảm giác tạng gây cơn đau dữ dội lan theo tiết đoạn thần kinh T11 - L2 xuống cơ quan sinh dục ngoài."
              },
              {
                "q": "Câu 2\nLoại sỏi hệ tiết niệu nào sau đây KHÔNG cản quang trên phim chụp X-quang hệ tiết niệu không chuẩn bị (KUB)",
                "opts": [
                  "Sỏi Calci Oxalat đơn thuần",
                  "Sỏi Calci Phosphat thứ phát",
                  "Sỏi Struvite (Magnesi Amoni Phosphat)",
                  "Sỏi Acid Uric (Sỏi Urat)"
                ],
                "ans": 3,
                "exp": "Sỏi Urat và sỏi Cystin có mật độ nguyên tử thấp nên tia X xuyên qua dễ dàng, không tạo bóng cản quang rõ rệt trên phim X-quang thường quy. Để chẩn đoán xác định các loại sỏi này bắt buộc phải phối hợp siêu âm hệ niệu hoặc chụp cắt lớp vi tính (CT scan) không tiêm thuốc cản quang."
              },
              {
                "q": "Câu 3\nTiêu chuẩn vàng trong chẩn đoán hình ảnh để xác định vị trí, kích thước, số lượng và độ cản quang (Hounsfield) của sỏi niệu là",
                "opts": [
                  "Siêu âm ổ bụng và hệ tiết niệu tổng quát",
                  "Chụp X-quang hệ tiết niệu không chuẩn bị (KUB)",
                  "Chụp CT scan hệ tiết niệu không cản quang liều thấp",
                  "Chụp hệ tiết niệu qua đường tĩnh mạch (UIV)"
                ],
                "ans": 2,
                "exp": "Chụp CT hệ niệu không tiêm thuốc có độ nhạy (> 97%) và độ đặc hiệu (> 96%) cao nhất trong chẩn đoán sỏi hệ tiết niệu, phát hiện được mọi loại sỏi (kể cả sỏi không cản quang trên KUB), đo chính xác độ cứng của sỏi theo thang điểm Hounsfield (HU) để định hướng phương pháp tán sỏi thích hợp."
              },
              {
                "q": "Câu 4\nPhương pháp tán sỏi thận qua da bằng đường hầm nhỏ (Mini-PCNL) được chỉ định ưu tiên hàng đầu trong trường hợp nào sau đây",
                "opts": [
                  "Sỏi đài thận dưới nhỏ kích thước  không có triệu chứng",
                  "Sỏi niệu quản đoạn 1/3 dưới nằm sát vị trí thành bàng quang",
                  "Sỏi bể thận hoặc đài thận có kích thước lớn  (kể cả sỏi san hô)",
                  "Sỏi bàng quang nằm tự do kích thước  gây tiểu buốt"
                ],
                "ans": 2,
                "exp": "Tán sỏi thận qua da (PCNL) là phẫu thuật nội soi xâm lấn tối thiểu tiêu chuẩn thay thế mổ mở cho các sỏi thận kích thước lớn (), sỏi phức tạp, sỏi san hô hoặc sỏi đài dưới không thuận lợi cho tán sỏi ngoài cơ thể hay nội soi ngược dòng."
              },
              {
                "q": "Câu 5\nPhương pháp phẫu thuật nội soi tán sỏi niệu quản ngược dòng sử dụng năng lượng Laser (URS) có ưu điểm và chỉ định vượt trội đối với",
                "opts": [
                  "Sỏi thận dạng san hô toàn phần kích thước lớn",
                  "Sỏi niệu quản các đoạn và sỏi thận kích thước",
                  "Sỏi bàng quang tự do kích thước lớn ở trẻ sơ sinh",
                  "Viêm thận bể thận cấp tính đang có tình trạng ứ mủ thận"
                ],
                "ans": 1,
                "exp": "Nội soi tán sỏi ngược dòng đi qua đường tự nhiên (niệu đạo  bàng quang  niệu quản) sử dụng laser Holmium/Thulium tán vỡ sỏi vụn như cát và gắp ra ngoài, không để lại sẹo mổ, phục hồi nhanh và là can thiệp hàng đầu cho sỏi niệu quản mọi vị trí và sỏi thận nhỏ thuận lợi."
              },
              {
                "q": "Câu 6\nBiến chứng ngoại khoa cấp tính nguy hiểm nhất đe dọa tính mạng khi sỏi gây bít tắc hoàn toàn đường dẫn nước tiểu là",
                "opts": [
                  "Xuất hiện tình trạng tiểu ra máu vi thể dai dẳng kéo dài",
                  "Ứ mủ đài bể thận dẫn tới Nhiễm khuẩn huyết / Sốc nhiễm khuẩn đường niệu",
                  "Hình thành các khối nang nước giả bao thận thứ phát",
                  "Trào ngược bàng quang - niệu quản mức độ nặng kéo dài"
                ],
                "ans": 1,
                "exp": "Tắc nghẽn niệu quản kèm nhiễm khuẩn biến thận thành một ổ mủ áp lực cao. Áp lực nước tiểu ứ đọng đẩy vi khuẩn Gram âm (, Klebsiella) và nội độc tố tràn vào các xoang tĩnh mạch thận gây nhiễm trùng huyết và sốc nhiễm khuẩn với tỷ lệ tử vong cao nếu không được dẫn lưu giải áp cấp cứu (đặt sonde JJ hoặc dẫn lưu thận qua da)."
              },
              {
                "q": "Câu 7\nNguyên tắc ngoại khoa cấp cứu khi có sỏi niệu quản gây ứ nước - ứ mủ thận kèm hội chứng nhiễm khuẩn nặng là",
                "opts": [
                  "Tiến hành tán sỏi thận qua da để lấy hết sỏi giải phóng bế tắc ngay",
                  "Phẫu thuật mổ mở lấy sỏi cấp cứu kết hợp cắt lọc tổ chức quanh thận",
                  "Dẫn lưu mủ giải áp cấp cứu (đặt sonde JJ hoặc dẫn lưu thận qua da) kết hợp kháng sinh",
                  "Dùng thuốc lợi tiểu thẩm thấu liều cao để tăng lưu lượng dòng nước tiểu tống mủ"
                ],
                "ans": 2,
                "exp": "Khi đang có tình trạng nhiễm khuẩn cấp tính tại đường niệu trên, việc can thiệp tán sỏi bằng áp lực nước sẽ đẩy vi khuẩn vào tuần hoàn làm sốc nhiễm khuẩn bùng phát nặng hơn. Nguyên tắc sống còn là \"dẫn lưu mủ trước - xử trí sỏi sau\" bằng cách đặt sonde JJ hoặc chọc dẫn lưu thận qua da cấp cứu."
              },
              {
                "q": "Câu 8\nĐể dự phòng sỏi calci oxalat tái phát sau khi đã sạch sỏi, lời khuyên dinh dưỡng đúng đắn nhất cho người bệnh là",
                "opts": [
                  "Kiêng ăn hoàn toàn các thực phẩm chứa calci trong khẩu phần hàng ngày",
                  "Uống đủ nước (), calci hợp lý, ăn nhạt, giảm đạm và oxalat",
                  "Uống thật nhiều nước ngọt có ga hàng ngày để toan hóa môi trường nước tiểu",
                  "Nhịn tiểu kéo dài ngắt quãng để tập thích nghi tăng dung tích bàng quang"
                ],
                "ans": 1,
                "exp": "Uống đủ nước để duy trì nước tiểu  là biện pháp dự phòng quan trọng nhất. Kiêng calci quá mức là sai lầm vì calci tự do trong ruột giảm sẽ làm tăng hấp thu oxalat vào máu gây sỏi oxalat nặng hơn; đồng thời cần ăn nhạt () vì bài tiết natri niệu tăng sẽ kéo theo calci niệu tăng tạo sỏi."
              }
            ]
          },
          "u-phi-dai-tuyen-tien-liet": {
            "title": "Bài 11: U phì đại tuyến tiền liệt (BPH) (10 câu)",
            "questions": [
              {
                "q": "Câu 9\nU phì đại lành tính tuyến tiền liệt thường xuất phát từ vùng giải phẫu nào của tuyến (theo phân chia của McNeal)",
                "opts": [
                  "Vùng chuyển tiếp (Transition zone) nằm ôm sát niệu đạo tiền liệt tuyến",
                  "Vùng ngoại vi (Peripheral zone) nằm ở phía sau dưới của tuyến",
                  "Vùng trung tâm (Central zone) bao quanh các ống phóng tinh",
                  "Vùng đệm xơ cơ phía trước không chứa các tuyến chế tiết"
                ],
                "ans": 0,
                "exp": "Theo phân vùng McNeal: U phì đại lành tính tuyến tiền liệt (BPH) phát triển chủ yếu từ vùng chuyển tiếp (nằm ôm sát đoạn niệu đạo tiền liệt tuyến) nên gây chèn ép dòng tiểu rất sớm. Ngược lại, ung thư tuyến tiền liệt chiếm tới 70 - 80% xuất phát từ vùng ngoại vi."
              },
              {
                "q": "Câu 10\nTriệu chứng lâm sàng của tăng sinh lành tính tuyến tiền liệt (LUTS) được chia thành 2 nhóm chính gồm",
                "opts": [
                  "Triệu chứng đau quặn cơn và triệu chứng sốt cao rét run",
                  "Nhóm triệu chứng tống xuất (tắc nghẽn) và Nhóm triệu chứng chứa đựng (kích thích)",
                  "Triệu chứng suy giảm chức năng thận và triệu chứng thiếu máu",
                  "Triệu chứng rối loạn phân lỏng và triệu chứng táo bón mạn tính"
                ],
                "ans": 1,
                "exp": "LUTS do BPH bao gồm: Triệu chứng tắc nghẽn (tống xuất): tiểu khó, phải rặn, tia tiểu yếu, ngắt quãng, nhỏ giọt, tiểu không hết; Triệu chứng kích thích (chứa đựng): tiểu gấp, tiểu nhiều lần cả ngày lẫn đêm (nocturia), tiểu són."
              },
              {
                "q": "Câu 11\nĐặc điểm thăm khám tuyến tiền liệt qua đường trực tràng (DRE) điển hình của U phì đại lành tính tuyến tiền liệt là",
                "opts": [
                  "Tuyến teo nhỏ, co rút xơ chai và ranh giới với xung quanh không rõ",
                  "Tuyến to, bề mặt nhẵn, mật độ chắc đàn hồi, ranh giới rõ, không đau",
                  "Tuyến gồ ghề, sờ thấy nhân cứng như đá và mất hoàn toàn ranh giới",
                  "Tuyến sưng nóng đỏ đau dữ dội, có ổ lùng nhùng ấn chảy mủ ra niệu đạo"
                ],
                "ans": 1,
                "exp": "Thăm trực tràng (DRE) là động tác lâm sàng cơ bản bắt buộc: trong BPH tuyến to đều, bờ tròn nhẵn, mềm mại đàn hồi và đối xứng. Nếu sờ thấy nhân cứng đanh, bề mặt gồ ghề mất tính đối xứng thì phải cảnh giác cao với ung thư tuyến tiền liệt."
              },
              {
                "q": "Câu 12\nBảng điểm quốc tế đánh giá triệu chứng tuyến tiền liệt (IPSS) phân loại mức độ rối loạn tiểu tiện của người bệnh theo các mức",
                "opts": [
                  "Nhẹ: 1 - 5 điểm; Trung bình: 6 - 15 điểm; Nặng: 16 - 25 điểm",
                  "Nhẹ: 0 - 7 điểm; Trung bình: 8 - 19 điểm; Nặng: 20 - 35 điểm",
                  "Nhẹ: 0 - 10 điểm; Nặng: 11 - 20 điểm",
                  "Bình thường: 0 điểm; Bệnh lý:  điểm"
                ],
                "ans": 1,
                "exp": "Thang điểm IPSS gồm 7 câu hỏi về triệu chứng (tổng tối đa 35 điểm) cộng 1 câu hỏi về chất lượng cuộc sống (QoL từ 0 đến 6 điểm); phân loại:  điểm là mức độ nhẹ;  điểm là mức độ trung bình;  điểm là mức độ nặng."
              },
              {
                "q": "Câu 13\nXét nghiệm kháng nguyên đặc hiệu tuyến tiền liệt (PSA) toàn phần trong huyết thanh có ý nghĩa lâm sàng quan trọng nhất là",
                "opts": [
                  "Chẩn đoán xác định chính xác thể tích và trọng lượng khối u",
                  "Đo lường chính xác mức độ cản trở cơ học trong lòng niệu đạo",
                  "Sàng lọc và định hướng phân biệt giữa tăng sinh lành tính với ung thư tuyến tiền liệt",
                  "Đánh giá mức độ tổn thương suy giảm chức năng lọc của cầu thận"
                ],
                "ans": 2,
                "exp": "Giá trị PSA bình thường . Nồng độ PSA từ  là vùng ranh giới (xám). Khi  hoặc thăm trực tràng nghi ngờ khối gồ ghề cứng, người bệnh có chỉ định chụp MRI tiểu khung và sinh thiết tuyến tiền liệt dưới hướng dẫn của siêu âm để tầm soát ung thư."
              },
              {
                "q": "Câu 14\nCơ chế tác dụng của nhóm thuốc chẹn thụ thể Alpha-1 giao cảm (như Alfuzosin, Tamsulosin) trong điều trị BPH là",
                "opts": [
                  "Làm teo nhỏ kích thước và thể tích của khối u tuyến sau 6 tháng",
                  "Làm giãn cơ trơn cổ bàng quang và tiền liệt tuyến, tăng dòng tiểu nhanh sau 24 - 48h",
                  "Ức chế enzym chuyển Testosterone thành Dihydrotestosterone (DHT)",
                  "Kháng khuẩn chống phản ứng viêm nhiễm thứ phát ở đường tiết niệu dưới"
                ],
                "ans": 1,
                "exp": "Thuốc chẹn alpha-1 làm giãn trương lực cơ trơn vùng cổ bàng quang và tuyến tiền liệt, giải phóng tắc nghẽn động lực học giúp dòng tiểu thông thoáng ngay lập tức ( ngày sau uống), nhưng hoàn toàn không làm giảm kích thước thực tế của tuyến. Tác dụng phụ thường gặp là tụt huyết áp tư thế và xuất tinh ngược dòng."
              },
              {
                "q": "Câu 15\nNhóm thuốc ức chế men 5-Alpha Reductase (5-ARI như Finasteride, Dutasteride) có đặc điểm điều trị nào sau đây",
                "opts": [
                  "Làm giãn cơ trơn cổ bàng quang và đạt hiệu quả hạ áp tối đa sau 1 tuần",
                  "Ngăn tạo DHT, giảm thể tích tuyến 20 - 30% sau 3 - 6 tháng, giảm nguy cơ bí tiểu",
                  "Chỉ định ưu tiên cho các khối u tuyến tiền liệt kích thước nhỏ",
                  "Làm tăng giả tạo nồng độ xét nghiệm kháng nguyên PSA toàn phần trong máu"
                ],
                "ans": 1,
                "exp": "5-ARI ức chế enzym tạo DHT (hormone kích thích chính gây phì đại tế bào tuyến), từ đó làm thu nhỏ thể tích tuyến tiền liệt sau  tháng, thích hợp cho bệnh nhân có tuyến to (). Thuốc làm giảm khoảng 50% nồng độ PSA huyết thanh sau 6 tháng điều trị (khi đọc kết quả PSA cần nhân đôi để tránh bỏ sót ung thư)."
              },
              {
                "q": "Câu 16\nChỉ định can thiệp phẫu thuật TUYỆT ĐỐI cho bệnh nhân tăng sinh lành tính tuyến tiền liệt được đặt ra trong các trường hợp sau, TRỪ",
                "opts": [
                  "Tình trạng bí tiểu cấp tái phát sau khi đã rút thử ống thông tiểu thất bại",
                  "Có biến chứng hình thành sỏi bàng quang hoặc túi thừa bàng quang lớn thứ phát",
                  "Nhiễm khuẩn tiết niệu hoặc đái máu đại thể tái diễn do u xơ gây ra",
                  "Tuyến tiền liệt 45 gam trên siêu âm nhưng triệu chứng nhẹ (IPSS < 7 điểm)"
                ],
                "ans": 3,
                "exp": "Phẫu thuật tuyến tiền liệt không dựa đơn thuần vào kích thước to trên siêu âm mà dựa vào triệu chứng lâm sàng và biến chứng. Bệnh nhân có tuyến to nhưng không có triệu chứng hoặc triệu chứng nhẹ (IPSS ) chỉ cần theo dõi định kỳ. Chỉ định mổ bắt buộc khi điều trị nội khoa thất bại hoặc đã có biến chứng: bí tiểu tái phát, sỏi bàng quang, suy thận do ứ nước đường niệu trên, đái máu tái diễn, túi thừa bàng quang lớn."
              },
              {
                "q": "Câu 17\nPhương pháp phẫu thuật tiêu chuẩn vàng (Gold Standard) trong điều trị ngoại khoa tăng sinh lành tính tuyến tiền liệt kích thước  hiện nay là",
                "opts": [
                  "Mổ mở bóc u tuyến tiền liệt qua bàng quang theo phương pháp Freyer",
                  "Phẫu thuật nội soi cắt u tuyến tiền liệt qua đường niệu đạo (TURP)",
                  "Phẫu thuật cắt bỏ toàn bộ khối tuyến tiền liệt và nạo vét hạch chậu",
                  "Đặt ống thông nong niệu đạo hoặc đặt giá đỡ kim loại (stent) vĩnh viễn"
                ],
                "ans": 1,
                "exp": "Phẫu thuật nội soi cắt tuyến tiền liệt qua niệu đạo (TURP) là tiêu chuẩn vàng kinh điển: dụng cụ nội soi đi qua niệu đạo cắt khối u thành từng mảnh nhỏ bằng dao điện đơn cực (monopolar) hoặc lưỡng cực (bipolar) và hút rửa ra ngoài, mang lại hiệu quả thông tắc đường tiểu cao, ít mất máu và thời gian nằm viện ngắn."
              },
              {
                "q": "Câu 18\nBiến chứng cấp tính đặc thù trong mổ cắt u tuyến tiền liệt qua niệu đạo đơn cực (Monopolar TURP) do hấp thu quá nhiều dịch rửa không dẫn điện là",
                "opts": [
                  "Hội chứng cơn bão giáp trạng kịch phát đe dọa trụy tim mạch",
                  "Hội chứng nội soi (TURP Syndrome): quá tải thể tích và hạ Natri máu cấp",
                  "Hội chứng chèn ép khoang cấp tính tại các khối cơ ở hai chi dưới",
                  "Hội chứng viêm đa rễ dây thần kinh vận động ngoại biên cấp tính"
                ],
                "ans": 1,
                "exp": "Trong mổ TURP đơn cực, các xoang tĩnh mạch lớn bị mở ra kết hợp áp lực dịch rửa Glycine cao làm một lượng lớn dịch nhược trương bị hút thẳng vào hệ tuần hoàn. Biểu hiện hội chứng TURP: tăng thể tích máu cấp gây tăng huyết áp, phù phổi cấp, sau đó trụy mạch kèm theo hạ Natri máu nặng gây phù não (lơ mơ, co giật, hôn mê). Phòng ngừa bằng cách rút ngắn thời gian mổ () hoặc sử dụng dao điện lưỡng cực (Bipolar) cho phép rửa bằng nước muối sinh lý NaCl 0,9% đẳng trương.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Phần 16: Phụ Sản - Bài 1 đến Bài 8: Quản lý thai nghén, Chuyển dạ, Hậu sản, Kế hoạch hóa gia đình, Thai ngoài tử cung, U xơ tử cung, U nang buồng trứng, Viêm phần phụ).\nDưới đây là Phần 16: Sản Phụ khoa (Bài 1 đến Bài 8, gồm Câu 1 – Câu 40). Các phương án gây nhiễu đã được biên tập lại cân đối về độ dài, ngữ pháp và mức độ chi tiết kỹ thuật so với đáp án đúng để đảm bảo tính khách quan."
              }
            ]
          }
        }
      },
      "san-phu-khoa": {
        "name": "Khoa Sản - Phụ khoa",
        "lessons": {
          "quan-ly-thai-benh-ly": {
            "title": "Bài 1: Quản lý thai (Tiền sản giật, ĐTĐ, thai lưu) (9 câu)",
            "questions": [
              {
                "q": "Câu 1\nTheo phân loại của Bộ Y tế, tăng huyết áp trong thai kỳ được chia thành mấy nhóm bệnh lý chính",
                "opts": [
                  "Gồm 4 nhóm bệnh lý tăng huyết áp",
                  "Gồm 5 nhóm bệnh lý tăng huyết áp",
                  "Gồm 6 nhóm bệnh lý tăng huyết áp",
                  "Gồm 3 nhóm bệnh lý tăng huyết áp"
                ],
                "ans": 0,
                "exp": "Phân loại tăng huyết áp thai kỳ theo Hướng dẫn Quốc gia của Bộ Y tế và ACOG gồm 4 nhóm: (1) Tăng huyết áp mạn tính; (2) Tăng huyết áp thai kỳ; (3) Tiền sản giật - sản giật; (4) Tiền sản giật ghép trên nền tăng huyết áp mạn tính."
              },
              {
                "q": "Câu 2\nTiêu chuẩn chẩn đoán xác định Tiền sản giật khi tuổi thai sau 20 tuần bao gồm",
                "opts": [
                  "Huyết áp  kết hợp phù nhẹ hai chi dưới xuất hiện vào buổi chiều",
                  "Huyết áp  kèm theo Protein niệu  (hoặc que thử )",
                  "Huyết áp tăng đột ngột kèm đau đầu dữ dội, nhìn mờ nhưng xét nghiệm không có protein niệu",
                  "Nồng độ acid uric huyết thanh tăng vọt đơn thuần kèm tăng cân nhanh trên 1 kg/tuần"
                ],
                "ans": 1,
                "exp": "Tiền sản giật đặc trưng bởi sự xuất hiện của tăng huyết áp (HATT  và/hoặc HATTr ) sau tuần 20 ở thai phụ trước đó có huyết áp bình thường, đi kèm protein niệu  (hoặc chỉ số Protein/Creatinin niệu )."
              },
              {
                "q": "Câu 3\nThuốc hạ huyết áp đường uống được khuyến cáo lựa chọn an toàn hàng đầu cho phụ nữ mang thai là",
                "opts": [
                  "Methyldopa hoặc Nifedipine tác dụng kéo dài",
                  "Enalapril hoặc Captopril (ức chế men chuyển)",
                  "Losartan hoặc Valsartan (chẹn thụ thể AT1)",
                  "Spironolactone phối hợp cùng với Thiazid"
                ],
                "ans": 0,
                "exp": "Methyldopa, Labetalol và Nifedipine giải phóng kéo dài là các thuốc hạ áp kinh điển an toàn trong thai kỳ, không làm giảm tưới máu bánh rau. Nhóm ACEi và ARB tuyệt đối chống chỉ định vì gây dị tật thận, thiểu ối và thai chết lưu."
              },
              {
                "q": "Câu 4\nThuốc được lựa chọn hàng đầu để dự phòng và điều trị cắt cơn co giật trong Sản giật và Tiền sản giật nặng là",
                "opts": [
                  "Thuốc an thần Diazepam tiêm tĩnh mạch liều cao",
                  "Magnesi sulfat () tiêm bắp hoặc truyền TM",
                  "Thuốc an thần Phenobarbital tiêm bắp sâu ngắt quãng",
                  "Thuốc chống động kinh Phenytoin truyền tĩnh mạch"
                ],
                "ans": 1,
                "exp": "Magnesi sulfat () có tác dụng ức chế dẫn truyền thần kinh cơ, giãn mạch não và bảo vệ tế bào thần kinh, là thuốc chống co giật chuẩn mực trong sản giật. Cần theo dõi phản xạ gân xương bánh chè, nhịp thở và lượng nước tiểu khi dùng thuốc."
              },
              {
                "q": "Câu 5\nThời điểm chuẩn để tiến hành làm nghiệm pháp dung nạp glucose đường uống (OGTT 75g) tầm soát đái tháo đường thai kỳ là",
                "opts": [
                  "Tuần thứ  của thai kỳ",
                  "Tuần thứ  của thai kỳ",
                  "Tuần thứ  của thai kỳ",
                  "Tuần thứ  của thai kỳ"
                ],
                "ans": 2,
                "exp": "Tuần thứ 24 - 28 là giai đoạn bánh rau tăng tiết tối đa các hormone đối kháng insulin (hPL, estrogen, progesterone, cortisol) làm tăng tính kháng insulin sinh lý rõ rệt nhất, là thời điểm nhạy nhất để tầm soát."
              },
              {
                "q": "Câu 6\nMục tiêu kiểm soát đường huyết mao mạch được khuyến cáo cho thai phụ mắc đái tháo đường thai kỳ là",
                "opts": [
                  "Đường máu trước ăn ; sau ăn 2 giờ",
                  "Lúc đói ; sau ăn 1 giờ ; sau 2 giờ",
                  "Đường máu trước ăn ; sau ăn 2 giờ",
                  "Đường máu tại bất kỳ thời điểm nào sau ăn luôn duy trì"
                ],
                "ans": 1,
                "exp": "Kiểm soát đường huyết trong thai kỳ đòi hỏi mục tiêu rất chặt chẽ: nồng độ glucose máu lúc đói  (), sau ăn 1 giờ  () và sau ăn 2 giờ  () để phòng ngừa biến chứng cho thai."
              },
              {
                "q": "Câu 7\nThuốc hạ đường huyết được Bộ Y tế và quốc tế khuyến cáo là lựa chọn chuẩn duy nhất trong thai kỳ khi điều chỉnh lối sống thất bại là",
                "opts": [
                  "Thuốc hạ đường huyết nhóm Biguanide Metformin",
                  "Thuốc kích thích tế bào beta tụy Sulfonylurea",
                  "Liệu pháp tiêm dưới da bằng các loại Insulin",
                  "Thuốc ức chế đồng vận chuyển Natri - Glucose 2"
                ],
                "ans": 2,
                "exp": "Insulin không qua hàng rào nhau thai nên an toàn tuyệt đối cho thai nhi, kiểm soát đường máu chính xác theo từng bữa ăn. Các thuốc hạ đường huyết đường uống nói chung không khuyến cáo thường quy do nguy cơ qua nhau thai và thiếu dữ liệu an toàn lâu dài."
              },
              {
                "q": "Câu 8\nDấu hiệu lâm sàng và cận lâm sàng giúp chẩn đoán xác định Thai chết lưu trong tử cung là",
                "opts": [
                  "Cơn co tử cung xuất hiện thưa thớt kèm theo cảm giác trằn nặng vùng bụng dưới",
                  "Mất thai máy, chiều cao tử cung không tăng, siêu âm Doppler mất tim thai hoàn toàn",
                  "Ra máu âm đạo đỏ tươi số lượng nhiều có lẫn máu cục và đau quặn từng cơn",
                  "Bụng trướng căng gõ đục vùng thấp và tử cung mềm hơn so với tuổi thai sinh lý"
                ],
                "ans": 1,
                "exp": "Sản phụ mất cảm giác thai cử động, ngực tiết sữa non, tử cung không lớn thêm; siêu âm là tiêu chuẩn vàng xác nhận tim thai ngừng hoạt động hoàn toàn, có thể thấy dấu hiệu bong da đầu hoặc chồng khớp sọ Spalding."
              },
              {
                "q": "Câu 9\nBiến chứng rối loạn đông máu nguy hiểm nhất của thai chết lưu kéo dài trong tử cung (trên 3 - 4 tuần) là",
                "opts": [
                  "Tăng sinh tiểu cầu tiên phát gây tắc nghẽn",
                  "Đông máu nội mạch rải rác (hội chứng DIC)",
                  "Suy thoái dòng mẫu tiểu cầu tại tủy xương",
                  "Thuyên tắc hệ thống mạch máu phổi do bọt khí"
                ],
                "ans": 1,
                "exp": "Mô thai và bánh rau hoại tử giải phóng thromboplastin vào máu mẹ kích hoạt dòng thác đông máu nội mạch, tiêu thụ cạn kiệt fibrinogen và các yếu tố đông máu, dẫn đến hội chứng DIC gây băng huyết dữ dội khi can thiệp đưa thai ra."
              }
            ]
          },
          "theo-doi-chuyen-da": {
            "title": "Bài 2: Theo dõi đánh giá chuyển dạ (5 câu)",
            "questions": [
              {
                "q": "Câu 10\nDấu hiệu nào sau đây KHÔNG PHẢI là dấu hiệu khẳng định một cuộc chuyển dạ đẻ thực sự",
                "opts": [
                  "Cơn co tử cung nhịp nhàng tăng dần về tần số (ít nhất 3 cơn/10 phút) và cường độ",
                  "Cổ tử cung có hiện tượng xóa ngắn lại và mở tiến triển khi thăm khám âm đạo",
                  "Sự hình thành của đầu ối và sự tiến triển đi xuống của ngôi thai qua khung chậu",
                  "Ra dịch chất nhầy hồng ở âm đạo đơn thuần mà không hề có cơn co tử cung kèm theo"
                ],
                "ans": 3,
                "exp": "Ra chất nhầy hồng âm đạo (mất nút nhầy cổ tử cung) chỉ là dấu hiệu báo chuyển dạ, có thể xảy ra trước khi chuyển dạ thực sự vài ngày. Chuyển dạ thực sự bắt buộc phải có cơn co tử cung đều đặn làm biến đổi cổ tử cung và tiến triển ngôi thai."
              },
              {
                "q": "Câu 11\nTrong theo dõi chuyển dạ bằng Monitoring sản khoa (CTG), vị trí đặt đầu dò đo cơn co tử cung (Toco transducer) đúng chuẩn là",
                "opts": [
                  "Đặt ngay ở phía trên bờ trên của xương mu",
                  "Đặt tại vùng đáy tử cung (nơi cơn co mạnh nhất)",
                  "Đặt khu trú sâu ở vùng hố chậu phía bên trái",
                  "Đặt trực tiếp đè lên vị trí nghe rõ tim thai"
                ],
                "ans": 1,
                "exp": "Cơn co tử cung sinh lý phát nhịp từ sừng tử cung và lan tỏa xuống, sóng co bóp có cường độ và biên độ mạnh nhất tại vùng đáy tử cung; do đó đầu dò áp lực Toco phải được cố định ở đáy tử cung."
              },
              {
                "q": "Câu 12\nGiai đoạn I của cuộc chuyển dạ chuyển sang \"Pha hoạt động\" (Active phase) khi độ mở cổ tử cung đạt từ",
                "opts": [
                  "Mở từ",
                  "Mở đạt mốc tròn",
                  "Mở từ  đến",
                  "Khi đầu ối đã tự vỡ hoàn toàn"
                ],
                "ans": 2,
                "exp": "Giai đoạn I (xóa mở CTC) gồm: Pha tiềm tàng (từ khi chuyển dạ đến khi CTC mở ); Pha hoạt động (khi CTC mở từ  đến  - mở hết, tốc độ mở nhanh  ở con so)."
              },
              {
                "q": "Câu 13\nThai 40 tuần theo dõi chuyển dạ, tim thai dao động bất thường , cơn co tần số 3, CTC mở , ngôi đầu cao. Xử trí đúng đắn nhất là",
                "opts": [
                  "Cho đẻ chỉ huy bằng truyền tĩnh mạch Oxytocin tăng co",
                  "Bấm ối chủ động để thúc đẩy tốc độ xóa mở cổ tử cung",
                  "Phẫu thuật mổ lấy thai cấp cứu vì có suy thai cấp",
                  "Tiếp tục theo dõi tim thai bằng ống nghe gỗ mỗi 1 giờ"
                ],
                "ans": 2,
                "exp": "Tim thai dao động bất thường (dưới  hoặc trên ) kèm theo CTC mở chậm và ngôi cao chúc là dấu hiệu của suy thai cấp trong chuyển dạ; chỉ định mổ lấy thai cấp cứu là bắt buộc."
              },
              {
                "q": "Câu 14\nThời điểm thích hợp nhất để thực hiện thủ thuật cắt tầng sinh môn khi đỡ đẻ thường ngôi chỏm là",
                "opts": [
                  "Cắt ngay tại thời điểm cổ tử cung vừa mở hết",
                  "Cắt ngay khi sản phụ bắt đầu có phản xạ muốn rặn đẻ",
                  "Cắt khi tầng sinh môn căng phồng tối đa, đầu thai lọt thấp",
                  "Cắt sau khi toàn bộ đầu thai nhi đã sổ hoàn toàn ra ngoài"
                ],
                "ans": 2,
                "exp": "Cắt tầng sinh môn thực hiện vào đúng đỉnh cơn co khi tầng sinh môn mỏng căng và đầu thai nhi tì sát âm hộ để vừa hạn chế tối đa chảy máu, vừa mở rộng lối thoát tránh rách tầng sinh môn phức tạp tổn thương cơ thắt hậu môn."
              }
            ]
          },
          "cham-soc-hau-san-chay-mau": {
            "title": "Bài 3: Khám theo dõi sản phụ sau đẻ (5 câu)",
            "questions": [
              {
                "q": "Câu 15\nTheo định nghĩa chuẩn của Bộ Y tế và WHO, Chảy máu sau đẻ đối với sinh đường âm đạo được xác định khi lượng máu mất",
                "opts": [
                  "Lượng máu mất đo được",
                  "Lượng máu mất đo được",
                  "Mất  (hoặc  sau mổ lấy thai)",
                  "Lượng máu mất đo được"
                ],
                "ans": 2,
                "exp": "Băng huyết sau sinh kinh điển được định nghĩa là mất  máu sau đẻ thường đường âm đạo hoặc  máu sau phẫu thuật mổ lấy thai, hoặc bất kỳ lượng máu mất nào gây biến đổi huyết động mẹ."
              },
              {
                "q": "Câu 16\nBốn nhóm nguyên nhân chính gây chảy máu sau đẻ (quy tắc 4T) bao gồm",
                "opts": [
                  "Tone (Đờ tử cung), Tissue (Sót rau), Trauma (Chấn thương), Thrombin (Đông máu)",
                  "Time (Thời gian), Temperature (Nhiệt độ), Tumor (Khối u), Tension (Huyết áp)",
                  "Toxicity (Độc tố), Torsion (Xoắn tạng), Tears (Vết rách), Trauma (Chấn thương)",
                  "Thyroid (Tuyến giáp), Thrombosis (Huyết khối), Tone (Trương lực), Tissue (Mô)"
                ],
                "ans": 0,
                "exp": "Quy tắc 4T: Tone (Đờ tử cung - chiếm 70 - 80%); Tissue (Sót rau, bánh rau phụ); Trauma (Rách tầng sinh môn, âm đạo, vỡ tử cung); Thrombin (Rối loạn đông cầm máu)."
              },
              {
                "q": "Câu 17\nChỉ định bắt buộc phải tiến hành thủ thuật Kiểm soát tử cung bằng tay sau đẻ là",
                "opts": [
                  "Sản phụ sau đẻ thường thấy tử cung co hồi tốt hình thành khối cầu an toàn",
                  "Nghi ngờ sót rau/màng rau, chảy máu do đờ tử cung, hoặc có sẹo mổ cũ",
                  "Sản phụ xuất hiện sốt nhẹ trong vòng 24 giờ đầu tiên sau khi kết thúc cuộc đẻ",
                  "Em bé sinh non tháng có cân nặng khi sinh thấp dưới ngưỡng 2500 gam"
                ],
                "ans": 1,
                "exp": "Kiểm soát buồng tử cung bằng tay nhằm bóc vét các múi rau/màng rau sót, lấy sạch máu cục và kiểm tra tính toàn vẹn thành tử cung (loại trừ nứt vết mổ cũ hoặc vỡ tử cung)."
              },
              {
                "q": "Câu 18\nSản phụ sau sinh thường đủ tháng, kiểm tra bánh rau thấy có bánh rau phụ rách màng, âm đạo rỉ máu đỏ sẫm khoảng 300ml. Xử trí cấp cứu cần làm ngay là",
                "opts": [
                  "Đặt túi chườm nước đá lạnh trực tiếp lên vùng thành bụng dưới",
                  "Dùng thuốc co hồi tử cung (Oxytocin) và kiểm soát tử cung lấy sạch rau sót",
                  "Chuyển ngay lên phòng mổ để tiến hành phẫu thuật cắt tử cung bán phần",
                  "Chỉ tiến hành khâu lại da tầng sinh môn và chèn ép gạc chặt bên ngoài"
                ],
                "ans": 1,
                "exp": "Nghi ngờ bánh rau phụ bị sót gây đờ tử cung rỉ máu; bắt buộc dùng thuốc co tử cung (Oxytocin) phối hợp kiểm soát buồng tử cung bằng tay để lấy sạch phần phụ sót và cầm máu."
              },
              {
                "q": "Câu 19\nTrong quá trình bóc rau nhân tạo sau đẻ thường, phát hiện một phần bánh rau dính chặt không thể bóc tách khỏi cơ tử cung và chảy máu, xử trí đúng là",
                "opts": [
                  "Sử dụng thìa nạo thật mạnh tay để cạo sạch diện bám của tổ chức rau dính",
                  "Ngừng bóc rau bằng tay, giảm đau/hồi sức chống sốc và chuyển mổ cấp cứu",
                  "Chờ đợi thêm 30 phút rồi dùng kẹp hình tim kéo giật mạnh dây rốn ra ngoài",
                  "Nhét thật chặt gạc mét chèn vào trong buồng tử cung và âm đạo để cầm máu"
                ],
                "ans": 1,
                "exp": "Rau cài răng lược ăn sâu vào cơ tử cung, không có lớp ranh giới decidua; nếu cố dùng tay bóc giật sẽ làm thủng tử cung và chảy máu ồ ạt. Bắt buộc dừng thủ thuật và chuyển mổ mở xử trí (thường phải cắt tử cung)."
              }
            ]
          },
          "ke-hoach-hoa-gia-dinh": {
            "title": "Bài 4: Khám tư vấn kế hoạch hóa gia đình (4 câu)",
            "questions": [
              {
                "q": "Câu 20\nPhương pháp phá thai ngoại khoa bằng Hút chân không (bơm Karman) được áp dụng an toàn cho tuổi thai",
                "opts": [
                  "Tuổi thai nhỏ từ  tuần",
                  "Tuổi thai từ tuần 6 đến hết tuần 12",
                  "Tuổi thai trung bình từ  tuần",
                  "Tuổi thai to sau tuần thứ 20"
                ],
                "ans": 1,
                "exp": "Hướng dẫn kỹ thuật KHHGĐ của Bộ Y tế quy định phương pháp hút thai chân không được chỉ định an toàn cho tuổi thai từ tuần thứ 6 đến hết 12 tuần."
              },
              {
                "q": "Câu 21\nPhương pháp nong và gắp thai (D&E) KHÔNG ĐƯỢC áp dụng cho tuổi thai nào sau đây",
                "opts": [
                  "Tuổi thai ở mốc 10 tuần tuổi",
                  "Tuổi thai ở mốc 14 tuần tuổi",
                  "Tuổi thai ở mốc 16 tuần tuổi",
                  "Tuổi thai ở mốc 17 tuần tuổi"
                ],
                "ans": 0,
                "exp": "Nong gắp thai chỉ định cho thai to từ tuần thứ 13 đến hết tuần 18. Thai 10 tuần áp dụng phương pháp hút thai chân không hoặc phá thai bằng thuốc, không được dùng nong gắp."
              },
              {
                "q": "Câu 22\nPhác đồ phá thai nội khoa bằng thuốc (áp dụng cho thai đến hết 9 tuần / hết 63 ngày) bao gồm sự kết hợp của hai loại thuốc",
                "opts": [
                  "Phối hợp thuốc Methotrexate tiêm bắp kết hợp Misoprostol ngậm dưới lưỡi",
                  "Mifepristone 200mg uống trước, sau 24 - 48h dùng tiếp Misoprostol",
                  "Tiêm bắp Oxytocin liều cao kết hợp viên uống dẫn xuất Ergometrine",
                  "Đặt hậu môn thuốc Dinoprostone kết hợp truyền dịch tăng co bóp tử cung"
                ],
                "ans": 1,
                "exp": "Mifepristone đối kháng progesterone làm bong tróc túi thai và mềm cổ tử cung; sau 24 - 48 giờ dùng tiếp Misoprostol (Prostaglandin E1) kích thích co bóp tử cung tống xuất phôi thai ra ngoài."
              },
              {
                "q": "Câu 23\nBiện pháp tránh thai nào sau đây có hiệu quả cao nhất và tác dụng kéo dài (LARC) thích hợp cho phụ nữ đã có đủ con",
                "opts": [
                  "Sử dụng bao cao su nam giới cho mỗi lần quan hệ tình dục",
                  "Đặt dụng cụ tử cung (vòng tránh thai) hoặc cấy que tránh thai",
                  "Phương pháp tính ngày rụng trứng theo chu kỳ kinh nguyệt",
                  "Áp dụng phương pháp xuất tinh ngoài âm đạo khi giao hợp"
                ],
                "ans": 1,
                "exp": "Dụng cụ tử cung (IUD) và que cấy progestin (Implanon) thuộc nhóm tránh thai hiệu quả cao nhất (tỷ lệ thất bại ), tác dụng kéo dài 3 - 5 năm và không phụ thuộc vào sự tuân thủ hàng ngày."
              }
            ]
          },
          "chua-ngoai-tu-cung": {
            "title": "Bài 5: Chửa ngoài tử cung (5 câu)",
            "questions": [
              {
                "q": "Câu 24\nVị trí làm tổ bất thường thường gặp nhất của thai ngoài tử cung (chiếm hơn 95% các trường hợp) là",
                "opts": [
                  "Vòi tử cung (đặc biệt là đoạn bóng vòi)",
                  "Nhu mô bề mặt của một trong hai buồng trứng",
                  "Khoang phúc mạc tự do trong ổ bụng",
                  "Vùng biểu mô niêm mạc ống cổ tử cung"
                ],
                "ans": 0,
                "exp": "Vòi tử cung chiếm  các trường hợp chửa ngoài tử cung, trong đó đoạn bóng vòi trứng chiếm tỷ lệ cao nhất (), tiếp theo là đoạn eo, đoạn loa và đoạn kẽ vòi tử cung."
              },
              {
                "q": "Câu 25\nTam chứng lâm sàng kinh điển gợi ý chửa ngoài tử cung chưa vỡ bao gồm",
                "opts": [
                  "Sốt cao rét run, đau trằn hạ vị và khí hư ra nhiều mủ đặc hôi",
                  "Chậm kinh, đau bụng hạ vị một bên và ra máu âm đạo bất thường",
                  "Nôn mửa nhiều, bụng trướng căng bí trung đại tiện sau chậm kinh",
                  "Chảy máu âm đạo ồ ạt kèm theo tụt huyết áp trụy mạch ngay từ đầu"
                ],
                "ans": 1,
                "exp": "Tam chứng kinh điển: Chậm kinh kèm , đau tức âm ỉ vùng hố chậu/hạ vị lệch một bên, và ra máu âm đạo ít một, sẫm màu socola dai dẳng không đông."
              },
              {
                "q": "Câu 26\nPhương pháp cận lâm sàng phối hợp có giá trị quyết định hàng đầu trong chẩn đoán sớm thai ngoài tử cung là",
                "opts": [
                  "Định lượng  huyết thanh ngắt quãng kèm Siêu âm đầu dò âm đạo",
                  "Chụp X-quang bụng không chuẩn bị tư thế đứng tìm khối cản quang",
                  "Chọc hút dịch cùng đồ Douglas qua đường âm đạo tìm máu tươi",
                  "Soi cổ tử cung kết hợp làm phiến đồ tế bào học âm đạo định kỳ"
                ],
                "ans": 0,
                "exp": "Phối hợp định lượng  với siêu âm đầu dò âm đạo (TVS) cho phép xác định buồng tử cung trống khi nồng độ nội tiết đã vượt \"ngưỡng phân định\" (), đồng thời tìm thấy khối thai nằm ngoài buồng tử cung."
              },
              {
                "q": "Câu 27\nĐiều kiện cần thỏa mãn để chỉ định điều trị nội khoa bảo tồn thai ngoài tử cung bằng Methotrexate (MTX) theo Bộ Y tế là",
                "opts": [
                  "Khối thai đã vỡ gây tràn máu ngập ổ bụng nhưng bệnh nhân còn tỉnh",
                  "Huyết động ổn định, khối thai , chưa có tim thai,",
                  "Nồng độ  huyết thanh đo được rất cao vượt ngưỡng",
                  "Bệnh nhân có tình trạng suy giảm chức năng tế bào gan và suy thận cấp"
                ],
                "ans": 1,
                "exp": "Methotrexate chỉ định khi: huyết động ổn định, khối thai nhỏ , chưa có tim thai trên siêu âm, nồng độ , không có dịch tự do ổ bụng và chức năng gan thận bình thường."
              },
              {
                "q": "Câu 28\nThao tác nào sau đây là SAI về kỹ thuật phẫu thuật nội soi ổ bụng xử trí thai ngoài tử cung",
                "opts": [
                  "Gắp khối thai kích thước nhỏ đưa ra ngoài qua nòng trocar",
                  "Đặt trocar chính mang camera soi đi qua thành bụng vùng hố chậu trái",
                  "Phải xả sạch toàn bộ khí  ra khỏi ổ bụng trước khi rút trocar",
                  "Hút rửa sạch máu cục và kiểm tra cầm máu kỹ diện cắt vòi tử cung"
                ],
                "ans": 1,
                "exp": "Trocar chính mang camera soi luôn luôn được đặt xuyên qua rốn (hoặc đường trắng giữa trên/dưới rốn) để có góc nhìn bao quát toàn tiểu khung; các trocar phụ thao tác mới đặt ở hai bên hố chậu."
              }
            ]
          },
          "u-xo-tu-cung": {
            "title": "Bài 6: U xơ tử cung (4 câu)",
            "questions": [
              {
                "q": "Câu 29\nTheo FIGO 2011, một khối u xơ kích thước 5 cm, lồi vào cơ tử cung 30% và lồi ra ngoài dưới thanh mạc 70% thuộc nhóm",
                "opts": [
                  "Thuộc phân nhóm FIGO L 5 (u dưới thanh mạc vào cơ )",
                  "Thuộc phân nhóm FIGO L 0 (u xơ có cuống trong buồng tử cung)",
                  "Thuộc phân nhóm FIGO L 4 (u xơ nằm hoàn toàn trong lớp cơ)",
                  "Thuộc phân nhóm FIGO L 7 (u xơ có cuống dài nằm dưới thanh mạc)"
                ],
                "ans": 0,
                "exp": "Phân loại FIGO: L 0, 1, 2 dưới niêm mạc; L 3, 4 trong cơ; L 5, 6, 7 dưới thanh mạc (L 5: u dưới thanh mạc lồi vào trong cơ ; các khối xuyên thành tiếp xúc niêm mạc và thanh mạc ký hiệu như L 2-5)."
              },
              {
                "q": "Câu 30\nPhương pháp chẩn đoán hình ảnh có độ chính xác cao nhất để khảo sát cấu trúc và mạch máu u xơ trước khi nút mạch (UFE) là",
                "opts": [
                  "Siêu âm ổ bụng và hệ tiết niệu tổng quát",
                  "Chụp X-quang tử cung vòi trứng có cản quang (HSG)",
                  "Chụp cộng hưởng từ (MRI) tiểu khung có tiêm đối quang",
                  "Chụp cắt lớp vi tính tiểu khung không tiêm thuốc"
                ],
                "ans": 2,
                "exp": "MRI tiểu khung có tiêm đối quang từ cung cấp độ phân giải mô mềm vượt trội, xác định ranh giới u xơ với cơ lành, đánh giá tưới máu từ động mạch tử cung và loại trừ sarcoma cơ tử cung trước can thiệp nút mạch."
              },
              {
                "q": "Câu 31\nTriệu chứng cơ năng kinh điển và thường gặp nhất của u xơ tử cung dưới niêm mạc hoặc u trong cơ kích thước lớn là",
                "opts": [
                  "Cơn đau quặn bụng dữ dội xuất hiện theo chu kỳ kinh",
                  "Rong kinh, cường kinh ra nhiều máu cục gây thiếu máu mạn",
                  "Khí hư âm đạo tiết ra nhiều dịch mủ hôi lẫn bọt khí",
                  "Tình trạng mất kinh hoàn toàn kèm bốc hỏa từng cơn"
                ],
                "ans": 1,
                "exp": "Khối u xơ làm tăng diện tích bề mặt nội mạc tử cung, cản trở sự co hồi cầm máu của các mạch máu cơ tử cung và làm tăng sinh mạch máu, gây cường kinh và rong kinh kéo dài."
              },
              {
                "q": "Câu 32\nPhụ nữ 18 tuổi, PARA 0000, mong con, siêu âm có nhân xơ trong cơ 3 cm (FIGO L4), không rong kinh. Xử trí phù hợp nhất là",
                "opts": [
                  "Phẫu thuật cắt toàn bộ tử cung để điều trị triệt căn khối u",
                  "Phẫu thuật mở bụng bóc nhân xơ tử cung ngay lập tức",
                  "Theo dõi định kỳ, bảo tồn tử cung và hỗ trợ sinh sản nếu cần",
                  "Chỉ định điều trị bằng các phác đồ hóa chất ức chế u xơ"
                ],
                "ans": 2,
                "exp": "Nhân xơ nhỏ () không làm biến dạng buồng tử cung và không có triệu chứng ở phụ nữ trẻ mong con thì không mổ; phẫu thuật bóc u có nguy cơ để lại sẹo mổ tử cung và gây dính cản trở thụ thai."
              }
            ]
          },
          "u-nang-buong-trung": {
            "title": "Bài 7: U nang buồng trứng (3 câu)",
            "questions": [
              {
                "q": "Câu 33\nLoại nang buồng trứng nào sau đây thuộc nhóm \"Nang cơ năng\" có thể tự tiêu biến sau vài chu kỳ kinh nguyệt",
                "opts": [
                  "U nang bì buồng trứng (U quái trưởng thành)",
                  "U nang nhầy buồng trứng có vách ngăn",
                  "U nang nước buồng trứng thanh dịch",
                  "Nang noãn (Nang De Graaf) hoặc Nang hoàng thể"
                ],
                "ans": 3,
                "exp": "Nang cơ năng (nang bọc noãn không vỡ, nang hoàng thể) hình thành do rối loạn nội tiết thoáng qua, thành mỏng và tự teo biến sau 2 - 3 chu kỳ kinh; u nang bì, nang nước, nang nhầy là các u thực thể bắt buộc phải phẫu thuật."
              },
              {
                "q": "Câu 34\nBiến chứng cấp cứu ngoại khoa thường gặp nhất của u nang buồng trứng có cuống dài (đặc biệt là u nang bì) là",
                "opts": [
                  "Xoắn cuống u nang buồng trứng cấp tính",
                  "Ung thư hóa ác tính tế bào mầm cấp tính",
                  "Rò dịch nang vào trong lòng trực tràng",
                  "Teo nhu mô buồng trứng bên đối diện"
                ],
                "ans": 0,
                "exp": "Khối u nang có trọng lượng không đồng đều (như u nang bì chứa tóc, mỡ, răng) và cuống dài rất dễ bị vặn xoắn; tắc tĩnh mạch gây ứ máu tím đen rồi tắc động mạch dẫn tới hoại tử buồng trứng nếu không mổ tháo xoắn cấp cứu."
              },
              {
                "q": "Câu 35\nBệnh nhân nữ 40 tuổi vào viện vì đau đột ngột hạ vị dữ dội, siêu âm có u nang bì 9 cm ấn đau chói và có phản ứng thành bụng. Xử trí đúng là",
                "opts": [
                  "Dùng kháng sinh phổ rộng liều cao và hẹn siêu âm kiểm tra sau 1 tháng",
                  "Hồi sức giảm đau và phẫu thuật cấp cứu (nội soi hoặc mổ mở) xử trí xoắn",
                  "Kê đơn thuốc tránh thai kết hợp uống hàng ngày để làm teo khối u bì",
                  "Chọc hút dịch khối u nang qua cùng đồ âm đạo dưới hướng dẫn siêu âm"
                ],
                "ans": 1,
                "exp": "Đau đột ngột dữ dội kèm khối u buồng trứng ấn đau chói là biểu hiện điển hình của xoắn u nang; bắt buộc phải mổ cấp cứu càng sớm càng tốt để tháo xoắn và bảo tồn buồng trứng."
              }
            ]
          },
          "viem-phan-phu-viem-am-dao": {
            "title": "Bài 8: Viêm phần phụ & đường sinh dục dưới (5 câu)",
            "questions": [
              {
                "q": "Câu 36\nHai tác nhân vi sinh vật lây truyền qua đường tình dục kinh điển thường gặp nhất gây Viêm phần phụ cấp tính (PID) là",
                "opts": [
                  "Vi khuẩn Escherichia coli và Proteus mirabilis",
                  "Neisseria gonorrhoeae (Lậu cầu) và Chlamydia trachomatis",
                  "Nấm men Candida albicans và Trùng roi Trichomonas",
                  "Virus Herpes simplex (HSV) gây viêm loét niêm mạc"
                ],
                "ans": 1,
                "exp": "Lậu cầu và Chlamydia là hai tác nhân hàng đầu lây qua đường tình dục, xâm nhập ngược dòng từ cổ tử cung lên niêm mạc tử cung và vòi trứng gây dính tắc vòi trứng, áp xe phần phụ và vô sinh."
              },
              {
                "q": "Câu 37\nLựa chọn điều trị ưu tiên hàng đầu cho bệnh nhân Viêm áp xe phần phụ (TOA) chưa vỡ trên lâm sàng là",
                "opts": [
                  "Phẫu thuật cắt bỏ toàn bộ tử cung và hai buồng trứng cấp cứu",
                  "Chọc tháo dẫn lưu ổ áp xe qua thành bụng dưới hướng dẫn siêu âm",
                  "Kháng sinh phổ rộng đường tĩnh mạch liều cao (phối hợp nhiều nhóm)",
                  "Đặt vòng tử cung giải phóng kháng sinh tại chỗ để tiêu ổ mủ"
                ],
                "ans": 2,
                "exp": "Áp xe phần phụ chưa vỡ đáp ứng tốt với kháng sinh tĩnh mạch phổ rộng liều cao (tỷ lệ thành công 70 - 85%); phẫu thuật chỉ can thiệp khi khối áp xe dọa vỡ/vỡ gây viêm phúc mạc hoặc nội khoa thất bại sau 48 - 72 giờ."
              },
              {
                "q": "Câu 38\nKháng sinh nào sau đây TUYỆT ĐỐI KHÔNG ĐƯỢC DÙNG trong phác đồ điều trị viêm phần phụ ở phụ nữ đang mang thai",
                "opts": [
                  "Ceftriaxone thế hệ 3 đường tĩnh mạch",
                  "Azithromycin nhóm Macrolide đường uống",
                  "Amoxicillin phối hợp Clavulanic acid",
                  "Doxycycline (thuộc nhóm Tetracycline)"
                ],
                "ans": 3,
                "exp": "Doxycycline và nhóm Tetracycline đi qua nhau thai gắn vào calci mô xương và mầm răng thai nhi, gây chậm phát triển xương và làm biến đổi màu men răng vĩnh viễn (răng ố vàng nâu); chống chỉ định tuyệt đối trong thai kỳ."
              },
              {
                "q": "Câu 39\nĐể xét nghiệm chẩn đoán nhiễm virus sinh u nhú ở người (HPV), bệnh phẩm tế bào KHÔNG ĐƯỢC lấy từ vị trí nào sau đây",
                "opts": [
                  "Vùng chuyển tiếp và lỗ ngoài cổ tử cung",
                  "Thành niêm mạc âm đạo và túi cùng sau",
                  "Tổn thương sùi mào gà ở sinh dục ngoài",
                  "Niêm mạc trong lòng trực tràng ống hậu môn sâu"
                ],
                "ans": 3,
                "exp": "Mẫu sàng lọc HPV và tế bào học cổ tử cung (Pap smear) trong phụ khoa được thu thập tại vùng chuyển tiếp cổ tử cung, túi cùng âm đạo và tổn thương sùi sinh dục; không lấy mẫu sâu trong trực tràng để chẩn đoán sàng lọc phụ khoa."
              },
              {
                "q": "Câu 40\nĐặc điểm khí hư và triệu chứng lâm sàng điển hình của Viêm âm đạo do Trùng roi (Trichomonas vaginalis) là",
                "opts": [
                  "Khí hư đặc vón cục như bã đậu bám thành âm đạo, ngứa dữ dội",
                  "Khí hư loãng có bọt vàng xanh, hôi, cổ tử cung hình quả dâu tây",
                  "Khí hư trắng đục đồng nhất dính đều, bốc mùi cá ươn khi làm test",
                  "Khí hư lẫn máu tươi nhưng hoàn toàn không có mùi hôi tanh"
                ],
                "ans": 1,
                "exp": "Trùng roi âm đạo gây viêm cấp tính: khí hư loãng nhiều bọt vàng xanh, mùi hôi nồng, điểm xuất huyết vi mạch trên cổ tử cung tạo hình ảnh \"cổ tử cung quả dâu tây\" (Strawberry cervix); điều trị bằng Metronidazole cho cả bệnh nhân và bạn tình. Viêm do nấm có khí hư bã đậu; viêm âm đạo do vi khuẩn có khí hư mùi cá ươn.\nKhi bạn đã rà soát xong phần này, hãy gõ \"tiếp tục\" để tôi gửi phần cuối cùng (Phần 17: Truyền nhiễm, Dị ứng, Da liễu, Tai Mũi Họng, Răng Hàm Mặt, Mắt và Đa khoa tổng hợp)."
              }
            ]
          }
        }
      },
      "truyen-nhiem": {
        "name": "Khoa Truyền nhiễm",
        "lessons": {
          "benh-truyen-nhiem-tong-hop": {
            "title": "Bài 1: Bệnh truyền nhiễm tổng hợp (qSOFA, sốc nhiễm khuẩn, Sốt xuất huyết, Lỵ) (7 câu)",
            "questions": [
              {
                "q": "Câu 1\nBiến chứng của bệnh truyền nhiễm thường xảy ra nhiều nhất ở thời kỳ nào sau đây",
                "opts": [
                  "Thời kỳ ủ bệnh và thời kỳ khởi phát bệnh",
                  "Thời kỳ khởi phát và thời kỳ lui bệnh",
                  "Thời kỳ toàn phát của bệnh đơn thuần",
                  "Thời kỳ toàn phát và thời kỳ lui bệnh"
                ],
                "ans": 3,
                "exp": "Thời kỳ toàn phát mầm bệnh đạt số lượng và độc lực cao nhất, các rối loạn chức năng cơ quan rõ rệt nhất; ở thời kỳ lui bệnh, sức đề kháng suy giảm hoặc do tổn thương mô nặng nề trước đó dễ dẫn tới các biến chứng hoặc bội nhiễm thứ phát."
              },
              {
                "q": "Câu 2\nThang điểm qSOFA (quick SOFA) dùng để sàng lọc nhanh bệnh nhân nghi ngờ nhiễm khuẩn huyết ngoài ICU gồm 3 dấu hiệu nào sau đây",
                "opts": [
                  "Nhịp thở , Rối loạn tri giác (GCS ) và Huyết áp tâm thu",
                  "Sốt cao , Nhịp tim nhanh  và Bạch cầu máu",
                  "Nồng độ Lactate máu , Thiểu niệu kéo dài và Thời gian đổ đầy CRT",
                  "Giảm tiểu cầu máu, Tăng nồng độ Bilirubin toàn phần và Giảm thể tích nước tiểu bài xuất"
                ],
                "ans": 0,
                "exp": "Theo định nghĩa Sepsis-3, thang điểm qSOFA gồm 3 biến số lâm sàng tại giường (mỗi tiêu chuẩn 1 điểm): (1) Nhịp thở  lần/phút; (2) Rối loạn ý thức (GCS < 15); (3) Huyết áp tâm thu  mmHg. Bệnh nhân có từ  điểm có nguy cơ cao tiến triển nặng và tử vong."
              },
              {
                "q": "Câu 3\nPhác đồ hồi sức dịch ban đầu theo gói 1 giờ (Hour-1 Bundle) ở bệnh nhân nhiễm khuẩn huyết có tụt huyết áp hoặc Lactate máu  là",
                "opts": [
                  "Truyền tĩnh mạch nhanh dung dịch Glucose 5% kết hợp thuốc lợi tiểu quai để bảo tồn chức năng thận",
                  "Bù dịch tinh thể đẳng trương với thể tích  trong vòng 3 giờ đầu kể từ khi tiếp nhận",
                  "Truyền dung dịch keo cao phân tử (Hydroxyethyl Starch) liều cao để nâng nhanh áp lực keo nội mạch",
                  "Truyền dung dịch Albumin người 20% liều cao kết hợp dung dịch muối ưu trương ngay từ phút đầu tiên"
                ],
                "ans": 1,
                "exp": "Hướng dẫn của SSC và Bộ Y tế chỉ định hồi sức dịch ban đầu bằng dung dịch tinh thể đẳng trương (NaCl 0,9% hoặc Ringer Lactate) với liều chuẩn  trong 3 giờ đầu tiên khi có tụt huyết áp (MAP < 65 mmHg) hoặc nồng độ Lactate ."
              },
              {
                "q": "Câu 4\nThuốc vận mạch được khuyến cáo lựa chọn hàng đầu để nâng và duy trì huyết áp động mạch trung bình (MAP ) trong sốc nhiễm khuẩn là",
                "opts": [
                  "Dopamine truyền tĩnh mạch liều trung bình",
                  "Noradrenaline (Norepinephrine) truyền tĩnh mạch",
                  "Phenylephrine truyền tĩnh mạch ngắt quãng",
                  "Ephedrine tiêm tĩnh mạch trực tiếp từng liều"
                ],
                "ans": 1,
                "exp": "Noradrenaline là thuốc vận mạch lựa chọn ưu tiên hàng đầu trong sốc nhiễm khuẩn nhờ tác dụng kích thích thụ thể alpha-1 mạnh gây co mạch nâng huyết áp hiệu quả, ít làm tăng nhịp tim và ít nguy cơ gây loạn nhịp tim hơn so với Dopamine."
              },
              {
                "q": "Câu 5\nTriệu chứng cận lâm sàng có giá trị quyết định chẩn đoán xác định bệnh Lỵ trực khuẩn (Shigellosis) là",
                "opts": [
                  "Công thức máu ngoại vi có số lượng bạch cầu tăng cao",
                  "Soi tươi phân dưới kính hiển vi thấy nhiều hồng cầu",
                  "Cấy phân phân lập được trực khuẩn vi khuẩn Shigella",
                  "Phản ứng huyết thanh học tìm kháng thể kháng nguyên"
                ],
                "ans": 2,
                "exp": "Nuôi cấy phân trước khi dùng kháng sinh là tiêu chuẩn vàng chẩn đoán xác định căn nguyên vi khuẩn gây bệnh và cung cấp kháng sinh đồ để lựa chọn thuốc điều trị."
              },
              {
                "q": "Câu 6\nThời điểm nguy hiểm nhất xuất hiện biến chứng sốc cô đặc máu và xuất huyết nặng của bệnh Sốt xuất huyết Dengue là",
                "opts": [
                  "Khoảng thời gian từ ngày thứ 1 đến ngày thứ 3 của bệnh",
                  "Khoảng ngày 4 - 7 của bệnh (khi người bệnh bắt đầu hạ sốt)",
                  "Sau ngày thứ 7 của bệnh khi cơ thể bắt đầu tái hấp thu",
                  "Xuất hiện ngay từ những giờ đầu tiên kể từ khi bắt đầu sốt"
                ],
                "ans": 1,
                "exp": "Từ ngày 4 đến ngày 7 là giai đoạn tăng tính thấm thành mạch làm thoát huyết tương khỏi lòng mạch, dẫn đến cô đặc máu (HCT tăng), tụt huyết áp, sốc và giảm tiểu cầu nặng gây xuất huyết niêm mạc/nội tạng, trùng với thời điểm bệnh nhân giảm hoặc hết sốt."
              },
              {
                "q": "Câu 7\nThuốc hạ sốt giảm đau TUYỆT ĐỐI KHÔNG ĐƯỢC DÙNG cho người nghi ngờ mắc Sốt xuất huyết Dengue là",
                "opts": [
                  "Thuốc hạ sốt Paracetamol đơn chất dùng theo đúng liều cân nặng",
                  "Aspirin và các thuốc chống viêm không steroid (Ibuprofen/Diclofenac)",
                  "Dung dịch Oresol uống từng ngụm nhỏ để bù nước điện giải",
                  "Vitamin C liều cao đường uống hỗ trợ bền vững thành mao mạch"
                ],
                "ans": 1,
                "exp": "Aspirin và NSAIDs ức chế chức năng ngưng tập tiểu cầu và gây kích ứng tổn thương niêm mạc dạ dày, làm trầm trọng thêm nguy cơ xuất huyết tiêu hóa ồ ạt đe dọa tử vong trên nền bệnh nhân đã bị giảm tiểu cầu nặng do Dengue."
              }
            ]
          }
        }
      },
      "chuyen-khoa-mat": {
        "name": "Khoa Mắt",
        "lessons": {
          "viem-ket-mac": {
            "title": "Bài 1: Viêm kết mạc (3 câu)",
            "questions": [
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Phản ứng nhiễm trùng cấp tính do các chủng Adenovirus\nĐỀ.docx",
                  "Nhiễm trùng cấp tính nặng nề do lậu cầu khuẩn xâm lấn\nĐỀ.docx",
                  "Phản ứng dị ứng - miễn dịch phối hợp qua IgE và qua tế bào\nĐỀ.docx",
                  "Nhiễm nấm mốc kết hợp với các loại ký sinh trùng tại chỗ\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Viêm kết mạc mùa xuân là bệnh lý viêm dị ứng mạn tính tái phát theo mùa, phối hợp cả cơ chế quá mẫn tức thì týp I (qua IgE) và quá mẫn muộn týp IV (qua tế bào), đặc trưng bởi ngứa mắt dữ dội và nhú gai khổng lồ ở kết mạc sụn mi trên.\nĐỀ.docx"
              },
              {
                "q": "ĐỀ.docx",
                "opts": [
                  "Viêm kết mạc dị ứng xuất hiện ngứa mắt nhiều và phù mi\nĐỀ.docx",
                  "Cương tụ kết mạc nhẹ sau khi bơi lội hoặc tiếp xúc gió bụi\nĐỀ.docx",
                  "Trợt loét giác mạc bắt màu thuốc nhuộm màu Fluorescein\nĐỀ.docx",
                  "Phù nề tổ chức dưới da quanh mi mắt do côn trùng đốt nhẹ\nĐỀ.docx"
                ],
                "ans": 2,
                "exp": "Nhỏ Corticoid khi biểu mô giác mạc đang bị tổn thương/trợt loét (bắt màu Fluorescein) sẽ ức chế liền sẹo, tạo điều kiện cho vi khuẩn/nấm/Herpes bùng phát và kích hoạt men collagenase gây thủng giác mạc.\nĐỀ.docx"
              },
              {
                "q": "Câu 3 (Biên soạn mới theo mục tiêu)\nDấu hiệu lâm sàng giúp định hướng nguyên nhân gây viêm kết mạc cấp do Adenovirus khác với do vi khuẩn sinh mủ là",
                "opts": [
                  "Mắt tiết nhiều chất tiết dịch nhầy mủ đặc màu vàng xanh dính chặt mi mắt khi ngủ dậy",
                  "Tiết dịch rỉ viêm nhiều nước trong, phù kết mạc và thường có nổi hạch trước tai sưng đau",
                  "Cảm giác cộm rát chói mắt dữ dội kèm theo giảm thị lực nghiêm trọng ngay từ đầu",
                  "Xuất hiện các bọng nước hoại tử ở bề mặt giác mạc bắt màu thuốc nhuộm huỳnh quang"
                ],
                "ans": 1,
                "exp": "Viêm kết mạc do Adenovirus đặc trưng bởi dịch tiết dạng thanh dịch (nước trong), cương tụ kết mạc lan tỏa, dễ tạo giả mạc và thường đi kèm sốt nhẹ, hạch trước tai sưng đau (hội chứng sốt - viêm kết mạc - hạch). Trong khi đó viêm kết mạc vi khuẩn thường có nhiều tiết tố mủ hoặc nhầy mủ màu vàng đục."
              }
            ]
          },
          "glocom-goc-dong-cap": {
            "title": "Bài 2: Glôcôm góc đóng cơn cấp (3 câu)",
            "questions": [
              {
                "q": "Câu 4 (Từ ngân hàng đề - Câu 35 & mở rộng)\nĐỀ.docx\nBiểu hiện lâm sàng kinh điển và đặc trưng nhất của một cơn Glôcôm góc đóng cấp tính (cơn đau nhức mắt cấp) là",
                "opts": [
                  "Đau nhói thoáng qua ở hốc mắt, nhìn mờ tăng dần về chiều, nhãn áp trong giới hạn",
                  "Đau nhức mắt dữ dội lan nửa đầu, nhìn đèn có quầng sắc cầu vồng, sờ nhãn cầu căng cứng\nĐỀ.docx",
                  "Đau rát buốt mắt khi chớp mắt, chảy nước mắt giàn giụa, kết mạc cương tụ hình lông mày",
                  "Giảm thị lực đột ngột hoàn toàn nhưng mắt không đỏ và người bệnh không hề đau nhức"
                ],
                "ans": 1,
                "exp": "Tắc nghẽn góc tiền phòng đột ngột làm ứ trệ thủy dịch khiến nhãn áp tăng vọt. Người bệnh đau nhức mắt dữ dội lan lên nửa đầu cùng bên, nhìn mờ kèm quầng tán sắc xanh đỏ (do phù bọng biểu mô giác mạc), buồn nôn, sờ tay vào nhãn cầu thấy cứng như hòn bi ve.\nĐỀ.docx+ 1"
              },
              {
                "q": "Câu 5 (Biên soạn mới theo mục tiêu)\nNhóm thuốc dùng tại chỗ và toàn thân được ưu tiên chỉ định cấp cứu hạ nhãn áp trong cơn Glôcôm góc đóng cấp là",
                "opts": [
                  "Thuốc nhỏ mắt co đồng tử Pilocarpine kết hợp dung dịch ưu trương truyền tĩnh mạch",
                  "Thuốc nhỏ mắt giãn đồng tử Atropine kết hợp thuốc chống viêm Corticosteroid toàn thân",
                  "Thuốc kháng sinh phổ rộng nhỏ mắt kết hợp truyền dịch tinh thể bù thể tích tuần hoàn",
                  "Thuốc nhỏ mắt tê bề mặt Dicaine kết hợp tiêm bắp thuốc giảm đau chống viêm NSAIDs"
                ],
                "ans": 0,
                "exp": "Cấp cứu hạ nhãn áp trong cơn cấp gồm: (1) Nhỏ Pilocarpine 1 - 2% để co đồng tử kéo mống mắt ra xa giải phóng góc tiền phòng; (2) Thuốc ức chế bài tiết thủy dịch như Acetazolamide uống/tiêm; (3) Dung dịch ưu trương (Mannitol 20% truyền tĩnh mạch) để rút nước khỏi dịch kính. Tuyệt đối chống chỉ định thuốc giãn đồng tử (như Atropine)."
              },
              {
                "q": "Câu 6 (Biên soạn mới theo mục tiêu)\nPhương pháp can thiệp thủ thuật được lựa chọn hàng đầu để dự phòng và điều trị triệt để cơ chế nghẽn đồng tử trong Glôcôm góc đóng là",
                "opts": [
                  "Phẫu thuật cắt bỏ toàn bộ bè củng mạc kết hợp đặt van dẫn lưu thủy dịch",
                  "Bắn Laser mở mống mắt chu biên (LPI - Laser Peripheral Iridotomy)",
                  "Phẫu thuật mổ lấy thể thủy tinh ngoài bao kết hợp đặt kính nội nhãn",
                  "Bắn Laser quang đông toàn bộ vùng võng mạc chu biên bằng Laser Argon"
                ],
                "ans": 1,
                "exp": "Laser cắt mống mắt chu biên (LPI) tạo một lỗ thông nhỏ ở chu biên mống mắt, cân bằng áp lực giữa tiền phòng và hậu phòng, giải phóng hoàn toàn hiện tượng nghẽn đồng tử và mở rộng lại góc tiền phòng."
              }
            ]
          },
          "benh-chap-va-leo": {
            "title": "Bài 3: Bệnh chắp và lẹo (2 câu)",
            "questions": [
              {
                "q": "Câu 7 (Biên soạn mới theo mục tiêu)\nĐặc điểm giải phẫu bệnh học và tính chất tổn thương giúp phân biệt chính xác giữa Chắp và Lẹo là",
                "opts": [
                  "Lẹo là u bã nhờn lành tính không đau; chắp là ổ áp xe nhiễm trùng cấp tính có mủ",
                  "Lẹo là ổ viêm cấp tính của tuyến mi có mủ; chắp là u hạt viêm mạn vô khuẩn tuyến sụn mi",
                  "Lẹo nằm sâu trong bản sụn mi không đau; chắp nằm ở chân lông mi sưng nóng đỏ đau",
                  "Lẹo do tắc cơ học ống tuyến mi đơn thuần; chắp do trực khuẩn mủ xanh xâm nhập mô mi"
                ],
                "ans": 1,
                "exp": "Lẹo (Hordeolum) là tổn thương viêm nhiễm khuẩn cấp tính (thường do tụ cầu) của nang lông mi/tuyến Zeiss, Moll (lẹo ngoài) hoặc tuyến Meibomius (lẹo trong), biểu hiện sưng - nóng - đỏ - đau và có mủ. Chắp (Chalazion) là ổ viêm hạt mạn tính vô trùng do tắc nghẽn ống bài xuất của tuyến sụn mi Meibomius, sờ thấy cục chắc tròn dưới da mi và không đau."
              },
              {
                "q": "Câu 8 (Biên soạn mới theo mục tiêu)\nNguyên tắc điều trị và đường rạch trích chắp ở mi mắt đúng kỹ thuật giải phẫu là",
                "opts": [
                  "Đường rạch da mi phải đi vuông góc với bờ mi để hạn chế nguy cơ hình thành sẹo xấu",
                  "Rạch kết mạc theo chiều dọc vuông góc với bờ mi ở mặt trong sụn mi để tránh đứt các tuyến",
                  "Luôn rạch ngang song song với bờ mi ở mặt trong kết mạc sụn mi bất kể vị trí của khối",
                  "Bóp nặn thật mạnh khối chắp ngay từ giai đoạn đầu khi mới phát hiện mà không cần rạch"
                ],
                "ans": 1,
                "exp": "Các tuyến Meibomius xếp song song theo chiều thẳng đứng vuông góc với bờ mi. Do đó, khi chích nạo chắp từ mặt trong kết mạc sụn mi, bắt buộc phải rạch theo chiều dọc (vuông góc với bờ mi) để tránh cắt đứt các ống tuyến lân cận. Nếu rạch ngoài da thì rạch ngang theo nếp gấp da mi để giấu sẹo."
              }
            ]
          },
          "benh-mong-thit": {
            "title": "Bài 4: Bệnh mộng thịt (2 câu)",
            "questions": [
              {
                "q": "Câu 9 (Biên soạn mới theo mục tiêu)\nYếu tố nguy cơ môi trường hàng đầu thúc đẩy sự hình thành và tiến triển của bệnh mộng thịt ở mắt là",
                "opts": [
                  "Tiếp xúc lâu dài với bức xạ tia cực tím (UV) trong ánh nắng mặt trời, gió cát và bụi bẩn",
                  "Thói quen sử dụng máy vi tính kéo dài trong phòng lạnh gây khô bề mặt của nhãn cầu",
                  "Thiếu hụt nghiêm trọng nồng độ Vitamin A và các vi chất dinh dưỡng thiết yếu trong khẩu phần",
                  "Tình trạng nhiễm khuẩn mạn tính bề mặt nhãn cầu do trực khuẩn mủ xanh kéo dài tái diễn"
                ],
                "ans": 0,
                "exp": "Bức xạ tia cực tím (UV-B), khí hậu khô nóng, bụi và gió là các yếu tố sinh bệnh hàng đầu gây tổn thương tế bào gốc vùng rìa giác mạc và tăng sinh mô xơ mạch kết mạc xâm lấn vào giác mạc tạo thành mộng thịt (thường gặp nhất ở góc trong)."
              },
              {
                "q": "Câu 10 (Biên soạn mới theo mục tiêu)\nChỉ định phẫu thuật cắt mộng thịt và phương pháp phẫu thuật giúp giảm thiểu tối đa tỷ lệ tái phát hiện nay là",
                "opts": [
                  "Mộng chưa bò qua rìa giác mạc; phẫu thuật cắt mộng đơn thuần và để hở hoàn toàn củng mạc",
                  "Mộng tiến triển bò qua rìa giác mạc che trục thị giác; cắt mộng kèm ghép kết mạc tự thân",
                  "Mộng thịt bất kỳ mức độ nào; chỉ cần tiến hành áp thuốc chống phân bào dạng nhỏ kéo dài",
                  "Mộng xơ thoái triển; chỉ định phẫu thuật laser quang đông bề mặt đầu mộng thịt xâm lấn"
                ],
                "ans": 1,
                "exp": "Chỉ định mổ khi mộng gây kích ứng tái diễn, gây loạn thị hoặc mộng tiến triển bò vào vùng quang học giác mạc đe dọa thị lực. Phương pháp phẫu thuật chuẩn hiện nay là cắt mộng kết hợp ghép kết mạc tự thân (lấy từ kết mạc góc trên cùng bên) giúp hạ tỷ lệ tái phát xuống dưới 5% (so với 30 - 80% khi chỉ cắt mộng để trần củng mạc).\nBạn hãy kiểm tra phần câu hỏi chuyên khoa Mắt trên. Khi sẵn sàng, hãy gõ \"tiếp tục\" để tôi gửi phần kế tiếp (Chuyên khoa Tai Mũi Họng: Viêm tai giữa cấp, Viêm amidan mủ, Viêm xoang cấp, Viêm họng cấp)."
              }
            ]
          }
        }
      }
    }
  }
};
