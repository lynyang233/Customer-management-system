/**
 * 客户管理系统：
 * 公司开发了一套客户端管理系统，
 * 公司有员工，可以查看所有员工的信息、修改员工的电话号码，可以调换指定员工所在的部门，
 * 公司可以查看目前系统中所有的客户，可以给根据id查询到某一个客户，并给客户打电话。 
 */

class Emp {
    constructor(name, gender, tel, part) {
        this.name = name;
        this.gender = gender;
        this.tel = tel;
        this.part = part;
    }
}
class Cli {
    constructor(id, name, gender, tel) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.tel = tel;
    }
}
class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.emps = []; //当前这个属性代表公司所有的员工
        this.clis = []
    }
    showEmps() {
        console.info("查询公司的所有员工，信息如下：");
        if (this.emps.length == 0) {
            console.info("当前公司事皮包公司")
        } else {
            for (let i = 0; i < this.emps.length; i++) {
                console.info("名字为：" + this.emps[i].name + "    电话为：" + this.emps[i].tel + "       部门为：" + this.emps[i].part);
            }
        }
    }
    changeTel(checkName, afterTel) {
        // var checkName = prompt("请输入需要更改号码的员工名字：")
        for (var i = 0; i < this.emps.length; i++) {
            if (checkName == this.emps[i].name) {
                // var afterTel = prompt("请输入更改后的电话：")
                this.emps[i].tel = afterTel
            }
        }
    }
    changePart(checkName, afterPart) {
        // var checkName = prompt("请输入需要更改号码的员工名字：")
        for (var i = 0; i < this.emps.length; i++) {
            if (checkName == this.emps[i].name) {
                // var afterPart = prompt("请输入更改后的部门：")
                this.emps[i].part = afterPart
            }
        }
    }
    showClis() {
        console.info("查询公司的所有客户，信息如下：");
        if (this.clis.length == 0) {
            console.info("暂无客户！")
        } else {
            for (let i = 0; i < this.clis.length; i++) {
                console.info("id为：" + this.clis[i].id + "     名字为：" + this.clis[i].name + "    电话为：" + this.clis[i].tel);
            }
        }
    }
    showId(checkId) {
        // var checkId = prompt("请输入用户Id：")
        for (let i = 0; i < this.clis.length; i++) {
            if (checkId == this.clis[i].id) {
                console.info("名字为：" + this.clis[i].name + "    电话为：" + this.clis[i].tel);
                console.info("正在电话给" + this.clis[i].name)
            }
        }
    }

}
let com1 = new Company("蜗牛创新科技有限公司", "孵化园");
var emp1 = new Emp("A1", "female", "123", "Web")
var emp2 = new Emp("A2", "female", "456", "java")
var emp3 = new Emp("A3", "female", "789", "UI")
var cli1 = new Cli("1", "k1", "male", "999")
var cli2 = new Cli("2", "k2", "male", "666")
var cli3 = new Cli("3", "k3", "male", "333")
com1.emps.push(emp1);
com1.emps.push(emp2);
com1.emps.push(emp3);
com1.clis.push(cli1);
com1.clis.push(cli2);
com1.clis.push(cli3);
com1.showEmps()
com1.changeTel("A1", "9999999")
com1.changePart("A2", "UI")
console.info("====================更改后=================")
com1.showEmps()
com1.showClis()
com1.showId("2")