// Ngân hàng câu hỏi trắc nghiệm Logistics & Quản lý chuỗi cung ứng
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
                "exp": "Mỗi octet gồm 8 bit nhị phân, có thể biểu diễn các giá trị thập phân từ 0 ($2^0 - 1$) đến 255 ($2^8 - 1$)."
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
                "exp": "IPv6 có $2^{128}$ địa chỉ, IPv4 có $2^{32}$ địa chỉ. Tỷ lệ gấp: $2^{128} / 2^{32} = 2^{96}$ lần."
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
  }
};
