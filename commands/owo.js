module.exports = {
name: "$alwaysExecute",
$if: "old",
code: `
$if[$message==owo]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
$if[$message==Owo]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
$if[$message==OwO]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
$if[$message==oWo]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
$if[$message==owO]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
$if[$message==OWO]
$setGlobalUserVar[totalowo;$sum[$getGlobalUserVar[totalowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[monthlyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[weeklyowo];1]]
$setGlobalUserVar[monthlyowo;$sum[$getGlobalUserVar[dailyowo];1]]
$globalUserCooldown[11s;]
$endif
`
