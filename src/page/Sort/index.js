import React, { Component } from "react";
import SearchTab from "../../component/SearchTab";
import Footer from "../../component/Footer";
import SortItem from "./sortItem";
import $ from "jquery";

import shirt from "../../images/sort/t-shirt.png";
import shoes from "../../images/sort/shoes.png";
import bottle from "../../images/sort/bottle.png";
import ring from "../../images/sort/ring.png";
import cake from "../../images/sort/cake.png";
import diamond from "../../images/sort/diamond.png";
import brush from "../../images/sort/brush.png";
import cart from "../../images/sort/cart.png";
import car from "../../images/sort/car.png";
import sofa from "../../images/sort/sofa.png";
import phone from "../../images/sort/phone.png";

import "./index.css";
const data = [
    {
      key: "1",
      title: "女装男装",
      color: "#f56293",
      img: shirt,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "2",
      title: "鞋类箱包",
      color: "#aa72d2",
      img: shoes,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "3",
      title: "母婴用品",
      color: "#f56293",
      img: bottle,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "4",
      title: "护肤彩妆",
      color: "#aa72d2",
      img: ring,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "5",
      title: "汇吃美食",
      color: "#97b921",
      img: cake,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "6",
      title: "珠宝配饰",
      color: "#f56293",
      img: diamond,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "7",
      title: "家装建材",
      color: "#b58571",
      img: brush,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "8",
      title: "家居家纺",
      color: "#b58571",
      img: sofa,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "9",
      title: "百货市场",
      color: "#b58571",
      img: cart,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "10",
      title: "汽车用品",
      color: "#52a0ea",
      img: car,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    },
    {
      key: "11",
      title: "手机数码",
      color: "#0dc3ce",
      img: phone,
      result: [
        {
          name: "潮流女装",
          list: [
            "羽绒服",
            "毛呢大衣",
            "毛衣 ",
            "冬季外套",
            "新品",
            "裤子",
            "连衣裙 ",
            " 腔调"
          ]
        },
        {
          name: "时尚男装",
          list: [
            "秋冬新品",
            "淘特莱斯",
            "淘先生",
            "拾货",
            "秋冬外套",
            "时尚套装",
            "潮牌",
            "爸爸装"
          ]
        },
        {
          name: "性感内衣",
          list: [
            "春新品",
            "性感诱惑",
            "甜美清新",
            "简约优雅 ",
            "奢华高贵",
            "运动风",
            "塑身",
            "基础内衣"
          ]
        },
        {
          name: "羽绒服 ",
          list: [
            "轻薄款",
            "长款",
            "短款",
            "毛领 ",
            "加厚",
            "被子 ",
            "鹅绒",
            "新品"
          ]
        },
        {
          name: "秋外套",
          list: [
            "秋款",
            "夹克",
            "卫衣",
            "西装",
            "风衣",
            "皮衣",
            "毛呢外套",
            "薄羽绒"
          ]
        },
        {
          name: "文胸",
          list: [
            "无钢圈 ",
            "无痕文胸",
            "蕾丝内衣",
            "蕾丝",
            "大码文胸",
            "运动文胸",
            "聚拢文胸",
            "隐形"
          ]
        },
        {
          name: "呢外套",
          list: [
            "廓形 ",
            "双面呢",
            "羊绒 ",
            "中长款",
            "短款",
            "毛领 ",
            "设计师款",
            "系带"
          ]
        },
        {
          name: "毛衣",
          list: [
            "马海毛 ",
            "貂绒",
            "羊绒",
            "中长款",
            "短款",
            "毛领",
            "设计师款",
            "卡通"
          ]
        },
        {
          name: "男士裤子",
          list: [
            "休闲裤",
            "工装裤",
            "运动裤",
            "长裤",
            "牛仔裤",
            "小脚裤",
            "哈伦裤",
            "直筒裤"
          ]
        }
      ]
    }
  ];
class Sort extends Component {
    componentDidMount(){
        $(function() {
            var $sideBar = $(".sideBar"),   
                $window = $(window),   
                offset = $sideBar.offset(),   
                topPadding = 100;   
        
            $window.scroll(function() {   
                if ($window.scrollTop() > offset.top) {   
                    $sideBar.stop().animate({   
                        marginTop: $window.scrollTop() - offset.top + topPadding   
                    });   
                } else {   
                    $sideBar.stop().animate({   
                        marginTop: 0   
                    });   
                }   
                if($window.scrollTop()>0){
                    $sideBar.children().eq(0).css('background-color',`${data[0].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>380){
                    $sideBar.children().eq(1).css('background-color',`${data[1].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>670){
                    $sideBar.children().eq(2).css('background-color',`${data[2].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>880){
                    $sideBar.children().eq(3).css('background-color',`${data[3].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>1100){
                    $sideBar.children().eq(4).css('background-color',`${data[4].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>1380){
                    $sideBar.children().eq(5).css('background-color',`${data[5].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>1670){
                    $sideBar.children().eq(6).css('background-color',`${data[6].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>1920){
                    $sideBar.children().eq(7).css('background-color',`${data[7].color}`).siblings().css('background-color','#eee')
                }
                if($window.scrollTop()>2100){
                    $sideBar.children().eq(8).css('background-color',`${data[8].color}`).siblings().css('background-color','#eee')
                }
            }); 
            $sideBar.children().click(function(){
                var index = $(this).index()
                $(this).css('background-color',`${data[index].color}`).siblings().css('background-color','#eee')
            })
        });
    }

  render() {
    return (
      <div className={"sort"}>
        <SearchTab />
        <div className={"wrapper"} style={{ display: "flex" }}>
          <div className={"sideBar"} style={{ marginRight: 24 }}>
            <div className={"sideBar-item"}>
              <a href="#1">
                <img src={shirt} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#2">
                {" "}
                <img src={shoes} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#3">
                <img src={bottle} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#4">
                <img src={ring} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#5">
                <img src={cake} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#6">
                <img src={diamond} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#7">
                <img src={brush} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#8">
                <img src={sofa} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#9">
                <img src={cart} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#10">
                <img src={car} alt="" />
              </a>
            </div>
            <div className={"sideBar-item"}>
              <a href="#11">
                <img src={phone} alt="" />
              </a>
            </div>
          </div>
          <SortItem data={data} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Sort;
