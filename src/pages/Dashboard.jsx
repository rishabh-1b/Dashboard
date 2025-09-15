import {
  CalendarIcon,
  ChevronDownIcon,
  FileTextIcon,
  InfoIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/Tabs";

export const Dashboard = () => {
  const summaryCards = [
    {
      title: "Conversions ROAS:",
      value: "0.00%",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$6,109.89",
      change: "+27.42%",
      changeColor: "text-[#4bce00]",
    },
    {
      title: "Conversions ROAS:",
      value: "0.00%",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$2,101",
      change: "0%",
      changeColor: "text-[#ff7200]",
    },
    {
      title: "Conversions ROAS:",
      value: "$2.91",
      change: "0%",
      changeColor: "text-[#ff7200]",
    },
    {
      title: "Conversions ROAS:",
      value: "0",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$0.00",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
  ];

  const chartYAxisLabels = [
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
  ];

  const chartXAxisLabels = [
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
  ];

  const topListCampaigns = [
    {
      name: "Discovery (LOC)",
      location: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversion: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionChange: "0%",
    },
    {
      name: "Competitor (LOC)",
      location: "India",
      spend: "$6,109.89",
      installs: "$121",
      conversion: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionChange: "0%",
    },
    {
      name: "Today tab (LOC)",
      location: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversion: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionChange: "0%",
    },
  ];

  const biggestChangesCampaigns = [
    {
      name: "Discovery (LOC)",
      location: "India",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Competitor (LOC)",
      location: "India",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Today tab (LOC)",
      location: "India",
      spend: "$6,109.89",
      change: "+27.42%",
    },
    {
      name: "Branding (LOC)",
      location: "India",
      spend: "$6,109.89",
      change: "+27.42%",
    },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-[1399px] relative">
        <aside className="fixed w-[60px] h-[849px] -top-2.5 -left-1 bg-[#ff5900]">
          <div className="flex flex-col items-center pt-[43px] space-y-4">
            <div className="w-7 h-7 bg-[#f9f9f9] rounded-[14px]" />

            <div className="w-[60px] h-[388px] relative mt-[76px]">
              <div className="w-[58px] h-[27px] bg-[#ffffff57] ml-0.5" />
              <img
                className="w-7 h-[388px] absolute top-0 left-[18px]"
                alt="Frame"
                src="/frame-2147224181.svg"
              />
              <div className="w-[3px] h-[27px] absolute top-0 left-0 bg-white" />
            </div>

            <img
              className="w-[26px] h-[142px] mt-auto mb-[171px] pb-5"
              alt="Frame"
              src="/frame-2147224182.svg"
            />
          </div>
        </aside>

        <main className="ml-[93px] w-[80%]">
          <div className="flex items-center gap-4 mb-8">
            <header className="pt-6">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal] mb-2">
              Overview dashboard
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[15px] tracking-[0] leading-[normal]">
              A consolidated view of your app efficiency by storefronts and key
              metrics.
            </p>
          </header>
            <div className="w-[238px] h-[41px] bg-white rounded-xl border border-solid border-[#bdbdbd] flex items-center px-3">
              <FileTextIcon className="w-[22px] h-[22px] text-gray-600" />
              <span className="ml-4 [font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[15px] flex-1">
                Pdf Name
              </span>
              <ChevronDownIcon className="w-6 h-6 text-gray-600" />
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-[40px] h-[40px] text-gray-600" />
              <div className="flex flex-col">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[13px]">
                  Last 7 Days
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-black text-lg">
                  Jul 5 - Jul 11, 2025
                </span>
              </div>
            </div>
          </div>

          <div className="w-[1314px] bg-[#fefefe] shadow-[inset_0px_4px_29.1px_#0000000a] p-[51px]">
            <section className="mb-12">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] mb-6">
                Total Summary
              </h2>

              <div className="grid grid-cols-7 gap-5">
                {summaryCards.map((card, index) => (
                  <Card
                    key={index}
                    className="w-[158px] h-[98px] bg-white rounded-[6.8px] shadow-[0px_4px_13.3px_#00000008] border-0"
                  >
                    <CardContent className="p-2.5">
                      <div className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm tracking-[0] leading-[normal] mb-2">
                        {card.title}
                      </div>
                      <div className="[font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] mb-2 whitespace-nowrap">
                        {card.value}
                      </div>
                      <div
                        className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal] ${card.changeColor}`}
                      >
                        {card.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-[43px]">
              <section>
                <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-6">
                  Storefronts
                </h2>

                <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                  <CardContent className="p-0 relative">
                    <div className="absolute top-[30px] left-[21px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm tracking-[0] leading-[normal]">
                      Spend
                    </div>

                    <img
                      className="absolute w-[140px] h-9 top-[18px] left-[433px] object-cover"
                      alt="Image"
                      src="/image-26.png"
                    />

                    <img
                      className="w-[598px] h-px absolute top-[73px] -left-px object-cover"
                      alt="Line"
                      src="/line-3.svg"
                    />

                    <div className="w-[580px] h-[328px] absolute top-[81px] left-[11px]">
                      <img
                        className="w-[580px] h-[293px] absolute top-0 left-0"
                        alt="Image"
                        src="/image-25.png"
                      />

                      <div className="absolute top-[285px] left-[195px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2abd] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                        $6.11k
                      </div>

                      <div className="absolute top-[285px] left-[517px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2abd] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                        $6.11K
                      </div>

                      <img
                        className="absolute w-[34px] h-[70px] top-[258px] left-3 object-cover"
                        alt="Image"
                        src="/image-27.png"
                      />

                      <div className="absolute w-[332px] h-[18px] top-[307px] left-52 bg-[#ff8800]" />

                      <InfoIcon className="absolute w-4 h-4 top-[306px] left-[555px] text-gray-600" />
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-6">
                  Trends
                </h2>

                <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                  <CardContent className="p-0 relative">
                    <div className="absolute top-2 left-[21px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                      +
                    </div>

                    <div className="absolute w-3.5 h-3.5 top-[31px] left-[81px] bg-[#ff8800]" />

                    <div className="absolute top-[27px] left-[100px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm tracking-[0] leading-[normal]">
                      Spend
                    </div>

                    <img
                      className="absolute w-[175px] h-[35px] top-[19px] left-[402px] object-cover"
                      alt="Image"
                      src="/image-28.png"
                    />

                    <div className="absolute w-[489px] h-[263px] top-[75px] left-20 bg-[url(/image-29.png)] bg-cover bg-[50%_50%]">
                    </div>

                    {chartYAxisLabels.map((label, index) => (
                      <div
                        key={`y-${index}`}
                        className="absolute left-8 text-[#ff8800] text-[11px] whitespace-nowrap [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal]"
                        style={{ top: `${94 + index * 46}px` }}
                      >
                        {label}
                      </div>
                    ))}

                    {chartXAxisLabels.map((label, index) => (
                      <div
                        key={`x-${index}`}
                        className="absolute w-7 top-[340px] [font-family:'Inter',Helvetica] font-normal text-[#838383] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap"
                        style={{ left: `${67 + index * 79}px` }}
                      >
                        {label}
                      </div>
                    ))}

                    <div className="absolute w-3.5 h-3.5 top-[391px] left-12 bg-[#ff8800]" />

                    <div className="absolute top-[387px] left-[67px] [font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm tracking-[0] leading-[normal]">
                      India
                    </div>

                    <img
                      className="w-[598px] h-px absolute top-[372px] -left-px object-cover"
                      alt="Line"
                      src="/line-3.svg"
                    />

                    <img
                      className="absolute w-[13px] h-[13px] top-[394px] left-[564px]"
                      alt="Group"
                      src="/group.png"
                    />
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-6">
                  Top List
                </h2>

                <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                  <CardContent className="p-0">
                    <Tabs defaultValue="campaigns" className="w-full">
                      <div className="flex items-center justify-between px-8 py-8">
                        <TabsList className="bg-transparent p-0 h-auto">
                          <TabsTrigger
                            value="campaigns"
                            className="[font-family:'Inter',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                          >
                            Campaigns
                          </TabsTrigger>
                          <TabsTrigger
                            value="adgroups"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 mr-8"
                          >
                            Ad Groups
                          </TabsTrigger>
                          <TabsTrigger
                            value="keywords"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 mr-8"
                          >
                            Keywords
                          </TabsTrigger>
                          <TabsTrigger
                            value="ads"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent  rounded-none px-0"
                          >
                            Ads
                          </TabsTrigger>
                        </TabsList>
                      </div>

                      <div className="w-[598px] h-[3px]">
                        <img
                          className="w-[598px] h-px absolute object-cover"
                          alt="Line"
                          src="/line-3.svg"
                        />
                        <div className="w-[90px] h-[3px] bg-[#ff8800] ml-8" />
                      </div>

                      <TabsContent value="campaigns" className="mt-0">
                        <div className="px-8 py-4">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                              Spend
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0"
                            >
                              <ChevronDownIcon className="w-5 h-5" />
                            </Button>
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] ml-8">
                              Installs
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0"
                            >
                              <ChevronDownIcon className="w-6 h-6" />
                            </Button>
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] ml-8">
                              Conver...
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0"
                            >
                              <img
                                className="w-3 h-[7px]"
                                alt="Vector"
                                src="/vector.svg"
                              />
                            </Button>
                          </div>

                          <div className="space-y-0">
                            {topListCampaigns.map((campaign, index) => (
                              <div
                                key={index}
                                className="flex items-center py-4 border-b border-gray-200 last:border-b-0"
                              >
                                <div className="w-[13px] h-[13px] bg-[#46a756] rounded-[6.5px] mr-4" />

                                <div className="flex-1">
                                  <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                                    {campaign.name}
                                  </div>
                                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#747474] text-sm tracking-[0] leading-[normal]">
                                    {campaign.location}
                                  </div>
                                </div>

                                <div className="flex items-center gap-8">
                                  <div className="w-[117px] bg-[#ffce84] p-2 text-center">
                                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px] tracking-[0] leading-[normal]">
                                      {campaign.spend}
                                    </div>
                                    <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs tracking-[0] leading-[normal]">
                                      {campaign.spendChange}
                                    </div>
                                  </div>

                                  <div className="w-[117px] bg-[#f4f8f9] p-2 text-center">
                                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px] tracking-[0] leading-[normal]">
                                      {campaign.installs}
                                    </div>
                                    <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs tracking-[0] leading-[normal]">
                                      {campaign.installsChange}
                                    </div>
                                  </div>

                                  <div className="w-[117px] border border-[#9b9b9b] p-2 text-center">
                                    <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px] tracking-[0] leading-[normal]">
                                      {campaign.conversion}
                                    </div>
                                    <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs tracking-[0] leading-[normal]">
                                      {campaign.conversionChange}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] mb-6">
                  Biggest Changes
                </h2>

                <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                  <CardContent className="p-0">
                    <Tabs defaultValue="campaigns" className="w-full">
                      <div className="flex items-center justify-between px-8 py-8">
                        <TabsList className="bg-transparent p-0 h-auto">
                          <TabsTrigger
                            value="campaigns"
                            className="[font-family:'Inter',Helvetica] font-bold text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                          >
                            Campaigns
                          </TabsTrigger>
                          <TabsTrigger
                            value="adgroups"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 mr-8"
                          >
                            Ad Groups
                          </TabsTrigger>
                          <TabsTrigger
                            value="keywords"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0 mr-8"
                          >
                            Keywords
                          </TabsTrigger>
                          <TabsTrigger
                            value="ads"
                            className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-0"
                          >
                            Ads
                          </TabsTrigger>
                        </TabsList>
                      </div>

                      <div className="w-[598px] h-[3px]">
                        <img
                          className="w-[598px] h-px absolute object-cover"
                          alt="Line"
                          src="/line-3.svg"
                        />
                        <div className="w-[90px] h-[3px] bg-[#ff8800] ml-14" />
                      </div>

                      <TabsContent value="campaigns" className="mt-0">
                        <div className="px-14 py-4">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                              Spend
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto p-0"
                            >
                              <ChevronDownIcon className="w-6 h-6" />
                            </Button>
                          </div>

                          <div className="space-y-0">
                            {biggestChangesCampaigns.map((campaign, index) => (
                              <div
                                key={index}
                                className="py-4 border-b border-gray-200 last:border-b-0"
                              >
                                <div className="flex items-center">
                                  <div className="w-[13px] h-[13px] bg-[#46a756] rounded-[6.5px] mr-4" />

                                  <div className="flex-1">
                                    <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                                      {campaign.name}
                                    </div>
                                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#747474] text-sm tracking-[0] leading-[normal]">
                                      {campaign.location}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4">
                                    <div
                                      className={`w-[95px] h-7 ${index === 0 ? "bg-[#ff6100]" : index === 1 ? "bg-[#ff6100]" : index === 2 ? "bg-[#f7ce02]" : "bg-[#f7ce02]"}`}
                                    />

                                    <div className="text-right">
                                      <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px] tracking-[0] leading-[normal]">
                                        {campaign.spend}
                                      </div>
                                      <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs tracking-[0] leading-[normal]">
                                        {campaign.change}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};