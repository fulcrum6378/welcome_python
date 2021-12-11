window.onload = function() {
	// Initialize the Grid view
	$('.grid').masonry({
        itemSelector: '.grid-item'
    });
	
	$("#loading").fadeOut(315);
	$("body").css("overflow-y", "scroll");
	$("main").animate({opacity: 1}, 636);
};

// Initialize the Popups everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Translation
function translate(hl) {
    switch (hl) {
        case "fa":
            document.title = "مهدی پرستش";
            $("p.mahdi").text("مهدی پرستش");
            $("blockquote.mahdi").html('بنده مدت 6 سال در برنامه نویسی فولستک (بک اند + فرانت اند) و 3 سال در برنامه نویسی اندروید (با زبان های جاوا و کاتلین، بعلاوه فریمورک «فلاتر») تجربه دارم. از سال 1399 نیز به یادگیری سیستم عامل های لینوکسی (خصوصا فدورا، اوبونتو و سنتوس) و یونیکسی (FreeBSD و OpenBSD)، بعلاوه Windows Server و کسب تجربه در آنها مشغول شدم و در سیستم عامل جدید الورود شرکت هواوی (HarmonyOS) نیز کمی مهارت دارم. از سال 1400، الگوریتم های «هوش مصنوعی» را یاد گرفته و هم اکنون مشغول مطالعه و تمرین در این زمینه هستم.');
            $("#cv").text("مشاهده رزومه من");
            $(".mergen:eq(0) .projName").text("مِرگِن");
            $(".mergen:eq(0) .projDesc").text("یک نرم افزار هوش مصنوعی منطقی، سیستم عاملی برای یک ربات.");
            $(".mergen:eq(1) .projName").text("آوابات");
            $(".mergen:eq(1) .projDesc").text("ابزار های تشخیص گفتار، تبدیل متن به گفتار و تشخیص متن از روی عکس برای زبان های فارسی و ترکی");
            $(".telexporter .projName").text("تلکسپورتر");
            $(".telexporter .projDesc").text("اس ام اس ها و تاریخچه تماس های خود را در قالب های وب، پی دی اف و جیسون استخراج کنید.");
            $(".migratio .projName").text("میگراتیو (اندروید)");
            $(".migratio .projDesc").text("یک ابزار جغرافی-آماری برای تعیین کردن بهترین مقصد مهاجرت افراد مختلف.");
            $(".fortuna .projName").text("فورتونا");
            $(".fortuna .projDesc").text("نرم افزاری برای فلسفه «هدونیسم»!");
            $(".sexbook .projName").text("سکسبوک");
            $(".sexbook .projDesc").text("زندگی جنسی خود را به آسانی کنترل کنید.");
            $(".friend_tracker .projName").text("ردیاب رفقا");
            $(".friend_tracker .projDesc").text("رفقای خود را از روی نقشه ردیابی نمایید.");
            $(".saam .projName").text("سام");
            $(".saam .projDesc").text("گرداور و ذخیره کننده اطلاعات بورس، ساخته شده بر مبنای متاتریدر 5");
			$("body").css("font-family", "IRANYekan");
			$(".anchor a").each(function() {// i
			    let text = $(this).text();
			    switch (text) {
			        case "Android Version":
			            text = "نسخه اندروید";
			            break;
			        case "Web Version":
			            text = "نسخه وب";
			            break;
			        case "Android Source":
			            text = "سورس اندروید";
			            break;
			        case "Flutter Source":
			            text = "سورس فلاتر";
			            break;
			        case "Software Source":
			            text = "سورس نرم افزار";
			            break;
			        case "Web Template":
			            text = "قالب وب";
			            break;
			        case "Server Source":
			            text = "سورس سرور";
			            break;
			        case "Android Browser Source":
			            text = "سورس مرورگر اندروید";
			            break;
			    }
			    $(this).text(text);
			});
            break;
		default:
		    document.location.assign(document.location + "?hl=en");
			break;
    }
	if (["fa", "ar"].includes(hl))
	    $("blockquote.mahdi, .projDesc").css("direction", "rtl");
	$('.grid').masonry();
	$("#langSelect").attr("src",$("#lang li img[data-lang="+hl+"]").attr("src"));
}
$("#lang li img").on('click', function(e) { translate($(this).attr("data-lang")); });
if ($("#country").val() == "IR") translate("fa");
