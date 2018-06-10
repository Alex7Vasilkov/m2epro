import { Injectable } from '@angular/core';
import {Article, Knowledge} from './knowledge.model';
import {Observable} from 'rxjs/internal/Observable';
import {from} from 'rxjs/internal/observable/from';
import {Comments, Idea, Suggestion} from './idea.model';
import {ModelModule} from './model.module';

@Injectable({
  providedIn: ModelModule
})
export class StaticDatasource {
    private knowledges: Knowledge[] = [
        new Knowledge(1, 'Amazon Repricing Service', [
            new Article(1, 'Double Price updating (via the Service and M2E Pro Connector)', 'After the Product is added to Repricing Service, M2E Pro stops affecting its Price. It is made to prevent the double synchronizing of the Product Price.\n' +
                '\n' +
                'If you want to update the Product Price via M2E Pro again, use \'Delete Items\' action to remove it from Amazon Repricing Service or \'Disable\' it to pause the dynamic repricing for a while.'),
            new Article(2, 'When the dynamic repricing is impossible for my Product?', 'There are several possible cases when dynamic price updating is impossible:\n' +
                '\n' +
                '- if your Product is out of top 20 offers;\n' +
                '\n' +
                '- if your Product is out of stock;\n' +
                '\n' +
                '- if your Product is marked with the Pricing error;\n' +
                '\n' +
                '- if several Offers with the same ASIN/ISBN and condition are added to the Service;\n' +
                '\n' +
                '- if Item onboarding has failed.\n' +
                '\n' +
                'In all other cases, your Product can be managed correctly by Repricing Service. Thus, its Price will be dynamically updated based on the Repricing Rules you have configured.'),
            new Article(3, 'Sale Price settings and the Repricing Service', 'The Sale Price settings are not compatible with the dynamic Price updating.\n' +
                '\n' +
                'So, to prevent any possible issues related to it, the Sale Price will be disabled for your Products within 30 minutes after they are added to the Service.\n' +
                '\n' +
                'If you need to provide a Sale Price for the Product, you must disable it for repricing first.'),
            ]
        ),
        new Knowledge(2, 'Other', [
            new Article(1, 'M2E Pro Cron executing with LiteSpeed web-server', 'In the latest versions of Litespeed server default settings for External Application Abort were changed. In  result Litespeed server closes connection and synchronization is not completed successfully.\n' +
                '\n' +
                'All users who had their Litespeed server upgraded recently started having issues in Synchronisation. \n' +
                '\n' +
                'Cron Service is a predefined free service from M2E Pro that lets Users to not be nervous about Linux Cron job settings. The principle of it\'s work is based on the regular requests to a particular end point in Extension with further run of synchronization tasks at the moment of this connection. \n' +
                '\n' +
                'In two words it is working in such way: remote Cron Service initialize a request to a particular end point of M2E Pro Extension with further disconnection from it\'s side. However, the PHP scripts should be running even after connection with Cron Service fails. But in some versions of LiteSpeed web-servers the default setting does not let the Cron Service to run synchronization after disconnection.\n' +
                '\n' +
                'There are two ways to make M2E Pro Cron Service work correctly:\n' +
                '\n' +
                'you can go to WebAdmin console > Configuration > Server > General > External Application Abort and set No Abort value; (preferred solution)\n' +
                'in the first line of .htaccess file of Magento root folder add line "SetEnvIf Request_URI "M2ePro/cron" noabort".'),
            new Article(2, 'Issues with M2E Pro Server Connection', 'some cases, when you try to run any action (for example, Synchronization tasks, List/Relist/Revise/Stop actions) the error about M2E Pro Server connection fail can arise. You can get one of the following messages:\n' +
                '\n' +
                '- "Please ensure that CURL library is installed on your Server and it supports HTTPS protocol. Also ensure that outgoing Connection to m2epro.com, port 443 is allowed by the firewall.";\n' +
                '\n' +
                '- "Server connection is failed. Please try again later."\n' +
                '\n' +
                'Below you can find the possible reasons for these errors and the ways on how to fix them:\n' +
                '\n' +
                '1) Temporary Connection Problem - given that your server and M2E Pro server are physically placed in a distance, the temporary failure of connection can occur. Such type of problem does not have a particular solution and just needs some time. So you can wait a bit and run the action again. But you can also contact your hosting support and ask to investigate why your server lost an ability to connect to our servers (s1.m2epro.com and s2.m2epro.com). Most probably this issue relates to DNS.\n' +
                '\n' +
                '2) The Outgoing Connection was Blocked by Firewall - M2E Pro Servers (as of February 01, 2017  such servers are running s1.m2epro.com and s2.m2epro.com) must be in a list of allowed outgoing connections for ports 80 and 443. This prevents the outgoing connection from being blocked by the firewall. Therefore, M2E Pro will work properly.\n' +
                '\n' +
                '3) CURL Library is not installed on your server or it does not support HTTPS Protocol - CURL Library ought to be installed/updated on your server and it has to support HTTPS Protocol. Support and availability of HTTPS Protocol are obligatory because of the data from your module is sent to M2E Pro server via the secure connection.')
        ]),
        new Knowledge(3, 'Amazon Integration', [
            new Article(1, 'Magento Order Amount differs from Amazon Order Amount   ', 'The situation when Magento Order Amount differs from Amazon Order Amount happens due to the next settings:\n' +
                '\n' +
                '1. In Account Settings -> Order Tax Settings -> Tax Source is set to:\n' +
                '- "Amazon&Magento" - Magento Orders use tax settings from  Amazon Listing. If there are no tax settings set on Amazon, Magento tax settings are used.\n' +
                '- "Magento" – Magento Order uses Magento tax settings.\n' +
                '\n' +
                '2. Magento Tax Rate is set according to Customer Tax Class and Product Tax Class.\n' +
                '\n' +
                '3. Tax Rate corresponds to the particular region.\n' +
                '\n' +
                'For example, If a buyer is from USA, CA and for CA tax rate is set to10%, 10% will be added to the price in Magento order. So, the price of Magento Order will be more than price of Amazon Order.'),
            new Article(2, 'Missing Title for Amazon 3rd Party Listing [for Magento v 1.x]', 'Regarding the changes implemented for the Inventory data import from Amazon, M2E Pro versions 6.4.3. and lower (for Magento v 1.x) might experience problems displaying 3rd Party Listing Titles starting from the end of June - begining of July, 2016. It is highly possible that the 3rd Party Listing Titles can be removed not only for the newly imported Items, but for the already existing 3rd Party Listings.\n' +
                '\n' +
                'As a solution, you can upgrade your M2E Pro to at latest version 6.4.4 (for Magento v 1.x). The upgrade will allow the Amazon 3rd Party Listing Titles to be automatically recovered within 24 hours. However, those 3rd Party Listing which are imported after the upgrade will contain \'--\' in their titles. Import of the original Titles is impossible for such Items.\n' +
                '\n' +
                'This issue does not affect Amazon Products which are placed and managed in M2E Pro Listings. \n' +
                '\n' +
                'No functional limitation are applied to those 3rd Party Items which are missing their Titles. Generally, Title values of the 3rd Party Items are used in order to make the navigation more convenient and apply automatic 3rd Party Listings mapping by Title (it appears to be helpful in rather rare cases as Magento Product Name and Amazon Product Title are often totally different for the same Item).\n' +
                '\n' +
                'We appreciate your understanding of the case.'),
            new Article(3, 'I can\'t choose certain attribute because it is not presented in the list', 'For the fields which are required for Amazon, the only common attributes, those which are presented in all attribute sets are shown in the dropdown.\n' +
                '\n' +
                'If you do not see certain attribute, please ensure that it is added to  every attribute sets (Catalog -> Attributes -> Manage Attribute Sets in Magento v1.x and Stores > Attributes > Attribute Sets in Magento v 2.x)'),
            new Article(4, 'Product Upload Speed to Amazon', 'The amazon API works not the same way as eBay API does. The process is slow because of Amazon workflow - when request is sent to Amazon, their servers do not process them immediately as eBay do, but put in a queue. And it may take from 5 minutes to several hours until Amazon processes request and sends response. \n' +
                'Please note, that either you list 2 or 1\'000 products - it takes the same time until amazon returns response. So we advise to apply action (i.e. list / stop / revise / relist) to as much as possible products at one time.'),
            new Article(5, 'Amazon: Price and QTY shown as "N/A" in the grid', 'The "Not Listed" is displayed temporary.\n' +
                '\n' +
                'There\'s "List In Progress" under status "Not Listed" in column Status. \n' +
                'The data was sent to Amazon and system awaiting for response. \n' +
                '\n' +
                'Once response is received and status of the item is changed, all information will be shown instead of "Not Listed".'),
            new Article(6, 'Disable notification for Amazon orders', 'Q: Is it possible to disable notification for Amazon orders as it is against Amazon Policy.\n' +
                '\n' +
                'A: What you can do is to create separate store view and in the settings for that store view to disable notifications.\n' +
                '\n' +
                'Then you need to set this store view in order importing setting for amazon account'),
            new Article(7, 'Inactive (Blocked) status for Amazon Item', 'Item is marked as Inactive (Blocked) in the following situations:\n' +
                '\n' +
                'item was closed on Amazon\n' +
                '\n' +
                'item was blocked by Amazon because of wrong setup (i.e. price was set to the wrong value)\n' +
                '\n' +
                'item is incomplete (i.e. price was not set at all)\n' +
                '\n' +
                'To fix this, you need to go to the Amazon website, find out what is wrong with this product and update it directly in amazon seller central.'),
            new Article(8, 'Why I got \'In Progress\' for Amazon actions?', 'Please Note: while eBay allows for near real time listings processing, - Amazon API uses queue system. This means that all requests sent to Amazon are queued and processed on a “first come, first served bases”. So it is advisable to submit information to Amazon in batches (i.e. not product by product). Also with Amazon there will be always slight delay before M2E Pro confirms successful synchronization.\n' +
                '\n' +
                'The Amazon servers response time depends on Amazon system load at the moment of request.\n' +
                '\n' +
                'Normally, it is 5-15 minutes, but may take longer ( i.e. hours) if Amazon system has some temporary issues.'),
            new Article(9, 'The ship-date or FulfillmentDate you provided {date} was not between the order date', 'It seems that you have wrong time set on your server. M2E Pro uses the time when shipment was created in magento for Fulfillment requests. Our extension does not perform any modifications to this time, it goes to Amazon as is. \n' +
                '\n' +
                'Please check and correct the date/time settings on your server.'),
            new Article(10, 'The same Merchant SKU was found among 3rd Party Listings. Merchant SKU must be unique for each Amazon item', 'If you get the error: "The same Merchant SKU was found among 3rd Party Listings. Merchant SKU must be unique for each Amazon item.", it means you have such item already presented on Amazon. So M2E Pro prevents it to be listed to avoid problems.\n' +
                '\n' +
                'You should perform next steps to solve this problem:\n' +
                '\n' +
                'Apply action Stop on Channel / Remove from Listing, to remove such item from  M2E Listing\n' +
                'Go to Amazon > Listings > 3rd Party Listings and move necessary mapped items to the appropriate M2E Listings\n' +
                'Then already listed item will be moved to M2E Listing and can be synchronized.\n' +
                '\n' +
                'Note: If you want to list magento product, which is already on Amazon (same SKU), but use another ASIN, then you should  set option Generate SKU in Listing Settings to Yes.'),
            new Article(11, 'Condition is invalid or missed error for Amazon Item', 'Please check if you have set Condition Settings in Listing http://docs.m2epro.com/x/1YcVAQ for M2E Pro M1 and http://docs.m2epro.com/x/XwItAQ for M2E Pro M2')
        ]),
        new Knowledge(4, 'eBay Integration', [
            new Article(1, 'Can\'t upload product image on eBay', 'This problem does not concern to m2e pro.\n' +
                '\n' +
                'The process is rather simple – the image url is sent to eBay in request, the eBay fetches image and store on its server and returns the new url from its server. If it cannot fetch the image for some reasons, it returns the error.\n' +
                '\n' +
                'Why this happens? Just a few  ideas:\n' +
                '\n' +
                'image is only available via HTTPS protocol on your site\n' +
                'the url on localhost/development host is not available outside network\n' +
                'due to some network issues\n' +
                '.htaccess settings which make access to images forbidden.\n' +
                'As an other idea, it might be problem on eBay service, for example it is overloaded with the request to its image hosting server, it just starting refuses some requests.'),
            new Article(2, 'Create multiple eBay items from the same magento product [for Magento v 1.x]', 'It is possible to list the same product multiple times and the inventory will be synchronized for all listed products.\n' +
                '\n' +
                'For that you need to add the same product to different listings and specify appropriate settings for each listing.\n' +
                '\n' +
                'To be able to add product which is presented in other listings, you should set option\n' +
                'Hide Products Presented in Other M2E Pro Listings to No during the Listing Creation.'),
            new Article(3, 'The item cannot be listed or modified. The title or description may contain improper words, or the listing or seller may be in violation of eBay policy." And "You’ve exceeded the number of items and dollar amount you can list...', 'Most probably, your eBay account has reached the limits or the eBay system incorrectly decide that your account exceeded the limits. Please find more info about eBay limits here: http://pages.ebay.com/help/sell/sellinglimits.html\n' +
                '\n' +
                'The first error: "The item cannot be listed or modified. The title or description may contain improper words, or the listing or seller may be in violation of eBay policy. ", you should ignore, as eBay send this confusing error each time with the second one, which is the real reason why items cannot be listed.\n' +
                '\n' +
                'Note: All errors are returned by eBay, M2E Pro just displays them.'),
            new Article(4, 'Adding VAT to price', 'The VAT settings can be set in Configuration -> Policies -> Price, Quantity and Format policy > VAT Rate.\n' +
                '\n' +
                'If you want the price to be increased by VAT Rate you should set Add VAT Percentage field to Yes.\n' +
                '\n' +
                'If you do not want the price to be increased by VAT Rate but included in the current price you should set Add VAT Percentage field to No.')
        ]),
        new Knowledge(5, 'Configurations', [
            new Article(1, 'Data Communication via M2E Pro Server', 'M2E Pro service is provided based on a client-server network architecture. Which means the data communication is performed following a certain scenario M2E Pro server acts as intermediary between the Magento and the channel servers.\n' +
                '\n' +
                'To ensure that synchronization is launched regularly, M2E Cron Service is scheduled to make calls to Magento Server every minute. The Cron job is simply a task that is set to run every single minute. There is no data communication at this stage yet.\n' +
                '\n' +
                'Next, the interaction between the servers starts. All Magento product changes made within the standard Magento logic are detected automatically. This is when the data is transmitted: from Magento to M2E Pro Server and then the channel one. What is happening is that M2E retrieves the data from Magento server and sends it to the channel. Accordingly, M2E submits order data to Magento after the channel server returns it.\n' +
                '\n' +
                'All server-to-server interactions are performed via HTTPS.\n' +
                '\n' +
                'In the end, no information remains stored on M2E Pro server. It reads the data from Magento source and sends it to the appropriate destination channel. M2E appears to be a data processing point.\n' +
                '\n' +
                'Each request from Magento system is validated by M2E Pro Security Service (MSS). The service is set to validate the domain and IP of the request and compare it to the information associated with the license key assigned to the system. Any inconsistency in the domain or IP is automatically reported to the customer.\n' +
                '\n' +
                'To keep the data synchronization running smoothly between the servers at all times, here are a few tips on what to take into account:\n' +
                '\n' +
                '1. System resources\n' +
                '\n' +
                'When installing M2E Pro on Magento, it is essential to have sufficient resources available to maintain a healthy operation of the module. M2E is never idle, the extension consistently processes loads of data, i.e. submits data to the channel or imports information from the channel. In order to keep the service uninterrupted, it’s crucial that memory and execution time resources meet the recommended values. We suggest setting memory limit to at least 512 MB on Magento 1 and 1 GB on Magento 2. Depending on the size of the data managed by the extension, the limit requirements may vary. The execution time is recommended to be set to at least 360 sec on Magento 1 and 600 sec on Magento 2.\n' +
                '\n' +
                'The overall performance of M2E Pro greatly depends on the efficient resources of the environment. Being installed on the resource-restricted system, some module operations may be blocked. In particular, poor system configurations will affect timely product updates, order import, etc.\n' +
                '\n' +
                '2. Allow incoming connections to Magento server from cron1.m2epro.com and cron2.m2epro.com\n' +
                '\n' +
                'M2E Pro uses its own Cron Service specifically developed to optimize work of the whole synchronization process. By default, the Cron Job is scheduled to make calls to Magento server and initiate the synchronization every minute.\n' +
                '\n' +
                'The Cron Service gets enabled automatically after an Extension Key for the new M2E Pro Installation is registered. An important condition is that Magenta server must accept the incoming calls from M2E Pro Cron server. If some server configurations or the firewall preferences block the inbound connections made from cron1.m2epro.com and cron2.m2epro.com, synchronization may not be launched at all.\n' +
                '\n' +
                'Magento Cron can be used as an alternative solution. It should be properly enabled and scheduled to trigger M2E Pro synchronization.\n' +
                '\n' +
                'The Cron status and the time of its last run are clearly indicated on the Help page of M2E Integration in the Magento backend. If both M2E and Magento Cron Jobs fail to run, the Cron status will be highlighted in red.\n' +
                '\n' +
                '3. Allow outbound connections from Magento server to s1.m2epro.com and s2.m2epro.com through port 443\n' +
                '\n' +
                'The outgoing connections from Magento to M2E Pro server ensures the data flow between Magento and the extension. It is worth verifying that the connections to s1.m2epro.com and s2.m2epro.com are not restricted by any firewall settings.\n' +
                '\n' +
                'All of the data transfers are made through HTTPS request which makes it essential to have CURL Library supporting SSL certificate installed on Magento server.'),
            new Article(2, 'Another Synchronization Is Already Running', 'The warning “Another Synchronization Is Already Running” appears in the Synchronization Log, if it is time to start new synchronization, but the previous is not finished yet. So system waits until the current synchronization process will finish.\n' +
                '\n' +
                'Normally, you should ignore this warning.'),
            new Article(3, 'Error: Order was not created. Reason: Please specify a shipping method.', 'You should check if shipping method M2E Pro eBay Shipping  enabled  in System > Configuration > Shipping Methods or Stores > Configuration > Sales > Shipping Methods for the store view where order is being imported.\n' +
                '\n' +
                'Another reason of this error is shipping extension installed in your magento, which overrides core functionality.')
        ])
    ];

    private ideas: Idea[] = [
        new Idea(1, 'Amazon Repricing Service', [
            new Suggestion(1, 'Seller Fulfilled Prime', 'add a custom scenario that will compete with SFP', 'Aaron Englander shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(2, 'Rule to beat buy box', 'It would be great to have a rule which would automatically reduce the product price in increments until either the buy box is achieved or the minimum price is reached.', 'Stuart shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
        ]),
        new Idea(2, 'Other Sales Channel', [
            new Suggestion(1, 'Integration with Etsy', 'Any plans in the future?', 'Janice Bailey shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(2, 'idealo.de Direktkauf', 'Germanys biggest price comparison allows customer with the feature "idealo Direktkauf" the checkout on their plattform', 'TheNittyGritty shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(3, 'Integration with eBid', 'eBid now have a pretty comprehensive API and they\'re starting to rank pretty well in Google SERPS.\n' +
                '\n' +
                'I think M2E should consider developing eBid integration. However, I think we may need a few +1\'s on this idea before they will consider it.\n' +
                '\n' +
                'If you think M2E should support eBid, please +1 this idea.', 'Henry Hayes shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(4, 'Integration with Real.de (used to be Hitmeister)', 'big german retail store chain bought and expanded the hitmeister online marketplace\n' +
                '\n' +
                'https://www.real.de/\n' +
                '\n' +
                'Rest API\n' +
                'https://www.real.de/api/v1/', 'Rainer Jenning shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(5, 'Integration with Houzz.com Marketplace', 'Houzz market place is growing so fast in home furnishing industry. The amount of Houzz orders sellers receive for home decor items is much more than any other marketplace even amazon. Thank you.', 'KT shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(6, 'Integration with Sears', 'Sears supposedly has similar sales potential as buy.com', 'Chris Haupt shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(7, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(8, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(9, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(10, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(11, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(12, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(13, 'Integration with Newegg', 'Please, create an Integration with the Newegg', 'Dmitry shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
        ]),
        new Idea(3, 'eBay Integration', [
            new Suggestion(1, 'eBay Plus Germany', 'eBay Plus is similar to Amazon Prime. There is no possibility for many products to activate this with M2E. This possibility should exist in the future.', 'TiWe shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(2, 'Import product views value from Ebay', 'Ebay does not allow the merchant to sort listings based on views. It would be great if M2E could bring this data into Magento where it can be sorted and analyzed. \n' +
                '\n' +
                'Taking this idea further. If it the eBay API allows the product views data to be imported, this date could be used to create synchronization rules. For example if a product has 0 views over 30 days, then stop the listing.', 'Roderick Khan shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
        ]),
        new Idea(4, 'Amazon Integration', [
            new Suggestion(1, 'Addition of Seller Central Features to mimic magento', 'I think it would be helpful if you can perform as many of the Seller Central tasks in Magento as possible...See a dashboard of open orders, sales summary (week, month, year), buyer messages. Also communications, receiving and responding to buyers messages. Also reports? Being able to run a report on my magento SKU for units sold on Amazon rather then an Amazon report of an ASIN', 'justin shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(2, 'Alert or notification when there is an error in Magento order creation', 'When an Amazon gift order is processed, no address is given or passed to M2Epro, so no Magento order is created and an error is given.\n' +
                'To create the order, the address field must manually be added to enable order creation.\n' +
                '\n' +
                'An alert or notification when there is an error in Magento order creation would be useful, so the order can be manually created', 'Neil shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
            new Suggestion(3, 'Amazon Buy Box Notification', 'It would be great if we could see in the Magento CMS that shows if your are the chosen vendor for the buy box on Amazon for a particular listing.', 'Jamie shared this idea', new Date().getTime(), [
                new Comments(1, 'John Doe', new Date().getTime(), 'Same comment...', null)
            ]),
        ])
    ];

    public getKnowledges(): Observable<Knowledge[]> {
        return from([this.knowledges]);
    }

    public getIdeas(): Observable<Idea[]> {
        return from([this.ideas]);
    }
}
