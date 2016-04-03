angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Chats) {

 $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };




})
.controller('DashDetailCtrl', function($scope, $stateParams, $http, Chats) {

$scope.chat = Chats.get($stateParams.chatId);
$http.get("http://10.106.211.47:3000/api/examinee/teid/" + parseInt($stateParams.chatId)).
  success(function(data) {
    $scope.prodData = data;

  console.log('test');

  var wisc5_vci_ss = $scope.prodData['wisc5Data']['wisc5_vci_ss'],
      wisc5_vci_cil = $scope.prodData['wisc5Data']['wisc5_vci_cil'],
      wisc5_vci_cih = $scope.prodData['wisc5Data']['wisc5_vci_cih'],      
       wisc5_vsi_ss = $scope.prodData['wisc5Data']['wisc5_vsi_ss'],
       wisc5_vsi_cil = $scope.prodData['wisc5Data']['wisc5_vsi_cil'],
      wisc5_vsi_cih = $scope.prodData['wisc5Data']['wisc5_vsi_cih'],      
      wisc5_fri_ss = $scope.prodData['wisc5Data']['wisc5_fri_ss'],
       wisc5_fri_cil = $scope.prodData['wisc5Data']['wisc5_fri_cil'],
      wisc5_fri_cih = $scope.prodData['wisc5Data']['wisc5_fri_cih'],      
      wisc5_wmi_ss = $scope.prodData['wisc5Data']['wisc5_wmi_ss'],
       wisc5_wmi_cil = $scope.prodData['wisc5Data']['wisc5_wmi_cil'],
      wisc5_wmi_cih = $scope.prodData['wisc5Data']['wisc5_wmi_cih'],      
       wisc5_psi_ss = $scope.prodData['wisc5Data']['wisc5_psi_ss'],
       wisc5_psi_cil = $scope.prodData['wisc5Data']['wisc5_psi_cil'],
      wisc5_psi_cih = $scope.prodData['wisc5Data']['wisc5_psi_cih'],      
      wisc5_fsiq_ss = $scope.prodData['wisc5Data']['wisc5_fsiq_ss'],
       wisc5_fsiq_cil = $scope.prodData['wisc5Data']['wisc5_fsiq_cil'],
      wisc5_fsiq_cih = $scope.prodData['wisc5Data']['wisc5_fsiq_cih'],
      gender = $scope.prodData['wisc5Data']['gender'],
      dob = $scope.prodData['wisc5Data']['dob'],
      wisc5_doa = $scope.prodData['wisc5Data']['wisc5_doa'];
       console.log('G: '+gender);

      if(gender == 1){
       $scope.chat.gender =   'Male';
      }else{
        $scope.chat.gender =   'Female';
      }
      
    $scope.chat.wisc5_vci_ss =   wisc5_vci_ss;
    $scope.chat.dob =   dob;
    $scope.chat.wisc5_doa =   wisc5_doa;
    
    
    console.log('check' +$scope.chat.wisc5_vci_ss);
    
    $scope.chat.wisc5_vci_cil = wisc5_vci_cil;
    console.log('check' +$scope.chat.wisc5_vci_cil);
    $scope.chat.wisc5_vci_cih = wisc5_vci_cih;
    
    $scope.chat.wisc5_vsi_ss =   wisc5_vsi_ss;
    $scope.chat.wisc5_vsi_cil = wisc5_vsi_cil;
    $scope.chat.wisc5_vsi_cih = wisc5_vsi_cih;
    
    $scope.chat.wisc5_fri_ss =   wisc5_fri_ss;
    $scope.chat.wisc5_fri_cil = wisc5_fri_cil;
    $scope.chat.wisc5_fri_cih = wisc5_fri_cih;
    
    $scope.chat.wisc5_wmi_ss =   wisc5_wmi_ss;
    $scope.chat.wisc5_wmi_cil = wisc5_wmi_cil;
    $scope.chat.wisc5_wmi_cih = wisc5_wmi_cih;
    
    $scope.chat.wisc5_psi_ss =   wisc5_psi_ss;
    $scope.chat.wisc5_psi_cil = wisc5_psi_cil;
    $scope.chat.wisc5_psi_cih = wisc5_psi_cih;
    
    $scope.chat.wisc5_fsiq_ss =   wisc5_fsiq_ss;
    $scope.chat.wisc5_fsiq_cil = wisc5_fsiq_cil;
    $scope.chat.wisc5_fsiq_cih = wisc5_fsiq_cih;
var graphdata = [8.9,102,759,3599,10934,21296,26596, 21296, 10934, 3599, 759, 102, 8.9];
var graphDataWithPlot =[];
$scope.chartConfig = {
    options: {
      chart: {
        type: 'areaspline'
    
      },
    tooltip: {
            enabled:false
        },
    showInLegend: false,
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
  
    series: [ {
   marker: {
            enabled: false
        },
    tooltip: {
            enabled:false
        },
         showInLegend: false,
           name: '',
           data: [8.9,102,759,3599,10934,21296,26596, 21296, 10934, 3599, 759, 102, 8.9],     
            zoneAxis: 'x',
            zones:[{
               value: 0,
               color: '#99CCFF'//light blue
            },{
               value:1,
               color: '#99CCFF'//light blue
            },
            {
               value: 2,
               color: '#99CCFF'//light blue
            },{
               value:3,
               color: '#99CCFF'//light blue
            },
            {
               value: 4,
               color: '#0066FF'//medium blue
            },
            {
               value: 5,
               color: '#3366CC'//deep blue
            },
      {
               value: 6,
               color: '#99CCFF'//light blue
            },
      {
               value: 7,
               color: '#99CCFF'//light blue
            },
      {
               value: 8,
               color: '#3366CC'//deep blue
            },
      {
               value: 9,
               color: '#0066FF'//medium blue
            },
      {
               value: 10,
               color: '#99CCFF'//light blue
            },
      {
               value: 11,
               color: '#99CCFF'//light blue
            },
      {
               value: 12,
               color: '#99CCFF'//light blue
            },
      {
               value: 13,
               color: '#99CCFF'//light blue
            },
             {
               color: '#99d6ff'
            }
            ]
          }],
    title: {
      text: 'Normal Curve'
    },
    credits: {
      enabled: false
    },
    loading: false,
    size: {},
  xAxis: {
       title:  { text: 'Standard Scores' },
       labels: { enabled: true },
  
            categories: [
                '40',
                '50',
                '60',
                '70',
                '80',
                '90',
                '100',
                '110',
                '120',
                '130',
                '140',
                '150',
                '160'
            ]
        },
    yAxis: {
  
            title: { text: '' },
      labels: { enabled: false }
        },
  
    plotOptions: {
  areaspline: {
                    marker: {
                        enabled: false
                    }
                },
            enabled:false
        }
    
  };
var dataArray = [
{
"Key":"40",
"Value":"8.9",
"Index":"0"
},
{
"Key":"50",
"Value":"102",
"Index":"1"
},
{
"Key":"60",
"Value":"759",
"Index":"2"
},
{
"Key":"70",
"Value":"3599",
"Index":"3"
},
{
"Key":"80",
"Value":"10934",
"Index":"4"
},
{
"Key":"90",
"Value":"21296",
"Index":"5"
},
{
"Key":"100",
"Value":"26596",
"Index":"6"
},
{
"Key":"110",
"Value":"21296",
"Index":"7"
},
{
"Key":"120",
"Value":"10934",
"Index":"8"
},
{
"Key":"130",
"Value":"3599",
"Index":"9"
},
{
"Key":"140",
"Value":"759",
"Index":"10"
},
{
"Key":"150",
"Value":"102",
"Index":"11"
},
{
"Key":"160",
"Value":"8.9",
"Index":"12"
}];
    

      
    //var data = dataArray.data;

     
  $scope.chat = Chats.get($stateParams.chatId);
  
  $scope.displayScaledScoreByIndex = function (scaledindex) {
    var defaultZone =[];
     defaultZone = [{
               value: 0,
               color: '#99CCFF'//light blue
            },{
               value:1,
               color: '#99CCFF'//light blue
            },
            {
               value: 2,
               color: '#99CCFF'//light blue
            },{
               value:3,
               color: '#99CCFF'//light blue
            },
            {
               value: 4,
               color: '#0066FF'//medium blue
            },
            {
               value: 5,
               color: '#3366CC'//deep blue
            },
      {
               value: 6,
               color: '#99CCFF'//light blue
            },
      {
               value: 7,
               color: '#99CCFF'//light blue
            },
      {
               value: 8,
               color: '#3366CC'//deep blue
            },
      {
               value: 9,
               color: '#0066FF'//medium blue
            },
      {
               value: 10,
               color: '#99CCFF'//light blue
            },
      {
               value: 11,
               color: '#99CCFF'//light blue
            },
      {
               value: 12,
               color: '#99CCFF'//light blue
            },
      {
               value: 13,
               color: '#99CCFF'//light blue
            },
             { 
               color: '#99d6ff'
            }
            ];
    var finalZone = [{
               value: 0,
               color: '#99CCFF'//light blue
            },{
               value:1,
               color: '#99CCFF'//light blue
            },
            {
               value: 2,
               color: '#99CCFF'//light blue
            },{
               value:3,
               color: '#99CCFF'//light blue
            },
            {
               value: 4,
               color: '#0066FF'//medium blue
            },
            {
               value: 5,
               color: '#3366CC'//deep blue
            },
      {
               value: 6,
               color: '#99CCFF'//light blue
            },
      {
               value: 7,
               color: '#99CCFF'//light blue
            },
      {
               value: 8,
               color: '#3366CC'//deep blue
            },
      {
               value: 9,
               color: '#0066FF'//medium blue
            },
      {
               value: 10,
               color: '#99CCFF'//light blue
            },
      {
               value: 11,
               color: '#99CCFF'//light blue
            },
      {
               value: 12,
               color: '#99CCFF'//light blue
            },
      {
               value: 13,
               color: '#99CCFF'//light blue
            },
             { 
               color: '#99d6ff'
            }
            ] ;
    console.log('dgdhgdh'+finalZone);
    var ss ;
    var rnd = [2.2, 6.7, 16.1, 50, 16.1,6.7,2.2]
    var keyToInsertAfter;
    var valueToInsertAfter;
    var indexToInsertAfter;
    var keyDifference;
    var keyToInsertAfter_cil;
    var valueToInsertAfter_cil;
    var indexToInsertAfter_cil;
    var keyDifference_cil;
    var keyToInsertAfter_cih;
    var valueToInsertAfter_cih;
    var indexToInsertAfter_cih;
    var keyDifference_cih;
    var finalSSPosition = 0;
    var startPointForZones = 0;
    var endPointsForZones = 0;
    var zones = [];
  console.log(scaledindex);
  if (scaledindex == '1') {
    ss = $scope.chat.wisc5_vci_ss;
  console.log($scope.chat.wisc5_vci_ss);
  console.log($scope.chat.wisc5_vci_cil);
  console.log($scope.chat.wisc5_vci_cih);
  
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
      keyDifference = ($scope.chat.wisc5_vci_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
    }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_vci_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
     }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_vci_cih - obj.Key)/10;
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
    }
  }
 } else if (scaledindex == '2') {
     ss = $scope.chat.wisc5_vsi_ss;
    console.log($scope.chat.wisc5_vsi_ss);
    console.log($scope.chat.wisc5_vsi_cil);
    console.log($scope.chat.wisc5_vsi_cih);
  
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
      keyDifference = ($scope.chat.wisc5_vsi_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
     }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_vsi_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
    }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_vsi_cih - obj.Key)/10;
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
    }
    
  

  }
} else if (scaledindex == '3') {
   ss = $scope.chat.wisc5_fri_ss;
    console.log($scope.chat.wisc5_fri_ss);
    console.log($scope.chat.wisc5_fri_cil);
    console.log($scope.chat.wisc5_fri_cih);
    
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
      keyDifference = ($scope.chat.wisc5_fri_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
     }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_fri_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
    }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_fri_cih - obj.Key)/10;
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
    }
  }
 
} else if (scaledindex == '4') {
   ss = $scope.chat.wisc5_wmi_ss;
    console.log($scope.chat.wisc5_wmi_ss);
    console.log($scope.chat.wisc5_wmi_cil);
    console.log($scope.chat.wisc5_wmi_cih);
     
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
      keyDifference = ($scope.chat.wisc5_wmi_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
     }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_wmi_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
     }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_wmi_cih - obj.Key)/10;
      console.log('Key Difference_cih' + keyDifference_cih);   
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
    }
  }  
} else if (scaledindex == '5') {
   ss = $scope.chat.wisc5_psi_ss;
    console.log($scope.chat.wisc5_psi_ss);
    console.log($scope.chat.wisc5_psi_cil);
    console.log($scope.chat.wisc5_psi_cih);
    
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
      keyDifference = ($scope.chat.wisc5_psi_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
    }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_psi_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
    }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_psi_cih - obj.Key)/10;
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
     }
  }
 
} else if (scaledindex == '6') {
   ss = $scope.chat.wisc5_fsiq_ss;
    console.log($scope.chat.wisc5_fsiq_ss);
    console.log($scope.chat.wisc5_fsiq_cil);
    console.log($scope.chat.wisc5_fsiq_cih);
   
  for(var i = 0; i < dataArray.length; i++) {
    var obj = dataArray[i];
    if ($scope.chat.wisc5_vci_ss > obj.Key) {
        finalSSPosition = 0;
      keyToInsertAfter = obj.Key;
      valueToInsertAfter = obj.Value;
      indexToInsertAfter = obj.Index;
       keyDifference = ($scope.chat.wisc5_fsiq_ss - obj.Key)/10;
      finalSSPosition = +keyDifference + +indexToInsertAfter;
    }
    if($scope.chat.wisc5_vci_cil>obj.Key){
      startPointForZones = 0;
      keyToInsertAfter_cil = obj.Key;
      valueToInsertAfter_cil = obj.Value;
      indexToInsertAfter_cil = obj.Index;
      keyDifference_cil = ($scope.chat.wisc5_fsiq_cil - obj.Key)/10;
      startPointForZones = +keyDifference_cil + +indexToInsertAfter_cil;
    }
    if($scope.chat.wisc5_vci_cih>obj.Key){
      endPointsForZones = 0;
      keyToInsertAfter_cih = obj.Key;
      valueToInsertAfter_cih = obj.Value;
      indexToInsertAfter_cih = obj.Index;
      keyDifference_cih = ($scope.chat.wisc5_fsiq_cih - obj.Key)/10;
      endPointsForZones =  +keyDifference_cih + +indexToInsertAfter_cih;
    }
  }
  
}


/*var count = 0;
var test;
var test1;
for (var i = 0; i< defaultZone.length;i++){
console.log(startPointForZones+'eee');
  if(defaultZone[i].value > startPointForZones){
    console.log(defaultZone[i].value+'yyyy');
    var color =  defaultZone[i-1].color;
   
    //var y = finalZone.splice(i,1);
    count = i-1;
    console.log(finalZone.length+'test2');
    test = startPointForZones;
        test1=    color;
            
    break;
  }
 //count++;
}
var finalZone1=[];
console.log(count+'count');
for (var i = 0; i< defaultZone.length;i++) {
  if (i!=count) {
finalZone1.push(defaultZone[i]);
  }

}
finalZone1.push({
               value: test,
               color: test1
            });

console.log(finalZone1);

var count1;
var test1;
var test2;
for (var i = 0; i< finalZone1.length;i++){
console.log(startPointForZones+'eee');
  if(finalZone1[i].value > endPointsForZones){
    console.log(finalZone1[i].value+'yyyy');
    var color =  finalZone1[i-1].color;
   
    //var y = finalZone.splice(i,1);
    count1 = i-1;
    console.log(finalZone1.length+'test2');
    test1 = endPointsForZones;
        test2=    color;
            
    break;
  }
 //count++;
}
var finalZone2=[];
console.log(count+'count');
for (var i = 0; i< finalZone1.length;i++) {
  if (i!=count1) {
finalZone2.push(finalZone1[i]);
  }

}
finalZone2.push({
               value: test1,
               color: 'green'
            });


  console.log(finalZone2);*/


for (var i = 0; i< defaultZone.length;i++){
if(defaultZone[i].value > startPointForZones){
   defaultZone[i-1].value = startPointForZones;
   //defaultZone[i-1].color = defaultZone[i].color;
  }
}
for (var i = 0; i< defaultZone.length;i++){
if(defaultZone[i].value > endPointsForZones){
   defaultZone[i-1].value = endPointsForZones;
   defaultZone[i-1].color = 'green';
  }
}
console.log(defaultZone);
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'areaspline'
    
      },
    tooltip: {
            enabled:false
        },
    showInLegend: false,
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
  
    series: [ {
   marker: {
            enabled: false
        },
    tooltip: {
            enabled:false
        },
         showInLegend: false,
           name: '',
           data: [8.9,102,759,3599,10934,21296,26596, 21296, 10934, 3599, 759, 102, 8.9],     
            zoneAxis: 'x',
            zones: defaultZone
        }],
    title: {
      text: 'Normal Curve'
    },
    credits: {
      enabled: false
    },
    loading: false,
    size: {},
  xAxis: {
  plotLines: [{ color: 'red', // Color value 
  dashStyle: 'longdashdot', // Style of the plot line. Default to solid 
  value: finalSSPosition, // Value of where the line will appear 
  width: 2 ,// Width of the line 
  label: {
                        text: '<b>Standard Score<b>  '  + ss
                    }
  }],
       title:  { text: 'Standard Scores' },
       labels: { enabled: true },
            categories: [
                '40',
                '50',
                '60',
                '70',
                '80',
                '90',
                '100',
                '110',
                '120',
                '130',
                '140',
                '150',
                '160'
            ]
        },
    yAxis: {
  
            title: { text: '' },
      labels: { enabled: false }
        },
  
    plotOptions: {
  areaspline: {
                    marker: {
                        enabled: false
                    }
                },
            enabled:false
        }
    
  };  

  }
  
  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  $scope.chartSeries = [
    {"name": "Some data", "data": [1, 2, 4, 7, 3]},
    {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
    {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
    {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  ];

  $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];

  $scope.addPoints = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function () {
    var rnd = [2.2, 6.7, 16.1, 50, 16.1,6.7,2.2]
    /*for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }*/
    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.toggleHighCharts = function () {
    this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  }

  $scope.replaceAllSeries = function () {
    var data = [
      { name: "first", data: [10] },
      { name: "second", data: [3] },
      { name: "third", data: [13] }
    ];
    $scope.chartConfig.series = data;
  };

  
  

  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };
});

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $http, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  
  //make api call to fetch data.
  $http.get("http://10.106.211.47:3000/api/examinee/teid/" + parseInt($stateParams.chatId)).
  success(function(data) {
    $scope.prodData = data;

    var wisc5_vci_ss = $scope.prodData['wisc5Data']['wisc5_vci_ss'],
      wisc5_vsi_ss = $scope.prodData['wisc5Data']['wisc5_vsi_ss'],
      wisc5_fri_ss = $scope.prodData['wisc5Data']['wisc5_fri_ss'],
      wisc5_wmi_ss = $scope.prodData['wisc5Data']['wisc5_wmi_ss'],
      wisc5_psi_ss = $scope.prodData['wisc5Data']['wisc5_psi_ss'],
      wisc5_fsiq_ss = $scope.prodData['wisc5Data']['wisc5_fsiq_ss'];
  
  var examineeScaledScores = [wisc5_vci_ss, wisc5_vsi_ss, wisc5_fri_ss, wisc5_wmi_ss, wisc5_psi_ss,wisc5_fsiq_ss];
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
    colors: ['black', '#0066FF'],
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
  showInLegend: true,
    series: [ {
  
           name: $scope.chat.fname,
           data: examineeScaledScores,  
       marker: {
       
       lineColor:'blue'
       },
            zoneAxis: 'x'        
          
        }],
     colors: ['#0000FF'],
    title: {
      text: 'Profile'
    },
    credits: {
      enabled: false
    },
    loading: false,
    size: {},
  yAxis: {
  
            title: { text: 'T-Score' },
      labels: { enabled: true }
        },
  xAxis: {
            categories: [
                'VCI',
                'VSI',
                'FRI',
                'WMI',
                'PSI',
                'FSIQ'
            ]
        },    
  tooltip: {
            enabled:true
        },
    plotOptions: {
            enabled:true
        }
  };
  
  $scope.displayScaledScoreByIndex = function (scaledindex) {
  var standardScalesScores = [];
  console.log(scaledindex);
  if (scaledindex == '1') {
  standardScalesScores = [127.7,121.2,120.3,117.9,112.9,127.5];
  } else if (scaledindex == '2') {
  standardScalesScores = [66.0,66.0,67.0,65.1,71.6,60.9];
  } else if (scaledindex == '3') {
  standardScalesScores = [55.2,56.8,58.6,58.3,59.3,49.7];
  } else if(scaledindex == '4') {
  standardScalesScores = [81.7,83.1,87.1,78.2,95.1,80.4];
  } else if (scaledindex == '5') {
  standardScalesScores = [89.1,93.3,92.5,87.8,93.0,88.9];
  } else if (scaledindex == '6') {
  standardScalesScores = [86.5,96.2,88.4,85.8,93.0,84.8];
  } else if (scaledindex == '7') {
  standardScalesScores = [90.3,85.4,82.2,90.2,83.6];
  } else if (scaledindex == '8') {
  standardScalesScores = [97.8,97.3,97.6,94.8,94.2,95.6];
  } else if (scaledindex == '9') {
  standardScalesScores = [94.1,97.1,94.4,95.3,92.8,93.3];
  }
  
  
    $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
    colors: ['black', '#0066FF'],
      plotOptions: {
        series: {
          stacking: ''
        }
      }
    },
  showInLegend: true,
    series: [ {
  
           name: $scope.chat.fname,
           data: examineeScaledScores,  
       marker: {
       
       lineColor:'blue'
       },
            zoneAxis: 'x'        
          
        },
    {
           name: 'T-Score',
           data: standardScalesScores,  
       
            zoneAxis: 'x'        
          
        }],
     colors: ['#0000FF'],
    title: {
      text: 'Profile'
    },
    credits: {
      enabled: false
    },
    loading: false,
    size: {},
  yAxis: {
  
            title: { text: 'T-Score' },
      labels: { enabled: true }
        },
  xAxis: {
            categories: [
                'VCI',
                'VSI',
                'FRI',
                'WMI',
                'PSI',
                'FSIQ'
            ]
        },    
  tooltip: {
            enabled:true
        },
    plotOptions: {
            enabled:true
        }
  }
  };
  
  
  //var standardScalesScores = [127.7,121.2,120.3,117.9,112.9,127.5];
    /*for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }*/
  
  $scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];

  $scope.chartSeries = [
    {"name": "Some data", "data": [1, 2, 4, 7, 3]},
    {"name": "Some data 3", "data": [3, 1, null, 5, 2], connectNulls: true},
    {"name": "Some data 2", "data": [5, 2, 2, 3, 5], type: "column"},
    {"name": "My Super Column", "data": [1, 1, 2, 3, 2], type: "column"}
  ];

  $scope.chartStack = [
    {"id": '', "title": "No"},
    {"id": "normal", "title": "Normal"},
    {"id": "percent", "title": "Percent"}
  ];

  $scope.addPoints = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
  };

  $scope.addSeries = function () {
    var rnd = [2.2, 6.7, 16.1, 50, 16.1,6.7,2.2]
    /*for (var i = 0; i < 10; i++) {
      rnd.push(Math.floor(Math.random() * 20) + 1)
    }*/
    $scope.chartConfig.series.push({
      data: rnd
    })
  }

  $scope.removeRandomSeries = function () {
    var seriesArray = $scope.chartConfig.series;
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
  }

  $scope.removeSeries = function (id) {
    var seriesArray = $scope.chartConfig.series;
    seriesArray.splice(id, 1)
  }

  $scope.toggleHighCharts = function () {
    this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
  }

  $scope.replaceAllSeries = function () {
    var data = [
      { name: "first", data: [10] },
      { name: "second", data: [3] },
      { name: "third", data: [13] }
    ];
    $scope.chartConfig.series = data;
  };



  $scope.reflow = function () {
    $scope.$broadcast('highchartsng.reflow');
  };
  
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
