const input = 
`djhjvjggdzznllvvrvggscgscsrrffgvfvllfclcrchhwzhzqqlhqhffsdsmmcffnggcttdpttwpwttjvtjvtvqqctcwcmcsswvwzzlnzlnnvbnbdnngmmhchrcrqqhbhllbtllmppgjjtvjvdjvvpcpjcjjfrfzfzzdvzdvvswvvjzzbpzbzzddbndbbgjbjjvpjpjtjqtjqjcjmcjjrtjrjrqqvtvpvwpprhphrhdrddpdhhfsspddqnqwnntrtnrrthrhtrtwtdttmmnvmnmppswsqwqjqwqbqrqbqdbqdqgdqgqtgqqgzzhpzzwswvwmvwwvvrzznwzzbsbhbfhhvcvwvvrzrgzzfhzhhlthlhqhgqgttlmljmlmqqjddtqtctbblplddnqnzqnnzrzjrrqwrqqcfffbdfffspsqswstspsvppqmppdmppdvvfrfddqhqzqddtjddfqfrfllnjjcnnjzjmzmtmddbvdvzvbzzcjzzffdbdbsswshhrwrrfggpccszzzgdgvvlflwwdbbhqhffngffdfdmdgdhdmhdmdsspssctstdtdmdhhzvvcbbrqqmrmwwjmjqjmqjmjjjrmrmlmmbppmgpgttmptpspmmrttcddtjjspsfsqqbhbbzzgbzzznwzzlddmtdmdgmmlnljlvjjtgjjggmmnnvqnqzzfhzhttvbbprpmpmrmlrmllwmlwmlwwsjjlffbgfggqmggqgvglvvrpvrpvpnpphmhnmhhbbqjbbrrvfrfwflldffzwzccscqsqppctctddqbbmggmccdbdvbdvvpdpdbdsdjsjbbwpwcpcbcbmmzdmmvtvqvpvphhlblwwfmwmvvdhdtdwwlblglhhvfvwwqggrnrttpddtvvwqvqmqhhwnnghhbpbvbnvvdqqrqdqwqppmwpwhppnmnjmnjmjttvhhcgchcssrlrwllpdpndpdtptzppqqpvvtffcwffjppvnnjvvjnnwcwnnhlhjhsjsnjjzfjfsfhsssvttvfvsvpspppwswmswwqmwwzvwzzvtzvvwddqqzhhqpqjjwrwlrrbcbvvqllqjllvzvgvmvhmmsppwvpwphhjnndjjtpjtthzzvrrcwcrczzmqmsssvtstqtrrgtrtvtwtccbwcwrwbbdbgbmmcsmcssvjsjqqsnqqtvvbgbfbdffhjffvnnzpplqppzzfwfrfnfcncqccgjjcffhshrhgrhghvhphccqtcqtccjzccdnncggftgttrppnpptlltztqtjqqvfvqvdvmvmjjgqqrqgrqqcggdvvpcvcjvjnnrjjmbmlbmmqvmqmfmwmpwwnhwdtmvhqfwlbpzjplfhfntjgmvqmmjqpbngpvjvpgzpqwjjwhvjwwplrtjhzmzqmdrppgbrspmctlggmflbjzzfcvvdqlrtvqvwhcpjnmlvfgwrwwtblpqstddnqntnmwsbgjfrbdrlnvqdrnttshjmvpmncmggfdbnndwzmswmdvhmmwtgpfglrzzhwcsgvhnnrrhmnhftvvqfdfrsphzbslgscmwsnrwbvqphhswvpvsbbstvnndclhfhdctlvwrmdgzfcfmjmznqvvqrddmdlqznvcsqsgnpcqqhbdwqntcnqljstqvrzhgvzqdltpwmnpvjmqrpjsfhqvhchjnwjnqpdqbdjqdpqsqhbwwmhfthzbrsjnhncpbjrhgqlzmrzlnvrrfvlrmflcqfmqjzjwscrflgzwtbchfrnvsrrtncvhjbnnmlmmfdjcbmbsmgdtwzwcwnthfbsnrgdfwqjncqsdmfnfqgtcwrhjprlnhvrnpmnnhlwstvqjrsprqhjzszzgfznmgwjqglvfrrwpdbptdrnbbwbzbcbhbtcchmfsgmvnmrbdqhqgmvtfmvpgvjzjpgjbdhcfrfhprgdzrprccnhbmzdfjsgldlgpgdrfhbhtmhdttdsbndgbdfccqhhwhqfmlsfhsbbbmdncrwzcnrdvcmhllfwtrgjpgngzwptnqtggtcjwrptffmsrgdpctsdjtpssngsdqwfsbhdbcqvbdrzlhzlsbbzhqthzhcwsftlhrmhgpfzljgcphjjvhpqjzsfnrztwrhlnlbmgcgmstrbbwclpvdtdpclzlhmmpmmpmppnwjglhwppprlbzbvwqwmpgtvvpgdthnwbtblwpwgvmbcbjwjbczlcmzfwzbqvzsvgcmspvrsblldscqlgghdwzbvhhvgcfwgnqwlngclbjfwrpwtdjvqmzwwjztwdjplhzpzfslbbvfdsnpggwcttzwdlzgqgmrnpnclhrlngtwcwblzdjmpgqvzsvsdmzdwlgcdlccnnlrcvtrvspcsmgmzzvwnlzwtznwtqtdjcnhwrqhqrmvqqhrpdtnsmfrlcgpjcnddsqzcppgrnhvwsdbjvvtmvbjdncpdnmzfswmtvzfbdpqfjvwvqlhptnpdfdnlwfrgstpvvmhsqfgggdrsfgldfzbcjzhqzvfwmzccwjrslhjwlbmrpqgzdfnfbhsmdpzwtqnqldtqvshvlvmlnnmqrqbpwvnhqhtcbfclhrcqlqzhsqplsnbczvrbzqwlfwjdtmstzdbswtrvlpzzlrfvgdmldbwcttztrvsgzjwhhpcrvtgzfzppdlrdwswbnjfqqpqfbcqlzdmjsgjtzmvhdzspwlqpdjnccmbtdhnnhfvwqclbzzgglfgmvvgrccdsbwfmpvqwqrhmdzfhhhgbgjgwmnzmnggfrpspchvzpcmcpsbzgldmgqjqqdcjpwwncwrwjbhgzdbbcmbzbbtvprsjrhfwgsppdrrlzvnmtmwrmmrhtlndvsvjvgqmmttbbnpdhnjhwgrvlrdtpbrtwpwvvpslcqnvnrlhpvgdwnrzjmhwmgvpndtrjlzqpfzfbrsgbzjjqcfgsfwchblzstdflblngtzbrzrrvsczqvfhjjdlffrghgqvqfdtstqlnzllsrnnrtvrzdphbhdfpmhlfncqbdtzjqqcfbzpvgzdcsvvbfdvqrfrncbrwmpdmhnlqdscwnvldzblpzfqcvnbzmmtbmwjbczsjvzmfthfpvjcpwftqcbgjwflfrbrggwnvwndtncljfrdfwqwhfbctpjghfvnjnntnrgbfbmhplgmpfvmgvfqjslgnnrnlgztlstpcjwtlhmwlljcfmptfwsphnlsrjwmgtghgqmsvwvqsmblwpdftbrwjcdlzjmjblghszznqhsnqrcmtccgdwrrlsmwswvrjltqmwsdwvpnzltllhrsdvmrntdhtwwbgrqmrffnqbqrczvzchbgmzwtjtfzwntsnlbwbgrlvqjsqmdnwjqlwrdpnfpggzrjvtrhqdbmmbtfmmblgwtrqccqbjnljqflhgtphvrgrgghgrpbgfgdztsmfwrfflsqmrwbfjwsmpfrnbqjwnwdqwcwzpwbsmngjwfmbwdmnprdjnjbmqgfcbvtcvcthpmnmvvzdzgqqbhtjqfcdvhfzwqgfsbtvnwbzpmmtswfntjjppsswgbfrjbrstltdgbmclmbfvlslghbhnqqbdlzgtctgsfnwvbpzbvnwfbjmbfqcpqqvgrzwcbrwzdbdsjsslcjlmtprntpsdmqldzwqlqztwqtqfqzmrnzbtpqlfnsdwfdgggfvmqmrdqmnffnzcwfzsrqfpvrmsfsrbnpbhnqvdglvglllpggpmwmngrhzwgpdlzrbsvjtqmshhnlzwwftdtqwrqwgbbnczqcwmsvcljqlscftwflhwwhgnqwztfchdzsllrzbhbqwcfztjnqtdmsfnlzlcwzfmtlcgwclzfhhldgrnfjvzthzqzmzvwcrnhpdcwswpddsbwtznwlcwsnfqnqwnntngplwnfgwrcnpvgffwrcrszzdbfvzjmrmlrjwcvdvbglgncjwcnnpdfnwsrzsvzgnjrlqmwhvtdgmpbqmjthmhhmzjhpvnbvrqnlspdbcgshwlnvwpvrbcmvbvcsdmgwtmsthqtcfmllsfwvqcrbmdgqtzjwrg`

const testInput1 = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`
const testInput2 = `bvwbjplbgvbhsrlpgdmjqwftvncz`
const testInput3 = `nppdvjthqldpwncqszvftbrmjlhg`
const testInput4 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`
const testInput5 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`

const MARKER_LONG=14
function checkEquals(marker){
    return marker.length !== new Set(marker).size
}

const inputProcessed = input

const buffer = inputProcessed.split('');
let marker = buffer.splice(0,MARKER_LONG)

let isPacketDetected = checkEquals(marker)

while(isPacketDetected){
    marker.shift()
    const char = buffer.shift();
    marker.push(char)
    isPacketDetected = checkEquals(marker)
}
const numCharProcessed = inputProcessed.indexOf(marker.join(''))+MARKER_LONG;

console.log(numCharProcessed)

