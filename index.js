import { getContext, FPS } from "./utils-module.js";

// กำหนดชื่อเรื่องของเอกสาร HTML
document.title = "A01 - App Graphics 2D";
// กำหนดให้ฟังก์ชัน main ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
document.addEventListener("DOMContentLoaded", main);

let sunAngle = 0; // ประกาศตัวแปร สำหรับเก็บมุมการหมุนของดวงอาทิตย์ 
 
// ฟังก์ชันหลักที่ใช้ในการเริ่มต้นแอปพลิเคชัน ทำงานเมื่อ DOM ถูกโหลดเสร็จสมบูรณ์
function main(ev) {
	// เข้าถึง context ของ canvas ที่มี id เป็น "myCanvas"
	const ctx = getContext("#myCanvas");

	// กำหนดค่าเริ่มต้นสำหรับแอปพลิเคชันในรูปแบบของอ็อบเจกต์ config
	const config = {
		width : 900,
		height : 600,
		bgColor : "skyblue", // สีพื้นหลังของ ท้องฟ้า
		debug : true,
	};

	// กำหนดขนาดของ canvas ตามค่า config
	ctx.canvas.width = config.width;
	ctx.canvas.height = config.height;

	function draw() {
		// ใช้ FPS สำหรับการวัดอัตราเฟรมต่อวินาที
		FPS.update();

		// กำหนดสีพื้นหลังของ canvas และใช้ fillRect เพื่อเติมสีพื้นหลัง
		ctx.fillStyle = config.bgColor;
		ctx.fillRect(0, 0, config.width, config.height);

		// วาดรูปจากส่วนนี้ไป **แนะนำให้วาดจากรูปที่อยู่ด้านหลังไปด้านหน้าตามลำดับ**
		// ใช้ภาพจาก MP1-app-graphics-2d.jpg เป็นแนวทางในการวาดรูป แต่จะวาดอย่างไรก็ได้ตามต้องการ
		
		// พื้นดิน
		ctx.beginPath(); // เริ่มต้นเส้นทางใหม่
		ctx.fillStyle = "green";
		ctx.fillRect(0, 500, config.width, 100); // พื้นดิน
		ctx.closePath(); // ปิดเส้นทาง
		//ภูเขา 1
		ctx.beginPath();
		ctx.arc(450, 500, 300, Math.PI, 0); // ภูเขากลาง
		ctx.arc(750, 500, 300, Math.PI, 0); // ภูเขาขวา
		ctx.fillStyle = "#006d35ff";
		ctx.fill(); // เติมสีภูเขา
		ctx.closePath();
		//ภูเขา 2
		ctx.beginPath();
		ctx.arc(750, 500, 300, Math.PI, 0); // ภูเขาขวา
		ctx.fillStyle = "#015e2fff";
		ctx.fill(); // เติมสีภูเขา
		ctx.closePath();
		//ภูเขา 3
		ctx.beginPath();
		ctx.arc(150, 500, 300, Math.PI, 0); // ภูเขาซ้าย
		ctx.fillStyle = "#004d26ff";
		ctx.fill(); // เติมสีภูเขา
		ctx.closePath();

		//  บ้าน 
		ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.fillRect(520, 330, 200, 200); // ตัวบ้าน
		ctx.strokeStyle = "white";
		ctx.lineWidth = 5;
		ctx.strokeRect(520, 330, 200, 200);
		ctx.closePath();
		// หน้าต่าง
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(650, 400, 40, 40); // หน้าต่าง (ตำแหน่งกลางบ้าน)
       ctx.strokeStyle = "while";
       ctx.lineWidth = 3;
      ctx.strokeRect(650, 400, 40, 40); // ขอบหน้าต่าง

       ctx.beginPath();

            // เส้นแนวตั้ง (แบ่งครึ่งแนวตั้ง)
        ctx.moveTo(670, 400); // จุดบนกลางหน้าต่าง
         ctx.lineTo(670, 440); // ลากลงล่าง

       // เส้นแนวนอน (แบ่งครึ่งแนวนอน)
        ctx.moveTo(650, 420); // จุดซ้ายกลางหน้าต่าง
       ctx.lineTo(690, 420); // ลากไปขวา

      ctx.strokeStyle = "gray";
      ctx.lineWidth = 2;
        ctx.stroke();
         ctx.closePath();

		// หลังคา
		ctx.beginPath();
		ctx.moveTo(470, 330);
		ctx.lineTo(770, 330);
		ctx.lineTo(620, 180);
		ctx.closePath();
		ctx.strokeStyle = "white";
		ctx.lineWidth = 5;
		ctx.stroke();
		ctx.fillStyle = "#41338bff";
		ctx.fill();

		// ประตู
		ctx.beginPath();
		ctx.fillStyle = "#41138bff";
		ctx.fillRect(560, 430, 55, 100);
		ctx.strokeStyle = "white";
		ctx.lineWidth = 3;
		ctx.strokeRect(560, 430, 55, 100);
		ctx.closePath();

		// ลูกบิดประตู
		ctx.beginPath();
		ctx.fillStyle = "#ff9575ff";
		ctx.arc(600, 480, 5, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();

		//ต้นไม้ 
		ctx.beginPath();
		ctx.fillStyle = "saddlebrown";
		ctx.fillRect(90, 360, 30, 140); // ลำต้น
		ctx.fillStyle = "green";
		ctx.arc(105, 310, 60, 0, Math.PI * 2); // พุ่มใบ	
		ctx.arc(150, 360, 50, 0, Math.PI * 2);
		ctx.arc(60, 360, 50, 0, Math.PI * 2);
		ctx.strokeStyle = "darkgreen";
		ctx.lineWidth = 5;
		ctx.stroke(); // ขอบพุ่มใบ
		ctx.fill();
		ctx.closePath();
		// ต้นไม้ต้นที่ 2 ทางขวา
       ctx.beginPath();
      ctx.fillStyle = "saddlebrown";
      ctx.fillRect(290, 360, 30, 140); // ลำต้นใหม่ที่เลื่อนไปทางขวา

       ctx.fillStyle = "green";
       // พุ่มใบ (เลื่อนตำแหน่งจากต้นแรก)
       ctx.arc(305, 310, 60, 0, Math.PI * 2); // พุ่มบน
       ctx.arc(350, 360, 50, 0, Math.PI * 2); // พุ่มขวา
       ctx.arc(260, 360, 50, 0, Math.PI * 2); // พุ่มซ้าย

        ctx.strokeStyle = "darkgreen";
        ctx.lineWidth = 5;
        ctx.stroke(); // ขอบพุ่มใบ
       ctx.fill();
       ctx.closePath();

		// ดวงอาทิตย์
		ctx.beginPath();
		ctx.fillStyle = "#fa8500ff";
		ctx.arc(400, 100, 50, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		//ขอบดวงอาทิตย์
		ctx.save(); // เก็บสถานะการวาดปัจจุบัน (พิกัด, การหมุน, สี ฯลฯ)
		ctx.translate(400, 100); // ย้ายจุดอ้างอิง (origin) ไปที่ จุดกึ่งกลางของดวงอาทิตย์
		ctx.rotate(sunAngle); // หมุนระบบพิกัดทั้งหมดด้วยมุม sunAngle (ค่าที่เปลี่ยนแปลงไปเรื่อย ๆ เพื่อให้เกิดการหมุน)
		for (let i = 0; i < 12; i++) {
			ctx.rotate(Math.PI / 5); // หมุนเพิ่ม 30 องศา
			ctx.beginPath();
			ctx.moveTo(60, 0);
			ctx.lineTo(80, 0);
			ctx.strokeStyle = "#ff3300ff";
			ctx.lineWidth = 5;
			ctx.stroke();
		}
		ctx.restore();
		sunAngle += 0.01; // เพิ่มมุมทีละนิด

		//แม่น้ำจากของภูเขา
		ctx.beginPath();
		ctx.moveTo(200, 500);   // จุดเริ่มแม่น้ำ

		ctx.bezierCurveTo(220, 520, 260, 540, 240, 560);
		ctx.bezierCurveTo(220, 580, 280, 600, 260, 620);

		ctx.lineTo(350, 620);
		ctx.bezierCurveTo(350, 600, 260, 580, 280, 560);
		ctx.bezierCurveTo(350, 540, 240, 520, 260, 500);

		ctx.closePath();
		ctx.fillStyle = "#77bbffff"; // สีฟ้าน้ำ
		ctx.fill();

		//นก
		ctx.save();
		ctx.translate(100, 50); // ย้ายจุดเริ่มต้นไปตำแหน่งใหม่
		ctx.scale(0.5, 0.5);    // ย่อครึ่ง
		ctx.beginPath();
		ctx.strokeStyle = "black";
		ctx.moveTo(100, 150);
		ctx.bezierCurveTo(130, 100, 150, 150, 150, 150);
		ctx.bezierCurveTo(150, 150, 170, 100, 200, 150);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();

		// แปลงผักใหม่
        ctx.beginPath();
        ctx.fillStyle = "#8B4513"; // สีดินน้ำตาลเข้มขึ้น
        ctx.fillRect(350, 500, 120, 120); // พื้นแปลงผักใหญ่ขึ้น
        ctx.strokeStyle = "black";

       // วาดผักเป็นวงกลมสีเขียวเข้ม
        ctx.fillStyle = "#228B22"; // สีเขียวเข้มของผัก
        for (let i = 0; i < 4; i++) {
	    for (let j = 0; j < 4; j++) {
		let x = 365 + i * 25;
		let y = 515 + j * 25;
		ctx.beginPath();
		ctx.arc(x, y, 6, 0, Math.PI * 2); // วาดวงกลมผัก
		ctx.fill();
		ctx.closePath();
	}
}
		// แสดงข้อความ FPS บน canvas ถ้า config.debug เป็น true
		if (config.debug) FPS.show(ctx, 10, 28);
		
		// ใช้ requestAnimationFrame เพื่อเรียกใช้ฟังก์ชัน draw ต่อไป
		requestAnimationFrame(draw);
	}
	// เริ่มต้นการวาดภาพบน canvas
	draw();
	
}