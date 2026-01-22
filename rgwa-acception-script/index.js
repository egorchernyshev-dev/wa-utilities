var ticket_id = $('tbody tr:contains("ID")').find("td").text().trim()
var project_name = $('tbody tr:contains("Проект"):first').find("td:first").text().trim()
var google_sheet_link = $('.messageCell:contains("docs.google.com/spreadsheets")').text().match(/(https?:\/\/[^\s]+)/)?.[0] || null

var textTicket =  ticket_id + ' ' + project_name
 + ' ВА1У + ЦЗ + Почта (к ДД.ММ)' + ' ' + google_sheet_link;
var textCheckList =  ticket_id  +' ЧЛ на СПЕЦА '+ project_name + ' ВА1У ' + google_sheet_link;
console.error(textTicket)
console.error(textCheckList)
console.error('Спец, прошу принять проект и отписать принят. Срок настройки до ДД.ММ включительно.\nБриф: '+$('.messageCell:contains("docs.google.com/spreadsheets")').text().match(/(https?:\/\/[^\s]+)/)?.[0]|| null)   

for(var today_date=new Date,date1=new Date(today_date),i=0;i<4;)date1.setDate(date1.getDate()+1),0!==date1.getDay()&&6!==date1.getDay()&&i++;console.error("Если ДНР сегодня ("+today_date.getDate()+"."+(today_date.getMonth()+1)+"), то ДО   "+date1.getDate()+"."+(date1.getMonth()+1));var date2=new Date(today_date),next_work_day=new Date(date2);i=0;do{next_work_day.setDate(next_work_day.getDate()+1)}while(0===next_work_day.getDay()||6===next_work_day.getDay());for(var j=0,deadline=new Date(next_work_day);j<4;)deadline.setDate(deadline.getDate()+1),0!==deadline.getDay()&&6!==deadline.getDay()&&j++;console.error("Если ДНР сл.рд ("+next_work_day.getDate()+"."+(next_work_day.getMonth()+1)+"), то ДО   "+deadline.getDate()+"."+(deadline.getMonth()+1));