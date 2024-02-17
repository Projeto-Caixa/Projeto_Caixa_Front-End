import React from "react";
import * as S from "./style";
import products from "../../../products.json";
// import Almoço Pe Luis Carlos  from "./Almoço Pe Luis Carlos .png";

const PrintProducts = (data: any) => {
  let data2 = new Date();
  let dia = String(data2.getDate()).padStart(2, "0");
  let mes = String(data2.getMonth() + 1).padStart(2, "0");
  let ano = data2.getFullYear();
  let dataAtual = dia + "/" + mes + "/" + ano;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  // console.log(data.data);
  return (
    <>
      {data.data.length
        ? data.data.map((e: any, index: number) => {
            let data = [];
            if (e.quantity > 1) {
              for (let index = 1; index <= e.quantity; index++) {
                data.push(
                  <S.Full>
                    <S.PrintCOmponent key={index} id={`print`}>
                      <S.ProdInfo>
                        <div>Almoço Pe Luis Carlos </div>
                        <br />
                        <div>
                          <img
                            src={
                              "data:image/jpeg;base64,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"
                            }
                          />
                        </div>
                        <div>Vale 1 - {e.name}</div>
                      </S.ProdInfo>
                      <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                      <S.InfoAll>
                        <div>
                          <span>{today.toLocaleDateString()}</span>
                          <span>Imbituva-Pr</span>
                        </div>
                        {/* <div>Almoço Pe Luis Carlos </div> */}
                      </S.InfoAll>
                    </S.PrintCOmponent>
                  </S.Full>
                );
              }
            } else {
              data.push(
                <S.Full>
                  <S.PrintCOmponent id="print">
                    {/* <div id="testePrint"> */}
                    <S.ProdInfo>
                      <div>Almoço Pe Luis Carlos </div>
                      <br />
                      <div>
                        <img
                          src={
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFRgSFhUYGRgaGBwcGhkcHR0YHRgaGRocGRwYHBwcIy4lHx8rHxoZJjgoKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQHAf/EAEMQAAIBAgMEBggDBwIFBQAAAAECAAMRBBIhBQYxQSJRYXGBkRMyQlKhscHRYnKSFFNVgqLC0uHwFSMkk7IzQ2Pi8f/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAkEQEBAAICAQQDAQEBAAAAAAAAAQIREiExMkFRYSJCgXHwof/aAAwDAQACEQMRAD8A9ciImBERAREQEREBE48dtOlR9dwD7o1Y+A4eMr2M3sc6U0Cj3m1PkNB8ZNykbMbVtnPXx1JPXqIp6iwv5cZQMTtKtU9eox7L2H6RpPuH2VXf1aT26yMo82sJPP4jePyuL7w4Ye3fuVj9JpO9GH/Gf5fuZA092cQeIRe9v8bzeu6dXm6D9R+kcsvg1ilhvRh/x/pH3m5N4sMfbI71b6CQh3Sq++n9X2ml92MQOGRu5vuBHLL4NYrbR2jRf1aqE9WYX8jrOqedV9j4hPWpP4DOP6bzVh8bVpmyO625XNvFTpHP5hx+HpUSnYPeqoulRFcdY6LfY+QlhwG2KNXRXs3ut0T4cj4SplKy42JCIiUwiIgIiICIiAiIgIiICIiAiJEba22tAZR0nI0Xkva32mW6bJtIYzGJSXO7BR8SeoDmZUtp7y1HutO6L1+2fH2fDzkVVq1a73OZ3bQAfIDkJZNlbsKLPW6R9wcB+Y8+4ad8jlcvCtSeVdwez6tY9BC2urHQeLH/APZYsFuog1quWPuroPPifhLGiBQFUAAcABYDuAmUqYSeWXKufC4ClT9RFXtA18zrOiIlJIia61VUUsxAAB5gXsL2F+ekDZE58BjEqotROBF7G2Yd4BNuE6ICacThEcWdFbvAPkeIm6IFdxu6tNtabFD1HpL8dR5mVzH7JrUfXTo++uq+fLxtPRYI5SbhKqZVRdmbw1aVlY506iekO5voby37P2jTrLmRteanRl7x9eEitqbtI92pWRvd9g+Hs+GnZKs6VaD65kdeB+oPAj4Sd5Y+W6l8PSYkFsTb61bU3sr8jwV+7qPZ5dUnZcsvhNmiIiawiIgIiICIiAiJEbf2sKC5V1dvVHuj3j9Jlumybadv7cFIejQ3qHieIQH+7slVwODqV3yrck6sx4C/tMf93jA4R675F1JN2Y62HNj/AL1l+2fgUooEQd55sesznJcruq9LTsrZaUFsoux9ZzxP2HZO+InWTSCIiAiJEY7b9ND6NAatTkia69pHD4xbpslvhLyB21tLDuDRC+nqa5UUZ8rWIDE8Ba81VcNXrWOIqeiQnSkmrN+Ekak9mvcJk+KoYZcq5aQsNAA9Vu8a5e9ie4SbWyNOwMZSoAUaqehqWszMLB7E2Obhz5yzg31HCV3D7SoYlchKuD/7dSyOPytwY+R7ZimAq0iThahsNTh6nIdl9R3/ABMS6bZurJEhcJvAhb0dZTRfqf1T3N95NAzZZU2WeSIiawnLj8AlZMji/UeanrBnVEDzvauy3oNZtVPquOB+x7JPbvbezWo1T0uCOfa/C3b1Hn87BicMlRSji6niPqOoyhbX2Y1B8p1U+o3WOo9onOy43cXLy6r0OJAbt7Y9IPROemo6JPtqP7h8fOT8uXcTZoiImsIiICIiBox2LWkjVG4KOHWeQHaTPPa1V69TMek7tYAfBR2CSu9e0c7+iU9Gnx7X5+XDznfuns2y/tDDU3Cdi828eHd3znl+V0udTaW2Rs1aCZBqx1dus/Ycp3xE6SaQREwWqpZlDAstswB1W4uLjlcQM5EY3eCkhyIDVfhkTXXtI08rzr2nhhUTKQTY3KhiucDipykcQTbttOHCYTCqM1MOoPNTWF/EHWTd+ypr3aP+H4nEa139En7tOJ/M2v17hN+JFPCIcihFCksyjM5sVQAFud3GpuBbhOnLS96t+qv95qr4CjWVqeZyShtmeppqNbMdQGCnwEN/3whqTYvEG9NfQoeLsTmYfmOp7lAElNnbtUafSe9R+OZ+F+sL97zqTDYkAKKtOwAH/pty09+ZehxX7yl/22/ziT5Lfhz7S3foVtcuR/eTTzHA/OQ1ahjMNxAr014cSy9oI6anuuJYPQ4r95S/7bf5z76LFfvKX6G/ziwl0j9nYhMWuRlzJZtHAzKy5NAy2uLONbA6a3mJ2ViMP0sM+dP3T6j+U6fTxnRhtnU8OozuwcliWUsoJYgmyi9hog8BN/7RR/fP+pvtGvk38eGjB7wIzejqqaL8Mr6Ansb7yZBkLiaeFqjK7l+q7HTuNridOx8IiK2QtkJ6ClmYWHtC/C5vw5ATZtlkSMTCpVVbZmAuwUX5seAHaZnNSTnx+DSshpvwPA81PJhOiIHm2IovQqZT0XQ3BHmGHYZe9kbQFemHGjcGHUw+h4icW82zfSJ6RR00BP5l4keHEePXK5u9tH0NUXPQeyt2dTeB+BM5zrLS/VF+iInRBERATj2tjPQ0nfmBZfzHQffwnZKlvlirulIcFGZu86DyF/1ScrqNxm6hdnYU1qq09ekbsewasf8AfMz0VECgKBYAAAdQGgErm52Esr1iNWOVe4anzNv0yyxhNTbcr2RE0YzFCmhdlYgccozEX52lJY4nGot1uS1r2VS7DtsoNuI4yB3SRlao1XOKjng4YZgNb6jU6nynLtnbVTNmoLUQkLmJS18ubkQesa9k+7P20zqKdapldn0dksEAXokEZRfN19fVIuU26TG8VxEqODp0KuIqGrlKhEy5my6uM5I1HX8Z07S22q9BqykEetTQnyZauhnI+0dmsbmkSfynkLD2uoCbbKTGxKNszA2JtT4e+f8AKV1LjCIw0YsLG1yA9RwbX68g8p1HF7L/AHR8m/yivicDVCU0d6YuOvLoSRfMSFALE37TJuvpU39u+pu3lBY4h9PwL3c5zrsheIr1OfsJytfn2zf6FP4i/wCtfvPhor/Em/Wv+U3UTu/9GttjWAP7Q+vDoJ8ddJspbvMwuMQ41tYoo4eMegX+JN+pf8p99AP4kf1J/lGo3d+f/EXUoEJiaZbPkVgGIAJCPSbgJMYfZ2AKKSKVyoJ6fO2vtTipVcHSZ1qV2qluJAaxzAZrshs17L5T4cTsv3P6XmTX0Xf21baw2HR6XoQnSDq2Vs3FbC+ptxMuaWsLcLad0qS4rZYIIWxHDRx9Z2bP2rRPQTEAC5IzqdATe2ZmF7XAHdKxslZZbPd93wBKJkY51cMFW5NtRmsOo85LYTH03CgPckaBuixtx6JA18JXdq7cWkr06dbNVLBs6qMtvdvcg2HVw85H7N3kbOpruXRTcAKNDlYX0A65nKSnG2L7E5NnY9K6Z0DZb2BYWvbjadctzJ5/t/AehrFQOg3SXuPEeBv4WnoEhN68Jno+kA6VM3/lOjfQ+EnKbisbqtu7eN9LRFz0k6DdtvVPl8QZLSkbqYrJWyHhUFv5hqv1HjLvGN3DKapERKSTzjauI9JWd+tjbuHRX4AS/wC0K2Sk781RiO+xt8bSg7Ho569NOWcE9y9I/AGc8/aKx+V+2dhvR0kp+6oB7+LHzJnRETokmLgWOa1ra34W53vymUQKviGxRZvQ4imtMMQisykgLpxIJtcHnwnM+KxRDU6tEYlLjVNQrABuKjqI+MgaiIz4h7DKuYqOABNRVXh2E+UtO5WGVaTVTcFmIJvplW2tuHG+s5y7rtZxm0RUbILjA+iPAOxbKpOlyGGU+MzFPEHhVwvgaP8AjLJvMynC1DoRZbc9SwsR5yJ3Z2NQegKlRAxLNqSQAFNuR74s70yZdbcn7Li/fwx/7P8AjFJa/SRsLSr5W9dQoAJUHLdbA6H4yR2xsjCrh3qoi3C3VgzEakAEa2PGYboIEw9StbW7c9CEW407yY13pvLrbjNF/wCGr/V9DMfRP/DR/XLJiKtSmAQxcshJvaym6DMBpoM3DuirUdGNPOStlJdst1BZg3IDgummndN4p5K36Jv4b8XmJon+GnzqSz0qzM3o1Ylb6VOiSy5FcAaWv0hrbgOvWfaNV3YpmK5c3SGW7kNlGhBsNNdBc9kcTkrSYqui5KWG/Z87C7tfLoDoS4sJn6THfvqR/mpTv3qGfCLUb1gUOmgudDp4zHYWxMPUw6VHpgsQbnMwvZmHI9kzV3pu5rdcBOOPGpS86M5y7P6+DNV1JVnUvZipI0yDL5SS3h2Fh0w7VKaZWXKQQzG4LAHiT1yR3SVf2ZCoAuWzW5nMRc+AEau9HLrcQKV6wXJRwwoXYZnYEi5soGZxYC5/3rN4/bV6TtSKDVspp3yj1raXva8lN78KHw7Pc3SxAvobkA3HPSUqvQRaVKoBqxcP2lGBHd0WEy9Nnc29Po01VQqABRwtw7+3vmc14cLkXKAFyjKBwAtoB4TZOriTGogZSp4MCD3EWMyiB5mc1Kp+Km/xRv8ASelU3DKGHAgEdxF5RN56OTEv1MFbzFj8QZa93aufDUz1Ar+klR8AJzx6tir42koiJ0Sit5nthn7co82Ere6aXxAPuox+S/3Se3tP/T97r9TIjcxf+a5/B82Wc76ouelcoiJ0QTRjq2Sm9T3UZvIEzfIbeuvkwz/isvmdfgDMt1GybqippRdvedF77BmPxyy47MKphaCMfW6TDXVbs+tuROUeMpla4povWXfzsg+KGejJhWVKQTLmRMupI0KWtcA+0FPhOeMdc6iN53y4JFHtFF07FLf2zfssBMHSVjlDWB1AJDsQQL94/wBOM4d9LJSo0h1n+lQP7pKUFVcPhycmZUQgMQtwVGcXP4SfECV71P6z/XNtxwMFUy+qXIXuNXl2cY3cpM2BypbM2cDNe1ySutpp3nUrhQCLFqtyAb6Euw4acMvCSe7CWw1LtBPmxM2er+F9P9QG19s1kqejcUi4XKcuewzFHFy1vdHnMS4rNmxGIQ3A/wCWjhEAFyAz8+J9UMe2Z754DKwxF7h7KV4G4U2N+4DykXT2JiGAYUHsetgPgdZF3tc1raTR1osDQxCDj0HcOhvpZWGqmwHrAd5m3Zm1qz1WVfQh2JsrFiDqWOVluOvnId9iYgAk4d7DqYH4DWSu5mADO2Ivot0C8TcgEtfuPxib3pl1raR25ScYFlfLmXJ6l7WDqBx14Ru+98D3Bx/UT9Z27zLfDVfyg+TKZF7tLnwbrxs5NtNbZXsb6W75f7fxM7x/ru2ogOGroOC5gB1BbNbuGtuy05dz2LYZ1HEO4HioOniZ2tRVqNd0VRnRgAuW1lQgeqSL3Lech9yGzJWpn8J6vWDKfkJn7Q/WpWrZ8NWQG4CEr3GmrgeBPylLBBwxHNKwPg6H6pL7gsKTmLJkJRUtZQNR0zZTzNv0iUHCqfR16fUqt4pUC/JzMyVh7r/sCrnw1JvwAeK9E/ESQlf3Lq3w+X3XYdwNm+plgl4+HPKatIiJqVR3zTp0260I/Sb/AN079znvRZepz8VU/ec2+q6Uj2v/AGzPcs9CoPxL8QftOf7L/VZYiJ0Qg97h/wBP/OvyMitzD/zXH4P7lk3vOl8M/YVP9QH1le3SqWxFveRh8m+k531Rc9K7xEGdEEqu/VayU6fvMzH+UAf3SyMX5Knix+QX6yCxe7b1iGq4gsQLCyAADssZmW7NRWOpd1VFplqlGn2Iv6zn+bmenyv0d1qasKnpKmYWswKgi2g5GdrbFpt67VH/ADOx+REnGWKyymSub8VL1EUa2QnuJb/SdGH2stMFVal0ejmfOzOBzuoIt2cOyTqbEw68KS+Nz8zOlMFSX1aaDuVftHG72zlNaUbaeMNdQiKBZr5VzFW0tmynge4C99ZK4bF4gUUoph36IUFjcZgDcjgLA8OPOWsC3CaXxKq4Q3uba8tSQPiJvH7OW+tKritlYqvYMiIoOYKGsFJABsATbh8+ud3/AAvGN6+Jy/lLfQCTRxiZQwuQxYC3WgYnj2I0PjFAzcVFsze6CLgnwIPYDGobqGOyMWvqYkn82b65pw4bZGKoghFR1JBK5rhiAQLgkX4/AdUtBxS9ts2TNyzXtbz06rz5+1rlD2Njm/ovfn2GNQ5VW8TiMUaT0Xw5swIBW5ygm4Ate4Ejdm4p8OpR6ZYFswVgyqDa1yOZ4ceFpeVrqSFvqVzAdmg+s2xx+zl7aVF9tq+jBULCxZMwZb6XOgDDXgbjScm5dQJVcMQoKaXNgSGGmvOxMudTCo3rIh71B+YnNU2Nh240k8Oj8pnG72cprTvU31Gs82anlxFan1+mXyDMvxVZcxu/hxqodD+F2H1mh92KWf0geoHvfNcMb9pI1jKWmOUxRm4dXWql/dYDzB+kuEr+C3bNF89KsVNiOkgYEHkdR2SaQ1OYQ9xZfhY/OVjuTVZlZbuN0T4pPMW+M+zUqxvqejSHa/yWfdyx0Kh/EvyM0b6P06a9SsfMgf2zs3NS1J263PwVfvOf7L/VYYiJ0Q5dqUs9GonMo1u+1x8bSibErZK9NvxgeDdH6z0Wea4+gadV0GmVzbuvdT5WnPP2qsfh6VE0YOuHRKg9pQfMajzm+dEkREBERATjx20kpFVa5dvVRRdjynZKtvLSqJWTEqLgBdeIUqToew3+cy3UVJupp9phSqujoXYKtwCCWNvWUkDx1nRUw92LXsSmXu46jt1MjcBtejiLIwyvcEK3AspuCp56jvn3bL4gvTp0wwRiM7qNRrYi/s6azN9bNduxtnKevLmzZeVyhQ2PEaG/fPv7ELMpYkOAGvbpWAW/DQlQAe7lILbdZ8PVQo75SLlWZnBsbH1ieIM6t58VVpqrI+VWOUgDpcCb5vtaNzs1eko+E0IU6Z8+Ui4zZs3LW2bXv7NJimE6JU6Cz2AN7Z731sL8TaQ+LoVWw4r+nqBgisFBsMthxtqWtqSec2YPGVKuEdy7K6B+kLXbKuYX004jUa6RubNJDDBHYlWJam+UnlomUr2jXzkhKxunRZlZg7KA4uoy2bQHW4J7NDNq418RiTRDMtNM18pyl8pA1YagXPLlEvRZ2sUStVsa+GxARnZ6TWIzHMVDG2jHXQjyllmy7ZZoiImsIiICInxmABJ4AXPcIFG3qrZsQw91VX4Zj8Wlm3apZcMnW12/Uxt8LSj13NWozc6jm38x0HxE9IoUwiKg4KoUeAtOePdtVeppsiInRJKdvhhctRag4Otj+Zf9LeUuMj9uYL0tFkA6Q6S/mXl4i48ZOU3G43VR25+LzU2pHihuPytr/wCV/OWGedbGxvoaq1PZ9Vvynj5aHwnooPOMLuNynZERKSREQE5BjUNVqBsGygi/tg3uB3dU04TbCPWeiAQVv0uTZTY2/wB8p11MMjXLIpvYG4Bvbh5Xmb34brXlVN58AlNkan0Wa/QHIi1mUctZ04/H1Grph3colkzkHKWLKCelyF9JO0dmUUbOqLm943JHdfhMsVs+lUsXRWI4E8e645SeNbuKrvNTpo6KgAsDmI11uD0m5m3X1iSO+LD0adr38Mp1+IndtGlh0VEampUuFVALWLGxYfWdLbNoWF6aWUWFwDYcba+Ma8t34cNdh+w3/wDgX/xA+c4dhC+Drgan/mad9MWkkFok+jOHIp3uGKdDNwJtxA/ERad2HwdNDmRFUkWuoA08I1um9RBbn1VCOCwBzjQm3EAD4zm2apo41kfTPmCnrDHMp8bW75Y02bRDZxTQNe98o49Y6jM8ThEqCzorW4XGo7jxE3jdT6Zvuq5vJSNTE06S6tlAPZdibnuGstUgjhayYhfRIopG2Y6G49rMx6V+rwk7NxndL4hERNSREQEh958XkoMoPSfoDuPrfC48ZMSibzY70lYqD0afRHafaPnp4ScrqKxm6bsYXPXVuVMZz38F+Jv4S9yF3WwWSjnI6VTpdy+yPmfGTUYzUMrukREpJERAou82zvR1S4HQe5HY3tL9fHsk1urtHOnoWPSQadqcvLh3WkrtTArWptTPHip91hwP++RMoKO9Cpf1XRuHzHaCPgZzv45bXO5p6TE5dnY1KyCovPiOatzBnVOiCc+Pr5KbOOIHRHWx0UeZE6JD7QxNN6iUfSAWJdiGAIKjoLc6Xub2/DMt6bIg8dQ/ZcRTqDhZST1kDK/nx/mlyYZlsGIuNGFja/MXuJXd5sGopZzUZmUjKGZTcHQ2AA7D4Ts3d2ijUVVmAZBlIJA0HBteVra9knHq2Kvc2itjmpVr1Eeo5spBINiQrWsPdubcPrCBsPjFpqzFGKixN9H017Qec+bs1V/aanSHSDZdeN3B08J82rWX9uRswsrU7m+gsdbmT7b+2++jb9L/AKqmMzHNkOp9W7kdHq4ST25imw9IKjMWdiAzHMVFtSCfDznBvGcuJpVD6lk6XLouSfgROreSmK9IVKZD+jY3ynNoQL8ONtJvzo+Hyvs+2GFVWcVQgcvma5uMzA68LfKZ4DaD1sM7ZyroGuwA6VlzA2I587dU+ptBDgi2YXFPIRfXNlyAW7eM0bHw5pYWq79HOrEA6aZCF8Sb/CPfr4Z7d/LVu/Raur53qWzC9mILEjmeoW4dsbv1XTEPh8xZBnGpvqp0I6tJs3NqKEqLmF8wNr8rce6c2y6yftztmFiz2N9Dc6WMyeJW33bNqVai4pKZqOULowHAC7cOja/DnOnbmNZq6YVGKqSucqbE5jwvy0+c4ttVk/bUOYWUpmN9BZiTeZ7wUzTxFPEgXQlCSNQCpGniOEb8knhv27TOGKVaJKi+VluSraXFwT2GT2DxAdEqD2lBt1X4iQe9NZXSmiEOzuCoXUkWIvp3iTWzsOadJEPFVAPfz+Mueam+I6YiasViFpoajGyqLn7DtlJR+8G0fQ07A9N7hezrbw+ZEqGxdnmtVVPZHSc/hHLx4eMw2jjHr1C5HHRVGthyUdv1Muuwtm+gp2Prtq57eS9w+85+rL6X6YkgLaRETogiIgIiICQW8mx/Sr6RB01Go99Ry7xy8uqTsTLNzTZdPO9kbSag+YaqdHXrH3Ev2GxKVFDobqeB+h6jK/vFsLNetSHS4ug9r8S9vWOffxgtk7Vag111U+snI9o6j2yJbjdVVnLuPQ5p/Zk9xP0j7THA41KyZ0NxzHNT1Ecp0Tp5QwekjcVU24XANvOYjDp7ifpH2m2IGisiIrVMi9AFtFF+iL6duk0u9EZgUW6lb9Ee3wPb/oZ1VUDKUPBgQe4ixmt8IjXJFyQRe+tmAB+AENaK2IpkOjJcINQQpGgHAeMzbEhMyhCAigm2UCxvawv+EzN8GhzE36V76+9lBt35V8pm+HU5ri+dQrdwvbu4mZ2dOV1oq9zTQG5GfKvEJn48eF/IzetRHJQrquUkMAbXGnZ1jwmZw6kWIv0g2vG4tY/ATEYVb5ra63vre5za9eo06o0Odq9NSw9GNOiSAutyq2v1dMceozoo00ZQwRRfrVbjyn1sMpDDWzMGPeLW/wDETOlTCjKOHIdXYOzsjQxOHT3F/SPtMygtlsLWta2luq0yiaxpo4SmhuiIp61UA/ATdE1YnEIil3YKo5n5DrPZAzqVFUFmIAAuSeAEou3dsGu1luEU9Ee8feP06p823tlq5yi6oDovNvxN9uU7d3thZ7Vag6HFVPt9p/D8+7jzyy5XUXJruundjY9rYhxr7Cnl+I/Tz6pZ4iXJqJt2RETWEREBERAREQEgNubvipepTsr8SvAP9m+fxk/EyyXy2XTzahWq0Hut0ddCD8mHMS3bL3ip1LK9qb9vqt3E8O4/Gdu0tl064s46Q4ONGH3HYZT9p7Cq0bm2dPfUcPzDiPl2yNZY+FdZL9E8/wBnbbrUbANmT3W1HgeI+UsuC3movo96bduq/qH1tKmUrLjYm4mNN1YZlYMOsEEeYmUpJERAREQERPjMALkgDrOggfYkPjd4qCaBs7dSaj9XDyvK5tDeGtUuoORepeJ724+VpNykVMbVm2pt2nRut87+6Dw/MeXzlNx2PqV3Bc35Ko4C/JR1/GZ7N2RVrHoLZebtovh1+EuWytjU6Go6T83PH+UchJ/LL/G9YorYm7lrVKw14hOrtb7efVLPES5JPCbdkRE1hERAREQEREBERAREQERECJ2hsCjVubZG95dL968D85XsZu1XTVLOOzRv0n6Ey7xJuMqplY8zBqUm9um3ihnfQ3ixCe2GH4lB+IsfjL3UpqwswBHUQCPjI+tsHDvxpgflJX4A2k8bPFbuXyg6e9r+1TQ9xK/O83LvcOdE+D//AFnS+6lE8HceIPzE0ndJOVVv0g/WPyPxYne5eVE/rH2ml97X9mko72J+QE3jdFP3rfpH3m1N06I4u58VH0j8j8UNX3lxDcGVPyqPm15G1K1SqbMz1D1XLeQl4o7v4dfYzH8RLfC9vhJClRRBZFVR1KAPlHG3zTcnhSMHu7iH1KhB1vof0jXztLDgN26KWL3dvxer4L97yaiVMZGXK0A5RESkkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k="
                          }
                        />
                      </div>
                      <div>Vale 1 - {e.name}</div>
                    </S.ProdInfo>
                    <S.ValueProd>
                      {e.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </S.ValueProd>
                    <S.InfoAll>
                      <div>
                        <span>{today.toLocaleDateString()}</span>
                        <span>Imbituva-Pr</span>
                      </div>
                      {/* <div>Almoço Pe Luis Carlos </div> */}
                    </S.InfoAll>
                    {/* </div> */}
                  </S.PrintCOmponent>
                </S.Full>
              );
            }
            return data;
          })
        : ""}
    </>
  );
};

export default PrintProducts;
