<!DOCTYPE html>
<html lang="en">

	<head>

		<!-- Basic -->
		<meta charset="utf-8">
		<title>Adastic - New Media is coming to Israel</title>
		<meta name="author" content="SHAN">
		<meta name="keywords" content="media, new media, advertisment, application, startup, business, company, corporate, creative">
		<meta name="description" content="Adastic - New Media is coming to Israel">		
		   
		<!-- Libs CSS -->
		<link href="css/style.css" rel="stylesheet" type="text/css" />
		<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
		
		<!-- Google Fonts -->	
		<link href='http://fonts.googleapis.com/css?family=Lato:400,900italic,900,700italic,400italic,300italic,300,100italic,100' rel='stylesheet' type='text/css'>
		   
	</head>

	<body>
	
		<div id="contentForm">

			<?php
			header('Content-Type: text/html; charset=utf-8');

			if(isset($_POST['email'])) {
				 
					 
				// EDIT THE 2 LINES BELOW AS REQUIRED
				 
				$email_to = "info@adastic.com";
				$email_subject = "New register form was sent";
				 
				   
				$sender_name = $_POST['sender_name']; // required 
				$email_from = $_POST['email']; // required
				$phone = $_POST['phone']; // required
				if("" == trim($_POST['comments'])){
				    $comments = 'Message is empty';
				} else {
					$comments = $_POST['comments'];
				}
				 
				$email_message = "Form details below.\n\n";
				 
					
				function clean_string($string) {
					$bad = array("content-type","bcc:","to:","cc:","href");
					return str_replace($bad,"",$string);
				}
				 
				 
				$email_message .= "Name: ".clean_string($sender_name)."\n";
				$email_message .= "Email Address: ".clean_string($email_from)."\n";
				$email_message .= "Phone: ".clean_string($phone)."\n";
				$email_message .= "Comments: ".clean_string($comments)."\n";
				 
					 
				// create email headers
				 
				$headers = 'From: '.$email_from."\r\n".
				 
				'Reply-To: '.$email_from."\r\n" .
				 
				'X-Mailer: PHP/' . phpversion();
				 
				@mail($email_to, $email_subject, $email_message, $headers); 
				 
				?>
				 
				<!-- Message sent! (change the text below as you wish)-->
				<div class="container">
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
							<div id="form_response" class="text-center">
								<img class="img-responsive" src="img/thumbs/mail_sent.png" alt="image" />
								<h1>הפרטים נשלחו בהצלחה !</h1>
								<p>תודה לך <b><?=$sender_name;?></b>, הודעתך נשלחה ואנו נצור עימך קשר בהקדם.</p>
								<a class="btn btn-primary btn-lg" href="index.html">חזרה לאתר</a>
							</div>
						</div>	
					</div>					
				</div>
				 <!--End Message Sent-->

				<?php
				 
				}

				?>

		</div>
		
	</body>

</html>