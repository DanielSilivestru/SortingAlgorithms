var canvas=document.getElementById('myCanvas');
canvas.width=1000;
canvas.height=500;
var c=canvas.getContext('2d');
var v=[1,5,3,4,10];
 function wait(ms){ return new Promise(resolve=>setTimeout(resolve,ms))}

 function show(v)
 {
  let i;
  c.fillStyle='white';
  c.fillRect(0,0,1000,500);
  for(i=0;i<100;i++)
  {
   c.fillStyle='white';
   c.fillRect(i*10,0,2,1000);
   c.fillStyle='black';
   c.fillRect(10*i+2,0,6,v[i]*5);
   c.fillStyle='white';
  c.fillRect(10*i+8,0,2,1000);
  }
 }
function createVector()
{
  let v=[0],i;
  for(i=0;i<100;i++)
  v[i]=Math.floor(Math.random()*100);
  return v;
 console.log(v);
 console.log('ok');
}

async function bubbleSort(v,lenght)
{
	let ok=0,i,aux;
	while(ok==0)
    {
      ok=1;
    	for(i=0;i<lenght-1;i++)
    		if(v[i]>v[i+1])
    		{
              aux=v[i];
              v[i]=v[i+1];
              v[i+1]=aux;
              ok=0;
              await wait(1);
              show(v);
    		}
    }
    return 1;
}

async function  selectionSort(v,lenght)
{
  let max,maxp,min,minp,i,j,poz=0,aux;

  for(j=lenght;j>1;j-=2)
  {
    max=v[poz]; maxp=poz;  min=v[poz];minp=poz;

   for(i=poz+1;i<lenght-poz;i++)
   {
    if(v[i]>max){max=v[i];maxp=i}
    if(v[i]<min){min=v[i];minp=i}
   }
   v[minp]=v[poz];
   v[poz]=min;
   if(maxp==poz)maxp=minp;
   v[maxp]=v[lenght-poz-1];
   v[lenght-poz-1]=max;
   poz++;
   await wait(200);
   show(v);
 }
 return 1;
}

async function insertionSort(v,lenght)
{
  let i,j,value;
  for(i=1;i<lenght;i++)
  {
    value=v[i]; j=i-1;
    while(value<v[j]&&j>=0)
    {
      v[j+1]=v[j];j--;
    }
    v[++j]=value;
    await wait(100);
    show(v);
  }
  return 1;
}

async function quickSort(v,start,lenght)
{
  if(lenght-start<=1)return 1;
   
  let pivot=Math.floor((lenght+start)/2),left=start,right=lenght-1,aux;
  while(left<right)
  {
    if(v[left]<=v[pivot])left++;
    if(v[right]>=v[pivot])right--;
    else if(v[left]>v[pivot]&&v[right]<v[pivot])
    {
      aux=v[left];
      v[left]=v[right];
      v[right]=aux;
        await wait(100);
        show(v);
    }}
    

  if(right>pivot)
    if(v[right]<v[pivot])
   {
      aux=v[right];
      v[right]=v[pivot];
      v[pivot]=aux;
      pivot=right;
        await wait(100);
        show(v);
   }
   else if(right!=pivot)
   {
      aux=v[right-1];
      v[right-1]=v[pivot];
      v[pivot]=aux;
      pivot=right-1;
        await wait(100);
        show(v);
   }
   if(left<pivot)
    if(v[left]>v[pivot])

{
      aux=v[left];
      v[left]=v[pivot];
      v[pivot]=aux;
      pivot=left;
        await wait(100);
        show(v);
    }
    else if(left!=pivot)
  
{
      aux=v[left+1];
      v[left+1]=v[pivot];
      v[pivot]=aux;
      pivot=left+1;
       await wait(100);
        show(v);
}

      quickSort(v,start,pivot);
      quickSort(v,pivot+1,lenght);
}

async function merge(v,start,middle,lenght)
{
  let v1=[0],v2=[0],i,j,k=0;
  let n1=middle-start, n2=lenght-middle;

  for(i=0;i<n1;i++)
    v1[i]=v[start+i];

  for(i=0;i<n2;i++)
    v2[i]=v[start+n1+i];

   i=0;j=0;
   while(i<n1&&j<n2)
   {
     if(v1[i]<=v2[j])v[start+k++]=v1[i++];
     else v[start+k++]=v2[j++];
   }
   while(i<n1)v[start+k++]=v1[i++];
   while(j<n2)v[start+k++]=v2[j++];

      await wait(80);
      show(v);


   return 1;
  }

async function mergeSort(v,start,lenght)
{
  if(lenght-start<=1)return 1;

 let m=Math.ceil((start+lenght)/2);
 await mergeSort(v,start,m);
 await mergeSort(v,m,lenght);
 await merge(v,start,m,lenght);
}

function checkSort(v,lenght)
{
  let i;
  for(i=0;i<lenght;i++)
    if(v[i]>v[i+1]) return"Nu";
  return"Da";
}

v=createVector();
show(v);

function reset(v)
{
  window.location.reload();
}
var sorting=0;
var bubbleSort1=document.getElementById("bubbleSort");
bubbleSort1.type="button";
bubbleSort1.addEventListener('click',()=>{bubbleSort(v,100);});


var selectionSort1=document.getElementById("selectionSort");
selectionSort1.type="button";
selectionSort1.addEventListener('click',()=>{selectionSort(v,100);});

var insertionSort1=document.getElementById("insertionSort");
insertionSort1.type="button";
insertionSort1.addEventListener('click',()=>{insertionSort(v,100);});

var quickSort1=document.getElementById("quickSort");
quickSort1.type="button";
quickSort1.addEventListener('click',()=>{ quickSort(v,0,100);});

var mergeSort1=document.getElementById("mergeSort");
mergeSort1.type="button";
mergeSort1.addEventListener('click',()=>{mergeSort(v,0,100);});


var reset1=document.getElementById("reset");
reset1.type="button";
reset1.addEventListener('click',()=>{reset(v);});

