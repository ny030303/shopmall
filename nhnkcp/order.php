<?
    include "./site_conf_inc.php";

    function getValidData($value)
    {
        return isset($value) ? $value : "";
    }
?>

<!--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">-->

<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>*** NHN KCP [AX-HUB Version] ***</title>
    <meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
	<meta http-equiv="Pragma" content="no-cache"> 
	<meta http-equiv="Expires" content="-1">
<link href="css/style.css" rel="stylesheet" type="text/css" id="cssLink"/>

<script type="text/javascript">
		/****************************************************************/
        /* m_Completepayment  설명                                      */
        /****************************************************************/
        /* 인증완료시 재귀 함수                                         */
        /* 해당 함수명은 절대 변경하면 안됩니다.                        */
        /* 해당 함수의 위치는 payplus.js 보다먼저 선언되어여 합니다.    */
        /* Web 방식의 경우 리턴 값이 form 으로 넘어옴                   */
        /****************************************************************/
		function m_Completepayment( FormOrJson, closeEvent ) 
        {
            var frm = document.order_info; 
         
            /********************************************************************/
            /* FormOrJson은 가맹점 임의 활용 금지                               */
            /* frm 값에 FormOrJson 값이 설정 됨 frm 값으로 활용 하셔야 됩니다.  */
            /* FormOrJson 값을 활용 하시려면 기술지원팀으로 문의바랍니다.       */
            /********************************************************************/
            GetField( frm, FormOrJson ); 

            
            if( frm.res_cd.value == "0000" )
            {
                window.parent.postMessage(frm.res_cd.value, '*');
			    // alert("결제 승인 요청 전,\n\n반드시 결제창에서 고객님이 결제 인증 완료 후\n\n리턴 받은 ordr_chk 와 업체 측 주문정보를\n\n다시 한번 검증 후 결제 승인 요청하시기 바랍니다."); //업체 연동 시 필수 확인 사항.
                /*
                    가맹점 리턴값 처리 영역
                */
             
                frm.submit(); 
            }
            else
            {
                alert( "[" + frm.res_cd.value + "] " + frm.res_msg.value );
                
                closeEvent();
            }
        }
</script>

    <script type="text/javascript" src='https://testpay.kcp.co.kr/plugin/payplus_web.jsp'></script>
    <script type="text/javascript">
        /* 표준웹 실행 */
        function jsf__pay( form )
        {
            try
            {
                KCP_Pay_Execute( form );
            }
            catch (e)
            {
              console.log("jsf__pay", e);
                /* IE 에서 결제 정상종료시 throw로 스크립트 종료 */ 
            }
        }             

        /* 주문번호 생성 예제 */
        function init_orderid()
        {
            // var today = new Date();
            // var year  = today.getFullYear();
            // var month = today.getMonth() + 1;
            // var date  = today.getDate();
            // var time  = today.getTime();
            //
            // if(parseInt(month) < 10) {
            //     month = "0" + month;
            // }
            //
            // if(parseInt(date) < 10) {
            //     date = "0" + date;
            // }
            //
            // var order_idxx = "NY" + year + "" + month + "" + date + "" + time;
            //
            // document.order_info.ordr_idxx.value = order_idxx;

            let params = {
              ordr_idxx: "<?=isset($_POST["ordr_idxx"]) ? $_POST["ordr_idxx"] : ""?>",
              good_name: "<?=isset($_POST["good_name"]) ? $_POST["good_name"] : ""?>",
              good_mny:  "<?=isset($_POST["good_mny"])  ? $_POST["good_mny"] : ""?>",
              buyr_name: "<?=isset($_POST["buyr_name"]) ? $_POST["buyr_name"] : ""?>",
              buyr_mail: "<?=isset($_POST["buyr_mail"]) ? $_POST["buyr_mail"] : ""?>",
              buyr_tel1: "<?=isset($_POST["buyr_tel1"]) ? $_POST["buyr_tel1"] : ""?>",
              buyr_tel2: "<?=isset($_POST["buyr_tel2"]) ? $_POST["buyr_tel2"] : ""?>",
            };
            console.log(params);
            let inputs = document.querySelectorAll('input');
            inputs.forEach(inp => {
              if( params[inp.name] ) {
                inp.value = params[inp.name];
                console.log(inp.name + ':' + params[inp.name]);
              }
            })

        }
    </script>
</head>


<body onload="init_orderid();">


<div id="sample_wrap">

<!-- 주문정보 입력 form : order_info -->
<form name="order_info" method="post" action="./pp_cli_hub.php" >
                    <h1>[결제요청] <span> 이 페이지는 결제를 요청하는 샘플(예시) 페이지입니다.</span></h1>
                    <!-- 상단 문구 -->
                    <div class="sample">
                            <p>이 페이지는 결제를 요청하는 페이지입니다.<br />                            
                            소수 수정 시 <span>※ 필수, ※ 옵션</span>표시가 포함된 문장은 가맹점의 상황에 맞게 적절히 수정 적용하시기 바랍니다.
                            </p>

                <!-- 주문정보 타이틀 -->
                    <h2>&sdot; 주문 정보</h2>
                    <table class="tbl" cellpadding="0" cellspacing="0">

                    <tr>
                        <th>지불 방법</th>
                        <td>
                            <select name="pay_method">
                                <option value="100000000000">신용카드</option>
                                <option value="010000000000">계좌이체</option>
                                <option value="001000000000">가상계좌</option>
                                <option value="000100000000">포인트</option>
                                <option value="000010000000">휴대폰</option>
                                <option value="000000001000">상품권</option>
                                <option value="000000000010">ARS</option>
                                <option value="111000000000">신용카드/계좌이체/가상계좌</option>
                            </select>
                        </td>
                    </tr>
                    <!-- 주문번호(ordr_idxx) -->
                    <tr>
                        <th>주문 번호</th>
                        <td><input type="text" name="ordr_idxx" class="w200" value="" maxlength="40" readony/></td>
                    </tr>
                    <!-- 상품명(good_name) -->
                    <tr>
                        <th>상품명</th>
                        <td><input type="text" name="good_name" class="w100" value="" readony/></td>
                    </tr>
                    <!-- 결제금액(good_mny) - ※ 필수 : 값 설정시 ,(콤마)를 제외한 숫자만 입력하여 주십시오. -->
                    <tr>
                        <th>결제 금액</th>
                        <td><input type="text" name="good_mny" class="w100" value="" maxlength="9" readony/>원(숫자만 입력)</td>
                    </tr>
                    <!-- 주문자명(buyr_name) -->
                    <tr>
                        <th>주문자명</th>
                        <td><input type="text" name="buyr_name" class="w100" value="" readony/></td>
                    </tr>
                    <!-- 주문자 E-mail(buyr_mail) -->
                    <tr>
                        <th>E-mail</th>
                        <td><input type="text" name="buyr_mail" class="w200" value="" maxlength="30"  readony/></td>
                    </tr>
                    <!-- 주문자 연락처1(buyr_tel1) -->
                    <tr>
                        <th>전화번호</th>
                        <td><input type="text" name="buyr_tel1" class="w100" value="" readony/></td>
                    </tr>
                    <!-- 휴대폰번호(buyr_tel2) -->
                    <tr>
                        <th>휴대폰번호</th>
                        <td><input type="text" name="buyr_tel2" class="w100" value="" readony/></td>
                    </tr>
                    </table>

                    <!-- 결제 요청/처음으로 이미지 -->
                    <div class="btnset" id="display_pay_button" style="display:block">
                      <input name="" type="button" class="submit" value="결제요청" onclick="jsf__pay(this.form);"/>
                      <!-- <a href="../index.html" class="home">처음으로</a> -->
                      <input name="" type="button" class="home" value="취소" onclick="window.parent.postMessage('cancel', '*');"/>
                    </div>
                    
                  <div class="footer">
                    Copyright (c) NHN KCP INC. All Rights reserved.
                  </div>

    <input type="hidden" name="req_tx"          value="pay" />
    <input type="hidden" name="site_cd"         value="T0000" />
    <input type="hidden" name="site_name"       value="KCP TEST SHOP" />
    <input type="hidden" name="quotaopt"        value="12"/>
    <input type="hidden" name="currency"        value="WON"/>
    <input type="hidden" name="module_type"     value="01"/>
    <input type="hidden" name="res_cd"          value=""/>
    <input type="hidden" name="res_msg"         value=""/>
    <input type="hidden" name="enc_info"        value=""/>
    <input type="hidden" name="enc_data"        value=""/>
    <input type="hidden" name="ret_pay_method"  value=""/>
    <input type="hidden" name="tran_cd"         value=""/>
    <input type="hidden" name="use_pay_method"  value=""/>
	
	<!-- 주문정보 검증 관련 정보 : 표준웹 에서 설정하는 정보입니다 -->
	<input type="hidden" name="ordr_chk"        value=""/>

    <!--  현금영수증 관련 정보 : 표준웹 에서 설정하는 정보입니다 -->
    <input type="hidden" name="cash_yn"         value=""/>
    <input type="hidden" name="cash_tr_code"    value=""/>
    <input type="hidden" name="cash_id_info"    value=""/>

	<!-- 2012년 8월 18일 전자상거래법 개정 관련 설정 부분 -->
	<!-- 제공 기간 설정 0:일회성 1:기간설정(ex 1:2012010120120131)  -->
	<input type="hidden" name="good_expr" value="0">

</form>
</div>
</body>
</html>