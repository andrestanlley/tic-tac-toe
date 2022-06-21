import { Input } from '../../componets/input';
import {  MainContent } from './styles';

export function Home(){
  return(
    <MainContent>
      <form>
        <Input name='Name'></Input>
        <Button></Button>
      </form>
    </MainContent>
  )
}