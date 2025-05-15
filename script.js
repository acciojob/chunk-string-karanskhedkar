function stringChop(str, size) {
  // your code here
  size=Number(size);
  let len=str.length;
  let i=0;
  const chunks=[];
  while(i<len){
      chunks.push(str.slice(i,i+size));
      i+=size;
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));