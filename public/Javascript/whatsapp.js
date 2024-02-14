
$(document).ready(function() 
  {
    // Hide all tab content initially except the active one
    $('.tab-content .tab1content, .tab-content .tab2content, .tab-content .tab3content').hide();
  
    $('.tab-content .tab1content').show();

    // Function to handle tab clicks
    $('.page').click(function() {

      $('.page').removeClass('active');

      $(this).addClass('active');

      var clickedTab = $(this).attr('id');
  
      // Hide all tab content regardless of previous state
      $('.tab-content .tab1content, .tab-content .tab2content, .tab-content .tab3content').hide();
  
      // Show the content corresponding to the clicked tab
      $('#' + clickedTab + '-content').show();
    });
  });


function notificationRemover()
{
    $('#tab-1-content').click(function() {

        $('.extra-info-holder').removeClass('bubble');
  
    })
  
}



  

var listofcontacts =[  
    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Kiran",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Gv satish",
        last_message:"Good Night!?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"MoM",
        last_message:"Miss You",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Ganesh",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Arjun Reddy",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Kiran",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Kiran",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Kiran",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

    {
        profile_picture:"./img/VARUN TEJ.jpg",
        Name:"Kiran",
        last_message:"Where are you man?",
        time:"12:30pm",
        unread_messages:"5",
    },

 ];
 
 
 function renderWholeChatBox()
 {
    var tab_1_content = document.getElementById('tab-1-content');
    console.log(tab_1_content);



    // var personContact = chatBox.querySelector('.message-container');
    // console.log(personContact);


    let html= '';


    listofcontacts.forEach((a)=>
    {
        html+=
        `<div class="message-container">
            <div class="avatar-holder">
                <div class="avatar"
                    style="background-image: url('${a.profile_picture}');">
                </div>
            </div>
            <div class="message-info-holder">
                <div class="msg-info">
                    <div class="name">
                        <span>${a.Name}</span>
                    </div>
                    <div class="last-msg">
                       <span>${a.last_message}</span>
                    </div>
                </div>
                <div class="extra-info-holder active">
                    <div class="time">
                        <span>${a.time}</span>
                    </div>
                    <div class="bubble">
                        <spam>${a.unread_messages}</spam>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    tab_1_content.innerHTML=html;
    $('.message-container').click(function()
    {
        moveToChatPage() 

    })


 }

 renderWholeChatBox();




var myStatus =
[
    {
        profile_pic:"./img/user-avatar.png",alt:"dp",
        Name:"Mahesh sir",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
]


function renderMyStatusBox()
{
    var tab_2_content = document.getElementById('tab-2-content');
    console.log(tab_2_content);

    var statuspage = tab_2_content.querySelector('statuspage');
    console.log(statuspage);

    let html= '';


    myStatus.forEach((c)=>
    {
        html+=
        ` <div class="statuspage">
                <div class="contacts">
                    <div class="contact">
                        <div class="Profile-picture">
                            <img src="${c.profile_pic}" alt="dp">
                        </div>
                        <div class="contact-name">
                            <h4>My status</h4>
                            Tap to add status update
                        </div>
                    </div>
                </div>
          </div>
          <div id="update">
            Recent  updates
          </div> 
        
        `
    });
    // tab_2_content.innerHTML=html;
    $(tab_2_content).html(html);
}

renderMyStatusBox()


var statusList =
[
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Kiran Reddy",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"just now",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },

    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Umesh",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"25 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },

    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Mom",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"1 hour ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },

    {
        profile_pic:"./img/user-avatar.png",alt:"dp",
        Name:"Mahesh sir",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"Today,12:55 PM",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },

    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Brother",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"Today,1:00",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Satish",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"yesterday,11:20",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Jagadeesh",
        time:"yesterday,11:00",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"kalyan",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Mahesh sir",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Mahesh sir",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    },
    {
        profile_pic:"./img/modi.jpeg",alt:"dp",
        Name:"Mahesh sir",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call"

    }
]

function renderWholeMyStatusBox()
{
    var tab_2_content = document.getElementById('tab-2-content');
    console.log(tab_2_content);

    var statuspage = tab_2_content.querySelector('statuspage');
    console.log(statuspage);

    let html= '';


    statusList.forEach((c)=>
    {
        html+=
        ` <div class="statuspage">
                <div class="contacts">
                    <div class="contact">
                        <div class="Profile-picture">
                            <img src="${c.profile_pic}" alt="dp">
                        </div>
                        <div class="contact-name">
                            <h4>${c.Name}</h4>
                            <span>${c.time}</span>
                        </div>
                    </div>
                </div>        
            </div>        
        `
    });
    // tab_2_content.innerHTML=html;
    $(tab_2_content).append(html);
}

renderWholeMyStatusBox()

var createLink =
[
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Create call link",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
]


function renderCreateLinksBox()
{
    var tab_3_content = document.getElementById('tab-3-content');
    console.log(tab_3_content);

    var callspage_call_link_create= tab_3_content.querySelector('callspage-call-link-create');
    console.log(callspage_call_link_create);

    let html= '';


    createLink.forEach((c)=>
    {
        html+=
        `<div class="callspage-call-link-create">
            <div class="contacts">
                <div class="contact">
                    <div class="Profile-picture-link">
                        <img src="${c.create_link}" alt="link">
                    </div>
                    <div class="contact-name">
                        <h4>${c.Name}</h4>
                        <span>${c.span}</span>
                    </div>
                </div>
            </div>        
        </div>
        <div id="update">
            <span>Recent</span>
        </div>
        `
    });
    // tab_3_content.innerHTML=html;
    $(tab_3_content).html(html);
}

renderCreateLinksBox()

var callHistory =
[
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Mom",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },

    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Bobby",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Brother",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Arjun",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Kiran",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Gowtham",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
    {
        profile_pic:"./img/india.jpg",alt:"dp",
        Name:"Gowtham",
        incoming_outgoing:"./img/up-right-arrow.png",alt:"incoming or outgoing arrow",
        time:"8 minutes ago",
        calling_logo:"./img/phone-call.png",alt:"phone call",
        create_link:"./img/link (1).png",alt:"create-link",
        span:"Share a link for your Whatsapp call",

    },
]


function renderWholeCallsBox()
{
    var tab_3_content = document.getElementById('tab-3-content');
    console.log(tab_3_content);

    var callspage= tab_3_content.querySelector('callspage');
    console.log(callspage);

    let html= '';


    callHistory .forEach((x)=>
    {
        html+=
        `<div class="callspage">
            <div class="contacts">
                <div class="contact">
                    <div class="Profile-picture">
                        <img src=${x.profile_pic} alt="dp">
                    </div>
                    <div class="contact-name">
                        <h4>${x.Name}</h4>
                        <img src=${x.incoming_outgoing} alt="uparrow"><span> 8 minutes ago</span>
                    </div>
                    <div class="Phone-call-logo">
                        <img src=${x.calling_logo} alt="phone call logo">
                    </div>
                </div>
            </div>
        </div>
        `
    });
    // html=`<div class="callspage">
    //        ${html}
    //       </div>`
    // tab_3_content.insertAdjacentHTML("beforeend", html);
    $(tab_3_content).append(html);
}

renderWholeCallsBox()




function moveToChatPage() 
{
    window.location.href = 'chatbox.html';
}

