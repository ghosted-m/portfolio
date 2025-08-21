export default function Btn() {
  const dark: Boolean = true;
  return(
     <>
     <div className='h-64'>
  {dark ? <p>Hello</p> : <p>What are u doing</p>}
  </div>
  </>
  );
}
