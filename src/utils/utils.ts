// 手机号 加星
export function processingTel(tel: string) {
    tel = "" + tel;
    var ary = tel.split("");
    ary.splice(3, 4, "****");
    var tel1 = ary.join("");
    return tel1
}

// 时间 格式化成 2018-12-12 12:12:00
export function timestampToTime(timestamp: Date | any, dayMinSecFlag: boolean) {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + "-";
    const M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
    const D =
        date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
    const h =
        date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
    const m =
        date.getMinutes() < 10
            ? "0" + date.getMinutes() + ":"
            : date.getMinutes() + ":";
    const s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if (!dayMinSecFlag) {
        return Y + M + D;
    }
    return Y + M + D + h + m + s;
}

//判断一个字符串中出现次数最多的字符及次数
export function maxstrString(stringList: string): string {
    console.log(stringList.split('').sort(), '排序')
    var maxLength = 0;
    var maxStr = '';
    var count = 1;
    // 比较字符串相邻位置是否相同
    for (let i = 0; i < stringList.length; i++) {
        // 如果相同，说明字符串相同，让count +1
        if (stringList[i] == stringList[i + 1]) {
            ++count;
            // maxLength是最大的出现个数，如果相邻个数大于maxLength则说明字符串个数比定义的最大个数大，则最大个数设置为它，最大值为单前的值
            if (count > maxLength) {
                console.log(count, '123');

                maxLength = count;
                maxStr = stringList[i];
            }
        } else {
            count = 1
        }
    }
    return '出现次数最多' + maxStr + '出现次数最多个数' + maxLength

}