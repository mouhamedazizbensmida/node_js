var s=0;
for (var i = 2; i < process.argv.length; i++)
{
s=s+Number(process.argv[i]);
}
console.log(s);