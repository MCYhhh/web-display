<template>
  <div>
  <div class="title">休闲农业与乡村旅游产业发展历程</div>
  <div class="bigBox">
    <div class="items">
      <template v-for="(item, index) in timeDataList">
        <div :key="index" class="itembox">
          <div class="item">
            <div class="line">
              <div class="gardenbox">
                <div class="garden">
                  <div class="garden2"></div>
                </div>
              </div>
            </div>
            <div class="valuebox">
              <h4>{{ item.value }}</h4>
              <div style="white-space: pre-wrap;">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "NowHome",
  props: {
    timeDataList: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            value: '1978年-1997年萌芽阶段',
            content:'• 改革开放初，中国经济开始恢复和快速发展，靠近城市和景区的农民，自发举办西瓜节、荔枝节、桃花节等节庆活动，吸引城市居民去品尝、观光旅游，这是中国休闲农业和乡村旅游的萌芽。\n'+
              '• 1989年，“中国农民旅游协会”更名为“中国乡村旅游协会”，标志着全社会开始关注乡村旅游。20世纪90年代初，以华西村建立农民旅行社为标志，农亚旅游市场开始形成，一些村镇开始兴办旅游企事业，有计划地开发农业旅游资源。'
          },
          {
            id: 2,
            value: '1998-2005年初步发展阶段',
            content: '• 1998年，原国家旅游局推出“华夏城乡游”，提出“吃农家饭，住农家院，做农家活，看农家景，享农家乐”的口号；1999年推出“生态旅游年”活动；2001年出台了《农业旅游发展指导规范》，公布了首批农业旅游示范点；2004年在全国评出203个农业旅游示范点。'
          },
          {
            id: 3,
            value: '2006-2015年快速增长阶段',
            content:'• 2006年原国家旅游局，出台了《关于促进农村旅游发展的指导意见》2010年原农业部组织编制了《全国休闲农业发展“十二五”规划》; 2014年审定了《休闲农亚术语、符号规范》《农家乐设施与服务规范》两项标准。同年国务院发布的《关于促进旅游业改革发展的若干意见》提出了“大力发展乡村旅游”的具体指导意见。'
          },
          {
            id: 4,
            value: '创意发展阶段',
            content:'• 休闲农业结合了文化、科技等元素，以科技为先导、创意为核心，逐步向创意农业方向发展。创意农业是中国农业发展的新兴热点领域，成为引领农业功能拓展和产业转型升级的重要创新手段。根据休闲农业和乡村旅游发展“十三五”规划，到202o年，全国休闲农业布局将更优化、类型更丰富、功能更完善、特色更鲜明。'
          },
        ]
      },
    },
  },
}
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.title{
  font-size: large;
  font-weight: 700;
}
.bigBox {
  width: 100%;
  position: relative;
}
.items {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width:80%;
  display: flex;
  flex-wrap: wrap;
}
.itembox {
  width: 50%;
  border-right: 4px solid rgba(0, 61, 165, 0.22);
  position: relative;
  padding-right: 70px;
}
.items .itembox:nth-child(even) {
  border-right: none;
  padding-right: 0;
  padding-left: 70px;
  margin-top: 100px;
  padding-bottom: 0;
}
.items .itembox:last-child {
  padding-bottom: 100px;
}
.line {
  position: absolute;
  top: 20%;
  right: -70px;
  z-index: -2;
  width: 80px;
  border-bottom: 4px solid rgba(0, 61, 165, 0.22);
}
.line .gardenbox {
  height: 100%;
  position: relative;
}
.line .garden {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background: rgba(0, 61, 165, 0.22);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(55%, 55%);
}

.line .garden2 {
  width: 16px;
  height: 16px;
  background: #004fae;
  border-radius: 50%;
}

.items .itembox:nth-child(even) .line {
  right: inherit;
  left: -70px;
}
.items .itembox:nth-child(even) .line .garden {
  right: inherit;
  left: 0;
  transform: translate(-55%, 55%);
}
.item {
  background: #ffffff;
  box-shadow: 1px 1px 20px 0 #dae5f6;
  border-radius: 4px;
  position: relative;
}
.valuebox {
  text-align: center;
}
</style>
